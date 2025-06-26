import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-16 sm:w-12">
                <Image
                  src="/logo.png"
                  alt="DN Property Management"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, 48px"
                />
              </div>
              <span className="text-lg font-semibold tracking-wider text-white">DN PROPERTY MANAGEMENT</span>
            </Link>
            <p className="text-zinc-400 text-sm">
              Complete management, guaranteed peace of mind. We take care of every detail so you can enjoy without
              worries.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:gap-12 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-base font-medium text-white">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <a href="#why-choose-us" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Why Choose Us
                </a>
                <a href="#plans" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Plans
                </a>
                <a href="#additional-services" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Additional Services
                </a>
                <a href="#testimonials" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Testimonials
                </a>
                <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Contact
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium text-white">Legal</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/privacy" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500">
            DN Property Management © {new Date().getFullYear()} Dev by Steven Mendez.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://www.instagram.com/propertymanagement.dn?igsh=eWF2aHRicm80NDZ1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
