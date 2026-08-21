import { useEffect, useRef } from "react";

// Simplified latitude/longitude paths for main continents
const continents = [
  // North America
  [
    [-168, 65], [-120, 60], [-120, 48], [-125, 30], [-110, 22], [-98, 15], 
    [-80, 8], [-80, 20], [-95, 30], [-75, 40], [-60, 50], [-55, 60], 
    [-70, 70], [-100, 75], [-168, 65]
  ],
  // South America
  [
    [-80, 12], [-72, 10], [-50, -5], [-35, -5], [-40, -20], [-60, -40], 
    [-70, -55], [-75, -50], [-70, -30], [-80, -10], [-80, 12]
  ],
  // Africa
  [
    [-17, 32], [10, 35], [30, 30], [33, 10], [50, 10], [40, -15], 
    [20, -34], [10, -10], [-10, 5], [-17, 15], [-17, 32]
  ],
  // Eurasia
  [
    [-10, 62], [10, 55], [30, 65], [60, 70], [90, 75], [120, 75], 
    [160, 70], [170, 60], [140, 50], [140, 35], [120, 30], [110, 15], 
    [100, 10], [80, 10], [75, 20], [60, 15], [45, 12], [35, 30], 
    [15, 38], [-10, 40], [-10, 62]
  ],
  // Australia
  [
    [113, -22], [143, -20], [151, -33], [138, -38], [115, -34], [113, -22]
  ],
  // Greenland
  [
    [-70, 75], [-60, 83], [-25, 78], [-45, 60], [-70, 75]
  ]
];

// Conversion to Radians
const continentsRad = continents.map(poly => 
  poly.map((coord) => {
    const lon = coord[0] ?? 0;
    const lat = coord[1] ?? 0;
    return [lon * Math.PI / 180, lat * Math.PI / 180];
  })
);

interface City {
  lon: number;
  lat: number;
  label: string;
}

const cities: City[] = [
  { lon: -100, lat: 40, label: "USA 🇺🇸" },
  { lon: -79.3, lat: 43.6, label: "Canada 🇨🇦" },
  { lon: 0, lat: 51.5, label: "UK 🇬🇧" },
  { lon: 13.4, lat: 52.5, label: "Germany 🇩🇪" },
  { lon: 151.2, lat: -33.8, label: "Australia 🇦🇺" }
];

