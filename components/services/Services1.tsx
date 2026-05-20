'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/services'

export default function Services1() {
  return (
    <section id="servicios" className="py-20 bg-cream text-ink relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 10% 0%, rgba(184,146,74,0.12) 0%, transparent 45%), radial-gradient(circle at 90% 100%, rgba(184,146,74,0.08) 0%, transparent 40%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-3">
            Lo que hacemos
          </div>
          <h2 className="font-inter font-bold text-ink text-[36px] md:text-[48px] leading-[1.05] tracking-tight">
            Servicios que acompañan
            <br />
            <span className="text-gold">cada decisión</span>.
          </h2>
          <p className="font-inter text-ink/60 mt-4 text-[15px] leading-[1.6] max-w-lg">
            Equipos especializados por área para que cada operación se cierre con criterio y trazabilidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border border-ink/8 rounded-2xl p-6 shadow-[0_1px_0_rgba(0,0,0,0.03),0_18px_40px_-25px_rgba(15,15,15,0.18)] hover:shadow-[0_1px_0_rgba(0,0,0,0.04),0_30px_60px_-25px_rgba(15,15,15,0.28)] transition-shadow duration-400"
            >
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <motion.div
                  whileHover={{ rotate: -45 }}
                  className="w-9 h-9 rounded-full border border-ink/12 flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-ink/55 group-hover:text-cream transition-colors"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>

              <div className="w-10 h-10 rounded-lg bg-cream/70 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-ink/70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={s.iconPath} />
                </svg>
              </div>

              <h3 className="font-inter font-bold text-ink text-[20px] leading-tight tracking-tight group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <div className="font-mono text-[10.5px] text-ink/40 tracking-[0.2em] uppercase mt-1.5">
                {s.tagline}
              </div>
              <p className="font-inter text-[13.5px] text-ink/65 leading-[1.65] mt-4">
                {s.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
