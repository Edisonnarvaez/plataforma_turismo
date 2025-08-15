"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Shield, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface PaymentData {
  cardNumber: string
  expiryDate: string
  cvv: string
  cardName: string
  billingAddress: string
  city: string
  postalCode: string
  country: string
}

export function CheckoutProcess() {
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    billingAddress: "",
    city: "",
    postalCode: "",
    country: "",
  })
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")

  const updatePaymentData = (field: keyof PaymentData, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }))
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    updatePaymentData("cardNumber", formatted)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/booking/flight/1"
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver</span>
        </Link>
        <h1 className="text-3xl font-black text-gray-800 mb-2">Finalizar Reserva</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Shield className="h-4 w-4 text-green-600" />
          <span>Conexión segura SSL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Form */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Método de Pago</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <Button
                  variant={paymentMethod === "card" ? "default" : "outline"}
                  onClick={() => setPaymentMethod("card")}
                  className="flex items-center space-x-2"
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Tarjeta</span>
                </Button>
                <Button
                  variant={paymentMethod === "paypal" ? "default" : "outline"}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  PayPal
                </Button>
                <Button
                  variant={paymentMethod === "bank" ? "default" : "outline"}
                  onClick={() => setPaymentMethod("bank")}
                >
                  Transferencia
                </Button>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Número de tarjeta</Label>
                    <Input
                      id="cardNumber"
                      value={paymentData.cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Fecha de vencimiento</Label>
                      <Input
                        id="expiryDate"
                        value={paymentData.expiryDate}
                        onChange={(e) => updatePaymentData("expiryDate", e.target.value)}
                        placeholder="MM/AA"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        value={paymentData.cvv}
                        onChange={(e) => updatePaymentData("cvv", e.target.value)}
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="cardName">Nombre en la tarjeta</Label>
                    <Input
                      id="cardName"
                      value={paymentData.cardName}
                      onChange={(e) => updatePaymentData("cardName", e.target.value)}
                      placeholder="Juan Pérez"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Serás redirigido a PayPal para completar el pago</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">Continuar con PayPal</Button>
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Recibirás las instrucciones de transferencia por email</p>
                  <p className="text-sm text-gray-500">El pago debe completarse en 24 horas</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dirección de Facturación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="billingAddress">Dirección</Label>
                  <Input
                    id="billingAddress"
                    value={paymentData.billingAddress}
                    onChange={(e) => updatePaymentData("billingAddress", e.target.value)}
                    placeholder="Calle 123 #45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="city">Ciudad</Label>
                  <Input
                    id="city"
                    value={paymentData.city}
                    onChange={(e) => updatePaymentData("city", e.target.value)}
                    placeholder="Bogotá"
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Código postal</Label>
                  <Input
                    id="postalCode"
                    value={paymentData.postalCode}
                    onChange={(e) => updatePaymentData("postalCode", e.target.value)}
                    placeholder="110111"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="country">País</Label>
                  <Select value={paymentData.country} onValueChange={(value) => updatePaymentData("country", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="co">Colombia</SelectItem>
                      <SelectItem value="mx">México</SelectItem>
                      <SelectItem value="ar">Argentina</SelectItem>
                      <SelectItem value="pe">Perú</SelectItem>
                      <SelectItem value="cl">Chile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm">
                Acepto los{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  términos y condiciones
                </a>{" "}
                y la{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  política de privacidad
                </a>
              </Label>
            </div>

            <Link href="/confirmation">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 py-3 text-lg" disabled={!acceptTerms}>
                <Lock className="h-5 w-5 mr-2" />
                Confirmar y Pagar $988
              </Button>
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Vuelo</h4>
                  <p className="text-sm text-gray-600">Bogotá → Madrid</p>
                  <p className="text-sm text-gray-600">15 Dic 2024</p>
                  <p className="text-sm text-gray-600">Avianca • Económica</p>
                  <p className="text-sm text-gray-600">1 pasajero</p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Vuelo</span>
                    <span className="text-sm">$899</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Tasas e impuestos</span>
                    <span className="text-sm">$89</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-purple-600">$988</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">Pago seguro</span>
                  </div>
                  <p className="text-xs text-blue-600">
                    Tu información está protegida con encriptación SSL de 256 bits
                  </p>
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
