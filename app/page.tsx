import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import ReviewsSection from "@/components/reviews-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ReviewsSection />
      <CtaSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
