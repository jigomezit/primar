'use client'

import { motion } from 'framer-motion'

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl w-full mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-2"
        >
          Fabiana Pérez
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-poppins text-gray-700 mb-1"
        >
          Martillera Pública
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-base font-poppins text-gray-500"
        >
          CUCICBA MAT. 9024
        </motion.p>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        {/* Mobile Phone */}
        <motion.a
          href="tel:+5491169092147"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-poppins text-gray-500 uppercase tracking-wide">Mobile</p>
            <p className="text-base md:text-lg font-poppins text-gray-900">+54 9 11 69092147</p>
          </div>
        </motion.a>

        {/* Office Phone */}
        <motion.a
          href="tel:+5491134775000"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-poppins text-gray-500 uppercase tracking-wide">Movil Ofi.</p>
            <p className="text-base md:text-lg font-poppins text-gray-900">+54 9 11 34775000</p>
          </div>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:administración@primarprop.com.ar"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-poppins text-gray-500 uppercase tracking-wide">Email</p>
            <p className="text-base md:text-lg font-poppins text-gray-900 break-all">administración@primarprop.com.ar</p>
          </div>
        </motion.a>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-start gap-4 p-4 rounded-lg"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-poppins text-gray-500 uppercase tracking-wide">Dirección</p>
            <p className="text-base md:text-lg font-poppins text-gray-900">Av. Cabildo 2586 3C, CABA</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

