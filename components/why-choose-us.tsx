"use client"

import { forwardRef } from "react"
import { useInView } from "react-intersection-observer"
import { Shield, FileText, Clock, ChevronLeft, ChevronRight } from "lucide-react"

interface WhyChooseUsProps {
  className?: string
}

export const WhyChooseUs = forwardRef<HTMLElement, WhyChooseUsProps>(({ className = "" }, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const setRefs = (el: HTMLElement | null) => {
    
    if (ref) ref(el)
    inViewRef(el)
  }

  return (
    <section ref={setRefs} id="why-choose-us" className={`w-full py-20 md:py-32 bg-black ${className}`}>
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div
            className={`space-y-2 max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">WHY CHOOSE US?</h2>
            <p className="text-zinc-400 md:text-xl/relaxed max-w-2xl mx-auto">
              We stand out for our meticulous and personalized service, ensuring absolute peace of mind for our clients.
              Our commitment is to provide exceptional service that takes care of every detail of your property.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-12 md:grid-cols-3 max-w-5xl">
          <div
            className={`group relative transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full card-hover">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-white/10 mr-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Personalized Service</h3>
              </div>
              <p className="text-zinc-400">Detailed attention to the specific needs of each property and owner.</p>
            </div>
          </div>
          <div
            className={`group relative transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full card-hover">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-white/10 mr-3">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Detailed Reports</h3>
              </div>
              <p className="text-zinc-400">
                Comprehensive reports with photographic documentation of inspections and improvements.
              </p>
            </div>
          </div>
          <div
            className={`group relative transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full card-hover">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-white/10 mr-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Immediate Response</h3>
              </div>
              <p className="text-zinc-400">
                Guaranteed attention to emergencies, prioritizing the safety and well-being of your property.
              </p>
            </div>
          </div>
        </div>
        {/* Mobile carousel controls */}
        <div className="flex justify-center mt-6 space-x-2 md:hidden">
          <button
            onClick={() => {
              const el = document.querySelector("#hero")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="View hero"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#plans")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="View plans"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 delay-400 ${inView ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-sm text-zinc-500 italic">
            Note: Additional services available upon request, with customized pricing according to the specific needs of
            the client.
          </p>
        </div>
      </div>
    </section>
  )
})

WhyChooseUs.displayName = "WhyChooseUs"
