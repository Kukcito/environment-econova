"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, CheckCircle, MapPin, Play, Leaf, Shield, Award } from "lucide-react"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function TramitesPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const permits = [
    {
      title: "MIA — Manifestación de Impacto Ambiental",
      description:
        "Análisis del impacto del proyecto sobre el entorno; integra estudio, medidas de prevención/mitigación y expediente ante la autoridad.",
      icon: Leaf,
      image: "/environmental-impact-assessment-field-work-biolog.jpg",
    },
    {
      title: "ETJ — Estudio Técnico Justificativo",
      description:
        "Justificación técnica (por ejemplo, respecto a zonas arboladas, cuerpos de agua u otras condicionantes técnicas) para autorizar obras/intervenciones.",
      icon: Shield,
      image: "/forest-conservation-technical-study-field-resea.jpg",
    },
    {
      title: "Permisos complementarios",
      description:
        "Permisos, licencias y autorizaciones complementarias (federales, estatales o municipales) según el tipo de proyecto.",
      icon: Award,
      image: "/environmental-permits-office-team-reviewing-docum.jpg",
    },
  ]

  const deliverables = [
    { text: "Estudio/expediente con anexos técnicos", icon: FileText },
    { text: "Plan de medidas y compromisos de manejo", icon: CheckCircle },
    { text: "Bitácora y evidencias de cumplimiento", icon: Users },
  ]

  const process = [
    {
      icon: MapPin,
      title: "Levantamiento in situ",
      description: "Análisis de antecedentes y evaluación del sitio",
    },
    {
      icon: FileText,
      title: "Modelación y estudios",
      description: "Muestreos y cartografía cuando aplique",
    },
    {
      icon: Users,
      title: "Integración del expediente",
      description: "Presentación ante autoridades competentes",
    },
    {
      icon: CheckCircle,
      title: "Seguimiento completo",
      description: "Atención de prevenciones hasta resolución",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
              <source
                src="/placeholder.mp4?query=environmental permits documentation legal paperwork office"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80"></div>
          </div>

          <div className="container max-w-4xl mx-auto text-center relative z-10 px-4">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 animate-fade-in">
              Trámites Ambientales
            </Badge>
            <h1
              className="text-4xl md:text-6xl font-bold text-balance mb-6 text-white animate-slide-up"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              Trámites y permisos ambientales
            </h1>
            <p
              className="text-xl text-white/90 max-w-3xl mx-auto text-balance mb-8 animate-slide-up"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              Gestionamos, integramos y presentamos ante autoridad tus MIA, ETJ y permisos ambientales. Trabajo
              realizado por biólogos, ingenieros ambientales y forestales con experiencia.
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl animate-slide-up"
            >
              <Play className="w-5 h-5 mr-2" />
              Solicitar cotización de MIA / ETJ
            </Button>
          </div>

          <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-secondary/10">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Qué tramitamos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {permits.map((permit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-gradient-to-br from-card via-card/90 to-primary/5 border-primary/20 animate-fade-in overflow-hidden group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={permit.image || "/placeholder.svg"}
                      alt={permit.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <permit.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {permit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{permit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 p-6 bg-gradient-to-r from-muted/50 via-primary/5 to-secondary/10 rounded-lg border border-primary/20 animate-fade-in">
              <p className="text-center text-muted-foreground">
                <strong className="text-primary">No publicamos precios fijos:</strong> cada trámite depende del alcance
                (tamaño del proyecto, ubicación, condicionantes ambientales). Cotizamos tras levantamiento técnico.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nuestro alcance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl hover:scale-105 transition-all duration-500 bg-gradient-to-b from-card to-card/80 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2 text-primary">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 via-primary/5 to-background">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative z-10">
                  Equipo especializado
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  Biólogos, ingenieros ambientales, ingenieros forestales y consultores con experiencia normativa,
                  metodológica y de campo.
                </p>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 relative z-10">
                  Conocer al equipo
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl"></div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent relative z-10">
                  Entregables
                </h2>
                <div className="space-y-4 relative z-10">
                  {deliverables.map((deliverable, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-card/50 to-primary/5 hover:shadow-md transition-all duration-300"
                    >
                      <div className="p-1 bg-gradient-to-br from-primary to-secondary rounded-full">
                        <deliverable.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">{deliverable.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ¿Listo para iniciar tu trámite ambiental?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cuéntanos tu proyecto y prepararemos una propuesta técnica con entregables, tiempos y rangos de costo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Solicitar cotización
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 bg-transparent"
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
