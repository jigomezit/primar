export type CalcInputs = {
  precioUSD: number
  tipoCambio: number
  viviendaUnica: boolean
  tractoAbreviado: boolean
  honorariosCompradorPct: number
  honorariosVendedorPct: number
}

export const CONST_2026 = {
  UMBRAL_VIVIENDA_UNICA_ARS: 226_100_000,
  SELLOS_RATE: 0.035,
  GASTOS_ESCRITURA: 0.01,
  TRACTO: 0.004,
  ESCRIBANO: 0.02,
  IVA_HONORARIOS: 0.21,
  DEFAULT_TC: 1450,
  DEFAULT_PRECIO_USD: 150_000,
  DEFAULT_HONO_COMP: 4,
  DEFAULT_HONO_VEND: 3,
} as const

export const defaultInputs: CalcInputs = {
  precioUSD: CONST_2026.DEFAULT_PRECIO_USD,
  tipoCambio: CONST_2026.DEFAULT_TC,
  viviendaUnica: true,
  tractoAbreviado: false,
  honorariosCompradorPct: CONST_2026.DEFAULT_HONO_COMP,
  honorariosVendedorPct: CONST_2026.DEFAULT_HONO_VEND,
}

export type CalcResult = ReturnType<typeof calcularEscritura>

export function calcularEscritura(i: CalcInputs) {
  const precioARS = i.precioUSD * i.tipoCambio

  let sellosBase = 0
  if (i.viviendaUnica) {
    sellosBase = Math.max(0, precioARS - CONST_2026.UMBRAL_VIVIENDA_UNICA_ARS)
  } else {
    sellosBase = precioARS
  }
  const sellosTotal = sellosBase * CONST_2026.SELLOS_RATE
  const sellosVendedor = sellosTotal / 2
  const sellosComprador = sellosTotal / 2

  const gastosEscrituraV = precioARS * CONST_2026.GASTOS_ESCRITURA
  const tracto = i.tractoAbreviado ? precioARS * CONST_2026.TRACTO : 0
  const honorariosV = precioARS * (i.honorariosVendedorPct / 100)
  const totalGastosV = sellosVendedor + gastosEscrituraV + tracto + honorariosV
  const netoVendedor = precioARS - totalGastosV

  const honorariosEscribano = precioARS * CONST_2026.ESCRIBANO
  const gastosEscrituraC = precioARS * CONST_2026.GASTOS_ESCRITURA
  const honorariosC = precioARS * (i.honorariosCompradorPct / 100)
  const totalGastosC = sellosComprador + honorariosEscribano + gastosEscrituraC + honorariosC
  const totalComprador = precioARS + totalGastosC

  return {
    precioARS,
    precioUSD: i.precioUSD,
    tipoCambio: i.tipoCambio,
    sellosTotal,
    sellosBase,
    aplicaExencionSellos: i.viviendaUnica && precioARS <= CONST_2026.UMBRAL_VIVIENDA_UNICA_ARS,
    vendedor: {
      sellos: sellosVendedor,
      gastosEscritura: gastosEscrituraV,
      tracto,
      honorarios: honorariosV,
      totalGastos: totalGastosV,
      neto: netoVendedor,
      pctSobrePrecio: totalGastosV / precioARS,
    },
    comprador: {
      sellos: sellosComprador,
      honorariosEscribano,
      gastosEscritura: gastosEscrituraC,
      honorarios: honorariosC,
      totalGastos: totalGastosC,
      totalConPropiedad: totalComprador,
      pctSobrePrecio: totalGastosC / precioARS,
    },
  }
}

const arsFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})
const usdFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})
const pctFormatter = new Intl.NumberFormat('es-AR', {
  style: 'percent',
  maximumFractionDigits: 2,
})

export const fmtARS = (n: number) => arsFormatter.format(Math.round(n))
export const fmtUSD = (n: number) => usdFormatter.format(Math.round(n))
export const fmtPct = (n: number) => pctFormatter.format(n)
export const toUSD = (ars: number, tc: number) => (tc > 0 ? ars / tc : 0)
