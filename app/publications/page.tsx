"use client";

import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />

      <section className=" text-green-800 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Publications</h1>
          <p className="mt-2 text-gray-600 ">Official documents, reports, and public information releases.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {[
          "Annual Report 2024",
          "Executive Orders",
          "City Council Resolutions",
          "Budget Transparency Report",
          "Development Plans",
          "Public Notices"
        ].map((pub, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-800">{pub}</h3>
            <p className="mt-2 text-gray-600 text-sm">Download or view official publication.</p>
            <button className="mt-4 text-green-700 hover:underline">
              View Document →
            </button>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
