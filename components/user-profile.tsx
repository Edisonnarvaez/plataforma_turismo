"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, Calendar, CreditCard, Bell, Shield, Camera } from "lucide-react"

// Mock user data
const mockUser = {
  id: 1,
  firstName: "Juan",
  lastName: "Pérez García",
  email: "juan.perez@email.com",
  phone: "+57 300 123 4567",
  birthDate: "1990-05-15",
  nationality: "Colombiana",
  avatar: "/user-avatar.png",
  memberSince: "2023",
  totalBookings: 12,
  loyaltyPoints: 2450,
  membershipLevel: "Gold",
}

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState(mockUser)

  const updateUserData = (field: string, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // Simulate API call to save user data
    console.log("Saving user data:", userData)
    setIsEditing(false)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-800">Mi Perfil</h1>
        <p className="text-gray-600">Gestiona tu información personal y preferencias</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="bookings">Reservas</TabsTrigger>
          <TabsTrigger value="payments">Pagos</TabsTrigger>
          <TabsTrigger value="settings">Configuración</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Summary */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.firstName} />
                    <AvatarFallback className="text-2xl">
                      {userData.firstName[0]}
                      {userData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="text-xl font-bold mb-1">
                  {userData.firstName} {userData.lastName}
                </h3>
                <p className="text-gray-600 mb-4">{userData.email}</p>
                <Badge className="mb-4 bg-yellow-100 text-yellow-800">Miembro {userData.membershipLevel}</Badge>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-purple-600">{userData.totalBookings}</p>
                    <p className="text-sm text-gray-600">Reservas</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">{userData.loyaltyPoints}</p>
                    <p className="text-sm text-gray-600">Puntos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Information */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Información Personal</CardTitle>
                    <Button variant="outline" onClick={() => (isEditing ? handleSave() : setIsEditing(true))}>
                      {isEditing ? "Guardar" : "Editar"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre</Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="firstName"
                          value={userData.firstName}
                          onChange={(e) => updateUserData("firstName", e.target.value)}
                          className="pl-10"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido</Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="lastName"
                          value={userData.lastName}
                          onChange={(e) => updateUserData("lastName", e.target.value)}
                          className="pl-10"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          value={userData.email}
                          onChange={(e) => updateUserData("email", e.target.value)}
                          className="pl-10"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <div className="relative mt-1">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          value={userData.phone}
                          onChange={(e) => updateUserData("phone", e.target.value)}
                          className="pl-10"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="birthDate">Fecha de Nacimiento</Label>
                      <div className="relative mt-1">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="birthDate"
                          type="date"
                          value={userData.birthDate}
                          onChange={(e) => updateUserData("birthDate", e.target.value)}
                          className="pl-10"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="nationality">Nacionalidad</Label>
                      <Select
                        value={userData.nationality}
                        onValueChange={(value) => updateUserData("nationality", value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Colombiana">Colombiana</SelectItem>
                          <SelectItem value="Mexicana">Mexicana</SelectItem>
                          <SelectItem value="Argentina">Argentina</SelectItem>
                          <SelectItem value="Peruana">Peruana</SelectItem>
                          <SelectItem value="Chilena">Chilena</SelectItem>
                          <SelectItem value="Española">Española</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex justify-end space-x-2 pt-4">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancelar
                      </Button>
                      <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
                        Guardar Cambios
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="bookings">
          <Card>
            <CardHeader>
              <CardTitle>Mis Reservas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center py-8">
                Aquí aparecerán tus reservas. Ve a la página de{" "}
                <a href="/my-bookings" className="text-purple-600 hover:underline">
                  Mis Reservas
                </a>{" "}
                para ver el historial completo.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pago</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-8 w-8 text-gray-400" />
                    <div>
                      <p className="font-medium">•••• •••• •••• 3456</p>
                      <p className="text-sm text-gray-600">Visa • Vence 12/26</p>
                    </div>
                  </div>
                  <Badge>Principal</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Agregar Método de Pago
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notificaciones</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Ofertas especiales</p>
                      <p className="text-sm text-gray-600">Recibe notificaciones sobre ofertas y descuentos</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Activado
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Recordatorios de viaje</p>
                      <p className="text-sm text-gray-600">Recordatorios sobre tus próximos viajes</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Activado
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Seguridad</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Cambiar Contraseña
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Configurar Autenticación de Dos Factores
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-red-600 hover:text-red-700 bg-transparent"
                  >
                    Eliminar Cuenta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
