import { chromium } from 'playwright'
import path from 'node:path'

const OUT = path.resolve('./scripts/mobile-smoke-screenshots')
const routes = [
  { url: 'http://localhost:3000/#blog', name: 'home-blog-section', scroll: 'auto' },
  { url: 'http://localhost:3000/blog/alquileres-caba', name: 'blog-caba', scroll: 0 },
  { url: 'http://localhost:3000/blog/alquileres-gba', name: 'blog-gba', scroll: 0 },
  { url: 'http://localhost:3000/blog/demanda-departamentos-pequenos', name: 'blog-lima', scroll: 0 },
]

;(async () => {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: 'es-AR',
  })
  const page = await ctx.newPage()
  for (const r of routes) {
    await page.goto(r.url, { waitUntil: 'networkidle' })
    await page.waitForTimeout(500)
    if (r.scroll === 'auto') {
      const blog = await page.locator('#blog').boundingBox().catch(() => null)
      if (blog) await page.evaluate((y) => window.scrollTo(0, y), blog.y - 20)
    } else {
      await page.evaluate((y) => window.scrollTo(0, y), r.scroll)
    }
    await page.waitForTimeout(400)
    await page.screenshot({ path: path.join(OUT, `${r.name}.png`) })
    console.log(`✓ ${r.name}`)
  }
  await browser.close()
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
