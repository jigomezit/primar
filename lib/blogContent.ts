export type Paragraph = { kind: 'p' | 'pull' | 'h'; text: string }
export type Currency = 'ARS' | 'PEN' | 'USD'

export type DataRow = { label: string; value: number }
export type StatTile = { label: string; value: string; sub: string }

export type BlogPost = {
  slug: string
  category: string
  fecha: string
  fechaIso: string
  tiempoLectura: string
  autor: string
  titleLine1: string
  titleAccent: string
  titleEnd: string
  bajada: string
  heroImage: string
  thumbImage: string
  imagenes: string[]
  cuerpo: Paragraph[]
  fuente: string
  fechaActualizacion: string
  rankingLabel: string
  rankingRows: DataRow[]
  rankingCurrency: Currency
  rankingValueSuffix?: string
  stats: StatTile[]
  ctaHref: string
  ctaLabel: string
}

export function fmtMoney(value: number, currency: Currency): string {
  const cfg = {
    ARS: { locale: 'es-AR', currency: 'ARS' },
    PEN: { locale: 'es-PE', currency: 'PEN' },
    USD: { locale: 'es-AR', currency: 'USD' },
  }[currency]
  return new Intl.NumberFormat(cfg.locale, {
    style: 'currency',
    currency: cfg.currency,
    maximumFractionDigits: 0,
  }).format(value)
}

// ─────────────────────────────────────────────────────────────────────────────
// Post 1 — Alquileres CABA
// ─────────────────────────────────────────────────────────────────────────────

const cabaRanking: DataRow[] = [
  { label: 'Núñez', value: 834_798 },
  { label: 'Belgrano', value: 808_484 },
  { label: 'Palermo', value: 804_543 },
  { label: 'Chacarita', value: 803_958 },
  { label: 'Saavedra', value: 791_276 },
  { label: 'Colegiales', value: 778_504 },
  { label: 'Villa Urquiza', value: 767_175 },
  { label: 'Villa Crespo', value: 750_500 },
  { label: 'Villa Pueyrredón', value: 750_246 },
  { label: 'Recoleta', value: 739_911 },
  { label: 'San Telmo', value: 664_248 },
  { label: 'Flores', value: 658_757 },
  { label: 'Parque Chacabuco', value: 654_724 },
  { label: 'Montserrat', value: 649_907 },
  { label: 'Balvanera', value: 649_101 },
  { label: 'Floresta', value: 641_077 },
  { label: 'Constitución', value: 628_051 },
  { label: 'San Nicolás', value: 627_789 },
  { label: 'Boedo', value: 627_580 },
  { label: 'Liniers', value: 618_347 },
  { label: 'San Cristóbal', value: 617_667 },
  { label: 'Barracas', value: 606_953 },
]

const cabaPromedio = Math.round(
  cabaRanking.reduce((a, b) => a + b.value, 0) / cabaRanking.length,
)
const cabaBrecha = cabaRanking[0].value - cabaRanking[cabaRanking.length - 1].value

