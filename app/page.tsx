import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { MissionSection } from "@/components/mission-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSlideshow />
        <MissionSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
