"use client";

import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />

      {/* Header Banner */}
      <section className=" text-green-800 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Programs & Services</h1>
          <p className="mt-2 text-gray-600">Explore the city’s initiatives and ongoing programs.</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {[
          "Health & Nutrition Program",
          "Education Assistance Program",
          "Livelihood Training",
          "Senior Citizen Services",
          "Youth Development Program",
          "Disaster Risk Reduction"
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-800">{item}</h3>
            <p className="mt-2 text-gray-600 text-sm">Short explanation about the program goes here.</p>
            <button className="mt-4 text-green-700 font-medium hover:underline">
              Learn More →
            </button>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
