import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Templates from "@/components/Templates";
import Personas from "@/components/Personas";
import BookDemo from "@/components/BookDemo";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import SectionReveal from "@/components/SectionReveal";
import MobileCTA from "@/components/MobileCTA";
import ScrollBounce from "@/components/ScrollBounce";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Loader />
      <MobileCTA />
      <ScrollBounce />

      {/* Ambient glow orbs */}
      <div className="fixed top-[-250px] left-[-150px] w-[700px] h-[700px] rounded-full bg-violet-400/15 blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[40%] right-[-200px] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-200px] left-[20%] w-[600px] h-[600px] rounded-full bg-violet-300/10 blur-[130px] pointer-events-none z-0" />

      <Navbar />
      <Hero />
      <SectionReveal><Stats /></SectionReveal>
      <SectionReveal><HowItWorks /></SectionReveal>
      <SectionReveal><Features /></SectionReveal>
      <SectionReveal><Templates /></SectionReveal>
      <SectionReveal><Personas /></SectionReveal>
      <SectionReveal><BookDemo /></SectionReveal>
      <SectionReveal><CTABanner /></SectionReveal>
      <Footer />
    </main>
  );
}
