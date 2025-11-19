'use client'

import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 bg-gray-800 rounded-lg overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <span className="text-gray-400 font-poppins">Imagen About Us</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg font-poppins text-gray-300 mb-4 leading-relaxed">
              Somos una inmobiliaria con años de experiencia en el mercado, especializados en brindar soluciones integrales para la compra, venta y alquiler de propiedades.
            </p>
            <p className="text-lg font-poppins text-gray-300 mb-4 leading-relaxed">
              Nuestro equipo de profesionales está comprometido en acompañarte en cada paso del proceso, ofreciendo asesoramiento personalizado y transparente para que encuentres la propiedad que mejor se adapte a tus necesidades.
            </p>
            <p className="text-lg font-poppins text-gray-300 leading-relaxed">
              Trabajamos con dedicación y profesionalismo para convertir tus sueños inmobiliarios en realidad, garantizando confianza y seguridad en cada transacción.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

