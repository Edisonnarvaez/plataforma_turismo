"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar, Star, ArrowLeft, Wifi, Car, Utensils, Dumbbell } from "lucide-react"
import Link from "next/link"

// Mock hotel data
const mockHotel = {
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
  checkIn: "15:00",
  checkOut: "11:00",
}

interface GuestData {
  firstName: string
  lastName: string
  email: string
  phone: string
  specialRequests: string
}

export function HotelBooking({ hotelId }: { hotelId: string }) {
  const [step, setStep] = useState(1)
  const [guestData, setGuestData] = useState<GuestData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [nights] = useState(7)
  const [guests] = useState(2)

  const updateGuestData = (field: keyof GuestData, value: string) => {
    setGuestData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/hotels" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a resultados</span>
        </Link>
        <h1 className="text-3xl font-black text-gray-800 mb-2">Reservar Hotel</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className={`px-3 py-1 rounded-full ${step >= 1 ? "bg-purple-100 text-purple-700" : "bg-gray-100"}`}>
            1. Detalles del hotel
          </span>
          <span className={`px-3 py-1 rounded-full ${step >= 2 ? "bg-purple-100 text-purple-700" : "bg-gray-100"}`}>
            2. Información del huésped
          </span>
          <span className={`px-3 py-1 rounded-full ${step >= 3 ? "bg-purple-100 text-purple-700" : "bg-gray-100"}`}>
            3. Pago
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Detalles del Hotel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <img
                    src={mockHotel.image || "/placeholder.svg"}
                    alt={mockHotel.name}
                    className="w-full md:w-80 h-64 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{mockHotel.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>{mockHotel.location}</span>
                      <span>•</span>
                      <span>{mockHotel.distance}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(mockHotel.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{mockHotel.rating}</span>
                      <span className="text-sm text-gray-600">({mockHotel.reviews} reseñas)</span>
                    </div>
                    <p className="text-lg font-semibold mb-2">{mockHotel.roomType}</p>
                    <p className="text-green-600 font-medium mb-4">{mockHotel.cancellation}</p>
                    {mockHotel.breakfast && <Badge className="bg-blue-100 text-blue-700 mb-4">Desayuno incluido</Badge>}
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h4 className="text-lg font-semibold mb-4">Servicios del hotel</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Wifi className="h-5 w-5 text-gray-600" />
                      <span className="text-sm">WiFi gratuito</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Car className="h-5 w-5 text-gray-600" />
                      <span className="text-sm">Estacionamiento</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Utensils className="h-5 w-5 text-gray-600" />
                      <span className="text-sm">Restaurante</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Dumbbell className="h-5 w-5 text-gray-600" />
                      <span className="text-sm">Gimnasio</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Check-in</h4>
                    <p className="text-sm text-gray-600">A partir de las {mockHotel.checkIn}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Check-out</h4>
                    <p className="text-sm text-gray-600">Hasta las {mockHotel.checkOut}</p>
                  </div>
                </div>

                <Button onClick={() => setStep(2)} className="w-full bg-purple-600 hover:bg-purple-700">
                  Continuar con información del huésped
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Información del Huésped Principal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input
                      id="firstName"
                      value={guestData.firstName}
                      onChange={(e) => updateGuestData("firstName", e.target.value)}
                      placeholder="Nombre"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input
                      id="lastName"
                      value={guestData.lastName}
                      onChange={(e) => updateGuestData("lastName", e.target.value)}
                      placeholder="Apellido"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={guestData.email}
                      onChange={(e) => updateGuestData("email", e.target.value)}
                      placeholder="email@ejemplo.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      value={guestData.phone}
                      onChange={(e) => updateGuestData("phone", e.target.value)}
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="specialRequests">Solicitudes especiales (opcional)</Label>
                  <textarea
                    id="specialRequests"
                    value={guestData.specialRequests}
                    onChange={(e) => updateGuestData("specialRequests", e.target.value)}
                    placeholder="Ej: Habitación en piso alto, cama extra, etc."
                    className="w-full p-3 border border-gray-300 rounded-md resize-none h-24"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Atrás
                  </Button>
                  <Link href="/checkout">
                    <Button className="bg-purple-600 hover:bg-purple-700">Continuar al pago</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar - Resumen */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Resumen de Reserva</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Hotel</h4>
                  <p className="text-sm text-gray-600">{mockHotel.name}</p>
                  <p className="text-sm text-gray-600">{mockHotel.location}</p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Estadía</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>15 Dic - 22 Dic 2024</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>
                      {guests} huéspedes • {nights} noches
                    </span>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Habitación</h4>
                  <p className="text-sm text-gray-600">{mockHotel.roomType}</p>
                  {mockHotel.breakfast && <p className="text-sm text-blue-600">Desayuno incluido</p>}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">
                      €{mockHotel.price} x {nights} noches
                    </span>
                    <span className="text-sm">€{mockHotel.price * nights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Tasas e impuestos</span>
                    <span className="text-sm">€45</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-purple-600">€{mockHotel.price * nights + 45}</span>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">{mockHotel.cancellation}</p>
                  <p className="text-xs text-green-600">Hasta 24 horas antes del check-in</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