export function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = canvas.width;
    let height = canvas.height;
    let radius = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width || 400;
      height = rect?.height || 500;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      radius = Math.min(width, height) * 0.38; // Upgraded radius size
    };

    resize();
    window.addEventListener("resize", resize);

    // Dynamic rotation angle
    let angleY = 1.6; // starts facing UK/Europe/Africa

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw outer glowing atmospheric aura (Golden Halo)
      const glowGrad = ctx.createRadialGradient(
        width / 2, height / 2, radius - 8,
        width / 2, height / 2, radius + 32
      );
      glowGrad.addColorStop(0, "rgba(224, 183, 109, 0.28)");
      glowGrad.addColorStop(0.3, "rgba(224, 183, 109, 0.12)");
      glowGrad.addColorStop(0.7, "rgba(224, 183, 109, 0.03)");
      glowGrad.addColorStop(1, "rgba(224, 183, 109, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius + 32, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw sphere oceans background (deep dark blue radial gradient)
      const oceanGrad = ctx.createRadialGradient(
        width / 2 - radius * 0.25, height / 2 - radius * 0.25, radius * 0.1,
        width / 2, height / 2, radius
      );
      oceanGrad.addColorStop(0, "#0e1c3a");
      oceanGrad.addColorStop(0.6, "#060f23");
      oceanGrad.addColorStop(1, "#030814");
      ctx.fillStyle = oceanGrad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
      ctx.fill();

      // Slow rotation increment
      angleY += 0.0035;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const tiltAngle = 0.25; // Tilt the Earth
      const cosX = Math.cos(tiltAngle);
      const sinX = Math.sin(tiltAngle);

      // 3D Projection Function
      const project = (lonRad: number, latRad: number) => {
        // Apply Y rotation
        const rotatedLon = lonRad + angleY;

        // Spherical 3D Coordinates
        const x3d = radius * Math.cos(latRad) * Math.sin(rotatedLon);
        const y3d = -radius * Math.sin(latRad);
        const z3d = radius * Math.cos(latRad) * Math.cos(rotatedLon);

        // Apply X Tilt rotation
        const y3dTilted = y3d * cosX - z3d * sinX;
        const z3dTilted = y3d * sinX + z3d * cosX;

        // Orthographic scale & translation
        return {
          x: width / 2 + x3d,
          y: height / 2 + y3dTilted,
          z: z3dTilted // z < 0 means on the front side of orthographic projection
        };
      };

      // 3. Draw Grid Lines (Latitude & Longitude)
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = "rgba(224, 183, 109, 0.08)";
      
      // Longitude Lines
      for (let l = 0; l < 12; l++) {
        const lonRad = (l * Math.PI) / 6;
        ctx.beginPath();
        let first = true;
        for (let latDeg = -90; latDeg <= 90; latDeg += 10) {
          const latRad = (latDeg * Math.PI) / 180;
          const p = project(lonRad, latRad);
          if (p.z < 0) {
            if (first) {
              ctx.moveTo(p.x, p.y);
              first = false;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // Latitude Lines
      for (let latDeg = -80; latDeg <= 80; latDeg += 20) {
        const latRad = (latDeg * Math.PI) / 180;
        ctx.beginPath();
        let first = true;
        for (let lonDeg = -180; lonDeg <= 180; lonDeg += 10) {
          const lonRad = (lonDeg * Math.PI) / 180;
          const p = project(lonRad, latRad);
          if (p.z < 0) {
            if (first) {
              ctx.moveTo(p.x, p.y);
              first = false;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // 4. Draw Continental Polygons (Front Hemisphere only)
      continentsRad.forEach(poly => {
        const projectedPoly = poly.map((coord) => {
          const lon = coord[0] ?? 0;
          const lat = coord[1] ?? 0;
          return project(lon, lat);
        });

        // Check average depth (z < 0 means front hemisphere)
        const avgZ = projectedPoly.reduce((acc, p) => acc + p.z, 0) / projectedPoly.length;

        if (avgZ < 0 && projectedPoly && projectedPoly[0]) {
          ctx.beginPath();
          ctx.moveTo(projectedPoly[0].x, projectedPoly[0].y);
          for (let i = 1; i < projectedPoly.length; i++) {
            const p = projectedPoly[i];
            if (p) {
              ctx.lineTo(p.x, p.y);
            }
          }
          ctx.closePath();

          // Golden Landmass Fill & Stroke
          const landGrad = ctx.createLinearGradient(
            width / 2 - radius, height / 2 - radius,
            width / 2 + radius, height / 2 + radius
          );
          landGrad.addColorStop(0, "rgba(224, 183, 109, 0.32)");
          landGrad.addColorStop(1, "rgba(184, 123, 44, 0.2)");
          
          ctx.fillStyle = landGrad;
          ctx.fill();

          ctx.strokeStyle = "rgba(224, 183, 109, 0.45)";
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      });

      // 5. Draw Spherical Shading Overlay (Light highlight on top-left, deep shadow on bottom-right)
      const shadowGrad = ctx.createRadialGradient(
        width / 2 - radius * 0.35, height / 2 - radius * 0.35, radius * 0.1,
        width / 2, height / 2, radius
      );
      shadowGrad.addColorStop(0, "rgba(255, 255, 255, 0.1)");
      shadowGrad.addColorStop(0.55, "rgba(0, 0, 0, 0)");
      shadowGrad.addColorStop(1, "rgba(0, 0, 0, 0.85)");
      ctx.fillStyle = shadowGrad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
      ctx.fill();

      // 6. Draw City Pins & Connection Lines
      const projectedCities = cities.map(c => {
        const p = project(c.lon * Math.PI / 180, c.lat * Math.PI / 180);
        return { ...p, label: c.label };
      });

      // Connections flight lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(224, 183, 109, 0.4)";
      for (let i = 0; i < projectedCities.length; i++) {
        const c1 = projectedCities[i];
        const c2 = projectedCities[(i + 1) % projectedCities.length];

        if (c1 && c2 && c1.z < 0 && c2.z < 0) {
          ctx.beginPath();
          const midX = (c1.x + c2.x) / 2;
          const midY = (c1.y + c2.y) / 2 - 25; // Bulge curve
          ctx.moveTo(c1.x, c1.y);
          ctx.quadraticCurveTo(midX, midY, c2.x, c2.y);
          ctx.stroke();

          // Animated pulse along flight arc
          const t = (Date.now() * 0.0006 + i * 0.25) % 1.0;
          const px = (1 - t) * (1 - t) * c1.x + 2 * (1 - t) * t * midX + t * t * c2.x;
          const py = (1 - t) * (1 - t) * c1.y + 2 * (1 - t) * t * midY + t * t * c2.y;

          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#e0b76d";
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      }

      // Draw Pins on top
      projectedCities.forEach((city) => {
        if (city.z < 0) {
          // Inner dot
          ctx.fillStyle = "#e0b76d";
          ctx.beginPath();
          ctx.arc(city.x, city.y, 4.5, 0, Math.PI * 2);
          ctx.fill();

          // Outer glowing ring
          const ringScale = 1 + Math.abs(Math.sin(Date.now() * 0.0022)) * 1.4;
          ctx.strokeStyle = "rgba(224, 183, 109, 0.35)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(city.x, city.y, 4.5 * ringScale, 0, Math.PI * 2);
          ctx.stroke();

          // Text labels
          ctx.font = "bold 9px Karla, sans-serif";
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
          ctx.shadowBlur = 4;
          ctx.fillText(city.label, city.x, city.y - 12);
          ctx.shadowBlur = 0;
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full object-cover"
      aria-label="Realistic rotating 3D golden globe showing worldwide visa destinations"
    />
  );
}
