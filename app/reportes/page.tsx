import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Building2, Landmark, TrendingUp, Shield, Users, Leaf, FileText } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ReportesPage() {
  const useCases = [
    {
      icon: Building2,
      title: "Presentación a banca y fondos",
      description: "Para créditos verdes con mejores tasas y plazos",
    },
    {
      icon: Landmark,
      title: "Sustento para incentivos fiscales",
      description: "Beneficios fiscales aplicables según legislación",
    },
    {
      icon: Users,
      title: "Transparencia con stakeholders",
      description: "Inversionistas, autoridades y grupos de interés",
    },
  ]

  const dimensions = [
    {
      icon: Users,
      title: "Dimensión social",
      description: "Relación comunitaria, capital humano, certificaciones de responsabilidad social",
    },
    {
      icon: TrendingUp,
      title: "Dimensión económica",
      description: "Salud financiera, presupuestos sostenibles, inversiones ambientales",
    },
    {
      icon: Leaf,
      title: "Dimensión ambiental",
      description: "Políticas, gestión de riesgos, energía, agua, residuos, tecnologías limpias",
    },
    {
      icon: Shield,
      title: "Gobernanza",
      description: "Políticas, controles, cumplimiento y evidencia documental",
    },
  ]

  const deliverables = [
    "Evaluación con hallazgos, brechas y oportunidades",
    "Reporte completo para stakeholders financieros y regulatorios",
    "Resumen ejecutivo para alta dirección y comités",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Reportes ESG
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Reportes de sostenibilidad (ESG) y Radar 4
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
              Evaluación y reporte con metodologías internacionales y la metodología propia Radar 4 como diferencial.
              Útiles para banca, bolsa, fondos e incentivos públicos/privados.
            </p>
            <Button size="lg" className="text-lg px-8">
              Solicitar reporte ESG / Radar 4
            </Button>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">¿Para qué sirve?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <useCase.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Enfoque metodológico</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Versatilidad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Dominamos metodologías internacionales ampliamente utilizadas para adaptarnos a los requerimientos
                    específicos de cada entidad financiera o regulatoria.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Radar 4 (metodología propia)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Visión integral con énfasis en gobernanza y vinculación institucional, agregando trazabilidad y
                    lectura ejecutiva accionable.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Evaluate */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Qué evaluamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dimensions.map((dimension, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <dimension.icon className="h-5 w-5 text-primary" />
                      </div>
                      {dimension.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{dimension.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Entregables</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deliverables.map((deliverable, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{deliverable}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Highlight */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Diferencial competitivo</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Nuestros reportes no solo cumplen con estándares internacionales, sino que agregan valor estratégico
                    con análisis de gobernanza y recomendaciones accionables.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary">Metodologías internacionales</Badge>
                    <Badge variant="secondary">Radar 4 propio</Badge>
                    <Badge variant="secondary">Enfoque en gobernanza</Badge>
                    <Badge variant="secondary">Evidencia documental</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Necesitas un reporte ESG que abra puertas?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nuestros reportes están diseñados para convencer a bancos, fondos y autoridades con rigor técnico y
              evidencia sólida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Solicitar reporte ESG</Button>
              <Button variant="outline" size="lg">
                Ver ejemplos de reportes
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
