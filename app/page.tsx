"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServicePlans } from "@/components/service-plans"
import { AdditionalServices } from "@/components/additional-services"
import { PropertyGallery } from "@/components/property-gallery"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"
import { ChevronUp } from "lucide-react"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    hero: null,
    whyChooseUs: null,
    plans: null,
    properties: null,
    additionalServices: null,
    testimonials: null,
    contact: null,
  })

  // Simulate loading time for splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 3

      Object.entries(sectionsRef.current).forEach(([key, section]) => {
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (loading) {
    return <SplashScreen />
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header activeSection={activeSection} />
      <main className="flex-grow">
        <HeroSection ref={(el) => (sectionsRef.current.hero = el)} />
        <WhyChooseUs ref={(el) => (sectionsRef.current.whyChooseUs = el)} />
        <ServicePlans ref={(el) => (sectionsRef.current.plans = el)} />
        <PropertyGallery ref={(el) => (sectionsRef.current.properties = el)} />
        <AdditionalServices ref={(el) => (sectionsRef.current.additionalServices = el)} />
        <Testimonials ref={(el) => (sectionsRef.current.testimonials = el)} />
        <ContactSection ref={(el) => (sectionsRef.current.contact = el)} />
      </main>
      <Footer />
      <div
        className={`scroll-to-top ${showScrollToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5 text-white" />
      </div>
    </div>
  )
}
