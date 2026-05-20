'use client'

import { motion } from 'framer-motion'

export type Role = 'comprador' | 'vendedor'

export function SplashView({ onPick }: { onPick: (r: Role) => void }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45 }}
      className="px-6 lg:px-12 max-w-6xl mx-auto pt-32 pb-12 min-h-screen flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-ink text-cream text-[9.5px] font-mono tracking-[0.25em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          Calculador notarial
        </span>
        <span className="font-mono text-[10.5px] text-ink/40 tracking-[0.2em] uppercase">
          CABA · 2026
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-inter font-bold tracking-tight text-ink text-[36px] md:text-[48px] leading-[1.02] max-w-2xl"
      >
        Antes de empezar,
        <br />
        <span className="text-gold">¿de qué lado estás?</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="font-inter text-ink/60 max-w-md mt-4 text-[14px] leading-relaxed"
      >
        Elegí tu rol en la operación y armamos el desglose ajustado a tu perspectiva.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <SoftCard
          role="comprador"
          delay={0.35}
          eyebrow="Quiero comprar"
          title="Comprador"
          stat="~107% del precio"
          statHint="Precio + gastos estimados"
          bullets={[
            'Sellos (50%) y honorarios del escribano',
            'Gastos de escritura y certificados',
            'Comisión inmobiliaria (orientativa 4%)',
          ]}
          onPick={onPick}
        />
        <SoftCard
          role="vendedor"
          delay={0.45}
          eyebrow="Voy a vender"
          title="Vendedor"
          stat="~95% del precio"
          statHint="Neto estimado a recibir"
          bullets={[
            'Sellos (50%) y gastos de escritura',
            'Tracto abreviado opcional (sucesiones)',
            'Comisión inmobiliaria (rango 1% a 3%)',
          ]}
          onPick={onPick}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 text-center font-mono text-[10px] text-ink/40 tracking-wider"
      >
        ↓ Preguntas frecuentes sobre escritura en CABA
      </motion.div>
    </motion.section>
  )
}

function SoftCard({
  role,
  delay,
  eyebrow,
  title,
  stat,
  statHint,
  bullets,
  onPick,
}: {
  role: Role
  delay: number
  eyebrow: string
  title: string
  stat: string
  statHint: string
  bullets: string[]
  onPick: (r: Role) => void
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onPick(role)}
      whileHover={{ y: -4 }}
      className="group text-left bg-white border border-ink/8 rounded-2xl p-5 md:p-6 shadow-[0_1px_0_rgba(0,0,0,0.04),0_18px_40px_-25px_rgba(15,15,15,0.18)] hover:shadow-[0_1px_0_rgba(0,0,0,0.04),0_30px_60px_-25px_rgba(15,15,15,0.28)] transition-shadow duration-400"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-[9.5px] tracking-[0.3em] uppercase text-ink/45">
          {eyebrow}
        </span>
        <motion.div
          whileHover={{ rotate: -45 }}
          className="w-8 h-8 rounded-full border border-ink/15 flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition-colors"
        >
          <svg
            className="w-3.5 h-3.5 text-ink/50 group-hover:text-cream transition-colors"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
      <div className="font-inter font-bold text-ink text-[30px] md:text-[34px] leading-none tracking-tight">
        {title}
      </div>
      <div className="mt-5 pb-4 border-b border-ink/10">
        <div className="font-inter text-[20px] font-semibold text-ink tracking-tight">
          {stat}
        </div>
        <div className="font-mono text-[10.5px] text-ink/45 tracking-wider uppercase mt-0.5">
          {statHint}
        </div>
      </div>
      <ul className="mt-4 space-y-1.5">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2.5 text-[12.5px] text-ink/65 leading-snug"
          >
            <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.button>
  )
}
