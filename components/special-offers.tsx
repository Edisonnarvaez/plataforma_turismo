import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function SpecialOffers() {
  const offers = [
    {
      id: 1,
      title: "París + Londres",
      description: "7 noches con vuelos incluidos",
      price: "$1,299",
      originalPrice: "$1,899",
      discount: "32% OFF",
      image: "/paris-london-landmarks.png",
      badge: "Oferta Limitada",
    },
    {
      id: 2,
      title: "Cancún Todo Incluido",
      description: "5 noches en resort 5 estrellas",
      price: "$899",
      originalPrice: "$1,299",
      discount: "31% OFF",
      image: "/cancun-beach-resort.png",
      badge: "Más Vendido",
    },
    {
      id: 3,
      title: "Nueva York Express",
      description: "4 noches en Manhattan",
      price: "$799",
      originalPrice: "$1,199",
      discount: "33% OFF",
      image: "/nyc-empire-state.png",
      badge: "Últimas Plazas",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">Ofertas Especiales</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre destinos increíbles con descuentos exclusivos por tiempo limitado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={offer.image || "/placeholder.svg"} alt={offer.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">{offer.badge}</Badge>
                <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600">{offer.discount}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-black text-purple-600">{offer.price}</span>
                    <span className="text-lg text-gray-400 line-through">{offer.originalPrice}</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors">Ver Detalles</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
