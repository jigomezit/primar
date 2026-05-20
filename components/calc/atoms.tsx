'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function FloatingInput({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string
  value: number
  onChange: (n: number) => void
  suffix?: string
}) {
  return (
    <label className="relative block">
      <span className="absolute top-2 left-3 font-inter text-[10px] tracking-wider uppercase text-ink/50">
        {label}
      </span>
      <input
        type="number"
        inputMode="decimal"
        value={Number.isFinite(value) ? value : ''}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="w-full pt-6 pb-2 pl-3 pr-12 bg-cream/40 border border-ink/10 rounded-lg font-inter text-[17px] font-semibold text-ink tracking-tight focus:outline-none focus:border-ink/60 focus:bg-white transition-all"
      />
      {suffix && (
        <span className="absolute right-3 bottom-2 font-mono text-[10.5px] text-ink/40 tracking-wider">
          {suffix}
        </span>
      )}
    </label>
  )
}

export function CheckPill({
  label,
  description,
  checked,
  onChange,
}: {
  label: string
  description?: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border text-left transition-all ${
        checked
          ? 'bg-ink border-ink text-cream'
          : 'bg-cream/40 border-ink/10 text-ink hover:border-ink/30 hover:bg-cream/60'
      }`}
    >
      <div
        className={`flex-shrink-0 w-4 h-4 rounded-[5px] border-2 flex items-center justify-center transition-all ${
          checked ? 'bg-gold border-gold' : 'bg-white border-ink/25'
        }`}
      >
        {checked && (
          <motion.svg
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            className="w-2.5 h-2.5 text-ink"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 6.5 L5 9.5 L10 3" />
          </motion.svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-inter text-[12px] font-medium leading-tight">{label}</div>
        {description && (
          <div
            className={`font-mono text-[9.5px] leading-tight mt-0.5 ${
              checked ? 'text-cream/55' : 'text-ink/45'
            }`}
          >
            {description}
          </div>
        )}
      </div>
    </button>
  )
}

export function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  showRange = true,
}: {
  label: string
  value: number
  onChange: (n: number) => void
  min: number
  max: number
  step: number
  showRange?: boolean
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-inter text-[11px] uppercase tracking-wider text-ink/55">
          {label}
        </span>
        <motion.span
          key={value}
          initial={{ y: -3, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          className="font-inter font-semibold text-ink text-[15px] tracking-tight"
        >
          {value.toFixed(2).replace('.', ',')}
          <span className="text-ink/40">%</span>
        </motion.span>
      </div>
      <div className="relative h-1.5">
        <div className="absolute inset-0 bg-ink/8 rounded-full" />
        <motion.div
          animate={{ width: `${pct}%` }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/70 to-gold rounded-full"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <motion.div
          animate={{ left: `calc(${pct}% - 7px)` }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-ink rounded-full pointer-events-none shadow-[0_0_0_4px_rgba(184,146,74,0.25)]"
        />
      </div>
      {showRange && (
        <div className="flex items-center justify-between font-mono text-[9.5px] text-ink/35 mt-1">
          <span>{min}%</span>
          <span>{max}%</span>
        </div>
      )}
    </label>
  )
}

export function AnimatedNumber({
  value,
  formatter,
  duration = 420,
}: {
  value: number
  formatter: (n: number) => string
  duration?: number
}) {
  const [display, setDisplay] = useState(value)
  const ref = useRef({ from: value, to: value, start: 0 })

  useEffect(() => {
    ref.current = { from: display, to: value, start: performance.now() }
    let frame: number
    const tick = (now: number) => {
      const t = Math.min(1, (now - ref.current.start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      const next = ref.current.from + (ref.current.to - ref.current.from) * eased
      setDisplay(next)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <>{formatter(display)}</>
}

export function shortARS(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1).replace('.0', '')}M`
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`
  return `$${n}`
}

export function shortUSD(n: number): string {
  if (n >= 1_000_000) return `US$${(n / 1_000_000).toFixed(1).replace('.0', '')}M`
  if (n >= 1_000) return `US$${Math.round(n / 1_000)}K`
  return `US$${Math.round(n)}`
}
