import Navbar from "@/components/Navbar";
import Hero from "@/components/features/Hero";
import Footer from "@/components/Footer";
import Features from "@/components/features/Features";
import Advantages from "@/components/features/Advantages";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <Features />

      <Advantages />
      <Footer />
    </main>
  );
}
