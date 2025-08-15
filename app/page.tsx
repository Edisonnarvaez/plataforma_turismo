import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SearchTabs } from "@/components/search-tabs"
import { PopularDestinations } from "@/components/popular-destinations"
import { SpecialOffers } from "@/components/special-offers"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SearchTabs />
        <SpecialOffers />
        <PopularDestinations />
        <TrustSection />
      </main>
      <Footer />
    </div>
  )
}
