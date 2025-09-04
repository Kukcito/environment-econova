"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 sticky top-0 z-50 shadow-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <div className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ENVIRONMENT ECONOVA
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

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-lg">
          <nav className="container py-4 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide px-2">Servicios</div>
              <Link
                href="/tramites"
                className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Trámites y Permisos Ambientales
              </Link>
              <Link
                href="/consultoria"
                className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Consultoría 360 en Sostenibilidad
              </Link>
              <Link
                href="/reportes"
                className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reportes de Sostenibilidad (ESG)
              </Link>
            </div>

            <div className="border-t pt-4 space-y-2">
              <Link
                href="/metodologia"
                className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Metodología
              </Link>
              <Link
                href="/sectores"
                className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sectores
              </Link>
              <Link
                href="/nosotros"
                className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
            </div>

            <div className="border-t pt-4">
              <Button
                size="lg"
                asChild
                className="w-full bg-gradient-to-r from-primary via-primary to-secondary text-white border-0 hover:shadow-xl transition-all duration-300 font-semibold"
              >
                <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  Solicitar Propuesta
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
