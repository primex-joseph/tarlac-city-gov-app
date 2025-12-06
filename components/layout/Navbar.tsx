"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO — only visible on mobile */}
        <h1 className="font-bold text-lg text-gray-900 md:hidden">TARLAC</h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
          <li><Link href="/" className="hover:text-green-700">Home</Link></li>
          <li><Link href="/about" className="hover:text-green-700">About</Link></li>
          <li><Link href="/services" className="hover:text-green-700">Services</Link></li>
          <li><Link href="/programs" className="hover:text-green-700">Programs</Link></li>
          <li><Link href="/publications" className="hover:text-green-700">Publications</Link></li>
          <li><Link href="/downloads" className="hover:text-green-700">Downloads</Link></li>
          <li><Link href="/careers" className="hover:text-green-700">Careers</Link></li>
        </ul>

        {/* HAMBURGER — MOBILE ONLY */}
       <button
  className="md:hidden relative w-7 h-7 flex justify-center items-center"
  onClick={() => setOpen(!open)}
>
  {/* Top line */}
  <span
    className={`absolute block w-7 h-[3px] bg-black rounded transition-all duration-300
      ${open ? "rotate-45" : "-translate-y-2"}`}
  ></span>
  {/* Middle line */}
  <span
    className={`absolute block w-7 h-[3px] bg-black rounded transition-all duration-300
      ${open ? "opacity-0" : ""}`}
  ></span>
  {/* Bottom line */}
  <span
    className={`absolute block w-7 h-[3px] bg-black rounded transition-all duration-300
      ${open ? "-rotate-45" : "translate-y-2"}`}
  ></span>
</button>


      </nav>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${open ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-4 px-6 text-gray-800 font-medium">
          <li><Link href="/" className="hover:text-green-700">Home</Link></li>
          <li><Link href="/about" className="hover:text-green-700">About</Link></li>
          <li><Link href="/services" className="hover:text-green-700">Services</Link></li>
          <li><Link href="/programs" className="hover:text-green-700">Programs</Link></li>
          <li><Link href="/publications" className="hover:text-green-700">Publications</Link></li>
          <li><Link href="/downloads" className="hover:text-green-700">Downloads</Link></li>
          <li><Link href="/careers" className="hover:text-green-700">Careers</Link></li>
        </ul>
      </div>
    </header>
  );
}
