'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { aboutMeta, socios, valores } from '@/lib/aboutContent'

export default function AboutUs4() {
  const [hovered, setHovered] = useState<string | null>(null)
  const activeSocio = socios.find((s) => s.initial === hovered) ?? null

  return (
    <section id="nosotros" className="py-20 md:py-24 bg-cream text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-3">
                {aboutMeta.eyebrow}
              </div>
              <h2 className="font-playfair text-[42px] md:text-[58px] leading-[0.98] tracking-tight text-ink">
                {aboutMeta.titleLine1}
                <br />
                <span className="italic text-gold font-light">
                  {aboutMeta.titleAccent}
                </span>
                {aboutMeta.titleEnd}
              </h2>
              <p className="font-inter text-ink/70 mt-6 text-[15.5px] leading-[1.7] max-w-lg">
                {aboutMeta.lead}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 pt-6 border-t border-ink/10"
            >
              <AnimatePresence mode="wait">
                {activeSocio ? (
                  <motion.div
                    key={activeSocio.initial}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-2">
                      Socio {activeSocio.initial}
                    </div>
                    <div className="font-inter font-semibold text-ink text-[16px] tracking-tight">
                      {activeSocio.area}
                    </div>
                    <div className="font-mono text-[11.5px] text-ink/55 tracking-wider mt-1">
                      {activeSocio.formacion}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-2">
                      Pasá el mouse
                    </div>
                    <div className="font-inter font-semibold text-ink text-[16px] tracking-tight">
                      Conocé a cada socio
                    </div>
                    <div className="font-mono text-[11.5px] text-ink/55 tracking-wider mt-1">
                      4 áreas · 1 punto de contacto
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3">
              {socios.map((s, i) => {
                const isActive = hovered === s.initial
                const isDimmed = hovered !== null && !isActive
                return (
                  <motion.button
                    key={s.initial}
                    initial={{ opacity: 0, scale: 0.94, y: 12 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6 }}
                    onMouseEnter={() => setHovered(s.initial)}
                    onMouseLeave={() => setHovered(null)}
                    animate={{ opacity: isDimmed ? 0.5 : 1, scale: isActive ? 1.015 : 1 }}
                    className={`relative aspect-[4/5] rounded-2xl overflow-hidden text-left p-5 transition-shadow ${
                      isActive
                        ? 'bg-ink text-cream shadow-[0_30px_80px_-30px_rgba(15,15,15,0.45)]'
                        : 'bg-white border border-ink/8 shadow-[0_1px_0_rgba(0,0,0,0.03),0_14px_36px_-22px_rgba(15,15,15,0.16)]'
                    }`}
                  >
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0 }}
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          'radial-gradient(circle at 70% 20%, rgba(184,146,74,0.28) 0%, transparent 55%)',
                      }}
                    />
                    <div className="relative h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-[10px] tracking-[0.3em] uppercase transition-colors ${
                            isActive ? 'text-gold' : 'text-ink/45'
                          }`}
                        >
                          Socio {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-colors ${
                            isActive ? 'text-cream/55' : 'text-ink/35'
                          }`}
                        >
                          {s.formacion}
                        </span>
                      </div>

                      <div>
                        <motion.div
                          animate={{ y: isActive ? -2 : 0 }}
                          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                          className={`font-playfair italic font-light leading-none mb-2 ${
                            isActive ? 'text-gold' : 'text-ink'
                          }`}
                          style={{ fontSize: 'clamp(72px, 14vw, 120px)' }}
                        >
                          {s.initial}
                        </motion.div>
                        <div
                          className={`font-inter text-[13px] font-semibold tracking-tight leading-tight ${
                            isActive ? 'text-cream' : 'text-ink'
                          }`}
                        >
                          {s.area}
                        </div>
                        <div
                          className={`font-mono text-[10.5px] tracking-wider mt-1 truncate ${
                            isActive ? 'text-cream/65' : 'text-ink/55'
                          }`}
                        >
                          {s.rol.split('·')[1]?.trim() ?? s.rol}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 relative aspect-[16/5] rounded-2xl overflow-hidden"
        >
          <Image
            src={aboutMeta.heroImage}
            alt="Equipo Primar"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end text-cream">
            <div className="font-mono text-[10px] text-gold tracking-[0.3em] uppercase mb-2">
              Lo que nos une
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {valores.map((v, i) => (
                <motion.span
                  key={v}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="font-inter text-[14px] md:text-[15px] leading-tight"
                >
                  {v}
                  {i < valores.length - 1 && (
                    <span className="text-gold ml-6 select-none">·</span>
                  )}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
