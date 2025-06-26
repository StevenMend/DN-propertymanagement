"use client"

import { forwardRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface HeroSectionProps {
  className?: string
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ className = "" }, ref) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={ref} id="hero" className={`relative w-full min-h-screen flex items-center ${className}`}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-aerial.jpeg"
          alt="Aerial view of luxury properties"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content positioned over the image */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-20 max-w-7xl">
        <div className="max-w-3xl">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="gradient-text">Your Property</span> in Good Hands
          </h1>
          <p
            className={`text-xl md:text-2xl text-white mb-10 drop-shadow-md max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Complete management, guaranteed peace of mind. We take care of every detail so you can enjoy without
            worries.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              asChild
              className="gradient-button bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 transition-all duration-300"
            >
              <a href="#contact">Request a Call</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="outline-button border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 transition-all duration-300"
            >
              <a href="#plans">View Plans</a>
            </Button>
          </div>
          <div
            className={`flex justify-center mt-12 space-x-2 md:hidden transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <button
              onClick={() => {
                const el = document.querySelector("#why-choose-us")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Go to Why Choose Us"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = "HeroSection"
