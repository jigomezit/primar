'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '@/lib/services'

export default function Services5() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug)
  const active = services.find((s) => s.slug === activeSlug) ?? services[0]
  const activeIndex = services.findIndex((s) => s.slug === activeSlug)

  return (
    <section id="servicios" className="py-20 bg-cream text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between gap-6 flex-wrap"
        >
          <div className="max-w-xl">
            <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-3">
              Nuestros servicios
            </div>
            <h2 className="font-inter font-bold text-ink text-[36px] md:text-[48px] leading-[1.05] tracking-tight">
              Explorá cada
              <br />
              <span className="text-gold">área</span> por separado.
            </h2>
          </div>
          <p className="font-inter text-ink/60 max-w-sm text-[14.5px] leading-relaxed">
            Tocá un servicio para ver cómo trabajamos en esa área y qué resultado esperar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
          <div className="lg:col-span-4">
            <div className="bg-white border border-ink/8 rounded-2xl p-2 shadow-[0_1px_0_rgba(0,0,0,0.03),0_18px_40px_-25px_rgba(15,15,15,0.18)] h-full flex flex-col justify-center">
              {services.map((s, i) => {
                const isActive = s.slug === activeSlug
                return (
                  <button
                    key={s.slug}
                    onClick={() => setActiveSlug(s.slug)}
                    className="relative w-full text-left rounded-xl px-4 py-3 group"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="services5-active"
                        className="absolute inset-0 bg-cream/80 rounded-xl"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <div className="relative flex items-center gap-3">
                      <span
                        className={`font-mono text-[10.5px] tracking-[0.3em] w-6 transition-colors ${
                          isActive ? 'text-gold' : 'text-ink/35 group-hover:text-ink/60'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`font-inter text-[14.5px] font-medium tracking-tight transition-colors ${
                          isActive ? 'text-ink' : 'text-ink/65 group-hover:text-ink'
                        }`}
                      >
                        {s.title}
                      </span>
                      <motion.span
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -4 }}
                        className="ml-auto font-mono text-sm text-gold"
                      >
                        →
                      </motion.span>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-4 font-mono text-[10.5px] text-ink/45 tracking-[0.2em] uppercase px-2">
              {activeIndex + 1} / {services.length}
            </div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden bg-ink text-cream rounded-2xl p-6 md:p-7 shadow-[0_30px_80px_-30px_rgba(15,15,15,0.45)] h-full w-full flex flex-col lg:min-h-[360px]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-60"
                  style={{
                    background:
                      'radial-gradient(circle at 85% 10%, rgba(184,146,74,0.22) 0%, transparent 55%), radial-gradient(circle at 10% 90%, rgba(184,146,74,0.08) 0%, transparent 50%)',
                  }}
                />

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] text-gold tracking-[0.3em] uppercase">
                    Área {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gold"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={active.iconPath} />
                    </svg>
                  </div>
                </div>

                <div className="relative mt-5">
                  <h3 className="font-playfair text-[26px] md:text-[32px] tracking-tight leading-[1.02]">
                    {active.title}
                  </h3>
                  <div className="font-mono text-[10px] text-cream/55 tracking-[0.25em] uppercase mt-2">
                    {active.tagline}
                  </div>
                </div>

                <p className="relative font-inter text-[13px] text-cream/75 leading-[1.6] mt-3.5 max-w-xl">
                  {active.detail}
                </p>

                <div className="relative mt-5 pt-4 border-t border-cream/10 flex-1 flex flex-col">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="font-mono text-[10px] text-gold tracking-[0.3em] uppercase">
                      Lo que incluye
                    </span>
                    <span className="font-mono text-[10px] text-cream/35 tracking-[0.2em] uppercase">
                      {active.includes.length} entregables
                    </span>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
                    {active.includes.map((item, i) => (
                      <motion.li
                        key={`${active.slug}-${i}`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.05 + i * 0.06 }}
                        className="flex items-start gap-2 font-inter text-[12.5px] text-cream/85 leading-[1.5]"
                      >
                        <svg
                          className="mt-1 w-3 h-3 text-gold flex-shrink-0"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 6.5 L5 9.5 L10 3" />
                        </svg>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
