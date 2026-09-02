"use client";
import { useEffect, useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className={`overflow-hidden transition-all duration-500 ${scrolled ? "h-0" : "h-9"}`}
      >
        <AnnouncementBar />
      </div>
      <div className={scrolled ? "bg-black/20 backdrop-blur-sm" : "bg-black"}>
        <Navbar />
      </div>
    </div>
  );
}
