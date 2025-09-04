import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Target, Route, Settings, BarChart3 } from "lucide-react"

export function MethodologySection() {
  const framework = [
    {
      icon: Search,
      title: "Descubrimiento",
      description: "Entendimiento del negocio y normatividad aplicable",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Diagnóstico técnico",
      description: "Brechas y riesgos por dimensión de sostenibilidad",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Route,
      title: "Hoja de ruta",
      description: "Metas, cronograma, responsabilidades e indicadores",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Settings,
      title: "Implementación",
      description: "Equipos técnicos, formación y operación",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Medición y reporte",
      description: "Tableros, auditoría interna y documentación",
      gradient: "from-red-500 to-rose-500",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-green-100/20"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-green-200/30 to-transparent rounded-full blur-3xl"></div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-blue-500 to-green-500 text-white border-0 px-4 py-2"
          >
            Metodología
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Metodología y tecnología
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Nuestro marco de trabajo integrado con tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {framework.map((step, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-600 shadow-md">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Settings className="h-5 w-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Tecnología y datos
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription className="text-gray-600">
                • Herramientas digitales y analíticas para trazabilidad y control
              </CardDescription>
              <CardDescription className="text-gray-600">
                • Radar 4 para integrar gobernanza y vínculo institucional en la lectura de la sostenibilidad
              </CardDescription>
              <CardDescription className="text-gray-600">
                • Cultura de mejora continua y actualización normativa
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Diferenciadores clave
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription className="text-gray-600">
                • Especialistas por disciplina y experiencia de campo
              </CardDescription>
              <CardDescription className="text-gray-600">
                • Versatilidad metodológica para adaptar el reporte a cada ente financiero/regulatorio
              </CardDescription>
              <CardDescription className="text-gray-600">
                • Enfoque en gobernanza y evidencia documental que convence a auditorías, bancos y fondos
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white border-0 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Ver metodología completa
          </Button>
        </div>
      </div>
    </section>
  )
}
