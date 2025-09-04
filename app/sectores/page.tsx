import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Hotel, Landmark, Users, FileText, BarChart3 } from "lucide-react"
import { Footer } from "@/components/footer"

export default function SectoresPage() {
  const sectors = [
    {
      icon: Landmark,
      title: "Gobierno",
      description: "Dependencias y entes públicos con enfoque en transparencia y cumplimiento normativo",
      services: [
        "Trámites y reportes técnicos para dependencias/entes públicos",
        "Reportes voluntarios de sostenibilidad y diagnósticos sectoriales",
        "Programas de formación y vinculación con comunidades",
      ],
      cta: "Hablar con asesor gubernamental",
    },
    {
      icon: Hotel,
      title: "Hotelería y turismo",
      description: "Desarrollos turísticos y cadenas hoteleras con enfoque en sostenibilidad operativa",
      services: [
        "Trámites para nuevos desarrollos o ampliaciones",
        "Programas de agua, residuos y energía, compras responsables",
        "Reportes para cadenas hoteleras y plataformas financieras",
      ],
      cta: "Asesoría para turismo",
    },
    {
      icon: Building2,
      title: "Industria y servicios",
      description: "PYME y gran empresa con necesidades de cumplimiento y eficiencia operativa",
      services: [
        "Cumplimiento ambiental y operativo",
        "Programas de eficiencia y economía circular",
        "Reportes para banca, fondos y clientes corporativos",
      ],
      cta: "Consultoría industrial",
    },
  ]

  const useCases = [
    {
      icon: FileText,
      title: "Cumplimiento normativo",
      description: "Evita sanciones y detenciones de obra/proyecto",
    },
    {
      icon: BarChart3,
      title: "Acceso a financiamiento",
      description: "Créditos verdes con mejores condiciones",
    },
    {
      icon: Users,
      title: "Reputación corporativa",
      description: "Licencia social para operar con estabilidad",
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
              Sectores Especializados
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Sectores y casos de uso</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
              Experiencia especializada en diferentes industrias con soluciones adaptadas a las necesidades específicas
              de cada sector.
            </p>
          </div>
        </section>

        {/* Sectors Detail */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros sectores de especialización</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {sectors.map((sector, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <sector.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{sector.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{sector.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Servicios especializados:</h4>
                      <ul className="space-y-2">
                        {sector.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full mt-auto bg-transparent">
                      {sector.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Casos de uso transversales</h2>
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Tu sector no está listado?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nuestra metodología se adapta a diferentes industrias. Conversemos sobre las necesidades específicas de tu
              organización.
            </p>
            <Button size="lg">Hablar con un asesor por sector</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
