import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { ServicePlans } from "@/components/service-plans"
import { AdditionalServices } from "@/components/additional-services"
import { PropertyGallery } from "@/components/property-gallery"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black">
            
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-zinc-900/50"></div>
            
            <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-zinc-800/10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-zinc-800/10 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          </div>
        </div>
        <div className="relative z-10">
          <Header />
          <Hero />
          <AboutUs />
          <ServicePlans />
          <AdditionalServices />
          <Testimonials />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </main>
  )
}
