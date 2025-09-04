import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Award, Target, FileText, Building, Plane, Factory } from "lucide-react"
import { Footer } from "@/components/footer"

export default function MetodologiaPage() {
  const methodologies = [
    { name: "GRI", description: "Global Reporting Initiative", color: "from-green-400 to-emerald-600" },
    {
      name: "SASB/ISSB",
      description: "Estándares sectoriales y de sostenibilidad internacional",
      color: "from-blue-400 to-cyan-600",
    },
    {
      name: "TCFD",
      description: "Revelaciones climáticas y gobernanza de riesgo",
      color: "from-purple-400 to-indigo-600",
    },
    { name: "CDP", description: "Gestión de carbono/agua/bosques", color: "from-teal-400 to-green-600" },
    { name: "GHG Protocol", description: "Alcances 1–2–3", color: "from-orange-400 to-red-600" },
    { name: "ISO", description: "ISO relevantes (p. ej., 14001, 50001)", color: "from-pink-400 to-rose-600" },
    {
      name: "ODS",
      description: "Marco de alineación a Objetivos de Desarrollo Sostenible",
      color: "from-indigo-400 to-blue-600",
    },
    {
      name: "Radar 4",
      description: "Enfoque complementario de lectura y priorización",
      color: "from-emerald-400 to-teal-600",
    },
  ]

  const deliverables = [
    {
      icon: Target,
      title: "Evaluación con hallazgos, riesgos y oportunidades",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: FileText,
      title: "Reporte ESG listo para banca/fondos/clientes/autoridades",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: Award,
      title: "Resumen ejecutivo para comités y alta dirección",
      color: "from-purple-400 to-indigo-600",
    },
  ]

  const sectors = [
    {
      icon: Building,
      title: "Gobierno",
      description:
        "Trámites y diagnósticos con lenguaje técnico, evidencia robusta y materiales para transparencia y auditoría. Reportes voluntarios de sostenibilidad para fortalecer reputación e indicadores públicos.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Plane,
      title: "Hotelería y turismo",
      description:
        "Soporte a nuevos desarrollos y ampliaciones; programas operativos en agua, energía, residuos, proveedores locales y certificaciones del sector.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Factory,
      title: "Industria y servicios (PYME y gran empresa)",
      description:
        "Cumplimiento sin fricciones, economía circular y reportes alineados a lo que pide tu cadena de valor y los financiadores.",
      color: "from-purple-500 to-violet-600",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Video Background */}
        <section className="relative py-32 px-4 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source
                src="/placeholder.mp4?height=1080&width=1920&query=methodology+standards+international+frameworks+sustainability"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-blue-600/80 to-teal-600/90"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container max-w-6xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">Metodología</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight">
              Metodologías y
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Estándares
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-balance mb-12 leading-relaxed">
              Adaptamos el reporte a las guías que soliciten tus stakeholders con estándares internacionales reconocidos
            </p>
          </div>
        </section>

        {/* Methodologies Grid */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Estándares que manejamos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologies.map((methodology, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${methodology.color}`}></div>
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${methodology.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{methodology.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{methodology.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/methodology-standards-international-frameworks-sus.jpg"
                alt="Methodology Standards"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Radar 4 como diferencial</h3>
                  <p className="text-xl opacity-90">Metodología propia complementaria para lectura y priorización</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-green-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Entregables
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deliverables.map((deliverable, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden bg-white"
                >
                  <div className={`h-2 bg-gradient-to-r ${deliverable.color}`}></div>
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${deliverable.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <deliverable.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-gray-800">{deliverable.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Sectores y Casos de Uso
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sectors.map((sector, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden bg-white"
                >
                  <div className={`h-2 bg-gradient-to-r ${sector.color}`}></div>
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${sector.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <sector.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-gray-800">{sector.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{sector.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-green-600 via-blue-600 to-teal-600">
          <div className="container max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Necesitas un reporte con metodología robusta?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Combinamos estándares internacionales con nuestra metodología Radar 4 para resultados superiores
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-white text-green-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Pedir reporte ESG
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-transparent text-white border-white hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Habla con un asesor por sector
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