const postAlquileresCABA: BlogPost = {
  slug: 'alquileres-caba',
  category: 'Mercado',
  fecha: '15 Mayo 2026',
  fechaIso: '2026-05-15',
  tiempoLectura: '4 min',
  autor: 'Equipo Primar',
  titleLine1: 'Barrio por barrio:',
  titleAccent: 'cuánto sale',
  titleEnd: ' alquilar un dos ambientes en CABA.',
  bajada:
    'El relevamiento de mayo confirma que la presión sobre el alquiler residencial sigue firme en la Ciudad, con una brecha de más de doscientos mil pesos entre el corredor norte y los barrios del sur.',
  heroImage: '/images/hero-1.jpg',
  thumbImage: '/images/hero-1.jpg',
  imagenes: ['/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg'],
  cuerpo: [
    {
      kind: 'p',
      text: 'El alquiler de un dos ambientes en la Ciudad volvió a moverse por encima de la inflación porteña. Según el último relevamiento del Instituto de Estadística y Censos (Idecba) sobre datos de Argenprop, el valor promedio mensual avanzó un 33,6% en términos interanuales y subió entre 8% y 11% en lo que va del trimestre, contra una inflación local del 32,1% en el mismo período.',
    },
    {
      kind: 'p',
      text: 'La unidad de referencia es chica: cuarenta y tres metros cuadrados, lo que arroja un precio promedio de $16.774 por metro. La fotografía completa muestra una geografía con dos extremos claros. En el norte, Núñez encabeza el ranking con $834.798 mensuales y arrastra a Belgrano y Palermo a la franja alta. En el otro extremo, Barracas cierra la tabla en $606.953, lo que deja una brecha de más de doscientos veintisiete mil pesos entre la punta y el fondo del listado.',
    },
    { kind: 'h', text: 'El corredor norte concentra el premium' },
    {
      kind: 'p',
      text: 'Núñez, Belgrano, Palermo, Chacarita y Saavedra forman el quinteto más caro. Son barrios donde el stock disponible se redujo, las plantas tipo se mantienen vigentes y la demanda corporativa convive con la familiar. En todos ellos el ticket promedio quedó por arriba de los $790.000.',
    },
    {
      kind: 'pull',
      text: 'Hay una brecha de $227.845 entre el barrio más caro y el más barato — más que un salario formal del segmento medio.',
    },
    {
      kind: 'p',
      text: 'En la franja media aparece Recoleta con $739.911, seguida por San Telmo y Flores. Son zonas con mucha oferta de departamentos antiguos refaccionados, donde el precio se ajusta menos rápido al ritmo de la demanda. Para el inquilino son una entrada amigable al corredor central; para el inversor representan unidades con menor expectativa de revalorización inmediata pero rentas más estables.',
    },
    { kind: 'h', text: 'Dólar sobre la mesa' },
    {
      kind: 'p',
      text: 'Un dato a seguir: la oferta de alquileres pactados directamente en dólares creció con fuerza en algunos barrios. Palermo ya tiene cerca del 40% de sus avisos en moneda dura, y las publicaciones en pesos cayeron 15% en el último período. A nivel ciudad, el 72,4% del aviso sigue cotizando en moneda local — el mínimo de los últimos seis trimestres.',
    },
    {
      kind: 'p',
      text: 'Mirando la composición de la oferta, los dos ambientes representan el 41,5% de los avisos publicados, seguidos por los monoambientes con un 33%. Es el formato que mejor encaja con la demanda actual: parejas jóvenes, profesionales que entran al mercado, o inversores que buscan la unidad con mejor rotación.',
    },
  ],
  fuente: 'Instituto de Estadística y Censos (Idecba) sobre datos de Argenprop',
  fechaActualizacion: '15 de mayo de 2026',
  rankingLabel: 'Ranking mayo 2026',
  rankingRows: cabaRanking,
  rankingCurrency: 'ARS',
  stats: [
    {
      label: 'Más caro',
      value: 'Núñez',
      sub: fmtMoney(cabaRanking[0].value, 'ARS'),
    },
    {
      label: 'Más barato',
      value: 'Barracas',
      sub: fmtMoney(cabaRanking[cabaRanking.length - 1].value, 'ARS'),
    },
    { label: 'Interanual', value: '+33,6%', sub: 'Inflación 32,1%' },
    {
      label: 'Por m²',
      value: fmtMoney(16_774, 'ARS'),
      sub: '43 m² promedio',
    },
  ],
  ctaHref: '/calculadora',
  ctaLabel: 'Calculá tus gastos de escritura',
}

// Helpers for display
export const cabaPostStats = { cabaPromedio, cabaBrecha }

// ─────────────────────────────────────────────────────────────────────────────
// Post 2 — Alquileres GBA
// ─────────────────────────────────────────────────────────────────────────────

const gbaRanking: DataRow[] = [
  { label: 'La Lucila', value: 945_561 },
  { label: 'Olivos', value: 941_634 },
  { label: 'Vicente López', value: 913_401 },
  { label: 'Canning', value: 833_099 },
  { label: 'Sáenz Peña', value: 796_171 },
  { label: 'Castelar', value: 726_917 },
  { label: 'Ituzaingó', value: 706_431 },
  { label: 'City Bell', value: 693_763 },
  { label: 'Banfield', value: 686_702 },
  { label: 'José C. Paz Oeste', value: 571_354 },
  { label: 'Los Polvorines', value: 550_088 },
  { label: 'José C. Paz Centro', value: 499_205 },
  { label: 'Isidro Casanova', value: 488_263 },
  { label: 'Paso del Rey', value: 486_042 },
  { label: 'Villa Elvira', value: 483_833 },
  { label: 'Luis Guillón', value: 477_913 },
  { label: 'La Tablada', value: 495_420 },
  { label: 'Los Hornos', value: 458_783 },
]

