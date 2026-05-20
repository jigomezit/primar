'use client'

import { motion } from 'framer-motion'

const blogPosts = [
  {
    id: 1,
    title: 'Guía Completa para Comprar tu Primera Casa',
    excerpt: 'Descubre los pasos esenciales y consejos prácticos para adquirir tu primera propiedad inmobiliaria con confianza.',
    date: '15 Marzo 2024',
    category: 'Compra',
    accent: 'from-gray-700 to-gray-900',
  },
  {
    id: 2,
    title: 'Tendencias del Mercado Inmobiliario 2024',
    excerpt: 'Análisis de las tendencias actuales y proyecciones del mercado inmobiliario para este año.',
    date: '10 Marzo 2024',
    category: 'Mercado',
    accent: 'from-gray-800 to-black',
  },
  {
    id: 3,
    title: 'Cómo Aumentar el Valor de tu Propiedad',
    excerpt: 'Consejos prácticos y mejoras que puedes realizar para incrementar significativamente el valor de tu hogar.',
    date: '5 Marzo 2024',
    category: 'Inversión',
    accent: 'from-yellow-600 to-gray-900',
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
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-white mb-4 tracking-tight">
            Blog
          </h2>
          <p className="text-lg font-inter text-gray-300 max-w-2xl mx-auto">
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
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:shadow-yellow-400/20 transition-shadow cursor-pointer group"
            >
              <div className={`relative h-48 bg-gradient-to-br ${post.accent} overflow-hidden`}>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-0 flex items-end p-6"
                >
                  <h4 className="font-inter font-bold text-white/85 text-3xl tracking-tight leading-none">
                    {post.category.toLowerCase()}.
                  </h4>
                </motion.div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="absolute top-4 right-4"
                >
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-inter font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-inter text-gray-400">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-inter text-white mb-3 tracking-tight group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 font-inter text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <motion.button
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="text-yellow-400 font-inter font-semibold text-sm hover:text-yellow-300 transition-colors flex items-center gap-2"
                >
                  Leer más
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-inter font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-yellow-400/40"
          >
            Ver Todos los Artículos
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
