import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, BookOpen, Microscope, Leaf, Shield, BarChart3 } from "lucide-react"
import { Footer } from "@/components/footer"

export default function NosotrosPage() {
  const differentiators = [
    {
      icon: Users,
      title: "Especialistas por disciplina",
      description: "Biólogos, ingenieros ambientales, ingenieros forestales y consultores con experiencia de campo",
    },
    {
      icon: Award,
      title: "Versatilidad metodológica",
      description: "Adaptamos el reporte a lo que exige cada ente financiero/regulatorio específico",
    },
    {
      icon: Shield,
      title: "Enfoque en gobernanza",
      description: "Evidencia documental que convence a auditorías, bancos y fondos de inversión",
    },
    {
      icon: Target,
      title: "Entrega ejecutiva",
      description: "Claridad, trazabilidad y accionabilidad en cada informe y recomendación",
    },
  ]

  const expertise = [
    {
      icon: Microscope,
      title: "Rigor técnico",
      description: "Metodologías científicas y normativas actualizadas",
    },
    {
      icon: BookOpen,
      title: "Vinculación académica",
      description: "Mantenemos actualización constante en un campo en rápida evolución",
    },
    {
      icon: BarChart3,
      title: "Lenguaje de cumplimiento",
      description: "Comunicación efectiva con autoridades y entidades financieras",
    },
  ]

  const blogPosts = [
    {
      title: "Guía rápida: ¿Qué evalúa una MIA y cuándo la necesito?",
      description: "Todo lo que necesitas saber sobre Manifestaciones de Impacto Ambiental",
    },
    {
      title: "Créditos verdes: cómo presentarte ante la banca con ventaja",
      description: "Estrategias para acceder a financiamiento sostenible",
    },
    {
      title: "Economía circular en 90 días: hoja de ruta mínima viable",
      description: "Implementación práctica de programas de economía circular",
    },
    {
      title: "Gobernanza y sostenibilidad: políticas que sí funcionan",
      description: "Mejores prácticas en gobernanza corporativa sostenible",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Sobre ECONOVA
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Sobre Econova</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
              Somos un equipo técnico de consultores, biólogos e ingenieros especializados en normatividad ambiental,
              sostenibilidad corporativa y reporte.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Nuestra misión</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Trabajamos con rigurosidad metodológica y lenguaje de cumplimiento, alineados a las mejores prácticas
                  y en vinculación académica para mantenernos al día en un campo en rápida evolución.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Convertimos el medio ambiente y la seguridad en motor de competitividad real, protegiendo vidas y
                  agregando valor a las organizaciones.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {expertise.map((item, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Cómo nos diferenciamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((diff, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <diff.icon className="h-5 w-5 text-primary" />
                      </div>
                      {diff.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{diff.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog/Resources */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Blog / Recursos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conocimiento especializado y mejores prácticas en sostenibilidad empresarial
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed mb-4">{post.description}</CardDescription>
                    <Button variant="outline" size="sm">
                      Leer más
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button>Suscribirme a novedades</Button>
            </div>
          </div>
        </section>

        {/* Team CTA */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6">¿Quieres conocer más sobre nuestro equipo?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nuestro equipo multidisciplinario está listo para abordar los desafíos de sostenibilidad de tu
              organización con experiencia técnica y metodológica comprobada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Conocer al equipo</Button>
              <Button variant="outline" size="lg">
                Agendar reunión
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
