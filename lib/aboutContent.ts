export type Pillar = {
  slug: string
  label: string
  title: string
  body: string
  iconPath: string
}

export type Socio = {
  initial: string
  rol: string
  area: string
  formacion: string
}

export type Milestone = {
  year: string
  title: string
  body: string
  image: string
}

export type StatNumber = {
  value: string
  label: string
  hint: string
}

export type Pregunta = {
  q: string
  a: string
}

export const aboutMeta = {
  eyebrow: 'Quiénes somos',
  titleLine1: 'Cuatro socios,',
  titleAccent: 'una misión',
  titleEnd: '.',
  lead:
    'Somos un equipo de cuatro socios formados en la Universidad Católica Argentina (UCA) que decidimos unir nuestras individualidades, formación y valores para construir una inmobiliaria distinta. Trabajamos cada operación con criterio profesional y acompañamiento humano.',
  shortLead:
    'Cuatro socios formados en la UCA construyendo una inmobiliaria con criterio profesional y acompañamiento humano.',
  founded: 2022,
  formacion: 'Universidad Católica Argentina',
  ciudad: 'CABA · GBA',
  heroImage: '/images/PrimarPhoto.jpeg',
} as const

export const manifesto: string[] = [
  'No vinimos a sumar otra inmobiliaria a la lista.',
  'Vinimos a que cada operación tenga rigor técnico y trato humano.',
  'Cuatro socios formados en la UCA, una única manera de trabajar:',
  'datos, transparencia y un responsable que conocés por nombre.',
]

export const pillars: Pillar[] = [
  {
    slug: 'mision',
    label: 'Misión',
    title: 'Transformar la experiencia inmobiliaria',
    body:
      'Combinamos rigor técnico y trato cercano. Tasamos sobre comparables reales, difundimos con plan y acompañamos cada paso hasta la firma.',
    iconPath: 'M3 11l9-7 9 7v9a2 2 0 01-2 2h-4v-6h-6v6H5a2 2 0 01-2-2v-9z',
  },
  {
    slug: 'vision',
    label: 'Visión',
    title: 'Información y transparencia',
    body:
      'Que cada cliente llegue a la mesa con una visión amplia y segura del mercado. Datos confiables, acompañamiento profesional y reglas claras.',
    iconPath: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z M12 9a3 3 0 100 6 3 3 0 000-6z',
  },
  {
    slug: 'compromiso',
    label: 'Compromiso',
    title: 'Pasión, dedicación y profesionalismo',
    body:
      'Construimos relaciones a largo plazo, basadas en la confianza. Queremos ser parte de tu historia inmobiliaria, no solo de tu próxima operación.',
    iconPath: 'M12 21s-7-4.5-7-11a5 5 0 0110-0.5A5 5 0 0119 10c0 6.5-7 11-7 11z',
  },
]

export const milestones: Milestone[] = [
  {
    year: '2018 – 2022',
    title: 'Formación compartida',
    body:
      'Cuatro trayectorias paralelas en la Universidad Católica Argentina. Carreras distintas, una misma vara para entender el negocio inmobiliario y los mercados.',
    image: '/images/hero-1.jpg',
  },
  {
    year: '2022',
    title: 'Fundación de Primar',
    body:
      'Decidimos unir formación y experiencia para construir una inmobiliaria con criterio propio. Un punto de contacto claro por cliente, decisiones discutidas entre socios.',
    image: '/images/PrimarPhoto.jpeg',
  },
  {
    year: '2024',
    title: 'Expansión al GBA',
    body:
      'Sumamos operaciones en el corredor norte y los partidos del oeste y sur. La promesa: el mismo estándar de trazabilidad que aplicamos en CABA.',
    image: '/images/hero-2.jpg',
  },
  {
    year: '2026',
    title: 'Hoy',
    body:
      'Equipo consolidado, cartera diversificada entre venta, alquiler e inversión. Seguimos enfocados en datos verificables y operaciones que efectivamente cierran.',
    image: '/images/hero-3.jpg',
  },
]

export const numbers: StatNumber[] = [
  { value: '04', label: 'Socios fundadores', hint: 'Formados en UCA' },
  { value: '2022', label: 'Año de fundación', hint: 'Cuatro años de mercado' },
  { value: '06', label: 'Áreas de servicio', hint: 'De compra a administración' },
  { value: '100%', label: 'Con responsable único', hint: 'Un nombre por operación' },
]

export const preguntas: Pregunta[] = [
  {
    q: '¿Por qué cuatro socios?',
    a: 'Una operación inmobiliaria toca varias disciplinas a la vez: tasación, legales, comercial y administración. Cada uno se especializa en un área y las decisiones que cruzan disciplinas las discutimos juntos.',
  },
  {
    q: '¿Qué quieren cambiar del mercado?',
    a: 'La opacidad. Demasiadas operaciones se cierran sin que el cliente entienda los plazos reales, los comparables o el desglose final. Nuestro estándar es que sepas en qué etapa estás siempre.',
  },
  {
    q: '¿Trabajan con clientes individuales o con carteras?',
    a: 'Las dos cosas. Acompañamos compras de única vivienda con el mismo rigor con que armamos portafolios de renta para inversores que diversifican entre CABA y GBA.',
  },
  {
    q: '¿Qué tipo de operaciones priorizan?',
    a: 'Residenciales en CABA y GBA, con foco en zonas donde el inventario se mueve y los datos son claros. No tomamos toda operación: si no tiene chances reales, lo decimos antes.',
  },
]

export const valores: string[] = [
  'Transparencia en cada paso',
  'Datos antes que intuiciones',
  'Acompañamiento humano',
  'Responsable único por operación',
  'Reportes claros y puntuales',
  'Relaciones a largo plazo',
]

export const socios: Socio[] = [
  { initial: 'A', rol: 'Socio · Operaciones residenciales', area: 'Compra y venta', formacion: 'UCA' },
  { initial: 'B', rol: 'Socio · Inversiones y portafolio', area: 'Análisis y rentabilidad', formacion: 'UCA' },
  { initial: 'C', rol: 'Socio · Tasaciones y mercado', area: 'Valuaciones técnicas', formacion: 'UCA' },
  { initial: 'D', rol: 'Socio · Legales y escrituración', area: 'Due diligence', formacion: 'UCA' },
]
