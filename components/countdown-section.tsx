"use client"

import { useState, useEffect, useRef } from "react"

// Updated with actual event images
const images = [
  "/assets/images/064.jpg",
  "/assets/images/070.jpg", 
  "/assets/images/090.jpg",
  "/assets/images/092.jpg",
  "/assets/images/132.jpg",
  "/assets/images/172.jpg",
]

const IMAGE_CHANGE_INTERVAL = 3000 // Increased to 3 seconds for better UX

export default function CountdownSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)

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

  // Countdown timer
  const [countdown, setCountdown] = useState({
    days: 28,
    hours: 0,
    minutes: 5,
    seconds: 54,
  })

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown((prevCountdown) => {
        let { days, hours, minutes, seconds } = prevCountdown
        if (seconds > 0) seconds--
        else {
          seconds = 59
          if (minutes > 0) minutes--
          else {
            minutes = 59
            if (hours > 0) hours--
            else {
              hours = 23
              if (days > 0) days--
            }
          }
        }
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(countdownTimer)
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(countdownTimer)
  }, [])

  return (
    <div ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black">
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
        <nav className="w-full flex justify-between items-center text-xs lg:text-sm font-normal uppercase tracking-wider opacity-90">
          <span>@EUFORIA</span>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <span>GRADUACIÓN</span>
            <span>MISA</span>
            <span>CLIMA</span>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col items-center text-center">
          {/* Event Branding */}
          <div className="mb-6 lg:mb-8">
            <span className="block text-sm lg:text-lg font-normal tracking-wide opacity-90 uppercase mb-2 lg:mb-4">
              ® EUFORIA PRESENTA
            </span>

            {/* Title with Drop Cap */}
            <div className="font-instrument-serif text-7xl sm:text-9xl lg:text-[140px] xl:text-[150px] leading-none inline-block mb-2 lg:mb-3">
              <span className="font-sloop-script text-9xl sm:text-[140px] lg:text-[180px] xl:text-[240px] leading-[0.7] mr-1 inline-block align-baseline relative -top-2 drop-shadow-lg">
                P
              </span>
              ROM LEM 129
            </div>
          </div>

          {/* Countdown Container */}
          <div className="flex items-start justify-center">
            <div className="flex flex-col items-center mx-2 lg:mx-3">
              <span className="font-mono text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-none tracking-wide">
                {String(countdown.days).padStart(2, "0")}
              </span>
              <span className="text-xs lg:text-sm uppercase font-light tracking-widest mt-1 opacity-85">DÍAS</span>
            </div>

            <div className="font-mono text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-none mx-1 pt-1">
              :
            </div>

            <div className="flex flex-col items-center mx-2 lg:mx-3">
              <span className="font-mono text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-none tracking-wide">
                {String(countdown.hours).padStart(2, "0")}
              </span>
              <span className="text-xs lg:text-sm uppercase font-light tracking-widest mt-1 opacity-85">HRS</span>
            </div>

            <div className="font-mono text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-none mx-1 pt-1">
              :
            </div>

            <div className="flex flex-col items-center mx-2 lg:mx-3">
              <span className="font-mono text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-none tracking-wide">
                {String(countdown.minutes).padStart(2, "0")}
              </span>
              <span className="text-xs lg:text-sm uppercase font-light tracking-widest mt-1 opacity-85">MIN</span>
            </div>

            <div className="font-mono text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-none mx-1 pt-1">
              :
            </div>

            <div className="flex flex-col items-center mx-2 lg:mx-3">
              <span className="font-mono text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-none tracking-wide">
                {String(countdown.seconds).padStart(2, "0")}
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
