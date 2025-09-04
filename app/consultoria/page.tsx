"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Droplets,
  Zap,
  Recycle,
  Users,
  TrendingUp,
  Shield,
  Building,
  CheckCircle,
  FileText,
  BarChart3,
} from "lucide-react"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ConsultoriaPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const dimensions = [
    {
      icon: Leaf,
      title: "Ambiental",
      description: "Agua, energía, residuos, biodiversidad, emisiones, huella de carbono",
      gradient: "from-green-400 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Users,
      title: "Social",
      description: "Relación comunitaria, talento y capacitación, seguridad y bienestar",
      gradient: "from-blue-400 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: TrendingUp,
      title: "Económica",
      description: "Eficiencia, presupuesto sostenible, retorno y riesgos",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: Shield,
      title: "Gobernanza",
      description: "Políticas, controles, trazabilidad y rendición de cuentas",
      gradient: "from-purple-400 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
    },
  ]

  const programs = [
    {
      icon: Recycle,
      title: "Economía circular",
      description: "Reducción, reutilización, valorización",
      gradient: "from-green-400 to-teal-500",
    },
    {
      icon: Droplets,
      title: "Gestión de agua",
      description: "Eficiencia, tratamiento y reúso",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Energía",
      description: "Eficiencia y transición a fuentes limpias",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Building,
      title: "Residuos",
      description: "Segregación, manejo integral y cumplimiento",
      gradient: "from-gray-400 to-slate-600",
    },
  ]

  const deliverables = [
    {
      icon: FileText,
      title: "Informe de diagnóstico y plan de implementación",
      gradient: "from-primary to-secondary",
    },
    {
      icon: CheckCircle,
      title: "Políticas, procedimientos y formatos de control",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: BarChart3,
      title: "Métricas e indicadores para auditoría interna/externa",
      gradient: "from-blue-500 to-cyan-600",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Video Background */}
        <section className="relative py-32 px-4 overflow-hidden">
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
                src="/placeholder.mp4?query=sustainability consulting team meeting green office environment"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-secondary/80"></div>
          </div>

          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Consultoría Sostenible
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-white drop-shadow-2xl">
              Consultoría 360° en Sostenibilidad
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-balance mb-8 drop-shadow-lg">
              Diagnóstico integral y hojas de ruta por dimensiones (ambiental, social, económica y gobernanza).
              Implementamos programas de economía circular, energía, agua, residuos, formación y vínculo comunitario.
            </p>
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-gradient-to-r from-white to-white/95 text-primary hover:from-white/95 hover:to-white hover:scale-105 transition-all duration-300 shadow-2xl font-semibold"
            >
              Agendar diagnóstico de sostenibilidad
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/sustainability-consulting-team-meeting-green-offic.jpg"
                alt="Equipo de consultoría en sostenibilidad"
                width={1200}
                height={600}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* 360 Approach */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Enfoque 360° (cuatro dimensiones)
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Abordamos la sostenibilidad desde todas las perspectivas para garantizar resultados integrales y duraderos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dimensions.map((dimension, index) => (
                <Card
                  key={index}
                  className={`text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br ${dimension.bgGradient} border-0`}
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${dimension.gradient} shadow-lg`}
                      >
                        <dimension.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">{dimension.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{dimension.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Qué hacemos
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg text-gray-800">Diagnóstico inicial</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Brecha entre estado actual y estándares de sostenibilidad
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-blue-50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg text-gray-800">Hoja de ruta por metas</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Hitos trimestrales/semestrales con indicadores medibles
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-green-50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg text-gray-800">Indicadores y tableros</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Seguimiento y mejora continua con métricas claras
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Programas especializados
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {programs.map((program, index) => (
                    <Card
                      key={index}
                      className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-gray-50"
                    >
                      <CardContent className="pt-6 pb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${program.gradient} shadow-md`}
                          >
                            <program.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{program.title}</h4>
                            <p className="text-xs text-gray-600">{program.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="space-y-4">
                  <Card className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-blue-50">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center shadow-md">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          Formación (cursos in company; cultura sostenible)
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-purple-50">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center shadow-md">
                          <Building className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          Vínculo comunitario (programas de entorno y proveedores locales)
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-gray-50">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Entregables
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Documentación completa y herramientas prácticas para implementar y mantener tu programa de sostenibilidad
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deliverables.map((deliverable, index) => (
                <Card
                  key={index}
                  className="text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${deliverable.gradient} shadow-lg`}
                      >
                        <deliverable.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">{deliverable.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ¿Listo para transformar tu sostenibilidad?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Iniciemos con un diagnóstico 360° para identificar oportunidades y diseñar tu hoja de ruta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 shadow-xl font-semibold"
              >
                Agendar diagnóstico
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 border-2 border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300 font-semibold bg-transparent"
              >
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
