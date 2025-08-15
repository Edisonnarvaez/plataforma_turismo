"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MapPin, Users, Plane, Building, Package } from "lucide-react"
import Link from "next/link"

export function SearchTabs() {
  const [activeTab, setActiveTab] = useState("flights")

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="flights" className="flex items-center space-x-2">
              <Plane className="h-4 w-4" />
              <span className="hidden sm:inline">Vuelos</span>
            </TabsTrigger>
            <TabsTrigger value="hotels" className="flex items-center space-x-2">
              <Building className="h-4 w-4" />
              <span className="hidden sm:inline">Hoteles</span>
            </TabsTrigger>
            <TabsTrigger value="packages" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Paquetes</span>
            </TabsTrigger>
            <TabsTrigger value="cars" className="flex items-center space-x-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden sm:inline">Seguros médicos</span>
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center space-x-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="hidden sm:inline">Actividades</span>
            </TabsTrigger>
            
          </TabsList>

          <TabsContent value="flights">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origen</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="origin" placeholder="¿Desde dónde?" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destino</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="destination" placeholder="¿A dónde?" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="departure">Salida</Label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="departure" type="date" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="return">Regreso</Label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="return" type="date" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passengers">Pasajeros</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="passengers" placeholder="1 adulto" className="pl-10" />
                  </div>
                </div>
              </div>
              <Link href="/flights">
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 text-lg transition-all duration-200 hover:scale-105">
                  Buscar Vuelos
                </Button>
              </Link>
            </Card>
          </TabsContent>

          <TabsContent value="hotels">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hotel-destination">Destino</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="hotel-destination" placeholder="Ciudad o hotel" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkin">Check-in</Label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="checkin" type="date" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout">Check-out</Label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="checkout" type="date" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hotel-guests">Huéspedes</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="hotel-guests" placeholder="2 huéspedes" className="pl-10" />
                  </div>
                </div>
              </div>
              <Link href="/hotels">
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 text-lg transition-all duration-200 hover:scale-105">
                  Buscar Hoteles
                </Button>
              </Link>
            </Card>
          </TabsContent>

          <TabsContent value="packages">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="package-origin">Origen</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="package-origin" placeholder="¿Desde dónde?" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="package-destination">Destino</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="package-destination" placeholder="¿A dónde?" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="package-departure">Salida</Label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="package-departure" type="date" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="package-passengers">Pasajeros</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="package-passengers" placeholder="2 pasajeros" className="pl-10" />
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 text-lg transition-all duration-200 hover:scale-105">
                Buscar Paquetes
              </Button>
            </Card>
          </TabsContent>

          {/* Placeholder content for other tabs */}
          <TabsContent value="cars">
            <Card className="p-6 text-center">
              <p className="text-gray-600">Búsqueda de seguros médicos próximamente...</p>
            </Card>
          </TabsContent>

          <TabsContent value="activities">
            <Card className="p-6 text-center">
              <p className="text-gray-600">Búsqueda de actividades próximamente...</p>
            </Card>
          </TabsContent>

          
        </Tabs>
      </div>
    </section>
  )
}
