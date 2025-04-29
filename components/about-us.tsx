export function AboutUs() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">WHY CHOOSE US?</h2>
            <p className="text-zinc-400 md:text-xl/relaxed">
              We stand out for our meticulous and personalized service, ensuring absolute peace of mind for our clients.
              Our commitment is to provide exceptional service that takes care of every detail of your property.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full">
              <h3 className="text-xl font-bold text-white mb-3">Personalized Service</h3>
              <p className="text-zinc-400">Detailed attention to the specific needs of each property and owner.</p>
            </div>
          </div>
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full">
              <h3 className="text-xl font-bold text-white mb-3">Detailed Reports</h3>
              <p className="text-zinc-400">
                Comprehensive reports with photographic documentation of inspections and improvements.
              </p>
            </div>
          </div>
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full">
              <h3 className="text-xl font-bold text-white mb-3">Immediate Response</h3>
              <p className="text-zinc-400">
                Guaranteed attention to emergencies, prioritizing the safety and well-being of your property.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center text-zinc-500 text-sm italic">
          <p>
            Note: Additional services available upon request, with customized pricing according to the specific needs of
            the client.
          </p>
        </div>
      </div>
    </section>
  )
}
