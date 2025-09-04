import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Landmark,
  TrendingUp,
  FileText,
  Globe,
  Award,
  Target,
  CheckCircle,
  Users,
  DollarSign,
  Shield,
  BarChart3,
  Clock,
  Eye,
} from "lucide-react"
import { Footer } from "@/components/footer"

export default function ReportesPage() {
  const methodologies = [
    {
      name: "GRI",
      description: "Universal y Temas: reportabilidad amplia y foco en impactos",
      color: "from-green-400 to-emerald-600",
    },
    {
      name: "SASB/ISSB",
      description: "IFRS S1/S2: comparabilidad sectorial y métricas para inversionistas",
      color: "from-blue-400 to-cyan-600",
    },
    {
      name: "TCFD",
      description: "Gobernanza climática, gestión de riesgos y análisis de escenarios",
      color: "from-purple-400 to-indigo-600",
    },
    {
      name: "CDP",
      description: "Alineación con cuestionarios de carbono/agua/bosques",
      color: "from-teal-400 to-green-600",
    },
    {
      name: "GHG Protocol",
      description: "Inventario de GEI en Alcances 1, 2 y 3",
      color: "from-orange-400 to-red-600",
    },
    {
      name: "ISO",
      description: "ISO relevantes (p. ej., 14001, 50001) como marcos de gestión",
      color: "from-pink-400 to-rose-600",
    },
    {
      name: "ODS",
      description: "Mapeo de contribuciones a Objetivos de Desarrollo Sostenible",
      color: "from-indigo-400 to-blue-600",
    },
    {
      name: "Radar 4",
      description: "Lectura complementaria con enfoque propio para priorización ejecutiva",
      color: "from-emerald-400 to-teal-600",
    },
  ]

  const evaluationAreas = [
    {
      title: "Ambiental",
      description:
        "Riesgos, políticas y desempeño en energía, agua, residuos y emisiones (GEI); eficiencia e intensidad energética/hídrica, calidad de efluentes, manejo integral de residuos y economía circular, impactos en biodiversidad, cumplimiento normativo ambiental, adopción de tecnologías limpias y marcos ISO.",
      icon: Globe,
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Social",
      description:
        "Condiciones de trabajo y seguridad y salud (H&S), formación, rotación y atracción de talento, diversidad e inclusión, derechos humanos y laborales en la cadena de suministro, relación comunitaria y mecanismos de queja/atención.",
      icon: Users,
      color: "from-blue-400 to-cyan-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Económico",
      description:
        "Inversiones e incentivos asociados a sostenibilidad, presupuestos y costos operativos, ahorros por eficiencia (agua/energía/residuos), retorno y creación de valor (NPV/ROI de iniciativas), ingresos verdes y exposición a riesgos físicos y de transición.",
      icon: DollarSign,
      color: "from-purple-400 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Gobernanza",
      description:
        "Estructura y responsabilidades del Consejo/Comités, políticas y controles internos, ética y anticorrupción, gestión de riesgos, trazabilidad y calidad de datos, protección de información, cumplimiento regulatorio y ciclo de mejora continua.",
      icon: Shield,
      color: "from-orange-400 to-red-600",
      bgColor: "bg-orange-50",
    },
  ]

  const deliverables = [
    {
      icon: FileText,
      title: "Reporte ESG completo (PDF/HTML) con anexos técnicos y trazabilidad",
      color: "from-green-400 to-emerald-600",
    },
    { icon: Award, title: "Resumen ejecutivo para alta dirección y comités", color: "from-blue-400 to-cyan-600" },
    {
      icon: BarChart3,
      title: "Inventario GEI (S1/S2/S3) y supuestos de cálculo",
      color: "from-purple-400 to-indigo-600",
    },
    { icon: Target, title: "Matriz de materialidad y mapa de riesgos", color: "from-teal-400 to-green-600" },
    { icon: FileText, title: "Dataset (Excel/CSV) de KPIs y ficha metodológica", color: "from-orange-400 to-red-600" },
    {
      icon: CheckCircle,
      title: "Plan de acción con metas, responsables, costos y cronograma",
      color: "from-pink-400 to-rose-600",
    },
    {
      icon: Users,
      title: "Guía de comunicación (piezas breves para clientes, banca y stakeholders)",
      color: "from-indigo-400 to-blue-600",
    },
  ]

  const processSteps = [
    {
      title: "Kick-off y materialidad",
      description: "Identificación de stakeholders y temas materiales (incluida doble materialidad cuando aplique)",
      icon: Target,
    },
    {
      title: "Levantamiento de datos y evidencias",
      description: "Plantillas, data room y checklist por área; cadena de suministro cuando corresponda",
      icon: FileText,
    },
    {
      title: "Cálculos y aseguramiento de calidad (QA/QC)",
      description: "Inventario GEI (S1-S2-S3), indicadores ambientales/sociales y consistencia histórica",
      icon: BarChart3,
    },
    {
      title: "Riesgos, escenarios y finanzas",
      description: "Mapa de riesgos ESG, escenarios climáticos TCFD, sensibilidad y análisis de ROI/NPV de iniciativas",
      icon: Shield,
    },
    {
      title: "Redacción y visualización",
      description: "Reporte técnico + resumen ejecutivo (2–4 páginas) orientado a comité y banca",
      icon: Eye,
    },
    {
      title: "Validación y publicación",
      description: "Cierre con responsables, plan de mejora 12–18 meses y soporte para llamados de información",
      icon: CheckCircle,
    },
    {
      title: "Acompañamiento",
      description: "Preparación para comités de crédito, auditorías o licitaciones",
      icon: Users,
    },
  ]

  const sectors = [
    {
      title: "Gobierno",
      description:
        "Trámites y diagnósticos con lenguaje técnico, evidencia robusta y materiales para transparencia y auditoría. Reportes voluntarios de sostenibilidad para fortalecer reputación e indicadores públicos.",
      icon: Landmark,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Hotelería y turismo",
      description:
        "Soporte a nuevos desarrollos y ampliaciones; programas operativos en agua, energía, residuos, proveedores locales y certificaciones del sector.",
      icon: Building2,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Industria y servicios (PYME y gran empresa)",
      description:
        "Cumplimiento sin fricciones, economía circular y reportes alineados a lo que pide tu cadena de valor y los financiadores.",
      icon: TrendingUp,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Video Background */}
        <section className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source
                src="/placeholder.mp4?height=1080&width=1920&query=sustainability+reporting+ESG+data+analytics+dashboard"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-blue-600/80 to-teal-600/90"></div>
          </div>

          <div className="relative z-10 container max-w-6xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">Reportes ESG</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight">
              Reportes de Sostenibilidad
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                (ESG)
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-balance mb-12 leading-relaxed">
              No es "un PDF más". Es una herramienta de decisión y financiamiento que ordena datos críticos, reduce
              asimetrías con banca y acelera decisiones de inversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Solicitar reporte ESG
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Agendar diagnóstico ejecutivo
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Para qué sirve
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-600"></div>
                <CardContent className="p-8">
                  <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="font-bold text-xl mb-4">Ordena datos críticos y hace visible el desempeño real</h3>
                  <p className="text-gray-600">
                    Ambiental, social, económico y de gobernanza con métricas verificables.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-600"></div>
                <CardContent className="p-8">
                  <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="font-bold text-xl mb-4">
                    Reduce asimetrías con banca, fondos, clientes y autoridades
                  </h3>
                  <p className="text-gray-600">
                    Presentando información comparable y trazable según estándares internacionales.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-400 to-indigo-600"></div>
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="font-bold text-xl mb-4">Acelera decisiones de inversión</h3>
                  <p className="text-gray-600">
                    Prioriza iniciativas con mejor retorno y menor riesgo basado en evidencia sólida.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-teal-400 to-green-600"></div>
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-teal-600 mb-4" />
                  <h3 className="font-bold text-xl mb-4">Fortalece reputación y licencia social</h3>
                  <p className="text-gray-600">
                    Respaldando licitaciones, auditorías y relaciones con grupos de interés.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Qué evaluamos
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {evaluationAreas.map((area, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden ${area.bgColor}`}
                >
                  <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-gray-800">{area.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Methodologies Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Estándares y metodologías que integramos
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

        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Cómo lo hacemos (proceso)
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm mr-3">
                        {index + 1}
                      </div>
                      <step.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
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
                src="/esg-reports-sustainability-data-analytics-dashboar.jpg"
                alt="ESG Reporting Dashboard"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Reportes que abren puertas</h3>
                  <p className="text-xl opacity-90">Rigor técnico y evidencia sólida para convencer stakeholders</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((deliverable, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden bg-white"
                >
                  <div className={`h-2 bg-gradient-to-r ${deliverable.color}`}></div>
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${deliverable.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <deliverable.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-sm mb-2 text-gray-800">{deliverable.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Resultados y beneficios esperados
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Mejor acceso a financiamiento (créditos verdes, tasas/plazos preferentes)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Eficiencias operativas sustentadas con datos verificables</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Menor exposición a riesgos regulatorios y de cadena de suministro</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Transparencia y comparabilidad para inversionistas y grandes clientes
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Cultura de mejora continua y gobernanza de datos</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Requisitos para iniciar
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Target className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Punto focal por área (finanzas, operaciones, H&S, RR.HH., compras)</p>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Acceso a data histórica (12–36 meses) y a políticas/formatos existentes
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Confirmación de estándar objetivo (GRI/SASB/ISSB/TCFD/CDP) y audiencia principal
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Plazos orientativos</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-green-600 mr-2" />
                      <p className="text-gray-700">
                        <strong>Versión base:</strong> 6–8 semanas
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      <p className="text-gray-700">
                        <strong>Versión extendida:</strong> 8–12 semanas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Sectores y casos de uso
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {sectors.map((sector, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden ${sector.bgColor}`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${sector.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <sector.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-gray-800">{sector.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{sector.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Habla con un asesor por sector
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 via-blue-600 to-teal-600">
          <div className="container max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Necesitas un reporte ESG que abra puertas?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Nuestros reportes están diseñados para convencer a bancos, fondos y autoridades con rigor técnico y
              evidencia sólida.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-white text-green-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Solicitar reporte ESG
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Agendar diagnóstico ejecutivo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
