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
              The purpose of this Privacy Policy is to inform you of what kinds of information we may gather during the
              visit to the Site, how we may use that information, whether we disclose it, and the choices you have
              regarding our use of and your ability to manage and edit the information. This Privacy Policy applies to
              the Site. This Privacy Policy does not apply to other websites to which we link.
            </p>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Information Collection</h2>
              <p className="leading-relaxed mb-4">
                We collect personal information when you wish to use certain features of the Site, such as registering
                to receive information from us. When you choose to use these features, we ask for information such as
                your name and email address.
              </p>
              <p className="leading-relaxed">
                Through the Site, we may automatically gather certain information about the use of the Site, such as how
                frequently certain areas of the Site are visited, including through the use of cookies, web beacons and
                other technologies.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to provide and improve our services, to communicate with you, and to
                personalize your experience.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your inquiries and fulfill your requests</li>
                <li>To send administrative information, such as changes to our terms, conditions, and policies</li>
                <li>To personalize your experience on our Site</li>
                <li>To improve our Site and services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, rent, or otherwise share your personal information with third parties except as
                described in this Privacy Policy. We may share your information with trusted service providers who
                assist us in operating our website and conducting our business.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your personal information. If you would like to
                exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
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
