'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { aboutMeta, manifesto, numbers, socios } from '@/lib/aboutContent'

export default function AboutUs1() {
  return (
    <section id="nosotros" className="relative py-24 md:py-28 bg-ink text-cream overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 75% 20%, rgba(184,146,74,0.18) 0%, transparent 55%), radial-gradient(ellipse at 5% 80%, rgba(184,146,74,0.08) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-[10.5px] text-gold tracking-[0.35em] uppercase">
            {aboutMeta.eyebrow}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-gold/50 via-cream/15 to-transparent" />
          <span className="font-mono text-[10px] text-cream/45 tracking-[0.3em] uppercase">
            Manifesto · {aboutMeta.ciudad}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[7fr_5fr] gap-10 lg:gap-16 items-start">
          <div>
            {manifesto.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.85,
                  delay: i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-playfair tracking-tight leading-[1.04] mb-4 last:mb-0 ${
                  i === 1
                    ? 'text-[32px] md:text-[48px] lg:text-[56px] italic text-gold font-light'
                    : 'text-[32px] md:text-[44px] lg:text-[52px] text-cream'
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-cream/10"
          >
            <Image
              src={aboutMeta.heroImage}
              alt="Equipo Primar"
              fill
              className="object-cover grayscale-[20%] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-mono text-[10px] text-gold tracking-[0.35em] uppercase mb-1.5">
                Equipo fundador
              </div>
              <div className="flex items-center gap-1.5">
                {socios.map((s) => (
                  <span
                    key={s.initial}
                    title={s.rol}
                    className="w-8 h-8 rounded-full bg-cream/15 backdrop-blur-sm border border-cream/25 text-cream font-inter font-bold text-[12px] flex items-center justify-center"
                  >
                    {s.initial}
                  </span>
                ))}
                <span className="font-mono text-[10px] text-cream/60 tracking-[0.25em] uppercase ml-2">
                  UCA · {aboutMeta.founded}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-cream/10 grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {numbers.map((n, i) => (
            <motion.div
              key={n.value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
            >
              <div className="font-playfair text-[36px] md:text-[44px] text-gold tracking-tight leading-none">
                {n.value}
              </div>
              <div className="font-inter text-[13px] text-cream/85 font-semibold tracking-tight mt-1.5">
                {n.label}
              </div>
              <div className="font-mono text-[10px] text-cream/45 tracking-[0.2em] uppercase mt-0.5">
                {n.hint}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
