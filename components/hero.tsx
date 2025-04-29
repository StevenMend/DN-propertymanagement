import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <main className="mt-[72px] md:mt-[88px]">
      <section className="w-full py-0 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Your Property in Good Hands
                </h1>
                <p className="max-w-[600px] text-zinc-400 text-lg md:text-xl">
                  Complete management, guaranteed peace of mind. We take care of every detail so you can enjoy without
                  worries.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6">
                  <Link href="#contact">Request a Call</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/10 text-white hover:bg-white/5 hover:text-white rounded-full px-8 py-6"
                >
                  <Link href="#services">View Plans</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/20 to-zinc-800/20 rounded-3xl blur-sm"></div>
              <div className="relative w-full h-full min-h-[250px] overflow-hidden rounded-2xl">
                <Image
                  src="/Catalinasair.jpg"
                  alt="Luxury property management"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
