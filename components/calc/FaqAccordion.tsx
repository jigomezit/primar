'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '@/lib/faqContent'

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div>
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <div className="font-mono text-[10px] text-ink/45 tracking-[0.3em] uppercase mb-1.5">
            Preguntas frecuentes
          </div>
          <h2 className="font-inter font-bold text-ink text-[26px] md:text-[34px] tracking-tight leading-[1.05] max-w-2xl">
            Todo lo que conviene aclarar
            <span className="text-gold"> antes de firmar</span>.
          </h2>
        </div>
      </div>
      <div className="border-t border-ink/10">
        {faqs.map((f, i) => {
          const expanded = open === i
          return (
            <div key={f.q} className="border-b border-ink/10">
              <button
                onClick={() => setOpen(expanded ? null : i)}
                className="w-full flex items-center justify-between gap-5 py-4 text-left group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] text-gold tracking-wider w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-inter text-[15px] md:text-[16px] font-medium tracking-tight transition-colors ${
                      expanded ? 'text-ink' : 'text-ink/75 group-hover:text-ink'
                    }`}
                  >
                    {f.q}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: expanded ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full border border-ink/15 flex items-center justify-center text-ink/60"
                >
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pl-10 pr-10 font-inter text-[13.5px] text-ink/65 leading-[1.7] max-w-3xl">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
