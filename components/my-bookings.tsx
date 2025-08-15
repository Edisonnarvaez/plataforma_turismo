"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Plane, Building, Calendar, MapPin, Download, Mail, Star, Clock } from "lucide-react"

// Mock bookings data
const mockBookings = [
  {
    id: "VJM-789456123",
    type: "flight",
    status: "confirmed",
    airline: "Avianca",
    departure: {
      time: "08:30",
      airport: "BOG",
      city: "Bogotá",
      date: "15 Dic 2024",
    },
    arrival: {
      time: "14:45",
      airport: "MAD",
      city: "Madrid",
      date: "15 Dic 2024",
    },
    duration: "9h 15m",
    passengers: 1,
    price: 988,
    bookingDate: "2024-11-15",
  },
  {
    id: "VJM-654321987",
    type: "hotel",
    status: "confirmed",
    hotelName: "Hotel Majestic Barcelona",
    location: "Barcelona, España",
    checkIn: "20 Dic 2024",
    checkOut: "27 Dic 2024",
    nights: 7,
    guests: 2,
    roomType: "Habitación Doble Superior",
    price: 1368,
    bookingDate: "2024-11-10",
  },
  {
    id: "VJM-321654789",
    type: "flight",
    status: "completed",
    airline: "LATAM",
    departure: {
      time: "16:20",
      airport: "BOG",
      city: "Bogotá",
      date: "10 Oct 2024",
    },
    arrival: {
      time: "22:45",
      airport: "LIM",
      city: "Lima",
      date: "10 Oct 2024",
    },
    duration: "2h 25m",
    passengers: 2,
    price: 756,
    bookingDate: "2024-09-15",
  },
]

export function MyBookings() {
  const [activeTab, setActiveTab] = useState("all")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800">Confirmado</Badge>
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800">Completado</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelado</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">Pendiente</Badge>
    }
  }

  const filteredBookings = mockBookings.filter((booking) => {
    if (activeTab === "all") return true
    if (activeTab === "flights") return booking.type === "flight"
    if (activeTab === "hotels") return booking.type === "hotel"
    return true
  })

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-800">Mis Reservas</h1>
        <p className="text-gray-600">Gestiona y revisa todas tus reservas de viaje</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="flights">Vuelos</TabsTrigger>
          <TabsTrigger value="hotels">Hoteles</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="space-y-6">
            {filteredBookings.map((booking) => (
              <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {booking.type === "flight" ? (
                        <Plane className="h-6 w-6 text-purple-600" />
                      ) : (
                        <Building className="h-6 w-6 text-purple-600" />
                      )}
                      <div>
                        <h3 className="text-lg font-bold">
                          {booking.type === "flight" ? booking.airline : booking.hotelName}
                        </h3>
                        <p className="text-sm text-gray-600">Código: {booking.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(booking.status)}
                      <p className="text-sm text-gray-600 mt-1">
                        Reservado: {new Date(booking.bookingDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {booking.type === "flight" ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                      <div className="text-center">
                        <p className="text-xl font-bold">{booking.departure.time}</p>
                        <p className="text-sm text-gray-600">{booking.departure.airport}</p>
                        <p className="text-xs text-gray-500">{booking.departure.city}</p>
                        <p className="text-xs text-gray-500">{booking.departure.date}</p>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <div className="h-px bg-gray-300 flex-1"></div>
                          <Plane className="h-4 w-4 text-gray-400" />
                          <div className="h-px bg-gray-300 flex-1"></div>
                        </div>
                        <p className="text-sm text-gray-600">{booking.duration}</p>
                        <Badge variant="secondary" className="text-xs">
                          Directo
                        </Badge>
                      </div>

                      <div className="text-center">
                        <p className="text-xl font-bold">{booking.arrival.time}</p>
                        <p className="text-sm text-gray-600">{booking.arrival.airport}</p>
                        <p className="text-xs text-gray-500">{booking.arrival.city}</p>
                        <p className="text-xs text-gray-500">{booking.arrival.date}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{booking.location}</span>
                        </div>
                        <p className="text-sm font-medium">{booking.roomType}</p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Check-in</span>
                        </div>
                        <p className="text-sm font-medium">{booking.checkIn}</p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Check-out</span>
                        </div>
                        <p className="text-sm font-medium">{booking.checkOut}</p>
                      </div>
                    </div>
                  )}

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <span>
                        {booking.type === "flight"
                          ? `${booking.passengers} pasajero${booking.passengers > 1 ? "s" : ""}`
                          : `${booking.guests} huésped${booking.guests > 1 ? "es" : ""} • ${booking.nights} noche${booking.nights > 1 ? "s" : ""}`}
                      </span>
                      <span>•</span>
                      <span className="font-bold text-purple-600">${booking.price}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Descargar
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Reenviar
                      </Button>
                      {booking.status === "confirmed" && (
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                          Cancelar
                        </Button>
                      )}
                      {booking.status === "completed" && booking.type === "hotel" && (
                        <Button variant="outline" size="sm">
                          <Star className="h-4 w-4 mr-2" />
                          Calificar
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredBookings.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">No hay reservas</h3>
                  <p className="text-gray-600 mb-4">
                    Aún no tienes reservas en esta categoría. ¡Explora nuestras ofertas!
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">Buscar Viajes</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
