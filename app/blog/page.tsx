import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Guía rápida: ¿Qué evalúa una MIA y cuándo la necesito?",
      description:
        "Todo lo que necesitas saber sobre Manifestaciones de Impacto Ambiental: cuándo son obligatorias, qué evalúan y cómo prepararte para el proceso.",
      category: "Trámites Ambientales",
      date: "15 Enero 2024",
      readTime: "8 min",
      featured: true,
    },
    {
      title: "Créditos verdes: cómo presentarte ante la banca con ventaja",
      description:
        "Estrategias comprobadas para acceder a financiamiento sostenible con mejores condiciones y tasas preferenciales.",
      category: "Financiamiento",
      date: "10 Enero 2024",
      readTime: "12 min",
      featured: true,
    },
    {
      title: "Economía circular en 90 días: hoja de ruta mínima viable",
      description:
        "Implementación práctica de programas de economía circular con resultados medibles en menos de 3 meses.",
      category: "Sostenibilidad",
      date: "5 Enero 2024",
      readTime: "10 min",
      featured: false,
    },
    {
      title: "Gobernanza y sostenibilidad: políticas que sí funcionan",
      description: "Mejores prácticas en gobernanza corporativa sostenible basadas en casos de éxito reales.",
      category: "Gobernanza",
      date: "28 Diciembre 2023",
      readTime: "15 min",
      featured: false,
    },
    {
      title: "Reportes ESG: errores comunes que debes evitar",
      description:
        "Los 10 errores más frecuentes en reportes de sostenibilidad y cómo evitarlos para maximizar tu impacto.",
      category: "Reportes ESG",
      date: "20 Diciembre 2023",
      readTime: "7 min",
      featured: false,
    },
    {
      title: "Beneficios fiscales ambientales: guía 2024",
      description:
        "Actualización completa de incentivos fiscales disponibles para proyectos de sostenibilidad en México.",
      category: "Incentivos",
      date: "15 Diciembre 2023",
      readTime: "20 min",
      featured: false,
    },
  ]

  const categories = ["Todos", "Trámites Ambientales", "Sostenibilidad", "Reportes ESG", "Financiamiento", "Gobernanza"]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Blog y Recursos
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Blog / Recursos</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
              Conocimiento especializado y mejores prácticas en sostenibilidad empresarial, cumplimiento ambiental y
              reportes ESG.
            </p>
            <Button>Suscribirme a novedades</Button>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 border-b">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "" : "bg-transparent"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Artículos destacados</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                          <Clock className="h-4 w-4 ml-2" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed mb-4">{post.description}</CardDescription>
                      <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary">
                        Leer artículo
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-8">Todos los artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed mb-4">{post.description}</CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Mantente actualizado</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Recibe las últimas novedades en sostenibilidad, normatividad ambiental y mejores prácticas directamente en
              tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button>Suscribirme</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
