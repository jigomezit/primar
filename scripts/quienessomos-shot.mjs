import { chromium } from 'playwright'
import path from 'node:path'

const OUT = path.resolve('./scripts/mobile-smoke-screenshots')
const variants = [1, 2, 3, 4, 5]

;(async () => {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: 'es-AR',
  })
  const page = await ctx.newPage()

  for (const n of variants) {
    await page.goto(`http://localhost:3000/quienessomos${n}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(1200)
    await page.evaluate(() => {
      const el = document.getElementById('nosotros')
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
    })
    await page.waitForTimeout(800)
    await page.screenshot({ path: path.join(OUT, `quienessomos${n}-desktop.png`) })
    console.log(`✓ quienessomos${n} desktop`)
  }
  await ctx.close()

  const m = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    locale: 'es-AR',
  })
  const mp = await m.newPage()
  for (const n of variants) {
    await mp.goto(`http://localhost:3000/quienessomos${n}`, { waitUntil: 'networkidle' })
    await mp.waitForTimeout(1200)
    await mp.evaluate(() => {
      const el = document.getElementById('nosotros')
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
    })
    await mp.waitForTimeout(700)
    const dims = await mp.evaluate(() => ({
      docW: document.documentElement.scrollWidth,
      vpW: window.innerWidth,
    }))
    console.log(`  quienessomos${n} mobile: doc ${dims.docW} vp ${dims.vpW}${dims.docW > dims.vpW + 1 ? ' !! OVERFLOW' : ''}`)
    await mp.screenshot({ path: path.join(OUT, `quienessomos${n}-mobile.png`) })
  }

  await browser.close()
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
