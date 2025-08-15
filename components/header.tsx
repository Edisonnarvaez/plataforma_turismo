"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Menu, Globe, LogOut, Settings, Calendar, CreditCard } from "lucide-react"
import Link from "next/link"

export function Header() {
  // Simulate authentication state - in real app would come from context/state management
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user] = useState({
    name: "Juan Pérez",
    email: "juan.perez@email.com",
    avatar: "/user-avatar.png",
  })

  const handleLogout = () => {
    setIsAuthenticated(false)
    // In real app would clear auth tokens and redirect
    window.location.href = "/"
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-black text-gray-800 cursor-pointer">DreamVacation</h1>
              </Link>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/flights" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Vuelos
            </Link>
            <Link href="/hotels" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Hoteles
            </Link>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Paquetes
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Seguros médicos
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Actividades
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>ES</span>
            </Button>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline text-sm font-medium">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-600">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Mi Perfil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/my-bookings" className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Mis Reservas</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile?tab=payments" className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Métodos de Pago</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile?tab=settings" className="flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Configuración</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Cerrar Sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Iniciar Sesión</span>
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Registrarse
                  </Button>
                </Link>
              </div>
            )}

            <Button className="md:hidden" variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
