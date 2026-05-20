'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const heroImages = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center blur-md scale-110"
            style={{
              backgroundImage: `url(${heroImages[currentIndex]})`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center justify-center gap-1"
        >
          <img
            src="/images/logo.png"
            alt="PRIMAR Logo"
            className="h-[96px] md:h-[144px] w-auto"
          />
          <div className="text-6xl md:text-8xl font-bold font-inter text-white tracking-tight">
            Primar
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold font-inter text-white tracking-tight leading-[1.15] max-w-5xl mx-auto"
        >
          Acompañamos decisiones en el mundo inmobiliario
        </motion.h1>
      </div>
    </section>
  )
}
