import { useState, useEffect } from "react";

interface NetworkInformation extends EventTarget {
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
  saveData?: boolean;
  downlink?: number;
  rtt?: number;
  addEventListener: (type: "change", listener: () => void) => void;
  removeEventListener: (type: "change", listener: () => void) => void;
}

declare global {
  interface Navigator {
    connection?: NetworkInformation;
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
  }
}

export function useNetworkSpeed() {
  const [speedState, setSpeedState] = useState(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return { isSlow: false, saveData: false, effectiveType: "4g" };
    }
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlow =
      Boolean(conn?.saveData) ||
      conn?.effectiveType === "slow-2g" ||
      conn?.effectiveType === "2g" ||
      conn?.effectiveType === "3g";
    return {
      isSlow,
      saveData: Boolean(conn?.saveData),
      effectiveType: conn?.effectiveType || "4g",
    };
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") return;
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!conn) return;

    const updateStatus = () => {
      const isSlow =
        Boolean(conn.saveData) ||
        conn.effectiveType === "slow-2g" ||
        conn.effectiveType === "2g" ||
        conn.effectiveType === "3g";
      setSpeedState({
        isSlow,
        saveData: Boolean(conn.saveData),
        effectiveType: conn.effectiveType || "4g",
      });
    };

    conn.addEventListener("change", updateStatus);
    return () => conn.removeEventListener("change", updateStatus);
  }, []);

  return speedState;
}
