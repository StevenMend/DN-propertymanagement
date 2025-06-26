"use client"

import { forwardRef, useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

interface TestimonialsProps {
  className?: string
}

export const Testimonials = forwardRef<HTMLElement, TestimonialsProps>(({ className = "" }, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const setRefs = (el: HTMLElement | null) => {
    // @ts-ignore - TypeScript doesn't know about the ref callback pattern
    if (ref) ref(el)
    inViewRef(el)
  }

  const testimonials = [
    {
      name: "Ron Leiserowitz",
      location: "Homeowner at Virginia house, Las Catalinas",
      content:
        "Dilan from DN Property has cared for our home and dog many times over the last few years. He takes great pride and care in understanding our priorities. The home is well managed in our absence and the dog is very happy.\n\nI recommend him for your project. Dilan begins every engagement with questions about the work. He wants to customize the care to each assignment and will ask questions about new work before doing anything. I highly recommend him.",
      initials: "RL",
    },
    {
      name: "Cindy Silverman ",
      location: "Homewner of Casa Tashi at Las Catalinas",
      content:
        "Dilan from DN Property has assisted us in our property management and pet care many times. He is an outstanding  person with a warm heart and great judgement and care.  Very  reliable and trustworthy, and does a great job. And our dog loves him! Highly recommend his services. Cindy from Las Catalinas.",
      initials: "CS",
    },
    {
      name: "William Chi",
      location: "Luxury homeowner at Flamingo",
      content:
        "Working with Dilan was great! He is responsive, efficient and very professional! I look forward to working with him and DN again in the future!",
      initials: "WC",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <section
      ref={setRefs}
      id="testimonials"
      className={`w-full py-20 md:py-32 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div
            className={`space-y-2 max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">TESTIMONIALS</h2>
            <p className="text-zinc-400 md:text-xl/relaxed max-w-2xl mx-auto">
              What our clients say about our service.
            </p>
          </div>
        </div>

        <div
          className={`relative mx-auto max-w-5xl py-12 transition-all duration-700 delay-300 ${inView ? "opacity-100" : "opacity-0"}`}
        >
          {/* Desktop view - all testimonials */}
          <div className="hidden md:grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 delay-${index * 200} ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full card-hover">
                  <Quote className="h-8 w-8 text-white/20 mb-4" />
                  <p className="text-zinc-400 mb-6 whitespace-pre-line line-clamp-6">{testimonial.content}</p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-zinc-800 text-white">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-white">{testimonial.name}</p>
                      <p className="text-sm text-zinc-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view - carousel */}
          <div className="md:hidden testimonial-carousel">
            <div className="testimonial-slide" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 mx-auto max-w-sm">
                      <Quote className="h-8 w-8 text-white/20 mb-4" />
                      <p className="text-zinc-400 mb-6 whitespace-pre-line">{testimonial.content}</p>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-zinc-800 text-white">{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-white">{testimonial.name}</p>
                          <p className="text-sm text-zinc-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel controls */}
            <div className="flex justify-center mt-6 space-x-2">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? "bg-white w-4" : "bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next testimonial"
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

Testimonials.displayName = "Testimonials"
