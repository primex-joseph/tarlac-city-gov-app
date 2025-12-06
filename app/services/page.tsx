"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  const services = [
    {
      id: "business-permit",
      title: "Business Permit & Licensing",
      description:
        "Apply for a new business permit, renew licenses, and submit required documents online.",
      href: "/services/business-permit",
      icon: "/icons/permit.svg",
    },
    {
      id: "building-permit",
      title: "Building Permit",
      description:
        "Submit building plans, pay fees, and track approvals for construction projects.",
      href: "/services/building-permit",
      icon: "/icons/building.svg",
    },
    {
      id: "cedula",
      title: "Cedula / Community Tax",
      description:
        "Apply for community tax certificates (cedula) and other residency documents online.",
      href: "/services/cedula",
      icon: "/icons/cedula.svg",
    },
    {
      id: "public-works",
      title: "Public Works Requests",
      description:
        "Report road issues, request streetlight repairs, and follow up on public works orders.",
      href: "/services/public-works",
      icon: "/icons/works.svg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      <Header />
      <Navbar />
      {/* Hero */}
      <section className="bg-[url('/hero-services.jpg')] bg-cover bg-center">
        <div className="backdrop-blur-sm bg-white/60">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
              City Services
            </h1>
            <p className="max-w-3xl text-lg text-gray-700">
              Access city government services online — from permits to public
              works requests. Find the service you need and follow the steps to
              apply or submit a request.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mt-3 text-sm">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
