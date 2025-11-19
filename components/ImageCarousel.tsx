'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const placeholderImages = [
  '/images/placeholder-1.jpg',
  '/images/placeholder-2.jpg',
  '/images/placeholder-3.jpg',
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placeholderImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gray-200">
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
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${placeholderImages[currentIndex]})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="max-w-4xl mx-auto px-4 text-center"
              >
                <p className="text-white text-2xl md:text-4xl font-poppins font-medium leading-relaxed">
                  Tu próxima propiedad, más cerca: te acompañamos en cada decisión de compra, inversión o alquiler.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {placeholderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

