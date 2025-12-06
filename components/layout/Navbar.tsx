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
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-7 h-[3px] bg-black"></span>
          <span className="w-7 h-[3px] bg-black"></span>
          <span className="w-7 h-[3px] bg-black"></span>
        </button>

      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white w-full px-6 pb-4 shadow-sm">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            <li><Link href="/" className="hover:text-green-700">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-700">About</Link></li>
            <li><Link href="/services" className="hover:text-green-700">Services</Link></li>
            <li><Link href="/programs" className="hover:text-green-700">Programs</Link></li>
            <li><Link href="/publications" className="hover:text-green-700">Publications</Link></li>
            <li><Link href="/downloads" className="hover:text-green-700">Downloads</Link></li>
            <li><Link href="/careers" className="hover:text-green-700">Careers</Link></li>
          </ul>
        </div>
      )}

    </header>
  );
}
