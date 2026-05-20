'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { aboutMeta, milestones } from '@/lib/aboutContent'

export default function AboutUs2() {
  return (
    <section id="nosotros" className="py-20 md:py-24 bg-cream text-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-3">
            {aboutMeta.eyebrow} · El camino
          </div>
          <h2 className="font-playfair text-[40px] md:text-[60px] leading-[0.98] tracking-tight text-ink">
            {aboutMeta.titleLine1}
            <br />
            <span className="italic text-gold font-light">{aboutMeta.titleAccent}</span>
            {aboutMeta.titleEnd}
          </h2>
          <p className="font-inter text-ink/65 mt-5 text-[15px] leading-[1.65] max-w-xl">
            {aboutMeta.shortLead}
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            aria-hidden
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(184,146,74,0.5) 8%, rgba(184,146,74,0.5) 92%, transparent 100%)',
            }}
          />
          <div
            className="md:hidden absolute left-3 top-0 bottom-0 w-px"
            aria-hidden
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(184,146,74,0.5) 8%, rgba(184,146,74,0.5) 92%, transparent 100%)',
            }}
          />

          <ol className="space-y-12 md:space-y-20">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.li
                  key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24, y: 16 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center pl-10 md:pl-0 relative`}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.25, duration: 0.45, type: 'spring', stiffness: 260, damping: 18 }}
                    className="absolute md:left-1/2 md:-translate-x-1/2 left-1 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-gold ring-4 ring-cream z-10"
                    aria-hidden
                  />

                  <div className={`${isLeft ? 'md:order-1 md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'}`}>
                    <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-2">
                      {m.year}
                    </div>
                    <h3 className="font-playfair text-[26px] md:text-[34px] tracking-tight leading-[1.05] text-ink">
                      {m.title}
                    </h3>
                    <p className="font-inter text-[14.5px] text-ink/70 leading-[1.7] mt-3">
                      {m.body}
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-ink/8 ${
                      isLeft ? 'md:order-2' : 'md:order-1'
                    }`}
                  >
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                    <span className="absolute top-3 left-3 font-mono text-[10px] text-cream/85 tracking-[0.3em] uppercase bg-ink/40 backdrop-blur-sm px-2 py-1 rounded">
                      {String(i + 1).padStart(2, '0')} / {milestones.length}
                    </span>
                  </motion.div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
