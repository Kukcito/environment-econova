"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-secondary/70"></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-7xl font-bold text-balance mb-6 text-white animate-fade-in drop-shadow-2xl"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          >
            <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent drop-shadow-lg">
              Environment Econova:
            </span>{" "}
            <br />
            <span className="text-white drop-shadow-lg">Innovación y Cumplimiento para un Futuro Sostenible</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white max-w-4xl mx-auto text-balance mb-6 animate-slide-up drop-shadow-lg font-medium"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            En Econova, impulsamos la sostenibilidad y el cumplimiento normativo en las organizaciones. Desarrollamos
            soluciones integrales que optimizan el rendimiento ambiental y social, garantizando un futuro más verde y
            rentable para nuestros clientes.
          </p>
          <p
            className="text-lg text-white max-w-4xl mx-auto text-balance mb-8 animate-slide-up drop-shadow-lg"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <strong>Claridad técnica. Resultados verificables.</strong> Conectamos lo que exige la autoridad, lo que
            valora la banca y lo que tu operación necesita para crecer con menos riesgo y más certidumbre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-gradient-to-r from-white to-white/95 text-primary hover:from-white/95 hover:to-white hover:scale-105 transition-all duration-300 shadow-2xl font-semibold border-2 border-white/20"
            >
              Solicitar cotización de trámites
            </Button>
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-gradient-to-r from-accent to-accent/90 text-white hover:from-accent/90 hover:to-accent hover:scale-105 transition-all duration-300 shadow-2xl font-semibold border-2 border-accent/30"
            >
              Agendar diagnóstico integral
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 border-2 border-white/80 text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm font-semibold shadow-xl"
            >
              Pedir reporte ESG
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <Card className="p-4 text-center bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-lg border-white/40 hover:bg-white/35 transition-all duration-500 hover:scale-105 animate-float shadow-2xl">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent mb-1 drop-shadow-lg">
              Certeza
            </div>
            <div className="text-sm text-white font-medium drop-shadow-md">Regulatoria</div>
          </Card>
          <Card
            className="p-4 text-center bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-lg border-white/40 hover:bg-white/35 transition-all duration-500 hover:scale-105 animate-float shadow-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent mb-1 drop-shadow-lg">
              Financiamiento
            </div>
            <div className="text-sm text-white font-medium drop-shadow-md">Verde</div>
          </Card>
          <Card
            className="p-4 text-center bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-lg border-white/40 hover:bg-white/35 transition-all duration-500 hover:scale-105 animate-float shadow-2xl"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent mb-1 drop-shadow-lg">
              Eficiencia
            </div>
            <div className="text-sm text-white font-medium drop-shadow-md">Operativa</div>
          </Card>
          <Card
            className="p-4 text-center bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-lg border-white/40 hover:bg-white/35 transition-all duration-500 hover:scale-105 animate-float shadow-2xl"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent mb-1 drop-shadow-lg">
              Reputación
            </div>
            <div className="text-sm text-white font-medium drop-shadow-md">y Licencia Social</div>
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
