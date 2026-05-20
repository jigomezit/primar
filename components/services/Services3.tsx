'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/services'

export default function Services3() {
  const highlighted = services.filter((s) => s.highlight)
  const regular = services.filter((s) => !s.highlight)

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
            <h2 className="font-inter font-bold text-ink text-[40px] md:text-[52px] leading-[1.02] tracking-tight">
              Seis áreas,
              <br />
              <span className="text-gold">un solo criterio</span>.
            </h2>
          </div>
          <p className="font-inter text-ink/65 max-w-sm text-[15px] leading-relaxed">
            Un equipo especializado por operación, decisiones basadas en datos y un único punto de contacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[200px]">
          {highlighted[0] && <BigCard service={highlighted[0]} index={0} />}

          <SmallCard service={regular[0]} index={1} />
          <SmallCard service={regular[1]} index={2} />

          <SmallCard service={regular[2]} index={3} />
          <SmallCard service={regular[3]} index={4} />

          {highlighted[1] && <BigCard service={highlighted[1]} index={5} mirror />}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 grid md:grid-cols-3 gap-4 text-center md:text-left"
        >
          <FootStat label="Equipo dedicado" value="por operación" />
          <FootStat label="Reporte mensual" value="al propietario" />
          <FootStat label="Acompañamiento" value="hasta la escritura" />
        </motion.div>
      </div>
    </section>
  )
}

function BigCard({
  service,
  index,
  mirror,
}: {
  service: { title: string; tagline: string; detail: string; iconPath: string }
  index: number
  mirror?: boolean
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.55 }}
      whileHover={{ y: -4 }}
      className={`relative overflow-hidden bg-ink text-cream rounded-2xl p-7 md:col-span-2 md:row-span-2 ${
        mirror ? 'md:col-start-2' : ''
      } shadow-[0_30px_80px_-30px_rgba(15,15,15,0.45)] flex flex-col justify-between`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(184,146,74,0.22) 0%, transparent 55%)',
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase">
            {String(index + 1).padStart(2, '0')} · Destacado
          </span>
          <div className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gold"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={service.iconPath} />
            </svg>
          </div>
        </div>
        <h3 className="font-inter font-bold text-cream text-[34px] md:text-[40px] tracking-tight leading-[1.05]">
          {service.title}
        </h3>
        <div className="font-mono text-[11px] text-cream/55 tracking-[0.25em] uppercase mt-2">
          {service.tagline}
        </div>
      </div>
      <p className="relative font-inter text-[14px] text-cream/80 leading-[1.65] mt-5 max-w-lg">
        {service.detail}
      </p>
    </motion.article>
  )
}

function SmallCard({
  service,
  index,
}: {
  service: { title: string; tagline: string; description: string; iconPath: string }
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ y: -3 }}
      className="group relative bg-white border border-ink/8 rounded-2xl p-5 shadow-[0_1px_0_rgba(0,0,0,0.03),0_14px_36px_-22px_rgba(15,15,15,0.16)] hover:shadow-[0_1px_0_rgba(0,0,0,0.04),0_24px_60px_-30px_rgba(15,15,15,0.24)] transition-shadow duration-400 flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[9.5px] text-gold tracking-[0.3em] uppercase">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="w-8 h-8 rounded-md bg-cream/70 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-ink/65"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={service.iconPath} />
          </svg>
        </div>
      </div>
      <h3 className="font-inter font-bold text-ink text-[17px] tracking-tight leading-tight group-hover:text-gold transition-colors">
        {service.title}
      </h3>
      <p className="font-inter text-[12.5px] text-ink/60 leading-[1.6] mt-2 line-clamp-3">
        {service.description}
      </p>
    </motion.article>
  )
}

function FootStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-ink/8 rounded-xl px-4 py-3">
      <div className="font-mono text-[9.5px] text-gold tracking-[0.3em] uppercase">
        {label}
      </div>
      <div className="font-inter font-semibold text-ink text-[14px] tracking-tight mt-0.5">
        {value}
      </div>
    </div>
  )
}
