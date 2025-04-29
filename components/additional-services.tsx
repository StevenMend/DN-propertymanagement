export function AdditionalServices() {
  const services = [
    {
      title: "Concierge Service",
      price: "$6 per request",
      description: "Restaurant reservations, tour organization, vehicle rentals, personalized shopping, among others.",
    },
    {
      title: "Pet Care",
      price: "$33 per day",
      description: "Includes two walks and two feedings at the owner's property.",
    },
    {
      title: "Pool Maintenance",
      price: "$60-$100",
      description: "Depending on size and specific needs.",
    },
    {
      title: "Grocery Shopping",
      price: "$20 per transaction",
      description: "Grocery shopping and delivery service to the property.",
    },
    {
      title: "Package Reception",
      price: "$6 per package",
      description: "Fee adjustable according to size and weight.",
    },
    {
      title: "Cleaning Services",
      price: "$20 per hour",
      description: "Professional cleaning service for your property.",
    },
  ]

  return (
    <section id="additional-services" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">ADDITIONAL SERVICES</h2>
            <p className="text-zinc-400 md:text-xl/relaxed">
              We offer a variety of additional on-demand services to meet all your needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 h-full">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-white/60 text-sm mt-1">{service.price}</p>
                <p className="text-zinc-400 mt-3">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
