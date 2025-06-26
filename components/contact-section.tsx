"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, Activity, CheckCircle, ChevronLeft, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  className?: string
}

export const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(({ className = "" }, ref) => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [formSuccess, setFormSuccess] = useState(false)

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const setRefs = (el: HTMLElement | null) => {
    
    if (ref) ref(el)
    inViewRef(el)
  }

  const validateForm = () => {
    const errors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))


    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast({
        title: "Message sent",
        description: "We will contact you soon.",
      })

      setFormSuccess(true)

    
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        setFormSuccess(false)
      }, 3000)
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={setRefs} id="contact" className={`w-full py-20 md:py-32 ${className}`}>
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div
            className={`space-y-2 max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">CONTACT</h2>
            <p className="text-zinc-400 md:text-xl/relaxed max-w-2xl mx-auto">
              We are here to answer all your questions and help you with property management.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 card-hover">
                <h3 className="text-xl font-bold text-white mb-3">Contact Information</h3>
                <p className="text-zinc-400 mb-6">
                  We are available Monday to Sunday from 08:00 AM to 05:00 PM (Costa Rica time).
                </p>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Phone className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-zinc-400 group-hover:text-white transition-colors">+506 7033-2518</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Mail className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-zinc-400 group-hover:text-white transition-colors">
                      propertymanagement.dn@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Activity className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-zinc-400 group-hover:text-white transition-colors">
                      WhatsApp: +506 7033-2518
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`group relative transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5">
              {formSuccess ? (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <div className="rounded-full bg-white/10 p-4 mb-4">
                    <CheckCircle className="h-12 w-12 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-400 text-center mb-6">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`form-input bg-zinc-800/50 border-white/5 text-white placeholder:text-zinc-500 rounded-lg focus:border-white/20 focus:ring-0 transition-all duration-300 ${
                        formErrors.name ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`form-input bg-zinc-800/50 border-white/5 text-white placeholder:text-zinc-500 rounded-lg focus:border-white/20 focus:ring-0 transition-all duration-300 ${
                        formErrors.email ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Input
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input bg-zinc-800/50 border-white/5 text-white placeholder:text-zinc-500 rounded-lg focus:border-white/20 focus:ring-0 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`min-h-[120px] bg-zinc-800/50 border-white/5 text-white placeholder:text-zinc-500 rounded-lg focus:border-white/20 focus:ring-0 transition-all duration-300 ${
                        formErrors.message ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
              {/* Mobile navigation controls */}
              <div className="flex justify-center mt-6 space-x-2 md:hidden">
                <button
                  onClick={() => {
                    const el = document.querySelector("#testimonials")
                    if (el) el.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="View testimonials"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Back to top"
                >
                  <ChevronUp className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
