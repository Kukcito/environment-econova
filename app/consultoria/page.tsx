import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplets, Zap, Recycle, Users, TrendingUp, Shield, Building } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ConsultoriaPage() {
  const dimensions = [
    {
      icon: Leaf,
      title: "Ambiental",
      description: "Agua, energía, residuos, biodiversidad, emisiones, huella de carbono",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Social",
      description: "Relación comunitaria, talento y capacitación, seguridad y bienestar",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Económica",
      description: "Eficiencia, presupuesto sostenible, retorno y riesgos",
      color: "text-orange-600",
    },
    {
      icon: Shield,
      title: "Gobernanza",
      description: "Políticas, controles, trazabilidad y rendición de cuentas",
      color: "text-purple-600",
    },
  ]

  const programs = [
    {
      icon: Recycle,
      title: "Economía circular",
      description: "Reducción, reutilización, valorización",
    },
    {
      icon: Droplets,
      title: "Gestión de agua",
      description: "Eficiencia, tratamiento y reúso",
    },
    {
      icon: Zap,
      title: "Energía",
      description: "Eficiencia y transición a fuentes limpias",
    },
    {
      icon: Building,
      title: "Residuos",
      description: "Segregación, manejo integral y cumplimiento",
    },
  ]

  const deliverables = [
    "Informe de diagnóstico y plan de implementación",
    "Políticas, procedimientos y formatos de control",
    "Métricas e indicadores para auditoría interna/externa",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Consultoría Sostenible
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Consultoría y programas de sostenibilidad
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
              Diagnóstico 360 y hojas de ruta por dimensiones (ambiental, social, económica y gobernanza). Implementamos
              programas de economía circular, energía, agua, residuos, formación y vínculo comunitario.
            </p>
            <Button size="lg" className="text-lg px-8">
              Agendar diagnóstico de sostenibilidad
            </Button>
          </div>
        </section>

        {/* 360 Approach */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Enfoque 360 (cuatro dimensiones)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dimensions.map((dimension, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <dimension.icon className={`h-6 w-6 ${dimension.color}`} />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{dimension.title}</h3>
                    <p className="text-sm text-muted-foreground">{dimension.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Qué hacemos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Diagnóstico inicial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Brecha entre estado actual y estándares de sostenibilidad</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Hoja de ruta por metas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Hitos trimestrales/semestrales con indicadores medibles</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Indicadores y tableros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Seguimiento y mejora continua con métricas claras</CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Programas especializados</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {programs.map((program, index) => (
                    <Card key={index}>
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                            <program.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{program.title}</h4>
                            <p className="text-xs text-muted-foreground">{program.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm">Formación (cursos in company; cultura sostenible)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-primary" />
                    <span className="text-sm">Vínculo comunitario (programas de entorno y proveedores locales)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 px-4">
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

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu sostenibilidad?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Iniciemos con un diagnóstico 360 para identificar oportunidades y diseñar tu hoja de ruta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Agendar diagnóstico</Button>
              <Button variant="outline" size="lg">
                Ver casos de éxito
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
