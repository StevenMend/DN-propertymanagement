"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface HeaderProps {
  activeSection?: string
}

export function Header({ activeSection = "hero" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollbarWidth, setScrollbarWidth] = useState(0)

  
  useEffect(() => {
    const scrollDiv = document.createElement("div")
    scrollDiv.style.width = "100px"
    scrollDiv.style.height = "100px"
    scrollDiv.style.overflow = "scroll"
    scrollDiv.style.position = "absolute"
    scrollDiv.style.top = "-9999px"
    document.body.appendChild(scrollDiv)

    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    setScrollbarWidth(scrollbarWidth)

    document.body.removeChild(scrollDiv)
  }, [])

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.paddingRight = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0", 10) * -1)
      }
    }

    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.paddingRight = ""
    }
  }, [isMobileMenuOpen, scrollbarWidth])

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()

        const targetId = target.getAttribute("href")
        const targetElement = document.querySelector(targetId as string)

        if (targetElement) {
          setIsMobileMenuOpen(false)

          setTimeout(() => {
            const headerHeight = document.querySelector("header")?.offsetHeight || 0
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            })
          }, 300)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled
          ? "border-white/10 bg-black/80 backdrop-blur-md py-2"
          : "border-transparent bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-4 md:px-6 mx-auto max-w-7xl">
        
        <a href="/" className="flex items-center gap-2 py-2 group">
          <div className="relative h-10 w-10 sm:w-12 transition-transform duration-500 group-hover:scale-110">
            <Image
              src="/images/logo.png"
              alt="DN Property Management"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 40px, 48px"
              priority
            />
          </div>
          <span className="text-base sm:text-lg font-semibold tracking-wider text-white whitespace-nowrap truncate max-w-[180px] sm:max-w-none opacity-90 hover:opacity-100 transition-opacity duration-300">
            
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 min-w-[650px] justify-end">
          <a
            href="#why-choose-us"
            className={`nav-link text-sm font-medium transition-colors hover:text-white px-1 ${
              activeSection === "whyChooseUs" ? "text-white active" : "text-white/70"
            }`}
          >
            Why Choose Us
          </a>
          <a
            href="#plans"
            className={`nav-link text-sm font-medium transition-colors hover:text-white px-1 ${
              activeSection === "plans" ? "text-white active" : "text-white/70"
            }`}
          >
            Plans
          </a>
          <a
            href="#properties"
            className={`nav-link text-sm font-medium transition-colors hover:text-white px-1 ${
              activeSection === "properties" ? "text-white active" : "text-white/70"
            }`}
          >
            Properties
          </a>
          <a
            href="#additional-services"
            className={`nav-link text-sm font-medium transition-colors hover:text-white px-1 ${
              activeSection === "additionalServices" ? "text-white active" : "text-white/70"
            }`}
          >
            Additional Services
          </a>
          <a
            href="#testimonials"
            className={`nav-link text-sm font-medium transition-colors hover:text-white px-1 ${
              activeSection === "testimonials" ? "text-white active" : "text-white/70"
            }`}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className={`nav-link text-sm font-medium transition-colors hover:text-white px-1 ${
              activeSection === "contact" ? "text-white active" : "text-white/70"
            }`}
          >
            Contact
          </a>

          <Button
            asChild
            variant="outline"
            className="border-white/10 text-white hover:bg-white hover:text-black rounded-full px-6 ml-2 transition-all duration-300"
          >
            <a href="#contact">Request a Call</a>
          </Button>
        </nav>

        <div className="flex items-center lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-white/10 text-white hover:bg-white/5 hover:text-white rounded-full mr-0"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] sm:max-w-sm bg-black/95 border-white/5 overflow-y-auto">
              <SheetTitle className="text-lg font-semibold text-white"></SheetTitle>
              <SheetDescription className="text-sm text-white/60"></SheetDescription>
              <div className="flex items-center gap-3 py-4">
                <div className="relative h-10 w-12">
                  <Image
                    src="/images/logo.png"
                    alt="DN Property Management"
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <span className="text-lg font-semibold tracking-wider text-white">DN PROPERTY MANAGEMENT</span>
              </div>
              <nav className="flex flex-col gap-6 mt-8">
                <a
                  href="#why-choose-us"
                  className={`text-base font-medium transition-colors hover:text-white ${
                    activeSection === "whyChooseUs" ? "text-white" : "text-white/70"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why Choose Us
                </a>
                <a
                  href="#plans"
                  className={`text-base font-medium transition-colors hover:text-white ${
                    activeSection === "plans" ? "text-white" : "text-white/70"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Plans
                </a>
                <a
                  href="#properties"
                  className={`text-base font-medium transition-colors hover:text-white ${
                    activeSection === "properties" ? "text-white" : "text-white/70"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Properties
                </a>
                <a
                  href="#additional-services"
                  className={`text-base font-medium transition-colors hover:text-white ${
                    activeSection === "additionalServices" ? "text-white" : "text-white/70"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Additional Services
                </a>
                <a
                  href="#testimonials"
                  className={`text-base font-medium transition-colors hover:text-white ${
                    activeSection === "testimonials" ? "text-white" : "text-white/70"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className={`text-base font-medium transition-colors hover:text-white ${
                    activeSection === "contact" ? "text-white" : "text-white/70"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 border-white/10 text-white hover:bg-white hover:text-black rounded-full w-full transition-all duration-300"
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Request a Call
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
