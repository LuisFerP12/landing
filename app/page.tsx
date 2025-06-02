import CountdownSection from "@/components/countdown-section"
import HeroCelebration from "@/components/hero-celebration"
import ItinerarySection from "@/components/itinerary-section"
import CathedralSection from "@/components/cathedral-section"
import DressCodeSection from "@/components/dress-code-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <CountdownSection />
      <HeroCelebration />
      <ItinerarySection />
      <DressCodeSection />
      <CathedralSection />
      <Footer />
    </>
  )
}
