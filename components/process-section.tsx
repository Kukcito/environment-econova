import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Cog, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Diagnóstico / levantamiento",
      description: "Reunión técnica y cuestionario de alcance",
      number: "01",
    },
    {
      icon: FileText,
      title: "Propuesta",
      description: "Entregables, tiempos y rangos de costo (sin tarifarios fijos; cada proyecto varía por complejidad)",
      number: "02",
    },
    {
      icon: Cog,
      title: "Ejecución",
      description: "Especialistas técnicos, visitas, modelaciones y expediente",
      number: "03",
    },
    {
      icon: CheckCircle,
      title: "Entrega y seguimiento",
      description:
        "Resolución/permiso, programa implementado o reporte listo para presentar ante bancos/fondos/autoridades",
      number: "04",
    },
  ]

  return (
    <section id="proceso" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Metodología
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Cómo trabajamos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Proceso estructurado y transparente para garantizar resultados de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-muted-foreground/30">{step.number}</span>
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
