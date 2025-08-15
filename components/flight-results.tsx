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
import { Plane, Filter, ArrowUpDown, Wifi, Coffee, Luggage, Star } from "lucide-react"
import Link from "next/link"

// Mock data for flights
const mockFlights = [
  {
    id: 1,
    airline: "Avianca",
    logo: "/avianca-logo.png",
    departure: {
      time: "08:30",
      airport: "BOG",
      city: "Bogotá",
    },
    arrival: {
      time: "14:45",
      airport: "MAD",
      city: "Madrid",
    },
    duration: "9h 15m",
    stops: 0,
    price: 899,
    class: "Económica",
    amenities: ["wifi", "meals", "entertainment"],
    baggage: "23kg incluido",
    rating: 4.2,
  },
  {
    id: 2,
    airline: "LATAM",
    logo: "/latam-logo.png",
    departure: {
      time: "22:15",
      airport: "BOG",
      city: "Bogotá",
    },
    arrival: {
      time: "16:30",
      airport: "MAD",
      city: "Madrid",
    },
    duration: "11h 15m",
    stops: 1,
    stopCity: "Lima",
    price: 756,
    class: "Económica",
    amenities: ["wifi", "meals"],
    baggage: "23kg incluido",
    rating: 4.0,
  },
  {
    id: 3,
    airline: "Iberia",
    logo: "/iberia-logo.png",
    departure: {
      time: "15:20",
      airport: "BOG",
      city: "Bogotá",
    },
    arrival: {
      time: "08:45",
      airport: "MAD",
      city: "Madrid",
    },
    duration: "10h 25m",
    stops: 0,
    price: 1299,
    class: "Premium",
    amenities: ["wifi", "meals", "entertainment", "priority"],
    baggage: "32kg incluido",
    rating: 4.5,
  },
]

export function FlightResults() {
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([])
  const [selectedStops, setSelectedStops] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("price")
  const [showFilters, setShowFilters] = useState(true)

  const airlines = ["Avianca", "LATAM", "Iberia", "Copa Airlines", "American Airlines"]
  const stopOptions = ["Directo", "1 escala", "2+ escalas"]

  const handleAirlineChange = (airline: string, checked: boolean) => {
    if (checked) {
      setSelectedAirlines([...selectedAirlines, airline])
    } else {
      setSelectedAirlines(selectedAirlines.filter((a) => a !== airline))
    }
  }

  const handleStopChange = (stop: string, checked: boolean) => {
    if (checked) {
      setSelectedStops([...selectedStops, stop])
    } else {
      setSelectedStops(selectedStops.filter((s) => s !== stop))
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Summary */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-black text-gray-800">Vuelos Bogotá → Madrid</h1>
            <p className="text-gray-600">15 dic - 22 dic • 1 pasajero • Económica</p>
          </div>
          <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
            <ArrowUpDown className="h-4 w-4" />
            <span>Modificar búsqueda</span>
          </Button>
        </div>
        <p className="text-sm text-gray-600">Se encontraron 24 vuelos</p>
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
                <Label className="text-sm font-medium mb-3 block">Precio por persona</Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={2000}
                  min={0}
                  step={50}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Airlines */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Aerolíneas</Label>
                <div className="space-y-2">
                  {airlines.map((airline) => (
                    <div key={airline} className="flex items-center space-x-2">
                      <Checkbox
                        id={airline}
                        checked={selectedAirlines.includes(airline)}
                        onCheckedChange={(checked) => handleAirlineChange(airline, checked as boolean)}
                      />
                      <Label htmlFor={airline} className="text-sm">
                        {airline}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Stops */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Escalas</Label>
                <div className="space-y-2">
                  {stopOptions.map((stop) => (
                    <div key={stop} className="flex items-center space-x-2">
                      <Checkbox
                        id={stop}
                        checked={selectedStops.includes(stop)}
                        onCheckedChange={(checked) => handleStopChange(stop, checked as boolean)}
                      />
                      <Label htmlFor={stop} className="text-sm">
                        {stop}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Departure Time */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Horario de salida</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    Madrugada
                    <br />
                    00-06
                  </Button>
                  <Button variant="outline" size="sm">
                    Mañana
                    <br />
                    06-12
                  </Button>
                  <Button variant="outline" size="sm">
                    Tarde
                    <br />
                    12-18
                  </Button>
                  <Button variant="outline" size="sm">
                    Noche
                    <br />
                    18-24
                  </Button>
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
                  <SelectItem value="duration">Duración más corta</SelectItem>
                  <SelectItem value="departure">Hora de salida</SelectItem>
                  <SelectItem value="rating">Mejor calificación</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Flight Cards */}
          <div className="space-y-4">
            {mockFlights.map((flight) => (
              <Card key={flight.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 flex-1">
                      {/* Airline Logo */}
                      <div className="flex items-center space-x-3">
                        <img
                          src={flight.logo || "/placeholder.svg"}
                          alt={flight.airline}
                          className="w-12 h-12 object-contain"
                        />
                        <div>
                          <p className="font-medium text-sm">{flight.airline}</p>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-600">{flight.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Flight Details */}
                      <div className="flex items-center space-x-8 flex-1">
                        <div className="text-center">
                          <p className="text-xl font-bold">{flight.departure.time}</p>
                          <p className="text-sm text-gray-600">{flight.departure.airport}</p>
                          <p className="text-xs text-gray-500">{flight.departure.city}</p>
                        </div>

                        <div className="flex-1 text-center">
                          <div className="flex items-center justify-center space-x-2 mb-1">
                            <div className="h-px bg-gray-300 flex-1"></div>
                            <Plane className="h-4 w-4 text-gray-400" />
                            <div className="h-px bg-gray-300 flex-1"></div>
                          </div>
                          <p className="text-sm text-gray-600">{flight.duration}</p>
                          {flight.stops === 0 ? (
                            <Badge variant="secondary" className="text-xs">
                              Directo
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs">
                              {flight.stops} escala{flight.stops > 1 ? "s" : ""}
                              {flight.stopCity && ` en ${flight.stopCity}`}
                            </Badge>
                          )}
                        </div>

                        <div className="text-center">
                          <p className="text-xl font-bold">{flight.arrival.time}</p>
                          <p className="text-sm text-gray-600">{flight.arrival.airport}</p>
                          <p className="text-xs text-gray-500">{flight.arrival.city}</p>
                        </div>
                      </div>
                    </div>

                    {/* Price and Book */}
                    <div className="text-right ml-6">
                      <div className="mb-2">
                        <p className="text-2xl font-black text-purple-600">${flight.price}</p>
                        <p className="text-xs text-gray-600">por persona</p>
                      </div>
                      <Link href={`/booking/flight/${flight.id}`}>
                        <Button className="bg-purple-600 hover:bg-purple-700 mb-2">Seleccionar</Button>
                      </Link>
                      <div className="flex items-center justify-end space-x-1 text-xs text-gray-600">
                        {flight.amenities.includes("wifi") && <Wifi className="h-3 w-3" />}
                        {flight.amenities.includes("meals") && <Coffee className="h-3 w-3" />}
                        <Luggage className="h-3 w-3" />
                        <span>{flight.baggage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <span>Clase: {flight.class}</span>
                        <span>•</span>
                        <span>Equipaje: {flight.baggage}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Ver detalles
                      </Button>
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
