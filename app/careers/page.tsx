"use client";

import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
        <Header />
        <Navbar />

      <section className=" text-green-800 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Careers</h1>
          <p className="mt-2 text-gray-600">Join our growing workforce and serve the community.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {[
          "Administrative Aide (II)",
          "IT Support Specialist",
          "Community Development Officer",
          "Public Health Nurse",
          "Engineering Assistant",
          "Clerk / Front Desk Personnel"
        ].map((job, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-800">{job}</h3>
            <p className="mt-2 text-gray-600 text-sm">Apply now and become part of our team.</p>
            <button className="mt-4 text-green-700 hover:underline">
              View Requirements →
            </button>
          </div>
        ))}
      </section>
        <Footer />
    </main>
  );
}
