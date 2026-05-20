'use client'

import { motion } from 'framer-motion'
import { aboutMeta, numbers, pillars } from '@/lib/aboutContent'

export default function AboutUs3() {
  return (
    <section id="nosotros" className="py-20 md:py-24 bg-cream text-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-3">
              {aboutMeta.eyebrow}
            </div>
            <h2 className="font-inter font-bold text-ink text-[40px] md:text-[58px] leading-[1] tracking-tight">
              {aboutMeta.titleLine1}{' '}
              <span className="text-gold">{aboutMeta.titleAccent}</span>
              {aboutMeta.titleEnd}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <p className="font-inter text-ink/70 text-[15px] leading-[1.65]">
              {aboutMeta.lead}
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {numbers.map((n, i) => (
            <motion.div
              key={n.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative h-[260px] bg-white border border-ink/8 rounded-2xl overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.03),0_18px_40px_-25px_rgba(15,15,15,0.18)] hover:shadow-[0_1px_0_rgba(0,0,0,0.04),0_30px_60px_-25px_rgba(15,15,15,0.28)] transition-shadow"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-6 font-playfair italic text-gold/12 leading-none select-none"
                style={{ fontSize: '210px' }}
              >
                {n.value}
              </span>

              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-gold tracking-[0.3em] uppercase">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <motion.span
                    aria-hidden
                    initial={{ x: -4, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="font-mono text-[10px] text-ink/30 tracking-[0.25em] uppercase"
                  >
                    {n.hint}
                  </motion.span>
                </div>

                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="font-playfair text-[44px] md:text-[52px] text-ink tracking-tight leading-none"
                  >
                    {n.value}
                  </motion.div>
                  <div className="font-inter font-semibold text-ink text-[15px] tracking-tight mt-2">
                    {n.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              whileHover={{ y: -2 }}
              className="group bg-ink/5 hover:bg-white border border-ink/8 rounded-2xl p-5 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-md bg-gold/20 group-hover:bg-gold/30 flex items-center justify-center transition-colors">
                  <svg
                    className="w-3.5 h-3.5 text-gold"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={p.iconPath} />
                  </svg>
                </div>
                <span className="font-mono text-[10px] text-ink/50 tracking-[0.25em] uppercase">
                  {p.label}
                </span>
              </div>
              <h3 className="font-inter font-bold text-ink text-[15.5px] tracking-tight leading-tight">
                {p.title}
              </h3>
              <p className="font-inter text-[12.5px] text-ink/60 leading-[1.6] mt-2">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
