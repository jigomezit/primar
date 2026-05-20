'use client'

import { motion } from 'framer-motion'

export function CompactCard({
  step,
  title,
  children,
  stretch,
  className = '',
}: {
  step?: string
  title?: string
  children: React.ReactNode
  stretch?: boolean
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`bg-white/75 backdrop-blur-sm border border-ink/8 rounded-xl p-4 shadow-[0_1px_0_rgba(0,0,0,0.03),0_14px_36px_-22px_rgba(15,15,15,0.16)] flex flex-col ${
        stretch ? 'flex-1' : ''
      } ${className}`}
    >
      {(step || title) && (
        <div className="flex items-center gap-2.5 mb-3">
          {step && (
            <span className="w-6 h-6 rounded-full bg-ink text-cream font-mono text-[10.5px] flex items-center justify-center">
              {step}
            </span>
          )}
          {title && (
            <h2 className="font-inter font-semibold text-ink text-[13.5px] tracking-tight">
              {title}
            </h2>
          )}
        </div>
      )}
      <div className="flex-1 flex flex-col justify-center">{children}</div>
    </motion.div>
  )
}

export function CardDivider() {
  return <div className="my-4 h-px bg-ink/8" />
}

export function Disclaimer({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className={`border-l-2 border-gold pl-3 py-0.5 text-[11px] text-ink/55 font-inter leading-relaxed ${className}`}
    >
      Valores orientativos. No incluye IVA (21%) sobre honorarios profesionales.
      Verificar VIR con escribano.
    </motion.div>
  )
}
