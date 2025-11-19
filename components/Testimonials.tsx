'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  comment: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    role: 'Compradora',
    comment: 'Excelente servicio y profesionalismo. Me ayudaron a encontrar la propiedad perfecta y el proceso fue muy transparente. Recomiendo totalmente.',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Juan Pérez',
    role: 'Inversor',
    comment: 'Gracias a su asesoramiento pude realizar una excelente inversión. El equipo es muy conocedor del mercado y siempre están disponibles.',
    image: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Arrendataria',
    comment: 'Encontraron el departamento ideal para mi familia en tiempo récord. El trato fue personalizado y muy profesional en todo momento.',
    image: '/images/testimonial-3.jpg',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-poppins text-white text-center mb-12"
        >
          Lo que Dicen Nuestros Clientes
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-8 md:p-12 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg font-poppins text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].comment}"
                  </p>
                  <div>
                    <p className="font-bold font-poppins text-white text-xl">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="font-poppins text-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

