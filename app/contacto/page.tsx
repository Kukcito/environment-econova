import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Contacto y Cotización
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Contacto y cotizar</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
              Cuéntanos tu proyecto y objetivos. Prepararemos una propuesta técnica con entregables, tiempos y rangos de
              costo.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">contacto@econova.mx</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-sm text-muted-foreground">+52 (55) 1234-5678</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Ubicación</p>
                        <p className="text-sm text-muted-foreground">Ciudad de México, México</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Horario</p>
                        <p className="text-sm text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Respuesta rápida</h3>
                    <p className="text-sm text-muted-foreground">
                      Respondemos todas las consultas en menos de 24 horas hábiles.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Solicitar cotización</CardTitle>
                    <CardDescription>
                      Completa el formulario y te contactaremos para preparar una propuesta personalizada.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre completo *</Label>
                        <Input id="nombre" placeholder="Tu nombre completo" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cargo">Cargo</Label>
                        <Input id="cargo" placeholder="Tu cargo en la empresa" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa / Entidad *</Label>
                      <Input id="empresa" placeholder="Nombre de tu empresa u organización" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico *</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input id="telefono" placeholder="+52 (55) 1234-5678" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="servicio">Tipo de servicio de interés *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tramites">Trámites y Licencias Ambientales</SelectItem>
                          <SelectItem value="consultoria">Consultoría de Sostenibilidad</SelectItem>
                          <SelectItem value="reportes">Reportes ESG / Radar 4</SelectItem>
                          <SelectItem value="multiple">Múltiples servicios</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="proyecto">Descripción breve del proyecto *</Label>
                      <Textarea
                        id="proyecto"
                        placeholder="Describe tu proyecto: ubicación, alcance, fechas estimadas..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="objetivo">Objetivo principal *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu objetivo principal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cumplimiento">Cumplimiento normativo</SelectItem>
                          <SelectItem value="credito-verde">Acceso a créditos verdes</SelectItem>
                          <SelectItem value="incentivos">Beneficios fiscales e incentivos</SelectItem>
                          <SelectItem value="reputacion">Mejora de reputación corporativa</SelectItem>
                          <SelectItem value="eficiencia">Eficiencia operativa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1">Enviar solicitud</Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Agendar reunión
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      * Campos obligatorios. Al enviar este formulario aceptas nuestros términos de privacidad.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
