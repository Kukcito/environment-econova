import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted/40 via-muted/30 to-primary/5 border-t border-primary/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-16 w-64">
                <Image
                  src="/images/econova-logo.png"
                  alt="ECONOVA Environment Logo"
                  width={600}
                  height={180}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sostenibilidad que protege vidas y agrega valor. Convertimos medio ambiente y seguridad en motor de
              competitividad real.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Servicios</h3>
            <div className="space-y-2">
              <Link href="/tramites" className="block text-sm text-muted-foreground hover:text-foreground">
                Trámites y Licencias
              </Link>
              <Link href="/consultoria" className="block text-sm text-muted-foreground hover:text-foreground">
                Consultoría
              </Link>
              <Link href="/reportes" className="block text-sm text-muted-foreground hover:text-foreground">
                Reportes ESG
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Empresa</h3>
            <div className="space-y-2">
              <Link href="/nosotros" className="block text-sm text-muted-foreground hover:text-foreground">
                Nosotros
              </Link>
              <Link href="/sectores" className="block text-sm text-muted-foreground hover:text-foreground">
                Sectores
              </Link>
              <Link href="/blog" className="block text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/contacto" className="block text-sm text-muted-foreground hover:text-foreground">
                Contacto
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                contacto@econova.mx
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +52 (55) 1234-5678
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Ciudad de México
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 ECONOVA. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-foreground">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-sm text-muted-foreground hover:text-foreground">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
