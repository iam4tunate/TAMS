import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhatSection from "@/components/home/WhatSection";
import WhySection from "@/components/home/WhySection";
import PoweringSection from "@/components/home/PoweringSection";
import LegalSection from "@/components/home/LegalSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <HowItWorksSection />
      <WhatSection />
      <WhySection />
      <PoweringSection />
      <LegalSection />
      <Footer />
    </main>
  );
}
