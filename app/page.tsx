import Hero from "@/components/hero"
import AboutPreview from "@/components/about-preview"
import CoursesPreview from "@/components/courses-preview"
import NewsEvents from "@/components/news-events"
import StatsSection from "@/components/stats-section"
import Testimonials from "@/components/testimonials"
import CampusLife from "@/components/campus-life"
import PlacementHighlights from "@/components/placement-highlights"

export default function HomePage() {
  return (
    <main className="min-h-screen">
    
        <Hero />
  
      <div className="relative z-10 bg-white">
        <AboutPreview />
        <StatsSection />
        <CoursesPreview />
        <PlacementHighlights />
        <CampusLife />
        <Testimonials />
        <NewsEvents />
      </div>
    </main>
  )
}