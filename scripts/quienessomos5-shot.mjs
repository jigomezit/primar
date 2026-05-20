import { chromium } from 'playwright'
import path from 'node:path'

const OUT = path.resolve('./scripts/mobile-smoke-screenshots')

;(async () => {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: 'es-AR',
  })
  const page = await ctx.newPage()
  await page.goto('http://localhost:3000/quienessomos5', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  await page.evaluate(() => {
    const el = document.getElementById('nosotros')
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
  })
  await page.waitForTimeout(800)
  await page.screenshot({ path: path.join(OUT, 'quienessomos5-desktop.png') })
  console.log('✓ desktop')
  await browser.close()
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
