import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, Target, Award } from "lucide-react"
import Image from "next/image"

export function WhyEconovaSection() {
  const features = [
    {
      icon: FileText,
      title: "Lenguaje de cumplimiento",
      description: "Procesos normativos impecables que resisten auditorías públicas y privadas",
    },
    {
      icon: CheckCircle,
      title: "Evidencia documental",
      description: "Documentación sólida que resiste auditorías públicas y privadas",
    },
    {
      icon: Target,
      title: "Gobernanza y trazabilidad",
      description: "Columna vertebral del desempeño con controles y seguimiento continuo",
    },
    {
      icon: Award,
      title: "Entrega ejecutiva",
      description: "Claridad, priorización y pasos concretos para la toma de decisiones",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  POR QUÉ ENVIRONMENT ECONOVA
                </span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
                Una firma técnica con criterio humano
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Somos un equipo de biólogos, ingenieros ambientales y forestales y consultores especializados. Lo
                nuestro es traducir complejidad normativa y criterios ESG en planes claros, evidencias sólidas y
                resultados medibles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/20 bg-gradient-to-br from-white to-primary/5"
                >
                  <CardContent className="p-0 space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 font-semibold"
            >
              Conoce nuestro equipo
            </Button>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/professional-environmental-team-office-meeting-su.jpg"
                alt="Equipo profesional de Environment Econova"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating stats cards */}
            <Card className="absolute -bottom-6 -left-6 p-6 bg-white shadow-xl border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
            </Card>

            <Card className="absolute -top-6 -right-6 p-6 bg-white shadow-xl border-secondary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">200+</div>
                <div className="text-sm text-muted-foreground">Proyectos exitosos</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
