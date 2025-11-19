'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Compra y Venta',
    description: 'Asesoramiento completo para la compra o venta de tu propiedad con transparencia y profesionalismo.',
    icon: '🏠',
  },
  {
    title: 'Alquileres',
    description: 'Encontramos el alquiler perfecto para ti o gestionamos tu propiedad para obtener los mejores resultados.',
    icon: '🔑',
  },
  {
    title: 'Tasaciones',
    description: 'Valuaciones precisas y profesionales para conocer el valor real de tu propiedad en el mercado.',
    icon: '📊',
  },
  {
    title: 'Asesoramiento Legal',
    description: 'Acompañamiento legal en todas las etapas de tu transacción inmobiliaria con expertos en derecho.',
    icon: '⚖️',
  },
  {
    title: 'Inversiones',
    description: 'Orientación especializada para inversiones inmobiliarias con análisis de rentabilidad y oportunidades.',
    icon: '💼',
  },
  {
    title: 'Administración',
    description: 'Gestión integral de propiedades con servicios de administración y mantenimiento profesional.',
    icon: '📋',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-poppins text-white text-center mb-12"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold font-poppins text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 font-poppins leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

