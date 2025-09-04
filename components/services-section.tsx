import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, BarChart3 } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Trámites y permisos ambientales",
      subtitle: "MIA, ETJ, licencias y certificaciones como ISO",
      description:
        "Expedientes robustos y gestión end-to-end hasta resolución. Trabajo realizado por biólogos, ingenieros ambientales y forestales con experiencia comprobada.",
      cta: "Solicitar cotización de MIA/ETJ",
      image: "/environmental-permits-documents-legal-compliance.jpg",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Users,
      title: "Consultoría 360 en sostenibilidad",
      subtitle: "Diagnóstico, hoja de ruta y programas alineados a ODS",
      description:
        "Programas integrales en agua, energía, residuos, comunidad y gobernanza. Diagnóstico completo con línea base y brechas priorizadas para resultados medibles.",
      cta: "Agendar diagnóstico integral",
      image: "/sustainability-consulting-team-meeting-green-offic.jpg",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: BarChart3,
      title: "Reportes de sostenibilidad (ESG)",
      subtitle: "Evaluación y reporte bajo estándares internacionales",
      description:
        "Metodologías GRI, SASB/ISSB, TCFD, CDP y opcionalmente Radar 4 como diferencial. Documentación lista para banca, fondos e incentivos públicos/privados.",
      cta: "Pedir reporte ESG",
      image: "/esg-reports-sustainability-data-analytics-dashboar.jpg",
      gradient: "from-accent/20 to-accent/5",
    },
  ]

  return (
    <section id="servicios" className="py-24 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tres líneas de servicio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Convertimos medio ambiente y seguridad en motor de competitividad real con soluciones integrales y
            resultados verificables
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br ${service.gradient} backdrop-blur-sm overflow-hidden group`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-white/90 drop-shadow-lg">0{index + 1}</span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-balance leading-tight">{service.title}</CardTitle>
                <p className="text-primary font-semibold text-sm">{service.subtitle}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold py-3"
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
