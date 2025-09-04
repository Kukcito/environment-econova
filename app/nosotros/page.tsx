import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, BookOpen, Microscope, Leaf, Shield, BarChart3, Play } from "lucide-react"
import { Footer } from "@/components/footer"

export default function NosotrosPage() {
  const differentiators = [
    {
      icon: Users,
      title: "Especialistas por disciplina",
      description: "Biólogos, ingenieros ambientales, ingenieros forestales y consultores con experiencia de campo",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Award,
      title: "Versatilidad metodológica",
      description: "Adaptamos el reporte a lo que exige cada ente financiero/regulatorio específico",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Enfoque en gobernanza",
      description: "Evidencia documental que convence a auditorías, bancos y fondos de inversión",
      color: "from-purple-400 to-indigo-600",
    },
    {
      icon: Target,
      title: "Entrega ejecutiva",
      description: "Claridad, trazabilidad y accionabilidad en cada informe y recomendación",
      color: "from-orange-400 to-red-600",
    },
  ]

  const expertise = [
    {
      icon: Microscope,
      title: "Rigor técnico",
      description: "Metodologías científicas y normativas actualizadas",
      color: "from-teal-400 to-green-600",
    },
    {
      icon: BookOpen,
      title: "Vinculación académica",
      description: "Mantenemos actualización constante en un campo en rápida evolución",
      color: "from-blue-400 to-purple-600",
    },
    {
      icon: BarChart3,
      title: "Lenguaje de cumplimiento",
      description: "Comunicación efectiva con autoridades y entidades financieras",
      color: "from-emerald-400 to-teal-600",
    },
  ]

  const blogPosts = [
    {
      title: "Guía rápida: ¿Qué evalúa una MIA y cuándo la necesito?",
      description: "Todo lo que necesitas saber sobre Manifestaciones de Impacto Ambiental",
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Créditos verdes: cómo presentarte ante la banca con ventaja",
      description: "Estrategias para acceder a financiamiento sostenible",
      color: "from-blue-400 to-cyan-600",
    },
    {
      title: "Economía circular en 90 días: hoja de ruta mínima viable",
      description: "Implementación práctica de programas de economía circular",
      color: "from-purple-400 to-indigo-600",
    },
    {
      title: "Gobernanza y sostenibilidad: políticas que sí funcionan",
      description: "Mejores prácticas en gobernanza corporativa sostenible",
      color: "from-orange-400 to-red-600",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-32 px-4 overflow-hidden">
          <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
            <source
              src="/placeholder.mp4?height=720&width=1280&query=professional sustainability team office meeting collaboration"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-emerald-600/85 to-teal-600/90"></div>
          <div className="relative container max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Sobre ENVIRONMENTAL ECONOVA
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">Sobre Econova</h1>
            <p className="text-xl max-w-3xl mx-auto text-balance mb-8 text-white/90">
              Somos un equipo técnico de consultores, biólogos e ingenieros especializados en normatividad ambiental,
              sostenibilidad corporativa y reporte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-white/90">
                Conocer al equipo
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Play className="mr-2 h-4 w-4" />
                Ver video corporativo
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Nuestra misión
                </Badge>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Convertimos sostenibilidad en competitividad
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Trabajamos con rigurosidad metodológica y lenguaje de cumplimiento, alineados a las mejores prácticas
                  y en vinculación académica para mantenernos al día en un campo en rápida evolución.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Convertimos el medio ambiente y la seguridad en motor de competitividad real, protegiendo vidas y
                  agregando valor a las organizaciones.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/professional-environmental-consulting-team-working.jpg"
                  alt="Equipo Environmental ECONOVA trabajando"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {expertise.map((item, index) => (
                    <Card
                      key={index}
                      className="text-center group hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <CardContent className="pt-6">
                        <div className="flex justify-center mb-3">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:shadow-xl transition-shadow`}
                          >
                            <item.icon className="h-6 w-6 text-white" />
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
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Diferenciadores
              </Badge>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Cómo nos diferenciamos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nuestra experiencia técnica y metodológica nos permite ofrecer soluciones integrales y resultados
                verificables
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((diff, index) => (
                <Card
                  key={index}
                  className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-0 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${diff.color}`}></div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${diff.color} shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        <diff.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-lg">{diff.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-base">{diff.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Recursos
              </Badge>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Blog / Recursos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conocimiento especializado y mejores prácticas en sostenibilidad empresarial
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-0 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${post.color}`}></div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed mb-6 text-base">{post.description}</CardDescription>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`bg-gradient-to-r ${post.color} text-white border-0 hover:shadow-lg transition-shadow`}
                    >
                      Leer más
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all"
              >
                Suscribirme a novedades
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-sustainability.jpg')] opacity-10"></div>
          <div className="relative container max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm shadow-2xl">
                <Leaf className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">¿Quieres conocer más sobre nuestro equipo?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Nuestro equipo multidisciplinario está listo para abordar los desafíos de sostenibilidad de tu
              organización con experiencia técnica y metodológica comprobada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all"
              >
                Conocer al equipo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all bg-transparent"
              >
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
