"use client"

import Image from "next/image"
import { Sparkles, Users, Heart } from "lucide-react"

export default function DressCodeSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-stone-100 relative overflow-hidden">
      {/* Floating decorative elements - different pattern */}
      <div className="absolute inset-0 opacity-8">
        {/* Floating circles instead of stars */}
        <div className="absolute top-16 left-16 w-3 h-3 rounded-full bg-burgundy animate-pulse"></div>
        <div className="absolute top-32 right-24 w-2 h-2 rounded-full bg-gold animate-pulse delay-300"></div>
        <div className="absolute bottom-24 left-32 w-4 h-4 rounded-full bg-burgundy animate-pulse delay-700"></div>
        <div className="absolute bottom-16 right-16 w-2.5 h-2.5 rounded-full bg-gold animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-burgundy animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-3.5 h-3.5 rounded-full bg-gold animate-pulse delay-200"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Different title style - centered with icon */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-burgundy/10 rounded-full mb-6">
            <Users size={28} className="text-burgundy" />
          </div>

          <h2 className="font-serif text-[48px] tracking-[0.3em] text-burgundy mb-4">DRESS CODE</h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Different layout - centered with overlapping elements */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main content card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-burgundy/10 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Image section - different positioning */}
              <div className="lg:col-span-2 relative">
                <div className="aspect-[4/3] sm:aspect-[3/4] lg:aspect-auto lg:h-full relative">
                  <Image
                    src="/assets/images/dresscode2.png"
                    alt="Formal dress code examples"
                    width={450}
                    height={600}
                    className="object-contain sm:object-cover w-full h-full transform translate-y-8 sm:translate-y-0"
                  />

                  {/* Overlay badge */}
                  <div className="absolute top-6 left-6 bg-burgundy/90 backdrop-blur-sm text-ivory px-4 py-2 rounded-full">
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} />
                      <span className="text-sm font-medium tracking-wider">FORMAL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content section - different layout */}
              <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Heart size={20} className="text-gold" />
                  <h3 className="font-serif text-2xl lg:text-3xl text-burgundy">Elegancia & Distinción</h3>
                </div>

                <p className="text-charcoal/80 text-lg mb-8 leading-relaxed">
                  Celebremos juntos con elegancia. Hemos elegido un código de vestimenta formal para crear un ambiente
                  sofisticado que haga honor a la importancia de este momento especial.
                </p>

                {/* Different card style - horizontal layout */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-6 bg-burgundy/5 rounded-xl border-l-4 border-burgundy">
                    <div className="flex-shrink-0 w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center">
                      <span className="text-burgundy font-serif text-lg">♂</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-burgundy text-xl mb-2">Caballeros</h4>
                      <p className="text-charcoal/70">
                        Traje oscuro, camisa de vestir, corbata o pajarita, zapatos formales de cuero
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gold/5 rounded-xl border-l-4 border-gold">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <span className="text-gold font-serif text-lg">♀</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-gold text-xl mb-2">Damas</h4>
                      <p className="text-charcoal/70">
                        Vestido de cóctel, vestido largo, conjunto formal con accesorios elegantes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to action - different style */}
                <div className="mt-8 p-6 bg-gradient-to-r from-burgundy/5 to-gold/5 rounded-xl border border-burgundy/10">
                  <p className="text-center text-burgundy/80 italic">
                    "La elegancia es la única belleza que nunca se desvanece"
                  </p>
                  <p className="text-center text-charcoal/60 text-sm mt-2">
                    Gracias por ayudarnos a crear una velada memorable
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating decorative elements around the card */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-burgundy/20 rounded-full"></div>
          <div className="absolute -top-2 -right-6 w-6 h-6 border-2 border-gold/30 rounded-full"></div>
          <div className="absolute -bottom-6 -left-2 w-10 h-10 border-2 border-burgundy/15 rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 w-7 h-7 border-2 border-gold/25 rounded-full"></div>
        </div>
      </div>
    </section>
  )
} 