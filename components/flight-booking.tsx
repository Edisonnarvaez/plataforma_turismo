"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Plane, Users, Wifi, Coffee, Luggage, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock flight data (would come from API based on flightId)
const mockFlight = {
  id: 1,
  airline: "Avianca",
  logo: "/avianca-logo.png",
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
  stops: 0,
  price: 899,
  class: "Económica",
  amenities: ["wifi", "meals", "entertainment"],
  baggage: "23kg incluido",
  rating: 4.2,
  aircraft: "Boeing 787-8",
  flightNumber: "AV1234",
}

interface PassengerData {
  firstName: string
  lastName: string
  email: string
  phone: string
  documentType: string
  documentNumber: string
  birthDate: string
  nationality: string
}

export function FlightBooking({ flightId }: { flightId: string }) {
  const [step, setStep] = useState(1)
  const [passengers, setPassengers] = useState<PassengerData[]>([
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      documentType: "passport",
      documentNumber: "",
      birthDate: "",
      nationality: "",
    },
  ])

  const updatePassenger = (index: number, field: keyof PassengerData, value: string) => {
    const updatedPassengers = [...passengers]
    updatedPassengers[index] = { ...updatedPassengers[index], [field]: value }
    setPassengers(updatedPassengers)
  }

  const addPassenger = () => {
    setPassengers([
      ...passengers,
      {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        documentType: "passport",
        documentNumber: "",
        birthDate: "",
        nationality: "",
      },
    ])
  }

  const removePassenger = (index: number) => {
    if (passengers.length > 1) {
      setPassengers(passengers.filter((_, i) => i !== index))
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/flights" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a resultados</span>
        </Link>
        <h1 className="text-3xl font-black text-gray-800 mb-2">Reservar Vuelo</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className={`px-3 py-1 rounded-full ${step >= 1 ? "bg-purple-100 text-purple-700" : "bg-gray-100"}`}>
            1. Detalles del vuelo
          </span>
          <span className={`px-3 py-1 rounded-full ${step >= 2 ? "bg-purple-100 text-purple-700" : "bg-gray-100"}`}>
            2. Información de pasajeros
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
                <CardTitle>Detalles del Vuelo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 mb-6">
                  <img
                    src={mockFlight.logo || "/placeholder.svg"}
                    alt={mockFlight.airline}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{mockFlight.airline}</h3>
                    <p className="text-gray-600">
                      Vuelo {mockFlight.flightNumber} • {mockFlight.aircraft}
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{mockFlight.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{mockFlight.departure.time}</p>
                    <p className="text-sm text-gray-600">{mockFlight.departure.airport}</p>
                    <p className="text-xs text-gray-500">{mockFlight.departure.city}</p>
                    <p className="text-xs text-gray-500">{mockFlight.departure.date}</p>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="h-px bg-gray-300 flex-1"></div>
                      <Plane className="h-5 w-5 text-gray-400" />
                      <div className="h-px bg-gray-300 flex-1"></div>
                    </div>
                    <p className="text-sm text-gray-600">{mockFlight.duration}</p>
                    <Badge variant="secondary" className="text-xs">
                      Directo
                    </Badge>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold">{mockFlight.arrival.time}</p>
                    <p className="text-sm text-gray-600">{mockFlight.arrival.airport}</p>
                    <p className="text-xs text-gray-500">{mockFlight.arrival.city}</p>
                    <p className="text-xs text-gray-500">{mockFlight.arrival.date}</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <Wifi className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-sm">WiFi gratuito</p>
                  </div>
                  <div className="text-center">
                    <Coffee className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-sm">Comidas incluidas</p>
                  </div>
                  <div className="text-center">
                    <Luggage className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-sm">{mockFlight.baggage}</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-sm">Clase {mockFlight.class}</p>
                  </div>
                </div>

                <Button onClick={() => setStep(2)} className="w-full bg-purple-600 hover:bg-purple-700">
                  Continuar con información de pasajeros
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Información de Pasajeros</CardTitle>
              </CardHeader>
              <CardContent>
                {passengers.map((passenger, index) => (
                  <div key={index} className="mb-8 p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">Pasajero {index + 1}</h4>
                      {passengers.length > 1 && (
                        <Button variant="outline" size="sm" onClick={() => removePassenger(index)}>
                          Eliminar
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`firstName-${index}`}>Nombre</Label>
                        <Input
                          id={`firstName-${index}`}
                          value={passenger.firstName}
                          onChange={(e) => updatePassenger(index, "firstName", e.target.value)}
                          placeholder="Nombre"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`lastName-${index}`}>Apellido</Label>
                        <Input
                          id={`lastName-${index}`}
                          value={passenger.lastName}
                          onChange={(e) => updatePassenger(index, "lastName", e.target.value)}
                          placeholder="Apellido"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`email-${index}`}>Email</Label>
                        <Input
                          id={`email-${index}`}
                          type="email"
                          value={passenger.email}
                          onChange={(e) => updatePassenger(index, "email", e.target.value)}
                          placeholder="email@ejemplo.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`phone-${index}`}>Teléfono</Label>
                        <Input
                          id={`phone-${index}`}
                          value={passenger.phone}
                          onChange={(e) => updatePassenger(index, "phone", e.target.value)}
                          placeholder="+57 300 123 4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`documentType-${index}`}>Tipo de documento</Label>
                        <Select
                          value={passenger.documentType}
                          onValueChange={(value) => updatePassenger(index, "documentType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="passport">Pasaporte</SelectItem>
                            <SelectItem value="id">Cédula</SelectItem>
                            <SelectItem value="license">Licencia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor={`documentNumber-${index}`}>Número de documento</Label>
                        <Input
                          id={`documentNumber-${index}`}
                          value={passenger.documentNumber}
                          onChange={(e) => updatePassenger(index, "documentNumber", e.target.value)}
                          placeholder="123456789"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`birthDate-${index}`}>Fecha de nacimiento</Label>
                        <Input
                          id={`birthDate-${index}`}
                          type="date"
                          value={passenger.birthDate}
                          onChange={(e) => updatePassenger(index, "birthDate", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`nationality-${index}`}>Nacionalidad</Label>
                        <Input
                          id={`nationality-${index}`}
                          value={passenger.nationality}
                          onChange={(e) => updatePassenger(index, "nationality", e.target.value)}
                          placeholder="Colombiana"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between items-center">
                  <Button variant="outline" onClick={addPassenger}>
                    Agregar pasajero
                  </Button>
                  <div className="space-x-4">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Atrás
                    </Button>
                    <Link href="/checkout">
                      <Button className="bg-purple-600 hover:bg-purple-700">Continuar al pago</Button>
                    </Link>
                  </div>
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
                  <h4 className="font-semibold mb-2">Vuelo</h4>
                  <p className="text-sm text-gray-600">
                    {mockFlight.departure.city} → {mockFlight.arrival.city}
                  </p>
                  <p className="text-sm text-gray-600">{mockFlight.departure.date}</p>
                  <p className="text-sm text-gray-600">
                    {mockFlight.airline} • {mockFlight.class}
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Pasajeros</h4>
                  <p className="text-sm text-gray-600">
                    {passengers.length} adulto{passengers.length > 1 ? "s" : ""}
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Vuelo ({passengers.length}x)</span>
                    <span className="text-sm">${mockFlight.price * passengers.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Tasas e impuestos</span>
                    <span className="text-sm">$89</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-purple-600">${mockFlight.price * passengers.length + 89}</span>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">Cancelación gratuita</p>
                  <p className="text-xs text-green-600">Hasta 24 horas antes del vuelo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
