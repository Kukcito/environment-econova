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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/80"></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-7xl font-bold text-balance mb-6 text-white animate-fade-in"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          >
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Environment Econova:
            </span>{" "}
            <br />
            Innovación y Cumplimiento para un Futuro Sostenible
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-balance mb-6 animate-slide-up"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            En Econova, impulsamos la sostenibilidad y el cumplimiento normativo en las organizaciones. Desarrollamos
            soluciones integrales que optimizan el rendimiento ambiental y social, garantizando un futuro más verde y
            rentable para nuestros clientes.
          </p>
          <p
            className="text-lg text-white/80 max-w-4xl mx-auto text-balance mb-8 animate-slide-up"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <strong>Claridad técnica. Resultados verificables.</strong> Conectamos lo que exige la autoridad, lo que
            valora la banca y lo que tu operación necesita para crecer con menos riesgo y más certidumbre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-gradient-to-r from-white to-white/90 text-primary hover:from-white/90 hover:to-white hover:scale-105 transition-all duration-300 shadow-2xl font-semibold"
            >
              Solicitar cotización de trámites
            </Button>
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-gradient-to-r from-accent to-accent/80 text-white hover:from-accent/90 hover:to-accent hover:scale-105 transition-all duration-300 shadow-2xl font-semibold"
            >
              Agendar diagnóstico integral
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 bg-transparent font-semibold"
            >
              Pedir reporte ESG
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <Card className="p-8 text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 animate-float shadow-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent mb-2">
              Certeza
            </div>
            <div className="text-white/90 font-medium">Regulatoria</div>
          </Card>
          <Card
            className="p-8 text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 animate-float shadow-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent mb-2">
              Financiamiento
            </div>
            <div className="text-white/90 font-medium">Verde</div>
          </Card>
          <Card
            className="p-8 text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 animate-float shadow-2xl"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent mb-2">
              Eficiencia
            </div>
            <div className="text-white/90 font-medium">Operativa</div>
          </Card>
          <Card
            className="p-8 text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 animate-float shadow-2xl"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent mb-2">
              Reputación
            </div>
            <div className="text-white/90 font-medium">y Licencia Social</div>
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
