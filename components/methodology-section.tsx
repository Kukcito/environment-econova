import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Target, Route, Settings, BarChart3 } from "lucide-react"

export function MethodologySection() {
  const framework = [
    {
      icon: Search,
      title: "Descubrimiento",
      description: "Entendimiento del negocio y normatividad aplicable",
    },
    {
      icon: Target,
      title: "Diagnóstico técnico",
      description: "Brechas y riesgos por dimensión de sostenibilidad",
    },
    {
      icon: Route,
      title: "Hoja de ruta",
      description: "Metas, cronograma, responsabilidades e indicadores",
    },
    {
      icon: Settings,
      title: "Implementación",
      description: "Equipos técnicos, formación y operación",
    },
    {
      icon: BarChart3,
      title: "Medición y reporte",
      description: "Tableros, auditoría interna y documentación",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Metodología
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Metodología y tecnología</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Nuestro marco de trabajo integrado con tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {framework.map((step, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Tecnología y datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription>• Herramientas digitales y analíticas para trazabilidad y control</CardDescription>
              <CardDescription>
                • Radar 4 para integrar gobernanza y vínculo institucional en la lectura de la sostenibilidad
              </CardDescription>
              <CardDescription>• Cultura de mejora continua y actualización normativa</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Diferenciadores clave
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription>• Especialistas por disciplina y experiencia de campo</CardDescription>
              <CardDescription>
                • Versatilidad metodológica para adaptar el reporte a cada ente financiero/regulatorio
              </CardDescription>
              <CardDescription>
                • Enfoque en gobernanza y evidencia documental que convence a auditorías, bancos y fondos
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
