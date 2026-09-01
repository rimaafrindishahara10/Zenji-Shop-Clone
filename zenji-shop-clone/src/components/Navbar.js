"use client";
import { useState } from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["DROP", "COLLECTION", "LOOKBOOK", "OUR STORY"];

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
      <h1 className=" text-2xl font-black tracking-tight">ZENJI</h1>

      {/*DESKTOP LINKS  */}
      <div className=" hidden md:flex gap-8 uppercase text-sm font-medium tracking-wide">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className=" hover:text-red-500 transition-colors "
          >
            {link}
          </a>
        ))}
      </div>
      <div className=" flex items-center gap-5 ">
        <input
          type="text"
          name="name"
          placeholder="SEARCH....."
          className="hidden md:block bg-transparent border border-white/20 px-3 py-1 text-sm outline-none focus:border-red-500"
        />
        <button aria-label="cart">🛒</button>
        <button aria-label="account">👤</button>

        {/*MOBILE HAMBURGER */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* MENU OPEN */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col p-4 md:hidden">
          {links.map((link) => (
            <a key={link} href="#" className="py-2 border-b border-white/10">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
