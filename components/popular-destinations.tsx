import { Card, CardContent } from "@/components/ui/card"

export function PopularDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Barcelona",
      country: "España",
      price: "Desde $599",
      image: "/barcelona-sagrada-familia-park-guell.png",
      description: "Arte, cultura y gastronomía mediterránea",
    },
    {
      id: 2,
      name: "Tokio",
      country: "Japón",
      price: "Desde $1,199",
      image: "/tokyo-fuji-cherry-blossoms.png",
      description: "Tradición milenaria y tecnología futurista",
    },
    {
      id: 3,
      name: "Machu Picchu",
      country: "Perú",
      price: "Desde $799",
      image: "/machu-picchu-ruins.png",
      description: "Maravilla del mundo y cultura inca",
    },
    {
      id: 4,
      name: "Santorini",
      country: "Grecia",
      price: "Desde $899",
      image: "/santorini-sunset.png",
      description: "Atardeceres únicos en el mar Egeo",
    },
    {
      id: 5,
      name: "Dubai",
      country: "Emiratos Árabes",
      price: "Desde $999",
      image: "/dubai-burj-khalifa-skyline.png",
      description: "Lujo y modernidad en el desierto",
    },
    {
      id: 6,
      name: "Bali",
      country: "Indonesia",
      price: "Desde $699",
      image: "/bali-rice-temples.png",
      description: "Paraíso tropical y espiritualidad",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">Destinos Populares</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Los lugares más visitados por nuestros viajeros este año
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="text-sm opacity-90">{destination.country}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-bold text-gray-800">{destination.price}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm">{destination.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
