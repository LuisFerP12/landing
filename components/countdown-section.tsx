"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

// Updated with actual event images
const images = [
  "/assets/images/064.webp",
  "/assets/images/070.webp", 
  "/assets/images/090.webp",
  "/assets/images/092.webp",
  "/assets/images/132.webp",
  "/assets/images/172.webp",
]

const IMAGE_CHANGE_INTERVAL = 3000 // Increased to 3 seconds for better UX

export default function CountdownSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Navigation items
  const navItems = [
    { name: "GRADUACIÓN", href: "#hero" },
    { name: "ITINERARIO", href: "#itinerary" },
    { name: "MISA", href: "#cathedral" },
    { name: "VESTIMENTA", href: "#dress-code" }
  ]

  // Smooth scroll function
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  // Preload all images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((src, index) => {
        return new Promise<number>((resolve) => {
          const img = new Image()
          img.onload = () => resolve(index)
          img.onerror = () => resolve(index) // Still resolve to avoid hanging
          img.src = src
        })
      })

      Promise.all(imagePromises).then((loadedIndexes) => {
        setLoadedImages(new Set(loadedIndexes))
        setImagesLoaded(true)
      })
    }

    preloadImages()
  }, [])

  // Image slideshow effect - only start after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, IMAGE_CHANGE_INTERVAL)

    return () => clearInterval(imageInterval)
  }, [imagesLoaded])

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Calculate time to event
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-06-29T19:00:00')
    const currentTime = new Date()
    const difference = eventDate.getTime() - currentTime.getTime()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    if (!isClient) return

    // Initialize countdown immediately after client mounts
    setCountdown(calculateTimeLeft())

    const countdownTimer = setInterval(() => {
      setCountdown(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(countdownTimer)
  }, [isClient])

  return (
    <div id="countdown" ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image Slideshow with improved loading */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 grayscale contrast-110 brightness-105 ${
          !imagesLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      />

      {/* Loading state overlay */}
      {!imagesLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-amber-50 text-center">
            <div className="w-8 h-8 border-2 border-amber-50 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm uppercase tracking-wider">Cargando...</p>
          </div>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 flex flex-col justify-between items-center p-6 lg:p-12 text-amber-50">
        {/* Top Navigation */}
        <nav className="w-full flex justify-between items-center text-xs lg:text-sm font-normal uppercase tracking-wider opacity-90 relative z-50">
          <span>@EUFORIA</span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-gold transition-colors duration-200 cursor-pointer hover:opacity-100"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:text-gold transition-all duration-200 hover:bg-white/10 rounded-lg z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu Full Screen */}
        <div 
          className={`fixed inset-0 bg-black z-40 md:hidden transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-2xl font-light tracking-wider hover:text-gold transition-colors duration-200 uppercase"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center text-center">
          {/* Event Branding */}
          <div className="mb-6 lg:mb-8">
            <span className="block text-xs lg:text-sm font-normal tracking-wide opacity-90 uppercase mb-2 lg:mb-4">
              ® EUFORIA PRESENTA
            </span>

            {/* Title with Drop Cap */}
            <div className="font-instrument-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none inline-block mb-0 lg:mb-1 relative">
              <span className="font-sloop-script text-8xl sm:text-9xl lg:text-[120px] xl:text-[140px] leading-[0.7] mr-1 inline-block relative drop-shadow-lg" style={{ transform: 'translateY(-0.05em)' }}>
                P
              </span>
              ROM LEM 129
            </div>
          </div>

          {/* Countdown Container */}
          <div className="flex items-start justify-center">
            <div className="flex flex-col items-center mx-2 lg:mx-3">
              <span className="font-mono text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-none tracking-wide">
                {isClient ? String(countdown.days).padStart(2, "0") : "00"}
              </span>
              <span className="text-xs lg:text-sm uppercase font-light tracking-widest mt-1 opacity-85">DÍAS</span>
            </div>

            <div className="font-mono text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-none mx-1 pt-1">
              :
            </div>

            <div className="flex flex-col items-center mx-2 lg:mx-3">
              <span className="font-mono text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-none tracking-wide">
                {isClient ? String(countdown.hours).padStart(2, "0") : "00"}
              </span>
              <span className="text-xs lg:text-sm uppercase font-light tracking-widest mt-1 opacity-85">HRS</span>
            </div>

            <div className="font-mono text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-none mx-1 pt-1">
              :
            </div>

            <div className="flex flex-col items-center mx-2 lg:mx-3">
              <span className="font-mono text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-none tracking-wide">
                {isClient ? String(countdown.minutes).padStart(2, "0") : "00"}
              </span>
              <span className="text-xs lg:text-sm uppercase font-light tracking-widest mt-1 opacity-85">MIN</span>
            </div>

            <div className="font-mono text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-none mx-1 pt-1">
              :
            </div>

            <div className="flex flex-col items-center mx-2 lg:mx-3">
              <span className="font-mono text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-none tracking-wide">
                {isClient ? String(countdown.seconds).padStart(2, "0") : "00"}
              </span>
              <span className="text-xs lg:text-sm uppercase font-light tracking-widest mt-1 opacity-85">SEG</span>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <footer className="w-full flex justify-end">{/* Footer content if needed */}</footer>
      </div>
    </div>
  )
}
