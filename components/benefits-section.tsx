import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CreditCard, Award, Users, TrendingDown } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Cumplimiento normativo",
      description: "Reducción de riesgos y evita sanciones y detenciones de obra/proyecto",
      highlight: "Protección legal",
    },
    {
      icon: CreditCard,
      title: "Créditos verdes",
      description: "Acceso a mejores tasas y plazos presentando programa/reporte sólido ante banca y fondos",
      highlight: "Mejores condiciones",
    },
    {
      icon: Award,
      title: "Beneficios fiscales",
      description: "Altas deducciones aplicables según legislación vigente y tipo de proyecto",
      highlight: "Incentivos económicos",
    },
    {
      icon: Users,
      title: "Reputación y licencia social",
      description: "Licencia social para operar con estabilidad y mejor imagen corporativa",
      highlight: "Confianza stakeholders",
    },
    {
      icon: TrendingDown,
      title: "Eficiencias operativas",
      description: "Ahorro por gestión optimizada de agua, energía y residuos",
      highlight: "Reducción de costos",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Beneficios
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Beneficios e incentivos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Valor tangible que genera impacto positivo en tu organización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {benefit.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Nota importante</h3>
              <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                La aplicación concreta de créditos y deducciones depende del tipo de proyecto y de la normativa vigente
                en la jurisdicción correspondiente;{" "}
                <strong>ECONOVA te guía en la evaluación previa y en el sustento técnico requerido.</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
