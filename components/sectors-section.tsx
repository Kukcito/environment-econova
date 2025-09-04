import { Card, CardContent } from "@/components/ui/card"
import { Building2, TreePine, Landmark } from "lucide-react"

export function SectorsSection() {
  const sectors = [
    {
      icon: Building2,
      title: "Industria y manufactura",
      description: "Agua, energía, residuos, biodiversidad, emisiones, huella de carbono",
    },
    {
      icon: TreePine,
      title: "Cadena de suministro",
      description: "Agua, energía, residuos, biodiversidad, emisiones, huella de carbono",
    },
    {
      icon: Landmark,
      title: "Gobierno",
      description: "Agua, energía, residuos, biodiversidad, emisiones, huella de carbono",
    },
  ]

  return (
    <section id="sectores" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Sectores y contextos donde entregamos impacto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card key={index} className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <sector.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{sector.title}</h3>
                <p className="text-sm text-muted-foreground">{sector.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
