"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleLoad = () => lenis.resize();
    window.addEventListener("load", handleLoad);

    const resizeObserver = new ResizeObserver(() => lenis.resize());
    resizeObserver.observe(document.body);

    return () => {
      lenis.destroy();
      window.removeEventListener("load", handleLoad);
      resizeObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}
