'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/services'

export default function Services2() {
  return (
    <section id="servicios" className="py-20 bg-cream text-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between gap-6 flex-wrap"
        >
          <div className="max-w-xl">
            <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-3">
              Catálogo de servicios
            </div>
            <h2 className="font-playfair text-[40px] md:text-[56px] leading-[0.98] tracking-tight text-ink">
              Lo que sabemos
              <br />
              <span className="italic text-gold font-light">hacer bien</span>.
            </h2>
          </div>
          <div className="font-mono text-[11px] text-ink/45 tracking-[0.25em] uppercase">
            {String(services.length).padStart(2, '0')} áreas · 2026
          </div>
        </motion.div>

        <ol className="border-t border-ink/10">
          {services.map((s, i) => (
            <motion.li
              key={s.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="group border-b border-ink/10 hover:border-l-2 hover:border-l-gold transition-all"
            >
              <div className="grid md:grid-cols-[80px_1fr_auto] gap-5 md:gap-8 items-start py-7 px-2 md:px-4">
                <div className="font-playfair italic text-gold text-[44px] md:text-[56px] leading-none tracking-tight">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-playfair text-[24px] md:text-[30px] tracking-tight text-ink leading-tight">
                    {s.title}
                  </h3>
                  <div className="font-mono text-[10.5px] text-ink/40 tracking-[0.25em] uppercase mt-1">
                    {s.tagline}
                  </div>
                  <p className="font-inter text-[14.5px] text-ink/70 leading-[1.7] mt-3 max-w-2xl">
                    {s.description}
                  </p>
                </div>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="hidden md:flex items-center gap-2 text-ink/40 group-hover:text-gold transition-colors mt-3"
                >
                  <span className="font-mono text-[10.5px] tracking-[0.25em] uppercase">
                    Ver
                  </span>
                  <span className="font-mono text-lg">→</span>
                </motion.div>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 font-mono text-[11px] text-ink/45 tracking-wider leading-relaxed"
        >
          Cada operación cuenta con un responsable asignado y reporte de avance. Para más detalle escribinos a administracion@primarprop.com.ar.
        </motion.div>
      </div>
    </section>
  )
}
