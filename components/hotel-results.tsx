"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Filter,
  ArrowUpDown,
  Wifi,
  Car,
  Utensils,
  Star,
  FishIcon as Swimming,
  Dumbbell,
  Coffee,
  Heart,
} from "lucide-react"
import Link from "next/link"

// Mock data for hotels
const mockHotels = [
  {
    id: 1,
    name: "Hotel Majestic Barcelona",
    image: "/hotel-majestic-barcelona.png",
    location: "Passeig de Gràcia, Barcelona",
    distance: "0.2 km del centro",
    rating: 4.5,
    reviews: 2847,
    price: 189,
    originalPrice: 245,
    discount: 23,
    amenities: ["wifi", "pool", "gym", "restaurant", "parking"],
    roomType: "Habitación Doble Superior",
    cancellation: "Cancelación gratuita",
    breakfast: true,
  },
  {
    id: 2,
    name: "Casa Bonay",
    image: "/casa-bonay-barcelona.png",
    location: "Gràcia, Barcelona",
    distance: "1.5 km del centro",
    rating: 4.2,
    reviews: 1523,
    price: 125,
    originalPrice: 160,
    discount: 22,
    amenities: ["wifi", "restaurant", "bar"],
    roomType: "Habitación Estándar",
    cancellation: "Cancelación gratuita hasta 24h antes",
    breakfast: false,
  },
  {
    id: 3,
    name: "The Serras Hotel Barcelona",
    image: "/serras-hotel-barcelona.png",
    location: "Barrio Gótico, Barcelona",
    distance: "0.1 km del centro",
    rating: 4.8,
    reviews: 956,
    price: 320,
    originalPrice: 420,
    discount: 24,
    amenities: ["wifi", "pool", "gym", "restaurant", "spa", "bar"],
    roomType: "Suite con Vista al Mar",
    cancellation: "Cancelación gratuita",
    breakfast: true,
  },
]

export function HotelResults() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("price")
  const [showFilters, setShowFilters] = useState(true)

  const amenities = [
    { id: "wifi", label: "WiFi gratuito", icon: Wifi },
    { id: "pool", label: "Piscina", icon: Swimming },
    { id: "gym", label: "Gimnasio", icon: Dumbbell },
    { id: "restaurant", label: "Restaurante", icon: Utensils },
    { id: "parking", label: "Estacionamiento", icon: Car },
    { id: "spa", label: "Spa", icon: Heart },
    { id: "bar", label: "Bar", icon: Coffee },
  ]

  const ratings = ["5 estrellas", "4 estrellas", "3 estrellas", "2 estrellas"]

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setSelectedAmenities([...selectedAmenities, amenity])
    } else {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity))
    }
  }

  const handleRatingChange = (rating: string, checked: boolean) => {
    if (checked) {
      setSelectedRatings([...selectedRatings, rating])
    } else {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating))
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Summary */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-black text-gray-800">Hoteles en Barcelona</h1>
            <p className="text-gray-600">15 dic - 22 dic • 2 huéspedes • 1 habitación</p>
          </div>
          <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
            <ArrowUpDown className="h-4 w-4" />
            <span>Modificar búsqueda</span>
          </Button>
        </div>
        <p className="text-sm text-gray-600">Se encontraron 156 hoteles</p>
      </div>

      <div className="flex gap-6">
        {/* Filters Sidebar */}
        <div className={`${showFilters ? "w-80" : "w-0"} transition-all duration-300 overflow-hidden`}>
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Filtros</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Precio por noche</Label>
                <Slider value={priceRange} onValueChange={setPriceRange} max={500} min={0} step={25} className="mb-2" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>€{priceRange[0]}</span>
                  <span>€{priceRange[1]}</span>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Star Rating */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Calificación</Label>
                <div className="space-y-2">
                  {ratings.map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox
                        id={rating}
                        checked={selectedRatings.includes(rating)}
                        onCheckedChange={(checked) => handleRatingChange(rating, checked as boolean)}
                      />
                      <Label htmlFor={rating} className="text-sm flex items-center space-x-1">
                        <span>{rating}</span>
                        <div className="flex">
                          {[...Array(Number.parseInt(rating))].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Amenities */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Servicios</Label>
                <div className="space-y-2">
                  {amenities.map((amenity) => (
                    <div key={amenity.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={amenity.id}
                        checked={selectedAmenities.includes(amenity.id)}
                        onCheckedChange={(checked) => handleAmenityChange(amenity.id, checked as boolean)}
                      />
                      <Label htmlFor={amenity.id} className="text-sm flex items-center space-x-2">
                        <amenity.icon className="h-4 w-4" />
                        <span>{amenity.label}</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Distance */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Distancia del centro</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="distance-1" />
                    <Label htmlFor="distance-1" className="text-sm">
                      Menos de 1 km
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="distance-2" />
                    <Label htmlFor="distance-2" className="text-sm">
                      1-3 km
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="distance-3" />
                    <Label htmlFor="distance-3" className="text-sm">
                      3-5 km
                    </Label>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                Limpiar filtros
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="flex-1">
          {/* Sort Options */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price">Precio más bajo</SelectItem>
                  <SelectItem value="rating">Mejor calificación</SelectItem>
                  <SelectItem value="distance">Distancia</SelectItem>
                  <SelectItem value="popularity">Popularidad</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Hotel Cards */}
          <div className="space-y-4">
            {mockHotels.map((hotel) => (
              <Card key={hotel.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Hotel Image */}
                    <div className="w-80 h-64 relative">
                      <img
                        src={hotel.image || "/placeholder.svg"}
                        alt={hotel.name}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                      {hotel.discount > 0 && (
                        <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">-{hotel.discount}%</Badge>
                      )}
                      <Button variant="ghost" size="sm" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Hotel Details */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{hotel.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                            <MapPin className="h-4 w-4" />
                            <span>{hotel.location}</span>
                            <span>•</span>
                            <span>{hotel.distance}</span>
                          </div>
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(hotel.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-medium">{hotel.rating}</span>
                            <span className="text-sm text-gray-600">({hotel.reviews} reseñas)</span>
                          </div>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="flex items-center space-x-3 mb-4">
                        {hotel.amenities.slice(0, 5).map((amenity) => {
                          const amenityData = amenities.find((a) => a.id === amenity)
                          if (!amenityData) return null
                          return (
                            <div key={amenity} className="flex items-center space-x-1 text-xs text-gray-600">
                              <amenityData.icon className="h-3 w-3" />
                              <span className="hidden sm:inline">{amenityData.label}</span>
                            </div>
                          )
                        })}
                        {hotel.amenities.length > 5 && (
                          <span className="text-xs text-gray-600">+{hotel.amenities.length - 5} más</span>
                        )}
                      </div>

                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{hotel.roomType}</p>
                          <p className="text-sm text-green-600 font-medium">{hotel.cancellation}</p>
                          {hotel.breakfast && <p className="text-sm text-blue-600">Desayuno incluido</p>}
                        </div>

                        <div className="text-right">
                          <div className="mb-2">
                            {hotel.originalPrice > hotel.price && (
                              <p className="text-sm text-gray-400 line-through">€{hotel.originalPrice}</p>
                            )}
                            <p className="text-2xl font-black text-purple-600">€{hotel.price}</p>
                            <p className="text-xs text-gray-600">por noche</p>
                          </div>
                          <Link href={`/booking/hotel/${hotel.id}`}>
                            <Button className="bg-purple-600 hover:bg-purple-700">Ver disponibilidad</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Cargar más resultados
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