const postAlquileresGBA: BlogPost = {
  slug: 'alquileres-gba',
  category: 'Mercado',
  fecha: '13 Mayo 2026',
  fechaIso: '2026-05-13',
  tiempoLectura: '4 min',
  autor: 'Equipo Primar',
  titleLine1: 'Zona por zona:',
  titleAccent: 'cuánto sale',
  titleEnd: ' alquilar en el Gran Buenos Aires.',
  bajada:
    'Los precios del conurbano dibujan tres mapas distintos: norte premium con La Lucila a la cabeza, sur y oeste con tickets contenidos. Lo más relevante del informe está en la variación: las tres zonas subieron por debajo de la inflación local.',
  heroImage: '/images/services.jpg',
  thumbImage: '/images/services.jpg',
  imagenes: ['/images/services.jpg', '/images/hero-3.jpg', '/images/hero-1.jpg'],
  cuerpo: [
    {
      kind: 'p',
      text: 'El mapa de alquileres en el conurbano vuelve a mostrar un dibujo desparejo. El relevamiento de Zonaprop para abril de 2026 deja a la zona norte como la franja más cara del Gran Buenos Aires, con un promedio de $778.265 por mes para un dos ambientes, mientras que el sur y el oeste comparten un piso cercano a los $610.000 mensuales.',
    },
    {
      kind: 'p',
      text: 'En el corredor norte, La Lucila lidera con $945.561 mensuales y arrastra a Olivos y Vicente López a la franja alta del podio. Son las tres localidades con mayor poder adquisitivo de la zona y donde el inventario disponible se mantiene tenso. En el otro extremo de la misma zona, José C. Paz centro queda en $499.205 — una brecha de $446.356 entre punta y fondo dentro de un mismo corredor.',
    },
    { kind: 'h', text: 'Sur y oeste: precios contenidos, oferta dispersa' },
    {
      kind: 'p',
      text: 'El sur del conurbano promedia $609.450, con Canning como la localidad más cara ($833.099) seguida por City Bell y Banfield. Los Hornos cierra la tabla en $458.783. En el oeste, Sáenz Peña encabeza con $796.171 y Paso del Rey queda en $486.042. Las brechas internas son menores que en el norte —$374.316 en el sur y $310.129 en el oeste— lo que sugiere mercados más homogéneos en cuanto a tipologías y poder adquisitivo.',
    },
    {
      kind: 'pull',
      text: 'Las tres zonas del GBA aumentaron los alquileres por debajo de la inflación local del período: la pérdida real para el propietario fluctúa entre 3,9% y 4,6%.',
    },
    {
      kind: 'p',
      text: 'La variación interanual es el dato más relevante. Con una inflación local del 12,3% en el período medido, GBA Norte subió 8,2%, Sur 8,4% y Oeste 7,7%. El alquiler residencial del conurbano perdió contra la inflación en las tres zonas — un escenario de alivio para el inquilino y de tensión sobre la rentabilidad para el propietario inversor.',
    },
    { kind: 'h', text: 'Comparación con CABA' },
    {
      kind: 'p',
      text: 'La unidad de referencia del relevamiento es ligeramente más grande que en CABA: cincuenta metros cuadrados cubiertos contra los cuarenta y tres del informe porteño, lo que explica en parte el ticket promedio. Aun así, el GBA Norte queda a tiro del piso de la franja media porteña — apenas $13.000 por debajo de Recoleta— lo que ratifica el premium que el mercado le asigna a la conexión rápida con el centro.',
    },
    {
      kind: 'p',
      text: 'Para el inversor el mensaje es claro: el alquiler en zonas tradicionales del GBA quedó atrás del aumento general de precios. Conviene revisar contratos antes del próximo ajuste y mirar las brechas dentro de cada zona, donde aparecen oportunidades para quienes apuntan a rentabilidades estables sobre un ticket inicial menor.',
    },
  ],
  fuente: 'Zonaprop · informe de abril 2026',
  fechaActualizacion: '13 de mayo de 2026',
  rankingLabel: 'Ranking abril 2026',
  rankingRows: gbaRanking,
  rankingCurrency: 'ARS',
  stats: [
    { label: 'Más caro', value: 'La Lucila', sub: fmtMoney(945_561, 'ARS') },
    { label: 'Más barato', value: 'Los Hornos', sub: fmtMoney(458_783, 'ARS') },
    { label: 'Norte +', value: '+8,2%', sub: 'Inflación 12,3%' },
    { label: 'Referencia', value: '50 m²', sub: 'Dos ambientes' },
  ],
  ctaHref: '/calculadora',
  ctaLabel: 'Calculá tus gastos de escritura',
}

// ─────────────────────────────────────────────────────────────────────────────
// Post 3 — Demanda inmobiliaria: deptos chicos + áreas comunes (Lima)
// ─────────────────────────────────────────────────────────────────────────────

const limaRanking: DataRow[] = [
  { label: 'San Isidro', value: 9_268 },
  { label: 'Magdalena del Mar', value: 7_326 },
  { label: 'San Borja', value: 7_161 },
  { label: 'Surquillo', value: 6_873 },
  { label: 'Lima · promedio', value: 6_886 },
  { label: 'San Miguel', value: 6_186 },
]

