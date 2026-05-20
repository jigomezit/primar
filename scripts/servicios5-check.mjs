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

  await page.goto('http://localhost:3000/servicios5', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  await page.evaluate(() => {
    const el = document.getElementById('servicios')
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
  })
  await page.waitForTimeout(900)

  const m = await page.evaluate(() => {
    const sec = document.getElementById('servicios')
    const tabsList = sec?.querySelector('.lg\\:col-span-4 > div')
    const panel = sec?.querySelector('.lg\\:col-span-8 [class*="bg-ink"]')
    const rect = (el) => el ? el.getBoundingClientRect() : null
    const t = rect(tabsList)
    const p = rect(panel)
    return {
      tabs: t ? { h: Math.round(t.height), top: Math.round(t.top), bottom: Math.round(t.bottom) } : null,
      panel: p ? { h: Math.round(p.height), top: Math.round(p.top), bottom: Math.round(p.bottom) } : null,
    }
  })

  console.log('Tabs (left):  ', m.tabs)
  console.log('Panel (right):', m.panel)
  if (m.tabs && m.panel) {
    const diff = m.panel.h - m.tabs.h
    const status = Math.abs(diff) <= 2 ? 'OK' : 'DESALINEADO'
    console.log(`Diff (panel - tabs): ${diff}px [${status}]`)
  }

  await page.screenshot({ path: path.join(OUT, 'servicios5-desktop.png') })
  console.log('✓ desktop captured')
  await browser.close()
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
