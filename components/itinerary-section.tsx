"use client"

import { MapPin, Church, Calendar, Clock } from "lucide-react"
import Image from "next/image"

export default function ItinerarySection() {
  return (
    <section className="py-8 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-45">
        {/* Large stars */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20">
          <svg width="60" height="60" className="sm:w-20 sm:h-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 0L50 30L80 40L50 50L40 80L30 50L0 40L30 30L40 0Z" fill="#7D1F24" />
          </svg>
        </div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20">
          <svg width="60" height="60" className="sm:w-20 sm:h-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 0L50 30L80 40L50 50L40 80L30 50L0 40L30 30L40 0Z" fill="#7D1F24" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/4 hidden sm:block">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 0L37.5 22.5L60 30L37.5 37.5L30 60L22.5 37.5L0 30L22.5 22.5L30 0Z" fill="#7D1F24" />
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/4 hidden sm:block">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 0L37.5 22.5L60 30L37.5 37.5L30 60L22.5 37.5L0 30L22.5 22.5L30 0Z" fill="#7D1F24" />
          </svg>
        </div>

        {/* Small decorative elements */}
        <div className="absolute top-3/4 left-1/6 hidden md:block">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0L18.75 11.25L30 15L18.75 18.75L15 30L11.25 18.75L0 15L11.25 11.25L15 0Z" fill="#7D1F24" />
          </svg>
        </div>
        <div className="absolute top-1/2 right-1/6 hidden md:block">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0L18.75 11.25L30 15L18.75 18.75L15 30L11.25 18.75L0 15L11.25 11.25L15 0Z" fill="#7D1F24" />
          </svg>
        </div>
      </div>

      {/* Decorative border lines */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-burgundy/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-burgundy/30 to-transparent"></div>

      {/* Main Title with decorative elements */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 sm:w-16 h-px bg-burgundy/30"></div>
          <div className="mx-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" fill="#7D1F24" />
            </svg>
          </div>
          <div className="w-12 sm:w-16 h-px bg-burgundy/30"></div>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[0.15em] sm:tracking-[0.25em] lg:tracking-[0.35em] text-burgundy">
          ITINERARIO
        </h2>

        <div className="flex items-center justify-center mt-4">
          <div className="w-12 sm:w-16 h-px bg-burgundy/30"></div>
          <div className="mx-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" fill="#7D1F24" />
            </svg>
          </div>
          <div className="w-12 sm:w-16 h-px bg-burgundy/30"></div>
        </div>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-12 lg:gap-16 xl:gap-24 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* BLOQUE 1 - STOCK & WOODS */}
        <article className="flex flex-col items-center justify-center text-center bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg border border-burgundy/20 shadow-xl relative overflow-hidden aspect-square">
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 opacity-20">
            <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="#7D1F24" />
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 opacity-20">
            <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="#7D1F24" />
            </svg>
          </div>

          {/* Custom Icon */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-3 sm:mb-6 lg:mb-8 flex items-center justify-center bg-burgundy/5 rounded-full">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 relative">
              <Image
                src="/assets/images/icono.png"
                alt="Stock & Woods icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="font-serif tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.25em] text-lg sm:text-xl md:text-2xl lg:text-[28px] text-burgundy mb-2 sm:mb-4 md:mb-6 font-semibold">
            STOCK &amp; WOODS
          </h3>

          {/* Date and time with icons */}
          <div className="space-y-1 sm:space-y-2 md:space-y-3 mb-3 sm:mb-6 md:mb-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-burgundy/80">
              <Calendar size={14} className="md:hidden text-burgundy/60" />
              <Calendar size={16} className="hidden md:block lg:hidden text-burgundy/60" />
              <Calendar size={20} className="hidden lg:block text-burgundy/60" />
              <span className="font-sans">29 / 06 / 2025</span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-burgundy/80">
              <Clock size={14} className="md:hidden text-burgundy/60" />
              <Clock size={16} className="hidden md:block lg:hidden text-burgundy/60" />
              <Clock size={20} className="hidden lg:block text-burgundy/60" />
              <span className="font-sans">7:00 PM</span>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="w-10 sm:w-12 md:w-16 h-px bg-burgundy/30 mb-3 sm:mb-4 md:mb-6"></div>

          {/* Location button */}
          <a
            href="#mapa-salon"
            className="inline-flex items-center gap-1 sm:gap-2 border border-burgundy/30 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-burgundy/80 text-xs sm:text-sm md:text-base font-sans
                       hover:text-gold hover:border-gold/60 hover:bg-gold/5 transition-all duration-200
                       focus-visible:outline-gold focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label="Ver ubicación de Stock & Woods"
          >
            <MapPin size={12} className="md:hidden" />
            <MapPin size={14} className="hidden md:block lg:hidden" />
            <MapPin size={16} className="hidden lg:block" />
            Ver ubicación
          </a>
        </article>

        {/* BLOQUE 2 - CATEDRAL */}
        <article className="flex flex-col items-center justify-center text-center bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg border border-burgundy/20 shadow-xl relative overflow-hidden aspect-square">
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 opacity-20">
            <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="#7D1F24" />
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 opacity-20">
            <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="#7D1F24" />
            </svg>
          </div>

          {/* Icon */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-3 sm:mb-6 lg:mb-8 flex items-center justify-center bg-burgundy/5 rounded-full">
            <Church size={24} className="md:hidden text-burgundy stroke-1" strokeWidth={1} />
            <Church size={32} className="hidden md:block lg:hidden text-burgundy stroke-1" strokeWidth={1} />
            <Church size={40} className="hidden lg:block xl:hidden text-burgundy stroke-1" strokeWidth={1} />
            <Church size={56} className="hidden xl:block text-burgundy stroke-1" strokeWidth={1} />
          </div>

          <h3 className="font-serif tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.25em] text-lg sm:text-xl md:text-2xl lg:text-[28px] text-burgundy mb-2 sm:mb-4 md:mb-6 font-semibold">
            CATEDRAL DE MONTERREY
          </h3>

          {/* Date and time with icons */}
          <div className="space-y-1 sm:space-y-2 md:space-y-3 mb-3 sm:mb-6 md:mb-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-burgundy/80">
              <Calendar size={14} className="md:hidden text-burgundy/60" />
              <Calendar size={16} className="hidden md:block lg:hidden text-burgundy/60" />
              <Calendar size={20} className="hidden lg:block text-burgundy/60" />
              <span className="font-sans">28 / 06 / 2025</span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-burgundy/80">
              <Clock size={14} className="md:hidden text-burgundy/60" />
              <Clock size={16} className="hidden md:block lg:hidden text-burgundy/60" />
              <Clock size={20} className="hidden lg:block text-burgundy/60" />
              <span className="font-sans">12:00 PM</span>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="w-10 sm:w-12 md:w-16 h-px bg-burgundy/30 mb-3 sm:mb-4 md:mb-6"></div>

          {/* Location button */}
          <a
            href="#mapa-catedral"
            className="inline-flex items-center gap-1 sm:gap-2 border border-burgundy/30 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-burgundy/80 text-xs sm:text-sm md:text-base font-sans
                       hover:text-gold hover:border-gold/60 hover:bg-gold/5 transition-all duration-200
                       focus-visible:outline-gold focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label="Ver ubicación de Catedral de Monterrey"
          >
            <Church size={12} className="md:hidden" />
            <Church size={14} className="hidden md:block lg:hidden" />
            <Church size={16} className="hidden lg:block" />
            Ver ubicación
          </a>
        </article>
      </div>
    </section>
  )
} 