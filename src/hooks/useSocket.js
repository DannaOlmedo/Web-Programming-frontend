import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_BACK_URL || "http://localhost:4000");

export const useSocket = (setReportes) => {
  useEffect(() => {
    socket.on("nuevo_reporte", (nuevo) => {
      setReportes((prev) => [nuevo, ...prev]);
    });

    return () => socket.off("nuevo_reporte");
  }, [setReportes]);
};
