"use client";

import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import AboutOverview from "@/components/about/AboutOverview";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import CityHistory from "@/components/about/CityHistory";
import CityOfficials from "@/components/about/CityOfficials";
import GovernmentSeal from "@/components/about/GovernmentSeal";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-green-50">
      <Header />
      <Navbar />
      <AboutOverview />
      <MissionVision />
      <CoreValues />
      <CityHistory />
      <CityOfficials />
      <GovernmentSeal />
      <Footer />
    </main>
  );
}
