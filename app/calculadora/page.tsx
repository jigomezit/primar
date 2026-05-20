'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CalcNavbar from '@/components/CalcNavbar'
import Footer from '@/components/Footer'
import {
  CalcInputs,
  calcularEscritura,
  defaultInputs,
  fmtPct,
  toUSD,
  CONST_2026,
} from '@/lib/escrituraCalc'
import { FloatingInput, CheckPill, Slider, shortARS } from '@/components/calc/atoms'
import { CompactCard, Disclaimer } from '@/components/calc/CompactCard'
import { SplashView, type Role } from '@/components/calc/SplashView'
import { FaqAccordion } from '@/components/calc/FaqAccordion'
import {
  ResultHeadlineCard,
  ResultBreakdownCard,
} from '@/components/calc/ResultCards'

export default function Calc5Page() {
  const [role, setRole] = useState<Role | null>(null)
  return (
    <main className="min-h-screen bg-cream text-ink">
      <CalcNavbar variant="light" />
      <AnimatePresence mode="wait">
        {role === null ? (
          <SplashView key="splash" onPick={setRole} />
        ) : (
          <CalculatorView key="calc" role={role} onChangeRole={() => setRole(null)} />
        )}
      </AnimatePresence>
      <section className="px-6 lg:px-12 max-w-6xl mx-auto pb-20 pt-12">
        <FaqAccordion />
      </section>
      <Footer />
    </main>
  )
}

function CalculatorView({
  role,
  onChangeRole,
}: {
  role: Role
  onChangeRole: () => void
}) {
  const [inputs, setInputs] = useState<CalcInputs>(defaultInputs)
  const result = useMemo(() => calcularEscritura(inputs), [inputs])
  const update = <K extends keyof CalcInputs>(k: K, v: CalcInputs[K]) =>
    setInputs((p) => ({ ...p, [k]: v }))

  const mainARS =
    role === 'comprador' ? result.comprador.totalConPropiedad : result.vendedor.neto
  const mainUSD = toUSD(mainARS, inputs.tipoCambio)
  const totalGastos =
    role === 'comprador' ? result.comprador.totalGastos : result.vendedor.totalGastos
  const pctPrecio =
    role === 'comprador'
      ? result.comprador.pctSobrePrecio
      : result.vendedor.pctSobrePrecio

  const rows =
    role === 'comprador'
      ? [
          { label: 'Precio propiedad', value: result.precioARS, muted: true },
          {
            label: 'Sellos (50%)',
            value: result.comprador.sellos,
            hint: result.aplicaExencionSellos ? 'Exento' : '3,5% sobre excedente',
          },
          { label: 'Escribano (2%)', value: result.comprador.honorariosEscribano },
          { label: 'Gastos de escritura', value: result.comprador.gastosEscritura },
          {
            label: `Comisión inmob. (${inputs.honorariosCompradorPct.toFixed(2).replace('.', ',')}%)`,
            value: result.comprador.honorarios,
          },
        ]
      : [
          { label: 'Precio propiedad', value: result.precioARS, muted: true },
          {
            label: 'Sellos (50%)',
            value: -result.vendedor.sellos,
            hint: result.aplicaExencionSellos ? 'Exento' : '3,5% sobre excedente',
          },
          { label: 'Gastos de escritura', value: -result.vendedor.gastosEscritura },
          ...(inputs.tractoAbreviado
            ? [{ label: 'Tracto abreviado', value: -result.vendedor.tracto }]
            : []),
          {
            label: `Comisión inmob. (${inputs.honorariosVendedorPct.toFixed(2).replace('.', ',')}%)`,
            value: -result.vendedor.honorarios,
          },
        ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 lg:px-10 max-w-6xl mx-auto pt-28 pb-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-3"
      >
        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-ink text-cream text-[9.5px] font-mono tracking-[0.25em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          Parte {role}
        </span>
        <span className="font-mono text-[10.5px] text-ink/40 tracking-[0.2em] uppercase">
          CABA · 2026
        </span>
        <button
          onClick={onChangeRole}
          className="ml-auto font-mono text-[10.5px] text-ink/50 hover:text-ink tracking-[0.2em] uppercase transition-colors"
        >
          Cambiar rol →
        </button>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-inter font-bold tracking-tight text-ink text-[22px] md:text-[28px] leading-[1.05] mb-4"
      >
        ¿Cuánto cuesta escriturar en
        <span className="text-gold"> CABA</span>?
      </motion.h1>

      <div className="flex flex-col gap-3">
        {/* Row 1: Operación | Total — alturas alineadas */}
        <div className="grid lg:grid-cols-12 gap-3 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-7 flex"
          >
            <CompactCard step="01" title="Operación" className="w-full">
              <div className="grid grid-cols-2 gap-3">
                <FloatingInput
                  label="Precio"
                  value={inputs.precioUSD}
                  onChange={(v) => update('precioUSD', v)}
                  suffix="USD"
                />
                <FloatingInput
                  label="Tipo de cambio"
                  value={inputs.tipoCambio}
                  onChange={(v) => update('tipoCambio', v)}
                  suffix="ARS"
                />
              </div>
            </CompactCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="lg:col-span-5 flex"
          >
            <ResultHeadlineCard
              stretch
              className="w-full"
              eyebrow={role === 'comprador' ? 'Total comprador' : 'Neto vendedor'}
              mainARS={mainARS}
              mainUSD={mainUSD}
              delta={
                role === 'comprador'
                  ? `+${fmtPct(pctPrecio)} sobre el precio`
                  : `−${fmtPct(pctPrecio)} en gastos`
              }
            />
          </motion.div>
        </div>

        {/* Row 2: [Condiciones + Honorarios] | Desglose — combinado izq igual al alto del Desglose */}
        <div className="grid lg:grid-cols-12 gap-3 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="lg:col-span-7 flex flex-col gap-3"
          >
            <CompactCard step="02" title="Condiciones">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <CheckPill
                  label="Vivienda única"
                  description={`Exenta hasta ${shortARS(CONST_2026.UMBRAL_VIVIENDA_UNICA_ARS)}`}
                  checked={inputs.viviendaUnica}
                  onChange={(v) => update('viviendaUnica', v)}
                />
                <CheckPill
                  label="Tracto abreviado"
                  description="+0,4% al vendedor"
                  checked={inputs.tractoAbreviado}
                  onChange={(v) => update('tractoAbreviado', v)}
                />
              </div>
            </CompactCard>
            <CompactCard step="03" title="Honorarios inmobiliarios" stretch>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Slider
                  label="Comprador"
                  value={inputs.honorariosCompradorPct}
                  onChange={(v) => update('honorariosCompradorPct', v)}
                  min={0}
                  max={6}
                  step={0.25}
                  showRange={false}
                />
                <Slider
                  label="Vendedor"
                  value={inputs.honorariosVendedorPct}
                  onChange={(v) => update('honorariosVendedorPct', v)}
                  min={1}
                  max={3}
                  step={0.25}
                  showRange={false}
                />
              </div>
            </CompactCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="lg:col-span-5 flex"
          >
            <ResultBreakdownCard
              stretch
              className="w-full"
              rows={rows}
              tipoCambio={inputs.tipoCambio}
              totalGastos={totalGastos}
            />
          </motion.div>
        </div>
      </div>

      <Disclaimer className="mt-4" />
    </motion.section>
  )
}
