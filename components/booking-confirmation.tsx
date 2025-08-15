"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Mail, Calendar, MapPin, Plane, Clock } from "lucide-react"
import Link from "next/link"

export function BookingConfirmation() {
  const bookingReference = "VJM-789456123"

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-black text-gray-800 mb-2">¡Reserva Confirmada!</h1>
        <p className="text-lg text-gray-600 mb-4">Tu vuelo ha sido reservado exitosamente</p>
        <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
          <span className="text-sm font-medium text-purple-700">Código de reserva:</span>
          <span className="text-sm font-bold text-purple-800">{bookingReference}</span>
        </div>
      </div>

      {/* Booking Details */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Detalles del Vuelo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold mb-1">08:30</p>
              <p className="text-sm text-gray-600">BOG</p>
              <p className="text-xs text-gray-500">Bogotá</p>
              <p className="text-xs text-gray-500">15 Dic 2024</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="h-px bg-gray-300 flex-1"></div>
                <Plane className="h-5 w-5 text-gray-400" />
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
              <p className="text-sm text-gray-600 mb-1">9h 15m</p>
              <Badge variant="secondary" className="text-xs">
                Directo
              </Badge>
              <p className="text-xs text-gray-500 mt-1">Avianca AV1234</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold mb-1">14:45</p>
              <p className="text-sm text-gray-600">MAD</p>
              <p className="text-xs text-gray-500">Madrid</p>
              <p className="text-xs text-gray-500">15 Dic 2024</p>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Información del Pasajero</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Nombre:</span> Juan Pérez García
                </p>
                <p>
                  <span className="font-medium">Email:</span> juan.perez@email.com
                </p>
                <p>
                  <span className="font-medium">Teléfono:</span> +57 300 123 4567
                </p>
                <p>
                  <span className="font-medium">Documento:</span> Pasaporte 123456789
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Detalles del Vuelo</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Aerolínea:</span> Avianca
                </p>
                <p>
                  <span className="font-medium">Clase:</span> Económica
                </p>
                <p>
                  <span className="font-medium">Equipaje:</span> 23kg incluido
                </p>
                <p>
                  <span className="font-medium">Asiento:</span> Por asignar
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Summary */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Resumen de Pago</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Vuelo (1 pasajero)</span>
              <span className="text-sm">$899</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Tasas e impuestos</span>
              <span className="text-sm">$89</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold">
              <span>Total Pagado</span>
              <span className="text-purple-600">$988</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700 font-medium">Pago procesado exitosamente</p>
            <p className="text-xs text-green-600">Tarjeta terminada en ****3456</p>
          </div>
        </CardContent>
      </Card>

      {/* Important Information */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Información Importante</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Check-in Online</p>
                <p className="text-xs text-gray-600">Disponible 24 horas antes del vuelo en avianca.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Llegada al Aeropuerto</p>
                <p className="text-xs text-gray-600">Vuelos internacionales: 3 horas antes</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Cancelación Gratuita</p>
                <p className="text-xs text-gray-600">Hasta 24 horas antes del vuelo sin costo</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
          <Download className="h-4 w-4" />
          <span>Descargar Boleto</span>
        </Button>
        <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
          <Mail className="h-4 w-4" />
          <span>Enviar por Email</span>
        </Button>
        <Link href="/">
          <Button className="bg-purple-600 hover:bg-purple-700">Volver al Inicio</Button>
        </Link>
      </div>

      {/* Email Confirmation Notice */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
        <p className="text-sm text-blue-700">
          <Mail className="h-4 w-4 inline mr-2" />
          Se ha enviado una confirmación detallada a tu email: <strong>juan.perez@email.com</strong>
        </p>
      </div>
    </div>
  )
}
