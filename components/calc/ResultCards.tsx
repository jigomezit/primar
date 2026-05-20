'use client'

import { motion } from 'framer-motion'
import { fmtARS, fmtUSD } from '@/lib/escrituraCalc'
import { AnimatedNumber, shortARS, shortUSD } from './atoms'

export type PanelRow = {
  label: string
  value: number
  muted?: boolean
  hint?: string
}

export function ResultHeadlineCard({
  eyebrow,
  mainARS,
  mainUSD,
  delta,
  stretch,
  className = '',
}: {
  eyebrow: string
  mainARS: number
  mainUSD: number
  delta: string
  stretch?: boolean
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`relative overflow-hidden bg-ink text-cream rounded-xl p-4 shadow-[0_18px_44px_-22px_rgba(15,15,15,0.45)] ${
        stretch ? 'flex-1 flex flex-col justify-center' : ''
      } ${className}`}
    >
      <motion.div
        key={Math.round(mainARS / 1000)}
        initial={{ opacity: 0.35 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gold/20 pointer-events-none"
      />
      <div className="relative">
        <div className="flex items-center justify-between mb-2.5">
          <span className="font-mono text-[9.5px] tracking-[0.3em] uppercase text-gold">
            {eyebrow}
          </span>
          <motion.span
            key={delta}
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[10px] tracking-wider text-cream/45"
          >
            {delta}
          </motion.span>
        </div>
        <div className="font-inter font-bold tracking-tight leading-none text-[28px] md:text-[32px]">
          <AnimatedNumber value={mainARS} formatter={fmtARS} />
        </div>
        <div className="font-mono text-[11.5px] mt-1 text-cream/50">
          ≈ <AnimatedNumber value={mainUSD} formatter={fmtUSD} />
        </div>
      </div>
    </motion.div>
  )
}

export function MetricCell({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub: string
}) {
  return (
    <div className="bg-cream/60 rounded-lg p-2.5">
      <div className="font-mono text-[9px] text-ink/50 tracking-[0.2em] uppercase mb-1 truncate">
        {label}
      </div>
      <motion.div
        key={value}
        initial={{ opacity: 0, y: -2 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-inter font-semibold text-ink text-[14px] tracking-tight truncate"
      >
        {value}
      </motion.div>
      <div className="font-mono text-[9.5px] text-ink/40 mt-0.5 truncate">{sub}</div>
    </div>
  )
}

export function ResultMetricsCard({
  totalGastos,
  tipoCambio,
  pctPrecio,
  sellosBase,
  exento,
  fmtPct,
}: {
  totalGastos: number
  tipoCambio: number
  pctPrecio: number
  sellosBase: number
  exento: boolean
  fmtPct: (n: number) => string
}) {
  return (
    <motion.div
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="bg-white/75 backdrop-blur-sm border border-ink/8 rounded-xl p-4 shadow-[0_1px_0_rgba(0,0,0,0.03),0_14px_36px_-22px_rgba(15,15,15,0.16)]"
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-6 h-6 rounded-full bg-gold text-ink font-mono text-[10.5px] flex items-center justify-center">
          ◆
        </span>
        <h2 className="font-inter font-semibold text-ink text-[13.5px] tracking-tight">
          Métricas
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <MetricCell
          label="Gastos"
          value={shortARS(totalGastos)}
          sub={shortUSD(totalGastos / tipoCambio)}
        />
        <MetricCell label="% s/ precio" value={fmtPct(pctPrecio)} sub="excl. IVA" />
        <MetricCell
          label="Sellos base"
          value={shortARS(sellosBase)}
          sub={exento ? 'Exento' : 'Imponible'}
        />
      </div>
    </motion.div>
  )
}

export function ResultBreakdownCard({
  rows,
  tipoCambio,
  totalGastos,
  stretch = true,
  className = '',
}: {
  rows: PanelRow[]
  tipoCambio: number
  totalGastos: number
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
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-6 h-6 rounded-full bg-ink text-cream font-mono text-[10.5px] flex items-center justify-center">
          ≡
        </span>
        <h2 className="font-inter font-semibold text-ink text-[13.5px] tracking-tight">
          Desglose
        </h2>
      </div>
      <ul className={`space-y-1.5 ${stretch ? 'flex-1 flex flex-col justify-around' : ''}`}>
        {rows.map((r) => {
          const share = totalGastos > 0 ? Math.abs(r.value) / totalGastos : 0
          return (
            <li key={r.label}>
              <div className="flex items-baseline justify-between gap-2 mb-0.5">
                <span
                  className={`font-inter text-[11.5px] truncate ${
                    r.muted ? 'text-ink/45' : 'text-ink/80'
                  }`}
                >
                  {r.label}
                </span>
                <div className="text-right flex-shrink-0">
                  <motion.span
                    key={r.value}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    className="font-mono text-[11.5px] tracking-tight text-ink"
                  >
                    {r.value < 0 ? '−' : ''}
                    {fmtARS(Math.abs(r.value))}
                  </motion.span>
                  <span className="font-mono text-[9px] text-ink/40 ml-1.5">
                    {fmtUSD(Math.abs(r.value) / tipoCambio)}
                  </span>
                </div>
              </div>
              {!r.muted && (
                <div className="relative h-[3px] bg-ink/8 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${share * 100}%` }}
                    transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                    className="absolute inset-y-0 left-0 bg-gold rounded-full"
                  />
                </div>
              )}
              {r.hint && (
                <div className="font-mono text-[8.5px] text-ink/40 mt-0.5">{r.hint}</div>
              )}
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}

export function ResultFusedHeadlineMetricsCard({
  eyebrow,
  mainARS,
  mainUSD,
  delta,
  totalGastos,
  tipoCambio,
  pctPrecio,
  sellosBase,
  exento,
  fmtPct,
}: {
  eyebrow: string
  mainARS: number
  mainUSD: number
  delta: string
  totalGastos: number
  tipoCambio: number
  pctPrecio: number
  sellosBase: number
  exento: boolean
  fmtPct: (n: number) => string
}) {
  return (
    <motion.div
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="relative overflow-hidden bg-ink text-cream rounded-xl p-5 md:p-6 shadow-[0_18px_44px_-22px_rgba(15,15,15,0.45)] flex-1 flex flex-col"
    >
      <motion.div
        key={Math.round(mainARS / 1000)}
        initial={{ opacity: 0.35 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gold/20 pointer-events-none"
      />
      <div className="relative flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[9.5px] tracking-[0.3em] uppercase text-gold">
            {eyebrow}
          </span>
          <motion.span
            key={delta}
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[10px] tracking-wider text-cream/45"
          >
            {delta}
          </motion.span>
        </div>
        <div className="font-inter font-bold tracking-tight leading-none text-[32px] md:text-[38px]">
          <AnimatedNumber value={mainARS} formatter={fmtARS} />
        </div>
        <div className="font-mono text-[12px] mt-1 text-cream/50">
          ≈ <AnimatedNumber value={mainUSD} formatter={fmtUSD} />
        </div>

        <div className="mt-auto pt-5 border-t border-cream/10 grid grid-cols-3 gap-2">
          <DarkMetricCell
            label="Gastos"
            value={shortARS(totalGastos)}
            sub={shortUSD(totalGastos / tipoCambio)}
          />
          <DarkMetricCell label="% s/ precio" value={fmtPct(pctPrecio)} sub="excl. IVA" />
          <DarkMetricCell
            label="Sellos base"
            value={shortARS(sellosBase)}
            sub={exento ? 'Exento' : 'Imponible'}
          />
        </div>
      </div>
    </motion.div>
  )
}

function DarkMetricCell({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub: string
}) {
  return (
    <div className="bg-cream/10 rounded-lg p-2.5">
      <div className="font-mono text-[9px] text-cream/55 tracking-[0.2em] uppercase mb-1 truncate">
        {label}
      </div>
      <motion.div
        key={value}
        initial={{ opacity: 0, y: -2 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-inter font-semibold text-cream text-[14px] tracking-tight truncate"
      >
        {value}
      </motion.div>
      <div className="font-mono text-[9.5px] text-cream/45 mt-0.5 truncate">{sub}</div>
    </div>
  )
}
