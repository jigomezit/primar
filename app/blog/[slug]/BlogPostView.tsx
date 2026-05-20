'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CalcNavbar from '@/components/CalcNavbar'
import Footer from '@/components/Footer'
import { type BlogPost, fmtMoney, posts } from '@/lib/blogContent'

export default function BlogPostView({ post }: { post: BlogPost }) {
  const promedio = Math.round(
    post.rankingRows.reduce((a, b) => a + b.value, 0) / post.rankingRows.length,
  )
  const max = Math.max(...post.rankingRows.map((r) => r.value))
  const min = Math.min(...post.rankingRows.map((r) => r.value))
  const brecha = max - min
  const topRows = post.rankingRows.slice(0, 10)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <CalcNavbar variant="light" />

      <article className="pt-28 pb-12">
        <section className="px-6 lg:px-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <Link
              href="/#blog"
              className="font-mono text-[10.5px] text-ink/50 hover:text-ink tracking-[0.2em] uppercase transition-colors"
            >
              ← Blog
            </Link>
            <span className="font-mono text-[10.5px] text-ink/40 tracking-[0.2em] uppercase">
              {post.category} · {post.fecha}
            </span>
            <span className="ml-auto font-mono text-[10.5px] text-ink/40 tracking-[0.2em] uppercase">
              {post.tiempoLectura} de lectura
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-playfair text-[40px] md:text-[60px] lg:text-[70px] leading-[0.98] tracking-tight text-ink max-w-5xl"
          >
            {post.titleLine1}
            <br />
            <span className="italic text-gold font-light">{post.titleAccent}</span>
            {post.titleEnd}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-inter text-ink/65 max-w-3xl mt-6 text-[17px] leading-[1.6]"
          >
            {post.bajada}
          </motion.p>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 mb-12"
        >
          <div className="px-6 lg:px-10 max-w-6xl mx-auto">
            <div
              className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${post.heroImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <span className="font-mono text-[10.5px] text-cream/70 tracking-[0.3em] uppercase">
                  {post.category} · {post.fecha}
                </span>
                <span className="font-mono text-[10.5px] text-cream/70 tracking-[0.3em] uppercase">
                  Primar
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16">
            <div className="space-y-6">
              {post.cuerpo.map((p, i) => {
                if (p.kind === 'h') {
                  return (
                    <motion.h2
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5 }}
                      className="font-playfair text-[24px] md:text-[30px] tracking-tight text-ink mt-6"
                    >
                      {p.text}
                    </motion.h2>
                  )
                }
                if (p.kind === 'pull') {
                  return (
                    <motion.blockquote
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6 }}
                      className="border-l-2 border-gold pl-5 my-4 font-playfair italic text-[22px] md:text-[26px] leading-[1.3] text-ink/85"
                    >
                      “{p.text}”
                    </motion.blockquote>
                  )
                }
                return (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="font-inter text-[16px] leading-[1.75] text-ink/80"
                  >
                    {p.text}
                  </motion.p>
                )
              })}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-12 pt-6 border-t border-ink/10 font-mono text-[11px] text-ink/45 tracking-wider"
              >
                Fuente: {post.fuente}. Datos actualizados al {post.fechaActualizacion}.
              </motion.div>
            </div>

            <aside className="lg:sticky lg:top-28 self-start">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-ink/8 rounded-2xl p-5 shadow-[0_1px_0_rgba(0,0,0,0.04),0_18px_40px_-25px_rgba(15,15,15,0.18)]"
              >
                <div className="font-mono text-[10px] text-gold tracking-[0.3em] uppercase mb-3">
                  {post.rankingLabel}
                </div>
                <ul className="divide-y divide-ink/8">
                  {topRows.map((r, i) => (
                    <li key={r.label} className="flex items-baseline py-2 gap-2">
                      <span className="font-mono text-[11px] text-ink/40 w-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-inter text-[13.5px] text-ink/85">
                        {r.label}
                      </span>
                      <span className="flex-1 border-b border-dotted border-ink/15 mx-1.5" />
                      <span className="font-mono text-[12px] text-ink tracking-tight whitespace-nowrap">
                        {fmtMoney(r.value, post.rankingCurrency)}
                        {post.rankingValueSuffix}
                      </span>
                    </li>
                  ))}
                </ul>
                {post.rankingRows.length > topRows.length && (
                  <div className="mt-2 font-mono text-[10px] text-ink/40 tracking-wider">
                    + {post.rankingRows.length - topRows.length} más en el informe completo
                  </div>
                )}
                <div className="mt-3 pt-3 border-t border-ink/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-ink/45 tracking-wider uppercase">
                    Promedio
                  </span>
                  <span className="font-mono text-[12.5px] text-ink">
                    {fmtMoney(promedio, post.rankingCurrency)}
                    {post.rankingValueSuffix}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-mono text-[10px] text-ink/45 tracking-wider uppercase">
                    Brecha máx–mín
                  </span>
                  <span className="font-mono text-[12.5px] text-gold">
                    {fmtMoney(brecha, post.rankingCurrency)}
                    {post.rankingValueSuffix}
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 grid grid-cols-2 gap-3"
              >
                {post.stats.map((s) => (
                  <StatBox key={s.label} label={s.label} value={s.value} sub={s.sub} />
                ))}
              </motion.div>
            </aside>
          </div>

          {post.imagenes.length >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 grid md:grid-cols-2 gap-5"
            >
              <div
                className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${post.imagenes[1]})` }}
              />
              <div
                className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${post.imagenes[2]})` }}
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-6 border-t border-ink/10 flex items-center justify-between flex-wrap gap-4"
          >
            <div className="font-mono text-[11px] text-ink/45 tracking-wider uppercase">
              {post.autor}
            </div>
            <Link
              href={post.ctaHref}
              className="inline-flex items-center gap-2 font-inter text-[13px] font-medium px-4 py-2 rounded-full border border-ink text-ink hover:bg-ink hover:text-cream transition-colors"
            >
              {post.ctaLabel}
              <span className="font-mono">→</span>
            </Link>
          </motion.div>

          <RelatedPosts currentSlug={post.slug} />
        </section>
      </article>

      <Footer />
    </main>
  )
}

