"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroCelebration() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const titleRef = useRef<HTMLDivElement>(null)
  const polaroidRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setImageLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-30px 0px -30px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute('data-animate-id')
          if (elementId) {
            setVisibleElements(prev => new Set([...prev, elementId]))
          }
        }
      })
    }, observerOptions)

    // Observe all elements
    const elements = [
      { ref: titleRef, id: 'title' },
      { ref: polaroidRef, id: 'polaroid' },
      { ref: ctaRef, id: 'cta' }
    ]

    elements.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute('data-animate-id', id)
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const isVisible = (id: string) => visibleElements.has(id)

  return (
    <div id="hero" className="min-h-screen linen-texture bg-decorative-pattern relative overflow-hidden">
      {/* Background Image with subtle animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 transition-transform duration-[20s] ease-linear hover:scale-105"
        style={{
          backgroundImage: `url(/assets/images/stockwoods.png)`,
        }}
      />
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 opacity-20 animate-bounce" style={{ animationDuration: "6s", animationDelay: "0s" }}>
        <div className="w-4 h-4 bg-burgundy/30 rounded-full"></div>
      </div>
      <div className="absolute top-20 right-20 opacity-15 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
        <div className="w-6 h-6 bg-gold/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-25 animate-pulse" style={{ animationDuration: "3s" }}>
        <div className="w-3 h-3 bg-burgundy/40 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 right-32 opacity-20 animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "0.8s" }}>
        <div className="w-5 h-5 bg-gold/30 rounded-full"></div>
      </div>
      
      {/* Hero Content */}
      <main className="py-8 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center min-h-screen relative z-10">
        {/* Main Title with scroll animation */}
        <div 
          ref={titleRef}
          className={`text-center mb-6 sm:mb-8 lg:mb-12 space-y-3 sm:space-y-4 lg:space-y-6 transition-all duration-1200 ease-out ${
            isVisible('title') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-burgundy font-extrabold tracking-[0.2em] uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans">
            LA MEJOR CELEBRACIÓN
          </h1>

          {/* Script Title with floating animation */}
          <h2 className="font-script text-burgundy text-shadow-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-pulse" style={{ animationDuration: "4s" }}>
            Stock & Woods
          </h2>
        </div>

        {/* Enhanced Polaroid Photo Frame with advanced animations */}
        <div
          ref={polaroidRef}
          className={`relative mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 group ${
            isVisible('polaroid') 
              ? 'opacity-100 scale-100 rotate-0.5' 
              : 'opacity-0 scale-90 rotate-3'
          } ${imageLoaded ? "fade-in" : "opacity-0"}`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Polaroid Frame with Full Burgundy Border and enhanced hover effects */}
          <div className="polaroid-enhanced shadow-lg transform hover:rotate-0 transition-all duration-500 relative group-hover:shadow-3xl group-hover:scale-105">
            <div className="relative bg-ivory rounded-sm">
              {/* Responsive image container with hover effects */}
              <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-sm group-hover:brightness-110 transition-all duration-500">
              <Image
                  src="/assets/images/fotostock.webp"
                alt="Elegant celebration venue with luxurious decorations, ambient lighting, and sophisticated table settings for Stock & Woods event"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onLoad={() => setImageLoaded(true)}
              />
              </div>

              {/* Animated decorative elements */}
              <div className="absolute -left-6 top-1/3 transform -translate-y-1/2 text-charcoal/20 text-sm font-script rotate-12 hidden lg:block transition-all duration-500 group-hover:text-charcoal/40 group-hover:scale-110">
                <div className="flex flex-col items-center space-y-1 animate-bounce" style={{ animationDuration: "3s" }}>
                  <span>🌿</span>
                  <span className="text-xs">perfect</span>
                </div>
              </div>

              <div className="absolute -right-4 -bottom-2 text-charcoal/30 text-xs font-script -rotate-6 hidden lg:block transition-all duration-500 group-hover:text-charcoal/50 group-hover:scale-110 animate-pulse" style={{ animationDuration: "2s" }}>
                ✨ magical
              </div>
            </div>

            {/* Polaroid bottom space with signature and animation */}
            <div className="h-10 sm:h-12 lg:h-16 flex items-center justify-center mt-3 sm:mt-4">
              <span className="text-ivory/60 text-xs sm:text-sm font-serif italic group-hover:text-ivory/80 transition-colors duration-300 animate-pulse" style={{ animationDuration: "3s" }}>29 · 06 · 2025</span>
            </div>
          </div>

          {/* Floating sparkles around polaroid */}
          <div className="absolute -top-2 -left-2 w-2 h-2 bg-gold/40 rounded-full animate-ping" style={{ animationDuration: "2s" }}></div>
          <div className="absolute -top-3 -right-1 w-1.5 h-1.5 bg-burgundy/30 rounded-full animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }}></div>
          <div className="absolute -bottom-1 -left-3 w-2.5 h-2.5 bg-gold/30 rounded-full animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}></div>
          <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-burgundy/40 rounded-full animate-ping" style={{ animationDuration: "1.8s", animationDelay: "1.5s" }}></div>
        </div>

        {/* CTA Section with slide-up animation */}
        <div 
          ref={ctaRef}
          className={`text-center space-y-3 lg:space-y-4 max-w-4xl px-2 transition-all duration-1000 ease-out ${
            isVisible('cta') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {/* Location Link with enhanced animations */}
          <a
            href="https://www.google.com/maps/place/Stock+and+Woods/data=!4m2!3m1!1s0x0:0xc25e35537ee786e6?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-burgundy/85 text-base sm:text-lg lg:text-xl font-medium uppercase tracking-wide hover:text-gold transition-all duration-300 focus-visible:outline-gold hover:scale-105 transform"
            aria-label="Ver ubicación del evento"
          >
            <span className="border-b border-transparent group-hover:border-gold transition-all duration-300 relative">
              VER UBICACIÓN AQUÍ
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full"></div>
            </span>
            <ArrowRight size={18} className="sm:hidden transform group-hover:translate-x-2 transition-transform duration-300 group-hover:text-gold group-hover:scale-110" />
            <ArrowRight size={20} className="hidden sm:block transform group-hover:translate-x-2 transition-transform duration-300 group-hover:text-gold group-hover:scale-110" />
          </a>

          {/* Event Details with staggered animations */}
          <div className="space-y-2">
            <div className="text-burgundy text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider uppercase font-serif break-words">
              CARR NACIONAL · EL FAISÁN · 67302 SANTIAGO, N.L.
            </div>

            <div className="text-burgundy text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wider uppercase font-serif animate-pulse" style={{ animationDuration: "4s" }}>
              29 DE JUNIO · 7:00 PM · 2025
            </div>
          </div>
        </div>
      </main>

      {/* Additional floating elements for ambiance */}
      <div className="absolute top-1/3 left-1/4 w-8 h-8 opacity-10">
        <div className="w-full h-full border border-burgundy/30 rotate-45 animate-spin" style={{ animationDuration: "20s" }}></div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 opacity-15">
        <div className="w-full h-full border border-gold/40 rotate-12 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}></div>
      </div>
    </div>
  )
}
