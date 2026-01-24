import { HeroSection } from "@/components/hero-section"
import { InfoSection } from "@/components/info-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <InfoSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
