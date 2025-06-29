"use client"

import { forwardRef } from "react"
import { useInView } from "react-intersection-observer"
import { Check, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServicePlansProps {
  className?: string
}

export const ServicePlans = forwardRef<HTMLElement, ServicePlansProps>(({ className = "" }, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const setRefs = (el: HTMLElement | null) => {
    // @ts-ignore - TypeScript doesn't know about the ref callback pattern
    if (ref) ref(el)
    inViewRef(el)
  }

  return (
    <section ref={setRefs} id="plans" className={`w-full py-20 md:py-32 ${className}`}>
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div
            className={`space-y-2 max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">SERVICE PLANS</h2>
            <p className="text-zinc-400 md:text-xl/relaxed max-w-2xl mx-auto">
              We offer two main plans designed to adapt to different needs and budgets.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
          <div
            className={`group relative transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full flex flex-col card-hover">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white">SIGNATURE PACKAGE</h3>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-zinc-400">Complete basic service</span>
                  <div className="text-right">
                    <div className="text-white">
                      FLAT <span className="text-2xl font-bold"></span>
                    </div>
                    <div className="text-white">
                      HOUSE <span className="text-2xl font-bold"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="mb-4 font-medium text-white">Included services:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span className="text-zinc-400">
                      Monthly detailed reports on the property status, including photographic documentation of
                      inspections and improvements.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span className="text-zinc-400">
                      Weekly inspections to verify proper functioning of electricity, plumbing, HVAC, and appliances.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span className="text-zinc-400">
                      Petty cash management ($3,000-$5,000) with monthly financial reports and detailed expense
                      receipts.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span className="text-zinc-400">
                      Immediate response to emergencies, prioritizing the safety and well-being of the property.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  className="gradient-button w-full bg-white text-black hover:bg-white/90 rounded-full py-6 transition-all duration-300"
                >
                  <a href="#contact">Request Signature Package</a>
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`group relative transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-500/20 to-zinc-700/20 rounded-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full flex flex-col card-hover">
              <div className="absolute right-6 top-6">
                <span className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full flex items-center animate-pulse">
                  <Star className="h-3 w-3 mr-1 text-black" /> RECOMMENDED
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white">ELITE PACKAGE</h3>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-zinc-400">Complete premium service</span>
                  <div className="text-right">
                    <div className="text-white">
                      FLAT <span className="text-2xl font-bold"></span>
                    </div>
                    <div className="text-white">
                      HOUSE <span className="text-2xl font-bold"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="mb-4 font-medium text-white">Includes all Signature Package services, plus:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span className="text-zinc-400">
                      Bi-weekly management and maintenance reports with detailed information on inspections,
                      improvements, and ongoing projects.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span className="text-zinc-400">
                      Priority communication with the property manager outside regular hours for urgent situations.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span className="text-zinc-400">
                      Twice-weekly inspections to verify the general condition of the property.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span className="text-zinc-400">
                      Absolute priority in handling maintenance requests and emergencies.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  className="gradient-button w-full bg-white text-black hover:bg-white/90 rounded-full py-6 transition-all duration-300 animate-glow"
                >
                  <a href="#contact">Request Elite Package</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile carousel controls (even though this is a grid) */}
        <div className="flex justify-center mt-6 space-x-2 md:hidden">
          <button
            onClick={() => {
              const el = document.querySelector("#plans")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="View plans"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#additional-services")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="View additional services"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
})

ServicePlans.displayName = "ServicePlans"
