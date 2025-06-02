"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, MapPin, Clock, Calendar } from "lucide-react"

export default function CathedralSection() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const titleRef = useRef<HTMLDivElement>(null)
  const leftPhotoRef = useRef<HTMLDivElement>(null)
  const centerPhotoRef = useRef<HTMLDivElement>(null)
  const rightPhotoRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const mobilePhotosRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px 0px -50px 0px'
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
      { ref: leftPhotoRef, id: 'leftPhoto' },
      { ref: centerPhotoRef, id: 'centerPhoto' },
      { ref: rightPhotoRef, id: 'rightPhoto' },
      { ref: infoRef, id: 'info' },
      { ref: mobilePhotosRef, id: 'mobilePhotos' }
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
    <section id="cathedral" className="py-16 bg-burgundy relative overflow-hidden">
      {/* Elegant texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy via-burgundy to-red-900 opacity-95"></div>

      {/* Enhanced pattern overlay with subtle animation */}
      <div className="absolute inset-0 opacity-8">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(249, 246, 239, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(249, 246, 239, 0.08) 1px, transparent 1px),
                           radial-gradient(circle at 50% 50%, rgba(181, 154, 55, 0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px, 80px 80px, 100px 100px",
            animationDuration: "4s"
          }}
        ></div>
      </div>

      {/* Decorative border elements with glow effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-ivory/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-ivory/30 to-transparent animate-pulse"></div>

      {/* Corner ornaments with subtle float animation */}
      <div className="absolute top-8 left-8 opacity-20 animate-bounce" style={{ animationDuration: "3s" }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12L16 0Z" fill="#F9F6EF" />
        </svg>
      </div>
      <div className="absolute top-8 right-8 opacity-20 animate-bounce" style={{ animationDuration: "3.5s" }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12L16 0Z" fill="#F9F6EF" />
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 opacity-20 animate-bounce" style={{ animationDuration: "4s" }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12L16 0Z" fill="#F9F6EF" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 opacity-20 animate-bounce" style={{ animationDuration: "3.2s" }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12L16 0Z" fill="#F9F6EF" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Enhanced Title Section with scroll animation */}
        <div 
          ref={titleRef}
          className={`text-center mb-12 lg:mb-20 transition-all duration-1000 ease-out ${
            isVisible('title') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center mb-4 lg:mb-6">
            <div className="w-12 lg:w-20 h-px bg-ivory/30"></div>
            <div className="mx-2 lg:mx-4 relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-6 lg:h-6 animate-spin" style={{ animationDuration: "8s" }}>
                <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="#F9F6EF" />
              </svg>
            </div>
            <div className="w-12 lg:w-20 h-px bg-ivory/30"></div>
          </div>

          <h2 className="font-sans text-[24px] sm:text-[30px] lg:text-[44px] tracking-[0.25em] lg:tracking-[0.35em] text-ivory font-bold uppercase mb-4 lg:mb-6 relative px-2">
            MISA DE ACCIÓN DE GRACIAS
            {/* Subtle text shadow */}
            <div className="absolute inset-0 text-burgundy/30 transform translate-x-0.5 translate-y-0.5 -z-10">
              MISA DE ACCIÓN DE GRACIAS
            </div>
          </h2>

          <h3 className="font-script text-[36px] sm:text-[42px] lg:text-[68px] text-ivory text-shadow-script mb-4 lg:mb-6 relative">
            Catedral de Mty
            {/* Decorative flourishes */}
            <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10C10 5 30 15 40 10" stroke="#F9F6EF" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 10C30 5 10 15 0 10" stroke="#F9F6EF" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
          </h3>

          <div className="flex items-center justify-center mt-4 lg:mt-6">
            <div className="w-12 lg:w-20 h-px bg-ivory/30"></div>
            <div className="mx-2 lg:mx-4 relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-6 lg:h-6 animate-spin" style={{ animationDuration: "8s", animationDirection: "reverse" }}>
                <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="#F9F6EF" />
              </svg>
            </div>
            <div className="w-12 lg:w-20 h-px bg-ivory/30"></div>
          </div>
        </div>

        {/* Enhanced Photo Gallery with staggered animations */}
        <div className="flex items-center justify-center gap-8 lg:gap-16 mb-12 lg:mb-20">
          {/* Left Photo - Enhanced frame with slide-in animation */}
          <div 
            ref={leftPhotoRef}
            className={`hidden lg:block relative transition-all duration-1000 ease-out ${
              isVisible('leftPhoto') 
                ? 'opacity-100 translate-x-0 rotate-2' 
                : 'opacity-0 -translate-x-12 rotate-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-ivory p-6 rounded-sm shadow-2xl hover:rotate-0 transition-all duration-500 hover:scale-105 relative hover:shadow-3xl">
              {/* Inner decorative border */}
              <div className="absolute inset-4 border border-charcoal/10 rounded-sm pointer-events-none"></div>

              <Image
                src="/assets/images/foto3.webp"
                alt="Vista lateral de la Catedral de Monterrey"
                width={220}
                height={280}
                className="object-cover rounded-sm relative z-10 transition-transform duration-300 hover:scale-105"
              />

              {/* Enhanced caption with decorative elements */}
              <div className="mt-4 text-center relative">
                <div className="w-8 h-px bg-charcoal/20 mx-auto mb-2"></div>
                <span className="text-charcoal/70 text-xs font-serif italic tracking-wide">Misa de Acción de Gracias</span>
                <div className="w-8 h-px bg-charcoal/20 mx-auto mt-2"></div>
              </div>
            </div>

            {/* Enhanced corner accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-ivory/40"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-ivory/40"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gold/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>

          {/* Center Photo - Enhanced with scale animation */}
          <div 
            ref={centerPhotoRef}
            className={`relative transition-all duration-1000 ease-out ${
              isVisible('centerPhoto') 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Background color huevo solo para la imagen central */}
            <div className="absolute inset-0 bg-[#FFF8E7] rounded-lg"></div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <Image
                src="/assets/images/iglesia.png"
                alt="Catedral de Monterrey - Vista principal"
                width={650}
                height={450}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Enhanced overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Enhanced photo title overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-ivory/20 transition-all duration-300 hover:bg-black/60 hover:border-ivory/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                    <h4 className="text-ivory font-serif text-lg tracking-wide">Catedral de Monterrey</h4>
                  </div>
                  <p className="text-ivory/80 text-sm font-light">Patrimonio Histórico de la Ciudad</p>
                </div>
              </div>
            </div>

            {/* Enhanced decorative frame elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-ivory/30"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-ivory/30"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-ivory/30"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-ivory/30"></div>
          </div>

          {/* Right Photo - Enhanced frame with slide-in animation */}
          <div 
            ref={rightPhotoRef}
            className={`hidden lg:block relative transition-all duration-1000 ease-out ${
              isVisible('rightPhoto') 
                ? 'opacity-100 translate-x-0 -rotate-2' 
                : 'opacity-0 translate-x-12 -rotate-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="bg-ivory p-6 rounded-sm shadow-2xl hover:rotate-0 transition-all duration-500 hover:scale-105 relative hover:shadow-3xl">
              {/* Inner decorative border */}
              <div className="absolute inset-4 border border-charcoal/10 rounded-sm pointer-events-none"></div>

              <Image
                src="/assets/images/foto1.webp"
                alt="Interior de la Catedral de Monterrey"
                width={220}
                height={280}
                className="object-cover rounded-sm relative z-10 transition-transform duration-300 hover:scale-105"
              />

              {/* Enhanced caption with decorative elements */}
              <div className="mt-4 text-center relative">
                <div className="w-8 h-px bg-charcoal/20 mx-auto mb-2"></div>
                <span className="text-charcoal/70 text-xs font-serif italic tracking-wide">Interior Sagrado</span>
                <div className="w-8 h-px bg-charcoal/20 mx-auto mt-2"></div>
              </div>
            </div>

            {/* Enhanced corner accents */}
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-ivory/40"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-ivory/40"></div>
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-gold/30 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gold/30 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>

        {/* Mobile photos with fade-in animation */}
        <div 
          ref={mobilePhotosRef}
          className={`lg:hidden grid grid-cols-2 gap-6 mb-16 max-w-sm mx-auto transition-all duration-1000 ease-out ${
            isVisible('mobilePhotos') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-ivory p-4 rounded-sm shadow-xl relative hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform">
            <div className="absolute inset-3 border border-charcoal/10 rounded-sm pointer-events-none"></div>
            <Image
              src="/assets/images/foto3.webp"
              alt="Vista lateral de la Catedral"
              width={140}
              height={180}
              className="object-cover rounded-sm w-full"
            />
            <div className="mt-3 text-center">
              <div className="w-6 h-px bg-charcoal/20 mx-auto mb-1"></div>
              <span className="text-charcoal/70 text-xs font-serif italic">Misa de Acción de Gracias</span>
            </div>
          </div>

          <div className="bg-ivory p-4 rounded-sm shadow-xl relative hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform">
            <div className="absolute inset-3 border border-charcoal/10 rounded-sm pointer-events-none"></div>
            <Image
              src="/assets/images/foto1.webp"
              alt="Interior de la Catedral"
              width={140}
              height={180}
              className="object-cover rounded-sm w-full"
            />
            <div className="mt-3 text-center">
              <div className="w-6 h-px bg-charcoal/20 mx-auto mb-1"></div>
              <span className="text-charcoal/70 text-xs font-serif italic">Interior Sagrado</span>
            </div>
          </div>
        </div>

        {/* Enhanced Event Information with slide-up animation */}
        <div 
          ref={infoRef}
          className={`text-center text-ivory space-y-4 lg:space-y-6 max-w-4xl mx-auto px-4 transition-all duration-1000 ease-out ${
            isVisible('info') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          {/* Location Link with enhanced styling and hover effects */}
          <a
            href="https://www.google.com/maps/place/Santa+Iglesia+Catedral+Metropolitana+de+Monterrey/@25.6656943,-100.3123949,17z/data=!3m1!4b1!4m6!3m5!1s0x8662be2ddbcbb061:0x4604ad25f604a4c8!8m2!3d25.6656943!4d-100.30982!16s%2Fg%2F122qgjtn?entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 lg:gap-3 text-ivory text-base lg:text-xl font-medium uppercase tracking-[0.15em] lg:tracking-[0.2em] hover:text-gold transition-all duration-300 focus-visible:outline-gold relative hover:scale-105 transform"
            aria-label="Ver ubicación de la Catedral de Monterrey"
          >
            <span className="border-b border-transparent group-hover:border-gold transition-all duration-200 relative">
              VER UBICACIÓN AQUÍ
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></div>
            </span>
            <ArrowRight size={18} className="lg:w-5 lg:h-5 transform group-hover:translate-x-1 transition-transform duration-200 group-hover:text-gold" />
          </a>

          {/* Enhanced Address with icons and hover effects */}
          <div className="space-y-2 lg:space-y-3">
            <div className="flex items-center justify-center gap-2 lg:gap-3 text-ivory/90">
              <MapPin size={18} className="text-gold lg:w-5 lg:h-5 animate-pulse" />
              <span className="text-xs lg:text-sm font-medium tracking-wider uppercase">Ubicación</span>
            </div>
            <div className="text-ivory text-base sm:text-lg lg:text-2xl xl:text-3xl font-bold tracking-[0.1em] lg:tracking-[0.15em] uppercase font-serif leading-relaxed px-2">
              JUAN ZUAZUA 1100 SUR, CENTRO
              <br />
              64000 MONTERREY, N.L.
            </div>
          </div>

          {/* Enhanced Date and Time with icons and hover effects */}
          <div className="space-y-2 lg:space-y-3">
            <div className="flex items-center justify-center gap-4 lg:gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-ivory/90">
                <Calendar size={16} className="text-gold lg:w-[18px] lg:h-[18px] animate-pulse" style={{ animationDelay: "1s" }} />
                <span className="text-xs lg:text-sm font-medium tracking-wider">28 DE JUNIO 2025</span>
              </div>
              <div className="flex items-center gap-2 text-ivory/90">
                <Clock size={16} className="text-gold lg:w-[18px] lg:h-[18px] animate-pulse" style={{ animationDelay: "2s" }} />
                <span className="text-xs lg:text-sm font-medium tracking-wider">12:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 