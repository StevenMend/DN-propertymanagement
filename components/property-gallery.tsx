"use client"

import React from "react"

import { forwardRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PropertyGalleryProps {
  className?: string
}

export const PropertyGallery = forwardRef<HTMLElement, PropertyGalleryProps>(({ className = "" }, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const setRefs = (el: HTMLElement | null) => {
    
    if (ref) ref(el)
    inViewRef(el)
  }

  const properties = [
    {
      id: 1,
      image: "/images/property1.jpeg",
      title: "Luxury Apartment",
      description: "Elegant apartment with stunning views of Las Catalinas",
    },
    {
      id: 2,
      image: "/images/property2.jpeg",
      title: "Ocean View Villa",
      description: "Spacious living area with panoramic ocean views",
    },
    {
      id: 3,
      image: "/images/property3.jpeg",
      title: "Beachfront Property",
      description: "Exclusive beachfront property with private pool",
    },
    {
      id: 4,
      image: "/images/property4.jpeg",
      title: "Colonial Style Residence",
      description: "Beautiful colonial style residence with wooden details",
    },
    {
      id: 5,
      image: "/images/property5.jpeg",
      title: "Rooftop Terrace",
      description: "Spectacular rooftop terrace with ocean views",
    },
    {
      id: 6,
      image: "/images/property6.jpeg",
      title: "Luxury Bedroom",
      description: "Elegant bedroom with balcony access and ocean views",
    },
  ]

 
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)


  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % Math.ceil(properties.length / 3))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, properties.length])

  
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)


  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + properties.length) % properties.length)
  }


  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % properties.length)
  }

  return (
    <section
      ref={setRefs}
      id="properties"
      className={`w-full py-20 md:py-32 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div
            className={`space-y-2 max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">OUR PROPERTIES</h2>
            <p className="text-zinc-400 md:text-xl/relaxed max-w-2xl mx-auto">
              Discover our exclusive selection of luxury properties in Costa Rica.
            </p>
          </div>
        </div>

        <div
          className={`relative mx-auto max-w-7xl py-12 transition-all duration-700 delay-300 ${inView ? "opacity-100" : "opacity-0"}`}
        >
          {/* Desktop view - grid of properties */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className={`group relative transition-all duration-700 delay-${index * 100} ${
                  inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{property.title}</h3>
                      <p className="text-sm text-white/80">{property.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 4. Update the mobile carousel view to properly handle individual image navigation */}
          {/* Replace the existing mobile view carousel implementation with: */}
          <div className="md:hidden relative">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {properties.map((property) => (
                <div key={property.id} className="w-full flex-shrink-0 px-2">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">{property.title}</h3>
                        <p className="text-sm text-white/80">{property.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel controls */}
            <div className="flex justify-center mt-6 space-x-2">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous property"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              <div className="flex space-x-2 items-center">
                {properties.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? "bg-white w-4" : "bg-white/30"
                    }`}
                    aria-label={`Go to property ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next property"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

PropertyGallery.displayName = "PropertyGallery"
