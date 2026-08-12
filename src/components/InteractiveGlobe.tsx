import { useEffect, useRef } from "react";

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

    // Handle resizing to fit the card container
    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width || 400;
      height = rect?.height || 500;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    // Create 3D points representing a sphere grid
    const points: { x: number; y: number; z: number }[] = [];
    const radius = Math.min(width, height) * 0.32; // size of the globe

    // Generate latitude/longitude grid lines
    const latCount = 9;
    const lonCount = 12;
    for (let i = 1; i < latCount - 1; i++) {
      const lat = (Math.PI * i) / (latCount - 1) - Math.PI / 2;
      const cosLat = Math.cos(lat);
      const sinLat = Math.sin(lat);

      for (let j = 0; j < lonCount; j++) {
        const lon = (2 * Math.PI * j) / lonCount;
        const cosLon = Math.cos(lon);
        const sinLon = Math.sin(lon);

        points.push({
          x: radius * cosLat * cosLon,
          y: radius * sinLat,
          z: radius * cosLat * sinLon,
        });
      }
    }

    // Add some random highlight nodes (major cities/destinations)
    const cities: { x: number; y: number; z: number; label: string }[] = [
      { x: 0.3, y: 0.4, z: 0.86, label: "Canada 🇨🇦" },
      { x: -0.1, y: 0.6, z: -0.79, label: "UK 🇬🇧" },
      { x: 0.5, y: -0.5, z: 0.7, label: "Australia 🇦🇺" },
      { x: -0.7, y: 0.2, z: 0.68, label: "Germany 🇩🇪" },
      { x: 0.8, y: 0.1, z: -0.58, label: "USA 🇺🇸" },
    ].map(c => {
      // Normalize and multiply by radius
      const len = Math.sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
      return {
        x: (c.x / len) * radius,
        y: (c.y / len) * radius,
        z: (c.z / len) * radius,
        label: c.label,
      };
    });

    let angleY = 0;
    let angleX = 0.2; // slight tilt

    // Particle connection lines
    const connections: { start: number; end: number; progress: number; speed: number }[] = [];
    for (let i = 0; i < cities.length; i++) {
      connections.push({
        start: i,
        end: (i + 1) % cities.length,
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.003,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep radial dark-navy background inside canvas
      const bgGrad = ctx.createRadialGradient(
        width / 2, height / 2, 50,
        width / 2, height / 2, radius * 1.6
      );
      bgGrad.addColorStop(0, "#0a1122");
      bgGrad.addColorStop(1, "#060a15");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle outer atmospheric aura/glow
      const glowGrad = ctx.createRadialGradient(
        width / 2, height / 2, radius - 5,
        width / 2, height / 2, radius + 25
      );
      glowGrad.addColorStop(0, "rgba(224, 183, 109, 0.06)");
      glowGrad.addColorStop(0.5, "rgba(224, 183, 109, 0.03)");
      glowGrad.addColorStop(1, "rgba(224, 183, 109, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius + 25, 0, Math.PI * 2);
      ctx.fill();

      // Rotate calculations
      angleY += 0.0035; // continuous spin speed
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Helper to project 3D point to 2D
      const project = (p: { x: number; y: number; z: number }) => {
        // Rotate around Y-axis
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.x * sinY + p.z * cosY;

        // Rotate around X-axis (tilt)
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        // Perspective scale
        const perspective = 300 / (300 + z2);
        return {
          x: width / 2 + x1 * perspective,
          y: height / 2 + y2 * perspective,
          z: z2, // for depth layering
          perspective,
        };
      };

      // Draw grid lines (back hemisphere first, then front hemisphere)
      const projectedPoints = points.map(p => project(p));

      // Draw grid structure
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        
        // Draw latitudinal connections
        const nextLonIdx = (i + 1) % lonCount === 0 ? i - lonCount + 1 : i + 1;
        const p2 = projectedPoints[nextLonIdx];

        // Draw connections, styling back-side elements with low opacity
        const isBack = p1.z > 0 || p2.z > 0;
        ctx.strokeStyle = isBack ? "rgba(224, 183, 109, 0.06)" : "rgba(224, 183, 109, 0.25)";
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        // Draw longitudinal connections
        if (i < projectedPoints.length - lonCount) {
          const p3 = projectedPoints[i + lonCount];
          ctx.strokeStyle = (p1.z > 0 || p3.z > 0) ? "rgba(224, 183, 109, 0.05)" : "rgba(224, 183, 109, 0.22)";
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.stroke();
        }
      }

      // Draw connection flight lines between main cities
      const projectedCities = cities.map(c => project(c));

      ctx.lineWidth = 1;
      connections.forEach((conn) => {
        const c1 = projectedCities[conn.start];
        const c2 = projectedCities[conn.end];

        // Fade flight arcs behind the globe
        const isBack = c1.z > 20 || c2.z > 20;
        ctx.strokeStyle = isBack ? "rgba(224, 183, 109, 0.1)" : "rgba(224, 183, 109, 0.4)";
        ctx.beginPath();
        
        // Bezier curve to simulate airplane flight path
        const midX = (c1.x + c2.x) / 2;
        const midY = (c1.y + c2.y) / 2 - 35; // bulge upwards
        ctx.moveTo(c1.x, c1.y);
        ctx.quadraticCurveTo(midX, midY, c2.x, c2.y);
        ctx.stroke();

        // Draw animated light pulse traveling along path
        conn.progress += conn.speed;
        if (conn.progress > 1) conn.progress = 0;

        if (!isBack) {
          const t = conn.progress;
          // Calculate quadratic bezier point
          const px = (1 - t) * (1 - t) * c1.x + 2 * (1 - t) * t * midX + t * t * c2.x;
          const py = (1 - t) * (1 - t) * c1.y + 2 * (1 - t) * t * midY + t * t * c2.y;

          // Glowing light point
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.shadowColor = "#e0b76d";
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      // Draw city labels and nodes (front side overlay)
      projectedCities.forEach((city, idx) => {
        const isFront = city.z < 20;
        if (isFront) {
          // City Node circle
          ctx.fillStyle = "#e0b76d";
          ctx.beginPath();
          ctx.arc(city.x, city.y, 4, 0, Math.PI * 2);
          ctx.fill();

          // Outer pulsing ring
          const scale = 1 + Math.abs(Math.sin(Date.now() * 0.002 + idx)) * 1.5;
          ctx.strokeStyle = "rgba(224, 183, 109, 0.3)";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(city.x, city.y, 4 * scale, 0, Math.PI * 2);
          ctx.stroke();

          // Clean golden label tag
          ctx.font = "bold 9px Karla, sans-serif";
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.textAlign = "center";
          ctx.fillText(cities[idx].label, city.x, city.y - 12);
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
      aria-label="Interactive 3D Global Consultancy Globe Visualization"
    />
  );
}
