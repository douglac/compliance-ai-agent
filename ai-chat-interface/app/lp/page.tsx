import { LPHeader } from "@/components/lp/header";
import { HeroSection } from "@/components/lp/hero-section";
import { HowItWorks } from "@/components/lp/how-it-works";
import { FeaturesGrid } from "@/components/lp/features-grid";
import { BenefitsSection } from "@/components/lp/benefits-section";
import { DemoPreview } from "@/components/lp/demo-preview";
import { CTASection } from "@/components/lp/cta-section";
import { LPFooter } from "@/components/lp/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <LPHeader />
      <HeroSection />
      <HowItWorks />
      <FeaturesGrid />
      <BenefitsSection />
      <DemoPreview />
      <CTASection />
      <LPFooter />
    </main>
  );
}
