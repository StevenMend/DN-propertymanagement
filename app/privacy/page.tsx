import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | DN Property Management",
  description: "Privacy Policy for DN Property Management services",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Link href="/" className="inline-flex items-center mb-8 text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="space-y-8 text-zinc-300">
            <p className="leading-relaxed">
              At DN Property Management, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, and protect your personal information.
            </p>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
              <p className="leading-relaxed">
                We may collect personal information such as your name, email address, phone number, and property details
                when you use our services or contact us through our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use your personal information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                <li>Provide and improve our property management services</li>
                <li>Communicate with you about your property</li>
                <li>Send you updates and promotional materials (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Information Security</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about our Privacy Policy, please contact us at:
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
