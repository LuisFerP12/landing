import type React from "react"
import type { Metadata } from "next"
import { Poppins, Great_Vibes, Playfair_Display, Instrument_Serif } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
})

const sloopScript = localFont({
  src: "../public/font/Sloop-ScriptOne.woff2",
  variable: "--font-sloop-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Stock & Woods - La Mejor Celebración",
  description: "Elegant event venue for your special celebrations",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${greatVibes.variable} ${playfair.variable} ${instrumentSerif.variable} ${sloopScript.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
