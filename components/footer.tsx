import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-black mb-4">DreamVacation</h3>
            <p className="text-gray-300 mb-4">
              Tu compañero de viajes de confianza. Descubre el mundo con las mejores ofertas y el mejor servicio.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vuelos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hoteles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Paquetes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Seguros médicos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Actividades
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Soporte</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Políticas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@DreamVacation.com.co</p>
              <p>📍 123 Travel Street, City</p>
              <p className="text-sm mt-4">
                Lun - Vie: 9:00 - 18:00
                <br />
                Sáb - Dom: 10:00 - 16:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DreamVacation. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
