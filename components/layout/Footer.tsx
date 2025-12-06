"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 mt-16">
      
      {/* Top 4-column section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Left Column 1 - Disclaimer */}
        <div>
          <h4 className="font-semibold uppercase text-sm">Republic of the Philippines</h4>
          <p className="mt-2 text-xs">
            All content is in the public domain unless otherwise stated.
          </p>
          <p className="mt-3 text-xs">
            <strong>Official Disclaimer:</strong> This website is maintained by the City Government of Tarlac for informational purposes only.
          </p>
          <p className="mt-2 text-xs">
            <strong>Accuracy:</strong> While we strive for accuracy, information may change without notice.
          </p>
          <p className="mt-2 text-xs">
            <strong>Copyright:</strong> © {new Date().getFullYear()} City of Tarlac. All rights reserved.
          </p>
        </div>

        {/* Column 2 - About Gov / Links */}
        <div>
          <h4 className="font-semibold uppercase text-sm">About GOVPH</h4>
          <p className="mt-2 text-xs">
            Learn more about the Philippine government, its structure, how government works and the people behind it.
          </p>
          <ul className="text-xs mt-3 space-y-2">
            <li><Link href="#" className="hover:underline text-green-200">Open Data Portal</Link></li>
            <li><Link href="#" className="hover:underline text-green-200">Official Gazette</Link></li>
          </ul>
        </div>

        {/* Column 3 - Government Links */}
        <div>
          <h4 className="font-semibold uppercase text-sm">Government Links</h4>
          <ul className="text-xs mt-3 space-y-2">
            <li><Link href="#" className="hover:underline text-green-200">Office of the President</Link></li>
            <li><Link href="#" className="hover:underline text-green-200">Office of the Vice President</Link></li>
            <li><Link href="#" className="hover:underline text-green-200">Senate of the Philippines</Link></li>
            <li><Link href="#" className="hover:underline text-green-200">House of Representatives</Link></li>
            <li><Link href="#" className="hover:underline text-green-200">Supreme Court</Link></li>
            <li><Link href="#" className="hover:underline text-green-200">Court of Appeals</Link></li>
            <li><Link href="#" className="hover:underline text-green-200">Sandiganbayan</Link></li>
          </ul>
        </div>

        {/* Column 4 - Legal Compliance */}
        <div>
          <h4 className="font-semibold uppercase text-sm">Legal Compliance</h4>
          <p className="mt-3 uppercase text-xs font-semibold">Transparency & Accountability</p>
          <ul className="text-xs mt-2 space-y-2">
            <li><Link href="#" className="hover:underline text-green-200">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:underline text-green-200">Accessibility Statement</Link></li>
            <li><Link href="#" className="hover:underline text-green-200">FOI Manual</Link></li>
            <li><Link href="#" className="hover:underline text-green-200">Terms of Use</Link></li>
          </ul>

          <p className="mt-4 uppercase text-xs font-semibold">Government Standards</p>
          <ul className="text-xs mt-2 space-y-2">
            <li><Link href="#" className="hover:underline text-green-200">Anti-Red Tape Act Compliance</Link></li>
            <li><Link href="#" className="hover:underline text-green-200">Data Privacy Act Compliance</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom copyright section */}
      <div className="border-t border-green-800/50 text-center text-xs py-4">
        © {new Date().getFullYear()} City Government of Tarlac. All rights reserved.
      </div>

      {/* Bottom legal mini-links */}
      <div className="text-center text-xs text-green-300 py-3 space-x-4">
        <Link href="#" className="hover:underline">Accessibility Statement</Link>
        <Link href="#" className="hover:underline">Privacy Policy</Link>
      </div>
    </footer>
  );
}
