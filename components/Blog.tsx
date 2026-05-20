'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { posts } from '@/lib/blogContent'

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between flex-wrap gap-6"
        >
          <div>
            <div className="font-mono text-[10.5px] text-gold tracking-[0.3em] uppercase mb-2">
              Notas y análisis
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-inter text-ink tracking-tight">
              Blog
            </h2>
            <p className="text-base font-inter text-ink/65 max-w-xl mt-3">
              Mercado, tendencias y guías prácticas para acompañar cada decisión inmobiliaria.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-ink/8 shadow-[0_1px_0_rgba(0,0,0,0.04),0_18px_40px_-25px_rgba(15,15,15,0.18)] hover:shadow-[0_1px_0_rgba(0,0,0,0.04),0_30px_60px_-25px_rgba(15,15,15,0.28)] transition-shadow duration-500 group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div
                  className="relative aspect-[16/10] bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${post.thumbImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cream/85 text-ink text-[10px] font-mono tracking-[0.25em] uppercase backdrop-blur-sm">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {post.category}
                  </span>
                  <span className="absolute bottom-3 right-3 font-mono text-[10px] text-cream/80 tracking-[0.25em] uppercase">
                    {post.fecha}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-inter font-bold text-ink text-[18px] leading-[1.25] tracking-tight group-hover:text-gold transition-colors">
                    {post.titleLine1} {post.titleAccent}
                    {post.titleEnd}
                  </h3>
                  <p className="font-inter text-[13.5px] text-ink/65 leading-[1.6] mt-2.5 line-clamp-3">
                    {post.bajada}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-[10.5px] text-ink/45 tracking-wider uppercase">
                      {post.tiempoLectura} · {post.autor}
                    </span>
                    <span className="font-inter font-medium text-[12.5px] text-ink flex items-center gap-1.5">
                      Leer
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
