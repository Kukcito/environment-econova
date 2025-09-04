import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, CreditCard, Award, Users, TrendingDown } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Cumplimiento normativo",
      description: "Reducción de riesgos y evita sanciones y detenciones de obra/proyecto",
      highlight: "Protección legal",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
    },
    {
      icon: CreditCard,
      title: "Créditos verdes",
      description: "Acceso a mejores tasas y plazos presentando programa/reporte sólido ante banca y fondos",
      highlight: "Mejores condiciones",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Award,
      title: "Beneficios fiscales",
      description: "Altas deducciones aplicables según legislación vigente y tipo de proyecto",
      highlight: "Incentivos económicos",
      gradient: "from-yellow-500 to-amber-500",
      bgGradient: "from-yellow-50 to-amber-50",
    },
    {
      icon: Users,
      title: "Reputación y licencia social",
      description: "Licencia social para operar con estabilidad y mejor imagen corporativa",
      highlight: "Confianza stakeholders",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: TrendingDown,
      title: "Eficiencias operativas",
      description: "Ahorro por gestión optimizada de agua, energía y residuos",
      highlight: "Reducción de costos",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-green-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-transparent rounded-full blur-3xl"></div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 px-4 py-2"
          >
            Beneficios
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Beneficios e incentivos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Valor tangible que genera impacto positivo en tu organización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${benefit.bgGradient} border-0 shadow-lg`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs bg-gradient-to-r ${benefit.gradient} text-white border-0`}
                  >
                    {benefit.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed text-gray-600">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-0 shadow-xl backdrop-blur-sm">
          <CardContent className="pt-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Nota importante
              </h3>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
                La aplicación concreta de créditos y deducciones depende del tipo de proyecto y de la normativa vigente
                en la jurisdicción correspondiente;{" "}
                <strong className="text-green-600">
                  ECONOVA te guía en la evaluación previa y en el sustento técnico requerido.
                </strong>
              </p>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Solicitar evaluación gratuita
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
