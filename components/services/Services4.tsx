'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/lib/services'

const storyImages = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/services.jpg',
  '/images/PrimarPhoto.jpeg',
  '/images/hero-1.jpg',
]

export default function Services4() {
  return (
    <section id="servicios" className="py-20 bg-cream text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-3">
                  Nuestros servicios
                </div>
                <h2 className="font-playfair text-[36px] md:text-[48px] leading-[1] tracking-tight text-ink">
                  Trabajamos por
                  <br />
                  <span className="italic text-gold font-light">áreas</span>.
                </h2>
                <p className="font-inter text-ink/65 mt-5 text-[15px] leading-[1.65] max-w-md">
                  Cada operación entra a un equipo especializado con un responsable asignado y una hoja de ruta clara. La idea es simple: que el cliente sepa siempre en qué etapa está.
                </p>
                <div className="mt-7 flex flex-col gap-2">
                  <Link
                    href="/calculadora"
                    className="inline-flex items-center gap-2 font-inter text-[13px] font-medium text-ink hover:text-gold transition-colors"
                  >
                    Calculá tus gastos de escritura
                    <span className="font-mono">→</span>
                  </Link>
                  <Link
                    href="/#blog"
                    className="inline-flex items-center gap-2 font-inter text-[13px] font-medium text-ink/65 hover:text-ink transition-colors"
                  >
                    Leer el blog
                    <span className="font-mono">→</span>
                  </Link>
                </div>

                <div className="mt-10 pt-6 border-t border-ink/10 font-mono text-[10.5px] text-ink/45 tracking-[0.2em] uppercase">
                  {String(services.length).padStart(2, '0')} áreas · CABA & GBA
                </div>
              </motion.div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <ol className="space-y-12">
              {services.map((s, i) => (
                <motion.li
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="grid sm:grid-cols-[140px_1fr] gap-5 items-start">
                    <div
                      className="relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden bg-cover bg-center"
                      style={{ backgroundImage: `url(${storyImages[i % storyImages.length]})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/0 to-transparent" />
                      <div className="absolute top-2 left-2 font-mono text-[10px] text-cream/80 tracking-[0.3em] uppercase bg-ink/40 backdrop-blur-sm px-2 py-0.5 rounded">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-2">
                        {s.tagline}
                      </div>
                      <h3 className="font-playfair text-[28px] md:text-[36px] tracking-tight leading-[1.05] text-ink group-hover:text-gold transition-colors">
                        {s.title}
                      </h3>
                      <p className="font-inter text-[14.5px] text-ink/70 leading-[1.7] mt-3 max-w-2xl">
                        {s.detail}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-ink/45 group-hover:text-ink transition-colors">
                        <span className="font-mono text-[10.5px] tracking-[0.25em] uppercase">
                          Hablar con el equipo
                        </span>
                        <motion.span
                          className="inline-block font-mono"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </div>
                  {i < services.length - 1 && (
                    <div className="mt-10 h-px bg-ink/8" />
                  )}
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
