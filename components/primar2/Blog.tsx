'use client'

import { motion } from 'framer-motion'

const blogPosts = [
  {
    id: 1,
    title: 'Guía Completa para Comprar tu Primera Casa',
    excerpt: 'Descubre los pasos esenciales y consejos prácticos para adquirir tu primera propiedad inmobiliaria con confianza.',
    date: '15 Marzo 2024',
    category: 'Compra',
    image: '🏡',
  },
  {
    id: 2,
    title: 'Tendencias del Mercado Inmobiliario 2024',
    excerpt: 'Análisis de las tendencias actuales y proyecciones del mercado inmobiliario para este año.',
    date: '10 Marzo 2024',
    category: 'Mercado',
    image: '📈',
  },
  {
    id: 3,
    title: 'Cómo Aumentar el Valor de tu Propiedad',
    excerpt: 'Consejos prácticos y mejoras que puedes realizar para incrementar significativamente el valor de tu hogar.',
    date: '5 Marzo 2024',
    category: 'Inversión',
    image: '✨',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-black to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4">
            Blog
          </h2>
          <p className="text-lg font-poppins text-gray-300 max-w-2xl mx-auto">
            Mantente informado con nuestros artículos sobre el mercado inmobiliario, consejos y tendencias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {post.image}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-poppins font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-poppins text-gray-400">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-poppins text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 font-poppins text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-yellow-400 font-poppins font-semibold text-sm hover:text-yellow-300 transition-colors flex items-center gap-2">
                  Leer más
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Ver más botón */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-poppins font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg">
            Ver Todos los Artículos
          </button>
        </motion.div>
      </div>
    </section>
  )
}

