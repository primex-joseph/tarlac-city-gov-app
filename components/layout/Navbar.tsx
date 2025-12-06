"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <nav className="max-w-7x1 mx-auto px-6 py-5">
        <ul className="flex items-center justify-center gap-10 text-gray-800 font-medium">
          <li><Link href="/" className="hover:text-green-700">Home</Link></li>
          <li><Link href="/about" className="hover:text-green-700">About</Link></li>
          <li><Link href="/services" className="hover:text-green-700">Services</Link></li>
          <li><Link href="/programs" className="hover:text-green-700">Programs</Link></li>
          <li><Link href="/publications" className="hover:text-green-700">Publications</Link></li>
          <li><Link href="/downloads" className="hover:text-green-700">Downloads</Link></li>
          <li><Link href="/careers" className="hover:text-green-700">Careers</Link></li>
        </ul>
      </nav>
    </header>
  );
}