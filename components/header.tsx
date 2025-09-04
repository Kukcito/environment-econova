import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 sticky top-0 z-50 shadow-lg">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <div className="h-20 w-[500px]">
            <Image
              src="/images/econova-logo.png"
              alt="ECONOVA Environment Logo"
              width={1200}
              height={360}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-base font-semibold text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105">
              Servicios
              <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="animate-in fade-in-0 zoom-in-95 shadow-xl border-primary/20">
              <DropdownMenuItem asChild>
                <Link href="/tramites" className="hover:bg-primary/10 font-medium">
                  Trámites y Permisos Ambientales
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/consultoria" className="hover:bg-primary/10 font-medium">
                  Consultoría 360 en Sostenibilidad
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/reportes" className="hover:bg-primary/10 font-medium">
                  Reportes de Sostenibilidad (ESG)
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/metodologia"
            className="text-base font-semibold text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Metodología
          </Link>
          <Link
            href="/sectores"
            className="text-base font-semibold text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Sectores
          </Link>
          <Link
            href="/nosotros"
            className="text-base font-semibold text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Nosotros
          </Link>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-primary via-primary to-secondary text-white border-0 hover:shadow-xl hover:scale-105 transition-all duration-300 px-6 py-3 font-semibold"
          >
            <Link href="/contacto">Solicitar Propuesta</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
