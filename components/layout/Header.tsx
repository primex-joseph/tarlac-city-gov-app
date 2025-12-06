"use client";

import Image from "next/image";
import Link from "next/link"; 

export default function Header() {
  return (
    <header className="w-full">
      {/* 1️⃣ TOP GOVPH DARK BLUE BAR */}
      <div className="w-full bg-[#1d2b44] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-6">
            <span className="font-semibold tracking-wide">GOVPH</span>

            {/* Transparency Dropdown */}
            <div className="relative group cursor-pointer">
              <span className="flex items-center gap-1">
                Transparency ▼
              </span>
              <div className="absolute left-0 top-6 hidden group-hover:block bg-white text-black shadow-lg rounded-md w-44 z-50">
                <ul className="py-2 text-sm">
                  <li className="px-3 py-1 hover:bg-gray-100">Budget</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Procurement</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Reports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:underline">Accessibility Statement</span>
            <span className="cursor-pointer hover:underline">Accessibility</span>
            <span className="cursor-pointer hover:underline">Skip to Content</span>
          </div>
        </div>
      </div>

      {/* 2️⃣ GREEN BANNER */}
      <section className="w-full relative border-b-4 border-yellow-400 bg-green-500 h-[380px] md:h-[430px] overflow-hidden">

        {/* Capitol Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Capitol.jpg"
            alt="Capitol Overlay"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>

        {/* Banner Content */}
        <div
          className="relative max-w-[1500px] mx-auto  h-full flex items-center justify-between text-white z-10"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >

          {/* LEFT SIDE — PG Tarlac Info */}
          <div className="w-[35%] flex flex-col text-left">
            <p className="text-sm tracking-wide">
              REPUBLIC OF THE PHILIPPINES
            </p>

            <div className="w-119 h-[2px] bg-white my-2"></div>

            <h2 className="text-2xl font-semibold leading-snug">
              PROVINCIAL GOVERNMENT OF TARLAC
            </h2>

            <p className="text-sm mt-1 opacity-90">
              TARLAC, PHILIPPINES | INFO@TARLAC.GOV.PH
            </p>

            {/* Icons */}
              <div className="flex gap-6 mt-9">
                {[
                  "/Bagong_Pilipinas_logo.png",
                  "/capitol-logo.png",
                  "/dpo_dps_logo.png",
                  "/logo.png",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-22 h-22 flex items-center justify-center">


                    <Image
                      src={src}
                      width={140}
                      height={140}
                      alt={`Logo ${i + 1}`}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              </div>

          {/* RIGHT SIDE (MESSAGE + GOVERNOR IMAGE) */}
          <div className="w-[70%] h-full flex">

            {/* MESSAGE — FULL HEIGHT VERTICAL STRETCH */}
            <div className="flex-1 h-full flex flex-col justify-between text-center py-10 px-5">

              <div>
                <h3 className="text-base font-semibold tracking-wide">
                  OFFICE OF THE GOVERNOR
                </h3>

                <h2 className="text-xl font-bold mt-2 mb-5 tracking-wide">
                  MESSAGE FROM THE GOVERNOR
                </h2>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <p className="text-lg leading-relaxed">
                  Welcome to the official portal of the Provincial Government of Tarlac.
                  This platform is dedicated to transparent and efficient public service.
                </p>

                <p className="mt-4 text-lg leading-relaxed">
                  Our commitment remains centered on improving access to essential services
                  and strengthening community development across the province.
                </p>

                <p className="mt-5 italic text-base">
                  Maraming salamat at mabuhay ang Lalawigan ng Tarlac.
                </p>
              </div>

              <p className="mt-2 font-medium text-base">
                — Office of the Governor
              </p>

            </div>

            {/* GOVERNOR IMAGE — PUSHED TO ABSOLUTE RIGHT */}
            <div className="w-[430px] h-full flex justify-end items-end pr-0">
              <Image
                src="/Gov.png"
                alt="Governor"
                width={500}
                height={950}
                className="object-contain translate-x-4 md:translate-x-10 lg:translate-x-20"

              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