function StatBox({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub: string
}) {
  return (
    <div className="bg-white border border-ink/8 rounded-xl p-3">
      <div className="font-mono text-[9.5px] text-ink/50 tracking-[0.25em] uppercase mb-1">
        {label}
      </div>
      <div className="font-inter font-semibold text-ink text-[14px] tracking-tight truncate">
        {value}
      </div>
      <div className="font-mono text-[10px] text-ink/40 mt-0.5 truncate">{sub}</div>
    </div>
  )
}

function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const others = posts.filter((p) => p.slug !== currentSlug).slice(0, 2)
  if (others.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-14 pt-8 border-t border-ink/10"
    >
      <div className="font-mono text-[10px] text-gold tracking-[0.3em] uppercase mb-5">
        Seguir leyendo
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {others.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group bg-white border border-ink/8 rounded-2xl overflow-hidden hover:shadow-[0_24px_60px_-30px_rgba(15,15,15,0.28)] transition-shadow"
          >
            <div
              className="aspect-[16/9] bg-cover bg-center"
              style={{ backgroundImage: `url(${p.thumbImage})` }}
            />
            <div className="p-4">
              <div className="font-mono text-[9.5px] text-ink/45 tracking-[0.25em] uppercase mb-2">
                {p.category} · {p.fecha}
              </div>
              <h3 className="font-inter font-semibold text-ink text-[15px] leading-[1.25] tracking-tight group-hover:text-gold transition-colors">
                {p.titleLine1} {p.titleAccent}
                {p.titleEnd}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
