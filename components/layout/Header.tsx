"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header
      className="w-full"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* TOP GOVPH DARK BLUE BAR */}
      <div className="w-full bg-[#1d2b44] text-white text-xs sm:text-sm font-sans">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between gap-2">

          {/* === MOBILE VIEW === */}
          <div className="flex sm:hidden w-full justify-between items-center">
            {/* LEFT — Transparency */}
            <div className="relative group cursor-pointer">
              <span className="flex items-center gap-1">Transparency ▼</span>
              <div className="absolute left-0 top-5 hidden group-hover:block 
                              bg-white text-black shadow-lg rounded-md w-36 z-50">
                <ul className="py-1 text-sm">
                  <li className="px-3 py-1 hover:bg-gray-100">Budget</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Procurement</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Reports</li>
                </ul>
              </div>
            </div>

            {/* CENTER — GOVPH (bold on mobile) */}
            <span className="font-bold tracking-wide text-xl">GOVPH</span>

            {/* RIGHT — Placeholder */}
            <div className="w-20"></div>
          </div>

          {/* === DESKTOP VIEW === */}
          <div className="hidden sm:flex flex-row items-center gap-6 w-full sm:w-auto">
            <span className="font-bold tracking-wide">GOVPH</span>

            <div className="relative group cursor-pointer">
              <span className="flex items-center gap-1">Transparency ▼</span>
              <div className="absolute left-0 top-5 hidden group-hover:block 
                              bg-white text-black shadow-lg rounded-md w-36 z-50">
                <ul className="py-1 text-sm">
                  <li className="px-3 py-1 hover:bg-gray-100">Budget</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Procurement</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Reports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-1 sm:mt-0 w-full sm:w-auto 
                          text-center sm:text-right justify-center sm:justify-end">
            <span className="cursor-pointer hover:underline">Accessibility Statement</span>
            <span className="cursor-pointer hover:underline">Accessibility</span>
            <span className="cursor-pointer hover:underline">Skip to Content</span>
          </div>

        </div>
      </div>

      {/* GREEN BANNER */}
      <section className="w-full relative border-b-4 border-yellow-400 bg-green-500 h-auto md:h-[360px] overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Capitol.jpg"
            alt="Capitol Overlay"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>

        {/* === MOBILE LOGOS — Top inside green banner === */}
        <div className="flex md:hidden flex-wrap justify-center gap-5 mt-3 px-4 py-7 z-10 relative">
          {[
            "/Bagong_Pilipinas_logo.png",
            "/capitol-logo.png",
            "/dpo_dps_logo.png",
            "/logo.png",
          ].map((src, i) => (
            <div key={i} className="w-14 h-14 flex items-center justify-center">
              <Image
                src={src}
                width={60}
                height={60}
                alt={`Logo ${i + 1}`}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Main Content Wrapper */}
        <div className="relative max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-center text-white z-10 px-4 py-3 gap-10 h-full">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left gap-2">

            <p className="text-lg sm:text-sm tracking-wide">
              REPUBLIC OF THE PHILIPPINES
            </p>

            <div className="w-118 h-[2px] bg-white my-1"></div>

            <h2 className="text-base sm:text-2xl font-semibold leading-snug">
              PROVINCIAL GOVERNMENT OF TARLAC
            </h2>

            <p className="text-xs sm:text-sm opacity-90">
              TARLAC, PHILIPPINES | INFO@TARLAC.GOV.PH
            </p>

            {/* LOGOS — DESKTOP ONLY */}
            <div className="hidden md:flex flex-wrap justify-start gap-5 mt-10">
              {[
                "/Bagong_Pilipinas_logo.png",
                "/capitol-logo.png",
                "/dpo_dps_logo.png",
                "/logo.png",
              ].map((src, i) => (
                <div key={i} className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Image
                    src={src}
                    width={80}
                    height={80}
                    alt={`Logo ${i + 1}`}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT — MESSAGE + GOVERNOR */}
          <div className="w-full md:w-[65%] flex flex-col md:flex-row items-center justify-center gap-10">

            {/* Message */}
            <div className="flex-1 flex flex-col justify-center items-center text-center px-5">
              <h3 className="text-xl font-semibold tracking-wide">
                OFFICE OF THE GOVERNOR
              </h3>

              <h2 className="text-base font-bold mt-2 mb-5 tracking-wide">
                MESSAGE FROM THE GOVERNOR
              </h2>

              <p className="text-lg leading-relaxed max-w-xl">
                Welcome to the official portal of the Provincial Government of Tarlac.
                This platform is dedicated to transparent and efficient public service.
              </p>

              <p className="mt-4 text-lg leading-relaxed max-w-xl">
                Our commitment remains centered on improving access to essential
                services and strengthening community development across the province.
              </p>

              <p className="mt-5 italic text-base">
                Maraming salamat at mabuhay ang Lalawigan ng Tarlac.
              </p>

              <p className="mt-4 font-medium text-base">
                — Office of the Governor
              </p>
            </div>

            {/* Governor Image */}
            <div className="w-full md:w-[300px] lg:w-[400px] flex justify-center">
              <Image
                src="/Gov.png"
                alt="Governor"
                width={370}
                height={570}
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>
    </header>
  );
}
