export type Service = {
  slug: string
  title: string
  tagline: string
  description: string
  detail: string
  includes: string[]
  iconPath: string
  highlight?: boolean
}

export const services: Service[] = [
  {
    slug: 'compra-venta',
    title: 'Compra y Venta',
    tagline: 'Operaciones residenciales y comerciales',
    description:
      'Asesoramiento integral en cada etapa de la operación con transparencia, datos del mercado y acompañamiento jurídico.',
    detail:
      'Trabajamos cada operación con un equipo dedicado: tasación inicial sobre comparables reales, estrategia de difusión, curaduría de visitas y acompañamiento hasta la firma.',
    includes: [
      'Tasación inicial sobre comparables reales',
      'Difusión multicanal y matching con interesados',
      'Curaduría de visitas y reporte semanal',
      'Acompañamiento legal hasta la escritura',
    ],
    iconPath: 'M3 11l9-7 9 7v9a2 2 0 01-2 2h-4v-6h-6v6H5a2 2 0 01-2-2v-9z',
    highlight: true,
  },
  {
    slug: 'alquileres',
    title: 'Alquileres',
    tagline: 'Residenciales y temporarios',
    description:
      'Búsqueda guiada para inquilinos y administración estratégica para propietarios que buscan rentabilidades estables.',
    detail:
      'Para el propietario armamos un plan de difusión, screening de inquilinos y un contrato pensado para minimizar conflictos. Para quien alquila, filtramos la oferta real con documentación al día.',
    includes: [
      'Screening de inquilinos y análisis de garantías',
      'Contrato adaptado a la operación',
      'Indexación, cobranza y resolución de incidencias',
      'Reporte mensual al propietario',
    ],
    iconPath: 'M4 9l8-6 8 6v11h-5v-7h-6v7H4V9z M9 13h6',
  },
  {
    slug: 'tasaciones',
    title: 'Tasaciones',
    tagline: 'Valuaciones técnicas y de mercado',
    description:
      'Informes con comparables, ajustes por estado y proyección de plazos de venta o renta.',
    detail:
      'Combinamos relevamiento técnico del inmueble, análisis de comparables vendidos y publicados, y una proyección realista de absorción. Entregamos un informe escrito que sirve para decidir.',
    includes: [
      'Relevamiento técnico in situ',
      'Comparables de los últimos 90 días',
      'Ajustes por estado, orientación y planta',
      'Proyección de plazo de venta o alquiler',
    ],
    iconPath: 'M9 11l3 3 8-8 M3 12a9 9 0 1018 0 9 9 0 00-18 0z',
  },
  {
    slug: 'asesoramiento-legal',
    title: 'Asesoramiento Legal',
    tagline: 'Pre-operación y due diligence',
    description:
      'Revisión documental, due diligence y acompañamiento ante escribanía con criterio comercial.',
    detail:
      'Coordinamos con escribanía la revisión de títulos, deudas, gravámenes y la legitimación de las partes. Anticipamos trabas antes del boleto, no las descubrimos el día de la firma.',
    includes: [
      'Estudio de título y antecedentes registrales',
      'Verificación de deudas y gravámenes',
      'Coordinación con escribanía propuesta',
      'Revisión del boleto y de la escritura',
    ],
    iconPath: 'M6 4h12a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1z M9 8h6 M9 12h6 M9 16h4',
  },
  {
    slug: 'inversiones',
    title: 'Inversiones',
    tagline: 'Rentabilidad y portafolio',
    description:
      'Análisis de rentabilidad, plazos de recupero y selección de oportunidades por zona y tipología.',
    detail:
      'Trabajamos con clientes que buscan diversificar su portafolio inmobiliario en CABA y GBA. Modelamos cada oportunidad con escenarios de renta, plazo de recupero y posibilidad de salida.',
    includes: [
      'Modelado de renta por escenarios',
      'Plazo de recupero y costos asociados',
      'Selección por zona, tipología y tipo de inquilino',
      'Estrategia de salida y revalorización',
    ],
    iconPath: 'M3 17l6-6 4 4 8-8 M14 7h7v7',
    highlight: true,
  },
  {
    slug: 'administracion',
    title: 'Administración',
    tagline: 'Gestión integral de propiedades',
    description:
      'Cobranzas, mantenimiento, expensas y reporte mensual al propietario.',
    detail:
      'Administramos unidades de renta y carteras pequeñas a medianas. Ocupamos los espacios técnicos y administrativos para que el propietario reciba sólo el resumen mensual y la transferencia neta puntual.',
    includes: [
      'Cobranza con seguimiento y conciliación',
      'Gestión de expensas y servicios',
      'Coordinación de mantenimiento y reparaciones',
      'Resumen mensual y transferencia neta',
    ],
    iconPath: 'M12 3a9 9 0 109 9 M12 7v5l3 3 M21 6V3h-3',
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
