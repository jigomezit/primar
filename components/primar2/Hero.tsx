'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection } from '@/utils/scrollToSection'

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

  // const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault()
  //   scrollToSection('proyectos')
  // } // Se usará a futuro

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image Carousel */}
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

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
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
          <div className="text-6xl md:text-8xl font-bold font-poppins text-white">
            Primar
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold font-poppins text-white mb-8"
        >
          Hogar, Confianza y futuro
        </motion.h1>

        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-poppins font-medium text-white mb-8"
        >
          Servicios inmobiliarios
        </motion.h3>

        {/* CTA Button - Se usará a futuro */}
        {/* <motion.a
          href="#proyectos"
          onClick={handleCTAClick}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.6 },
            y: { duration: 0.8, delay: 0.6 },
            scale: { duration: 0.3, ease: "easeOut" }
          }}
          whileHover={{ 
            scale: 1.15,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-black px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-gray-200 transition-colors cursor-pointer"
        >
          Ver Proyectos
        </motion.a> */}
      </div>
    </section>
  )
}

