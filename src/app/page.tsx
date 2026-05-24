import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Demo from "@/components/sections/Demo";
import HowItWorks from "@/components/sections/HowItWorks";
import Comparison from "@/components/sections/Comparison";
import Pricing from "@/components/sections/Pricing";
import Trojmiasto from "@/components/sections/Trojmiasto";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#00171f] overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsStrip />
      <ProblemSolution />
      <Demo />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <Trojmiasto />
      <FinalCTA />
      <Footer />
    </main>
  );
}
