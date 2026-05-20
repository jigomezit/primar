export type Faq = {
  q: string
  a: string
}

export const faqs: Faq[] = [
  {
    q: '¿Quién paga los gastos de escritura?',
    a: 'Se reparten entre ambas partes. El vendedor afronta el 50% del Impuesto de Sellos, un 1% de gastos de escritura y la comisión inmobiliaria pactada (orientativa: 3%). El comprador asume el otro 50% de Sellos, los honorarios del escribano (aprox. 2%), 1% de gastos y su comisión inmobiliaria (orientativa: 4%). Los honorarios profesionales no incluyen IVA en estas estimaciones.',
  },
  {
    q: '¿Cuál es el Impuesto de Sellos en CABA en 2026?',
    a: 'La alícuota vigente es del 3,5% sobre la operación. Cuando se trata de vivienda única, familiar y de uso permanente, el impuesto se aplica únicamente sobre el monto que exceda los $226.100.000. Si el precio pactado es inferior al Valor Inmobiliario de Referencia (VIR), Sellos se liquida sobre el VIR. El importe total se divide 50% y 50% entre vendedor y comprador.',
  },
  {
    q: '¿Qué es el mínimo no imponible para vivienda única?',
    a: 'En 2026 el monto exento para vivienda única, familiar y de uso permanente es de $226.100.000. Si la operación queda por debajo de ese piso, no se tributa Sellos. Si lo supera, la alícuota del 3,5% se aplica únicamente sobre el excedente, no sobre el total.',
  },
  {
    q: '¿El vendedor paga Impuesto Cedular en 2026?',
    a: 'Desde el 1 de enero de 2026 las personas humanas no habitualistas quedan exentas del Impuesto Cedular sobre la ganancia inmobiliaria. Mantienen la obligación quienes operan de forma habitual (por ejemplo desarrolladores): en ese caso se liquida por declaración jurada y no es retenido por el escribano.',
  },
  {
    q: '¿Qué es el VIR y cómo afecta la operación?',
    a: 'El Valor Inmobiliario de Referencia es el valor mínimo de escrituración definido por GCBA. Cuando el precio acordado es inferior al VIR, el Impuesto de Sellos se calcula sobre el VIR y no sobre el precio real, lo que puede incrementar el costo. Conviene solicitarle al escribano el VIR del inmueble antes de firmar el boleto.',
  },
  {
    q: '¿Qué incluyen los honorarios del escribano?',
    a: 'Aproximadamente un 2% del precio (sin IVA). Cubren la redacción y certificación de la escritura, el estudio de títulos, los certificados administrativos, la diligencia ante el Registro de la Propiedad y la inscripción final. El escribano debe entregar la proforma con el detalle de gastos antes de la firma.',
  },
  {
    q: '¿Cuánto cobra la inmobiliaria en CABA?',
    a: 'Los porcentajes orientativos son 3% para el vendedor (rango habitual de 1% a 3%) y 4% para el comprador. Son valores pactables y editables en este calculador. El IVA del 21% sobre los honorarios profesionales no está incluido en la estimación; consultalo con tu asesor según corresponda.',
  },
  {
    q: '¿Qué es el Tracto Abreviado?',
    a: 'Es el mecanismo por el cual se escritura junto con la venta una herencia que todavía no fue inscripta en el Registro de la Propiedad. Es frecuente en sucesiones en curso y representa un costo adicional de aproximadamente 0,4% sobre el precio, a cargo del vendedor.',
  },
]
