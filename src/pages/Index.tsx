import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { DemoSection } from "@/components/DemoSection";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { Technology } from "@/components/Technology";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <HowItWorks />
      <UseCases />
      <Technology />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
