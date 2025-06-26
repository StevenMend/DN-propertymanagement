"use client"

import { forwardRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Utensils, Dog, Droplet, ShoppingBag, Package, Brush, ChevronLeft, ChevronRight } from "lucide-react"

interface AdditionalServicesProps {
  className?: string
}

export const AdditionalServices = forwardRef<HTMLElement, AdditionalServicesProps>(({ className = "" }, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const setRefs = (el: HTMLElement | null) => {
    
    if (ref) ref(el)
    inViewRef(el)
  }

  const services = [
    {
      title: "Concierge Service",
      price: "$6 per request",
      description: "Restaurant reservations, tour organization, vehicle rentals, personalized shopping, among others.",
      icon: <Utensils className="h-6 w-6 text-white" />,
      delay: 100,
    },
    {
      title: "Pet Care",
      price: "$33 per day",
      description: "Includes two walks and two feedings at the owner's property.",
      icon: <Dog className="h-6 w-6 text-white" />,
      delay: 200,
    },
    {
      title: "Pool Maintenance",
      price: "$60-$100",
      description: "Depending on size and specific needs.",
      icon: <Droplet className="h-6 w-6 text-white" />,
      delay: 300,
    },
    {
      title: "Grocery Shopping",
      price: "$20 per transaction",
      description: "Grocery shopping and delivery service to the property.",
      icon: <ShoppingBag className="h-6 w-6 text-white" />,
      delay: 400,
    },
    {
      title: "Package Reception",
      price: "$6 per package",
      description: "Fee adjustable according to size and weight.",
      icon: <Package className="h-6 w-6 text-white" />,
      delay: 500,
    },
    {
      title: "Cleaning Services",
      price: "$20 per hour",
      description: "Professional cleaning service for your property.",
      icon: <Brush className="h-6 w-6 text-white" />,
      delay: 600,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section ref={setRefs} id="additional-services" className={`w-full py-20 md:py-32 ${className}`}>
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div
            className={`space-y-2 max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">ADDITIONAL SERVICES</h2>
            <p className="text-zinc-400 md:text-xl/relaxed max-w-2xl mx-auto">
              We offer a variety of additional on-demand services to meet all your needs.
            </p>
          </div>
        </div>

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto py-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ animationDelay: `${service.delay}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full card-hover">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-white/10 mr-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-zinc-500 mb-4">{service.price}</p>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel view */}
        <div className="md:hidden max-w-full py-12 overflow-hidden">
          <div className="relative">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-full bg-white/10 mr-3">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-zinc-500 mb-4">{service.price}</p>
                    <p className="text-zinc-400">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel controls */}
            <div className="flex justify-center mt-6 space-x-2">
              <button
                onClick={() => setActiveIndex((current) => (current - 1 + services.length) % services.length)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous service"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              <div className="flex space-x-2 items-center">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? "bg-white w-4" : "bg-white/30"
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveIndex((current) => (current + 1) % services.length)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next service"
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

AdditionalServices.displayName = "AdditionalServices"
