import { Card, CardContent } from "@/components/ui/card"
import { Building2, TreePine, Landmark } from "lucide-react"

export function SectorsSection() {
  const sectors = [
    {
      icon: Building2,
      title: "Industria y manufactura",
      description: "Agua, energía, residuos, biodiversidad, emisiones, huella de carbono",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: TreePine,
      title: "Cadena de suministro",
      description: "Agua, energía, residuos, biodiversidad, emisiones, huella de carbono",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Landmark,
      title: "Gobierno",
      description: "Agua, energía, residuos, biodiversidad, emisiones, huella de carbono",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
    },
  ]

  return (
    <section id="sectores" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Sectores y contextos donde entregamos impacto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card
              key={index}
              className={`text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${sector.bgGradient} backdrop-blur-sm`}
            >
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${sector.gradient} shadow-lg transform hover:scale-110 transition-transform duration-300`}
                  >
                    <sector.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${sector.gradient} bg-clip-text text-transparent`}>
                  {sector.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{sector.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
