"use client"

import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/layout/HeroSection";  
import Services from "@/components/layout/Services";
import Careers from "@/components/layout/Careers";
import Programs from "@/components/layout/Programs";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      <Header />
      <Navbar />
      <HeroSection />
      <Services />
      <Careers />
      <Programs />
      <Footer />
    </div>
  )
}
