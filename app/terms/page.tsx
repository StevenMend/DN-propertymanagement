import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions | DN Property Management",
  description: "Terms and Conditions for DN Property Management services",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Link href="/" className="inline-flex items-center mb-8 text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>

          <div className="space-y-8 text-zinc-300">
            <p className="leading-relaxed">
              Welcome to DN Property Management. By accessing or using our website, you agree to be bound by these Terms
              and Conditions. Please read them carefully before using our services.
            </p>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Use of Services</h2>
              <p className="leading-relaxed">
                Our services are available for personal and non-commercial use. You may not modify, copy, distribute,
                transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell
                any information obtained from our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Property Management Services</h2>
              <p className="leading-relaxed mb-4">
                DN Property Management provides property management services as outlined in our service plans. The
                specific services provided will be detailed in the service agreement signed between DN Property
                Management and the property owner.
              </p>
              <p className="leading-relaxed">
                All services are subject to availability and may vary depending on location, property type, and other
                factors.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                immediately upon posting to our website. Your continued use of our services after any changes indicates
                your acceptance of the new Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="mt-2 text-white">
                <strong>Email:</strong> propertymanagement.dn@gmail.com
                <br />
                <strong>Phone:</strong> +506 7033-2518
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-800 text-sm text-zinc-500">
            <p>Last updated: April 28, 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
