"use client";

import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
        <Header />
        <Navbar />

      <section className=" text-green-800 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Downloadable Forms</h1>
          <p className="mt-2 text-gray-600">Permits, applications, and government forms.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {[
          "Business Permit Application",
          "Barangay Clearance",
          "Building Permit",
          "Job Application Form",
          "Tax Declaration Form",
          "Zoning Clearance Form"
        ].map((file, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-800">{file}</h3>
            <p className="mt-2 text-gray-600 text-sm">Click below to download the form.</p>
            <button className="mt-4 text-green-700 hover:underline">
              Download →
            </button>
          </div>
        ))}
      </section>
        <Footer />
    </main>
  );
}
