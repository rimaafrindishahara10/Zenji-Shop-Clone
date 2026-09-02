"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <img
      src="/cookie.png"
      alt=""
      className="fixed pointer-events-none z-[999] w-9 h-9 -translate-x-1 -translate-y-1"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
