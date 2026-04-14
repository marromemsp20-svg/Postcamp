import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MethodSection } from "@/components/method-section"
import { PlansSection } from "@/components/plans-section"
import { DietsSection } from "@/components/diets-section"
import { LevelsSection } from "@/components/levels-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MethodSection />
      <PlansSection />
      <DietsSection />
      <LevelsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
