'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { aboutMeta } from '@/lib/aboutContent'

const secciones = [
  {
    titulo: 'Nuestra Visión',
    body:
      'Queremos que cada cliente tenga una visión más amplia y segura al momento de comprar, vender o alquilar una propiedad. Creemos que el acceso a la información, el acompañamiento profesional y la transparencia son claves para que puedas concretar tus sueños inmobiliarios con confianza.',
  },
  {
    titulo: 'Nuestro Compromiso',
    body:
      'Trabajamos con pasión, dedicación y profesionalismo para ayudarte a concretar tus sueños y necesidades inmobiliarias. Nos motiva construir relaciones de confianza y ser parte de tu historia.',
  },
]

export default function AboutUs5() {
  return (
    <section id="nosotros" className="py-20 md:py-24 bg-cream text-ink">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-3">
              {aboutMeta.eyebrow}
            </div>
            <h2 className="font-inter font-bold text-[40px] md:text-[56px] leading-[1.02] tracking-tight text-ink">
              {aboutMeta.titleLine1}
              <br />
              <span className="text-gold">{aboutMeta.titleAccent}</span>
              {aboutMeta.titleEnd}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="font-mono text-[10.5px] text-ink/55 tracking-[0.25em] uppercase mb-2">
              {aboutMeta.formacion}
            </div>
            <p className="font-inter text-ink/70 text-[14.5px] leading-[1.65]">
              {aboutMeta.shortLead}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[16/7] rounded-2xl overflow-hidden mb-16"
        >
          <Image
            src={aboutMeta.heroImage}
            alt="Equipo Primar"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          <span className="absolute bottom-4 right-4 font-mono text-[10px] text-cream/85 tracking-[0.3em] uppercase">
            Primar · {aboutMeta.ciudad}
          </span>
        </motion.div>

        <div className="space-y-14 md:space-y-16">
          {secciones.map((s, i) => (
            <motion.article
              key={s.titulo}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-[64px_1fr] gap-5 md:gap-8"
            >
              <div className="flex md:flex-col items-start gap-3 md:gap-2">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 18 }}
                  className="font-inter font-bold text-gold text-[40px] md:text-[52px] leading-none tracking-tight"
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>
                <span className="hidden md:block w-px flex-1 bg-gradient-to-b from-gold/40 to-transparent mt-2" />
              </div>

              <div>
                <h3 className="font-inter font-bold text-[22px] md:text-[30px] tracking-tight leading-[1.15] text-ink">
                  {s.titulo}
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-inter text-[15.5px] text-ink/75 leading-[1.75] mt-4 max-w-3xl"
                >
                  {s.body}
                </motion.p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 pt-8 border-t border-ink/10 font-mono text-[11px] text-ink/50 tracking-[0.2em] uppercase"
        >
          Equipo Primar · {aboutMeta.formacion} · Desde {aboutMeta.founded}
        </motion.div>
      </div>
    </section>
  )
}
