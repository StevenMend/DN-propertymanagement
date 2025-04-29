import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
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

  return (
    <section id="testimonials" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">TESTIMONIALS</h2>
            <p className="text-zinc-400 md:text-xl/relaxed">What our clients say about our service.</p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full">
                <Quote className="h-8 w-8 text-white/20 mb-4" />
                <p className="text-zinc-400 mb-6">{testimonial.content}</p>
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
    </section>
  )
}
