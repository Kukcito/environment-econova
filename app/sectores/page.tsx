import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Hotel, Landmark, Users, FileText, BarChart3, CheckCircle, TrendingUp, Shield } from "lucide-react"
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
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
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
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
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
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
  ]

  const useCases = [
    {
      icon: FileText,
      title: "Cumplimiento normativo",
      description: "Evita sanciones y detenciones de obra/proyecto",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: BarChart3,
      title: "Acceso a financiamiento",
      description: "Créditos verdes con mejores condiciones",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Reputación corporativa",
      description: "Licencia social para operar con estabilidad",
      gradient: "from-blue-500 to-indigo-500",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-32 px-4 overflow-hidden">
          <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
            <source
              src="/placeholder.mp4?height=720&width=1280&query=business sectors sustainability consulting office meeting"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-econova-green via-econova-green/90 to-econova-blue/90" />
          <div className="relative container max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Sectores Especializados
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">Sectores y casos de uso</h1>
            <p className="text-xl max-w-3xl mx-auto text-balance mb-8 text-white/90">
              Experiencia especializada en diferentes industrias con soluciones adaptadas a las necesidades específicas
              de cada sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-econova-green hover:bg-white/90 font-semibold">
                Hablar con asesor por sector
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Ver casos de éxito
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-econova-green to-econova-blue bg-clip-text text-transparent">
                Nuestros sectores de especialización
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluciones integrales adaptadas a las necesidades específicas de cada industria
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {sectors.map((sector, index) => (
                <Card
                  key={index}
                  className={`h-full ${sector.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${sector.gradient} shadow-lg`}
                      >
                        <sector.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">{sector.title}</CardTitle>
                    <CardDescription className="leading-relaxed text-gray-600 text-base">
                      {sector.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-4 text-gray-800 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Servicios especializados:
                      </h4>
                      <ul className="space-y-3">
                        {sector.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-gray-700 flex items-start gap-3">
                            <span
                              className={`w-2 h-2 bg-gradient-to-r ${sector.gradient} rounded-full mt-2 flex-shrink-0`}
                            />
                            <span className="text-sm leading-relaxed">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      className={`w-full bg-gradient-to-r ${sector.gradient} hover:opacity-90 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      {sector.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-econova-green to-econova-blue bg-clip-text text-transparent">
                  Experiencia comprobada en múltiples sectores
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Más de 500 proyectos exitosos en diferentes industrias nos respaldan. Nuestro enfoque sectorial nos
                  permite entender las particularidades de cada negocio y ofrecer soluciones precisas.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="text-3xl font-bold text-econova-green mb-2">500+</div>
                    <div className="text-sm text-gray-600">Proyectos completados</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="text-3xl font-bold text-econova-blue mb-2">15+</div>
                    <div className="text-sm text-gray-600">Años de experiencia</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/diverse-business-sectors-sustainability-consulting.jpg"
                  alt="Sectores empresariales"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-econova-green to-econova-blue p-6 rounded-xl shadow-xl">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-gray-50 via-blue-50 to-green-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-econova-green to-econova-blue bg-clip-text text-transparent">
                Casos de uso transversales
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Beneficios que aplican a todos los sectores y organizaciones
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card
                  key={index}
                  className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${useCase.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <useCase.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold mb-4 text-xl text-gray-800">{useCase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-econova-green to-econova-blue">
          <div className="container max-w-4xl mx-auto text-center text-white">
            <Shield className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-4xl font-bold mb-6">¿Tu sector no está listado?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
              Nuestra metodología se adapta a diferentes industrias. Conversemos sobre las necesidades específicas de tu
              organización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-econova-green hover:bg-white/90 font-semibold">
                Hablar con un asesor por sector
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Ver metodología completa
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
