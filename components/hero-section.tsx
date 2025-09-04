"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen pt-24 pb-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <source src="/placeholder.mp4?query=sustainable business environment corporate innovation" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-green-50/90 to-blue-50/85"></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-20 px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8 mb-16">
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
            <Image
              src="/images/econova-logo.png"
              alt="ECONOVA Environment Logo"
              width={400}
              height={120}
              className="drop-shadow-lg w-[250px] sm:w-[300px] lg:w-[400px] object-contain"
              priority
            />
          </div>

          <div className="flex-1 text-center lg:text-left lg:ml-4">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-balance mb-4 lg:mb-6 animate-fade-in drop-shadow-sm relative z-30"
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            >
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-sm">
                Innovación y Cumplimiento para un Futuro Sostenible
              </span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl text-balance mb-4 lg:mb-6 animate-slide-up font-medium relative z-30"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <span className="text-gray-700">
                Impulsamos la sostenibilidad y cumplimiento normativo con soluciones integrales que optimizan el
                rendimiento ambiental y social.
              </span>
            </p>
            <p
              className="text-sm sm:text-base lg:text-lg max-w-4xl text-balance mb-6 lg:mb-8 animate-slide-up relative z-30"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <span className="bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent font-bold">
                Claridad técnica. Resultados verificables.
              </span>
              <span className="text-gray-600 ml-2">
                Conectamos autoridad, banca y operación para crecer con certidumbre.
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up mb-12 lg:mb-20 relative z-30">
          <Button
            size="lg"
            className="text-sm sm:text-lg px-6 sm:px-10 py-4 sm:py-6 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white hover:from-green-600 hover:via-green-700 hover:to-green-800 hover:scale-105 transition-all duration-300 shadow-2xl font-semibold border-2 border-green-400/30 backdrop-blur-sm"
          >
            Solicitar cotización de trámites
          </Button>
          <Button
            size="lg"
            className="text-sm sm:text-lg px-6 sm:px-10 py-4 sm:py-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-2xl font-semibold border-2 border-blue-400/30 backdrop-blur-sm"
          >
            Agendar diagnóstico integral
          </Button>
          <Button
            size="lg"
            className="text-sm sm:text-lg px-6 sm:px-10 py-4 sm:py-6 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white hover:from-teal-600 hover:via-teal-700 hover:to-teal-800 hover:scale-105 transition-all duration-300 shadow-2xl font-semibold border-2 border-teal-400/30 backdrop-blur-sm"
          >
            Pedir reporte ESG
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 lg:mb-20 relative z-30">
          <Card className="p-3 sm:p-4 text-center bg-gradient-to-br from-green-50/90 to-green-100/80 backdrop-blur-lg border-green-200/60 hover:bg-green-100/90 transition-all duration-500 hover:scale-105 animate-float shadow-lg">
            <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-1">
              Certeza
            </div>
            <div className="text-xs sm:text-sm text-green-700 font-medium">Regulatoria</div>
          </Card>
          <Card
            className="p-3 sm:p-4 text-center bg-gradient-to-br from-blue-50/90 to-blue-100/80 backdrop-blur-lg border-blue-200/60 hover:bg-blue-100/90 transition-all duration-500 hover:scale-105 animate-float shadow-lg"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-1">
              Financiamiento
            </div>
            <div className="text-xs sm:text-sm text-blue-700 font-medium">Verde</div>
          </Card>
          <Card
            className="p-3 sm:p-4 text-center bg-gradient-to-br from-teal-50/90 to-teal-100/80 backdrop-blur-lg border-teal-200/60 hover:bg-teal-100/90 transition-all duration-500 hover:scale-105 animate-float shadow-lg"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent mb-1">
              Eficiencia
            </div>
            <div className="text-xs sm:text-sm text-teal-700 font-medium">Operativa</div>
          </Card>
          <Card
            className="p-3 sm:p-4 text-center bg-gradient-to-br from-emerald-50/90 to-emerald-100/80 backdrop-blur-lg border-emerald-200/60 hover:bg-emerald-100/90 transition-all duration-500 hover:scale-105 animate-float shadow-lg"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent mb-1">
              Reputación
            </div>
            <div className="text-xs sm:text-sm text-emerald-700 font-medium">y Licencia Social</div>
          </Card>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-lg animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  )
}
