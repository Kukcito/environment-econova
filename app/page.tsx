import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyEconovaSection } from "@/components/why-econova-section"
import { ProcessSection } from "@/components/process-section"
import { BenefitsSection } from "@/components/benefits-section"
import { MethodologySection } from "@/components/methodology-section"
import { SectorsSection } from "@/components/sectors-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyEconovaSection />
        <ProcessSection />
        <BenefitsSection />
        <MethodologySection />
        <SectorsSection />
      </main>
      <Footer />
    </div>
  )
}
