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
    await page.goto(`http://localhost:3000/servicios${n}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(1500)
    await page.evaluate(() => {
      const el = document.getElementById('servicios')
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
    })
    await page.waitForTimeout(900)
    await page.screenshot({ path: path.join(OUT, `servicios${n}-desktop.png`) })
    console.log(`✓ servicios${n} desktop`)
  }
  await ctx.close()

  // Mobile shots
  const m = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    locale: 'es-AR',
  })
  const mp = await m.newPage()
  for (const n of variants) {
    await mp.goto(`http://localhost:3000/servicios${n}#servicios`, { waitUntil: 'networkidle' })
    await mp.waitForTimeout(700)
    const target = await mp.locator('#servicios').boundingBox().catch(() => null)
    if (target) await mp.evaluate((y) => window.scrollTo(0, y), Math.max(0, target.y - 16))
    await mp.waitForTimeout(400)
    await mp.screenshot({ path: path.join(OUT, `servicios${n}-mobile.png`) })
    console.log(`✓ servicios${n} mobile`)
  }
  await browser.close()
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