const postDemandaDeptosPequenos: BlogPost = {
  slug: 'demanda-departamentos-pequenos',
  category: 'Tendencias',
  fecha: '13 Mayo 2026',
  fechaIso: '2026-05-13',
  tiempoLectura: '4 min',
  autor: 'Equipo Primar',
  titleLine1: 'Demanda inmobiliaria 2026:',
  titleAccent: 'departamentos chicos',
  titleEnd: ' y áreas comunes redefinen el mercado.',
  bajada:
    'En Lima la demanda se mueve hacia unidades de 45 a 80 metros con coworking, gimnasio y zonas pet-friendly en el edificio. Un patrón que también se observa en Buenos Aires y que conviene leer en clave inversora.',
  heroImage: '/images/hero-3.jpg',
  thumbImage: '/images/hero-3.jpg',
  imagenes: ['/images/hero-3.jpg', '/images/services.jpg', '/images/hero-2.jpg'],
  cuerpo: [
    {
      kind: 'p',
      text: 'El mercado inmobiliario limeño consolida una tendencia que ya se anticipaba: los compradores buscan menos metros cuadrados pero más servicios. Las unidades de uno y dos dormitorios, en el rango de cuarenta y cinco a ochenta metros cubiertos, concentran el grueso de la demanda y desplazan al departamento tradicional de tres dormitorios como categoría aspiracional.',
    },
    { kind: 'h', text: 'Áreas comunes como diferencial' },
    {
      kind: 'p',
      text: 'En los proyectos nuevos lo común gana terreno sobre lo privativo. Coworkings dentro del edificio, gimnasios equipados, zonas sociales para reuniones y espacios pet-friendly aparecen como infraestructura básica, no como amenities premium. El teletrabajo le agregó utilidad a los coworkings, y la convivencia con mascotas dejó de ser excepción para volverse requisito.',
    },
    {
      kind: 'p',
      text: 'El perfil del comprador acompaña el formato: una franja etaria de veinticinco a cuarenta y cinco años, informada y analítica, que entra al mercado tanto para vivienda propia como para inversión. Compara rentabilidades, calcula plazos de recuperación y prioriza conectividad y servicios sobre metros cuadrados extra.',
    },
    {
      kind: 'pull',
      text: 'La rentabilidad bruta anual del residencial en Lima se ubica en 5,44% y el plazo de recuperación de inversión bajó a 18,4 años — una mejora de 2,5% interanual.',
    },
    { kind: 'h', text: 'Precios por distrito' },
    {
      kind: 'p',
      text: 'El precio promedio por metro cuadrado en Lima ronda los S/ 6.886 según el índice de abril. La dispersión entre distritos es marcada: San Isidro lidera con S/ 9.268, seguido por Magdalena del Mar (S/ 7.326), San Borja (S/ 7.161) y Surquillo (S/ 6.873). San Miguel ofrece el piso de la lista en S/ 6.186. La diferencia entre extremos supera el 50%.',
    },
    {
      kind: 'p',
      text: 'En crecimiento de demanda los distritos no caminan parejos. Lima Moderna sumó un 16%, mientras que San Borja y San Isidro escalaron 23%. El acumulado anual del mercado es moderado —apenas 1%—, pero el ritmo de separaciones en ferias inmobiliarias se mantiene firme: entre veinte y treinta unidades por evento.',
    },
    {
      kind: 'p',
      text: 'La lectura para el inversor latinoamericano es más amplia: el modelo del departamento chico con servicios comunes ya no es un ensayo. Es la respuesta del mercado a un comprador joven, conectado, que reparte su día entre el departamento, el coworking y el barrio, y le exige al edificio responder a ese ritmo. En CABA se observa el mismo patrón con foco en Palermo, Belgrano y Núñez.',
    },
  ],
  fuente: 'Tale Inmobiliaria, Urbania (Índice del Mercado Inmobiliario), Inmobiliaria Edifica',
  fechaActualizacion: '13 de mayo de 2026',
  rankingLabel: 'Precio por m² · abril 2026',
  rankingRows: limaRanking,
  rankingCurrency: 'PEN',
  rankingValueSuffix: '/m²',
  stats: [
    { label: 'Más caro', value: 'San Isidro', sub: fmtMoney(9_268, 'PEN') + '/m²' },
    { label: 'Más barato', value: 'San Miguel', sub: fmtMoney(6_186, 'PEN') + '/m²' },
    { label: 'Rentabilidad', value: '5,44%', sub: 'bruta anual' },
    { label: 'Recupero', value: '18,4 años', sub: '−2,5% interanual' },
  ],
  ctaHref: '/calculadora',
  ctaLabel: 'Calculá tus gastos de escritura',
}

// ─────────────────────────────────────────────────────────────────────────────
// Posts index
// ─────────────────────────────────────────────────────────────────────────────

export const posts: BlogPost[] = [
  postAlquileresCABA,
  postAlquileresGBA,
  postDemandaDeptosPequenos,
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug)
}
