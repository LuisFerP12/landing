"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroCelebration() {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setImageLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen linen-texture bg-decorative-pattern relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(/assets/images/stockwoods.png)`,
        }}
      />
      
      {/* Hero Content */}
      <main className="py-8 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center min-h-screen relative z-10">
        {/* Main Title */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12 space-y-3 sm:space-y-4 lg:space-y-6">
          <h1 className="text-burgundy font-extrabold tracking-[0.2em] uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans">
            LA MEJOR CELEBRACIÓN
          </h1>

          {/* Script Title - Separated */}
          <h2 className="font-script text-burgundy text-shadow-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Stock & Woods
          </h2>
        </div>

        {/* Enhanced Polaroid Photo Frame */}
        <div
          className={`relative mb-8 sm:mb-12 lg:mb-16 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:rotate-1 ${imageLoaded ? "fade-in" : "opacity-0"}`}
        >
          {/* Polaroid Frame with Full Burgundy Border */}
          <div className="polaroid-enhanced shadow-lg transform rotate-0.5 hover:rotate-0 transition-transform duration-300 relative">
            <div className="relative bg-ivory rounded-sm">
              {/* Responsive image container */}
              <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src="/assets/images/fotostock.jpg"
                  alt="Elegant celebration venue with luxurious decorations, ambient lighting, and sophisticated table settings for Stock & Woods event"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* FIXME: Replace with actual botanical doodle PNG */}
              <div className="absolute -left-6 top-1/3 transform -translate-y-1/2 text-charcoal/20 text-sm font-script rotate-12 hidden lg:block">
                <div className="flex flex-col items-center space-y-1">
                  <span>🌿</span>
                  <span className="text-xs">perfect</span>
                </div>
              </div>

              {/* FIXME: Replace with actual signature/doodle PNG */}
              <div className="absolute -right-4 -bottom-2 text-charcoal/30 text-xs font-script -rotate-6 hidden lg:block">
                ✨ magical
              </div>
            </div>

            {/* Polaroid bottom space with signature */}
            <div className="h-10 sm:h-12 lg:h-16 flex items-center justify-center mt-3 sm:mt-4">
              <span className="text-ivory/60 text-xs sm:text-sm font-serif italic">29 · 06 · 2025</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-3 lg:space-y-4 max-w-4xl px-2">
          {/* Location Link */}
          <a
            href="#location"
            className="group inline-flex items-center gap-2 text-burgundy/85 text-base sm:text-lg lg:text-xl font-medium uppercase tracking-wide hover:text-gold transition-colors duration-200 focus-visible:outline-gold"
            aria-label="Ver ubicación del evento"
          >
            <span className="border-b border-transparent group-hover:border-gold transition-all duration-200">
              LOOK FOR THE LOCATION HERE
            </span>
            <ArrowRight size={18} className="sm:hidden transform group-hover:translate-x-1 transition-transform duration-200" />
            <ArrowRight size={20} className="hidden sm:block transform group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          {/* Event Details */}
          <div className="space-y-2">
            <div className="text-burgundy text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider uppercase font-serif break-words">
              CARR NACIONAL · EL FAISÁN · 67302 SANTIAGO, N.L.
            </div>

            <div className="text-burgundy text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wider uppercase font-serif">
              29 DE JUNIO · 7:00 PM · 2025
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
