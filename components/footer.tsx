"use client"
import { Star } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-ivory via-polaroid-bottom to-ivory overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(125, 31, 36, 0.08) 1px, transparent 1px),
                           radial-gradient(circle at 80% 70%, rgba(181, 154, 55, 0.06) 1px, transparent 1px)`,
            backgroundSize: "80px 80px, 120px 120px",
          }}
        ></div>
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-burgundy/40 to-transparent"></div>

      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-6 py-8 lg:py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Header text */}
          <div className="text-xs text-burgundy/70 tracking-[0.3em] uppercase mb-1">LEM 129</div>
          <div className="text-xs text-burgundy/70 tracking-[0.3em] uppercase mb-4">TEC DE MONTERREY</div>

          {/* Main EUFORIA logo */}
          <div className="mb-4 flex justify-center">
            <Image
              src="/assets/images/euforialogo.png"
              alt="EUFORIA Logo"
              width={500}
              height={150}
              className="w-auto h-24 lg:h-32 object-contain"
              priority
            />
          </div>

          {/* Description */}
          <p className="text-burgundy/80 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto mb-6 tracking-wide">
            EXPERIENCE THE NIGHT EVERYONE WILL TALK ABOUT. WE CREATE THE
            <br />
            SETTING YOU LIVE THE MOMENT. EXPERIENCE THE NIGHT EVERYONE
            <br />
            WILL TALK ABOUT
          </p>

          {/* Agency Badge - Clean design */}
          <div className="inline-flex items-center gap-6 border-2 border-burgundy/20 bg-ivory/50 backdrop-blur-sm rounded-lg px-6 py-4 shadow-sm">
            {/* Left section */}
            <div className="text-burgundy text-xs font-medium tracking-wide text-center">
              <div>EUFORIA</div>
              <div>SOCIAL</div>
              <div>AGENCY</div>
            </div>

            {/* Star */}
            <Star size={28} className="text-gold fill-gold" />

            {/* Center text */}
            <div className="text-burgundy/70 text-xs text-center italic">It's a celebration.</div>

            {/* Right section */}
            <div className="text-burgundy text-xs font-medium text-center tracking-wide">
              <div>LEM 129</div>
              <div>TEC DE MONTERREY</div>
            </div>

            {/* Cocktail icon */}
            <div className="text-gold text-xl">🍸</div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-6 left-6 opacity-20">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="#7D1F24" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 opacity-20">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="#7D1F24" />
        </svg>
      </div>
    </footer>
  )
} 