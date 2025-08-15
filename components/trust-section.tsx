import { Shield, Award, Users, Clock } from "lucide-react"

export function TrustSection() {
  const features = [
    {
      icon: Shield,
      title: "Pago Seguro",
      description: "Transacciones protegidas con encriptación SSL",
    },
    {
      icon: Award,
      title: "Mejor Precio",
      description: "Garantizamos el mejor precio o te devolvemos la diferencia",
    },
    {
      icon: Users,
      title: "2M+ Clientes",
      description: "Más de 2 millones de viajeros confían en nosotros",
    },
    {
      icon: Clock,
      title: "Soporte 24/7",
      description: "Atención al cliente disponible las 24 horas",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">¿Por Qué Elegir DreamVacation?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tu tranquilidad es nuestra prioridad. Viaja con confianza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
