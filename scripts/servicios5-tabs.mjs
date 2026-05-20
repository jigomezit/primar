import { chromium } from 'playwright'
import path from 'node:path'

const OUT = path.resolve('./scripts/mobile-smoke-screenshots')

;(async () => {
  const browser = await chromium.launch()

  // ───── Desktop: measure each tab ─────
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
  await page.waitForTimeout(700)

  const tabButtons = await page
    .locator('#servicios .lg\\:col-span-4 button')
    .all()
  console.log(`Found ${tabButtons.length} tabs`)

  const heights = []
  for (let i = 0; i < tabButtons.length; i++) {
    await tabButtons[i].click()
    await page.waitForTimeout(600)
    const m = await page.evaluate(() => {
      const sec = document.getElementById('servicios')
      const tabsList = sec?.querySelector('.lg\\:col-span-4 > div')
      const panel = sec?.querySelector('.lg\\:col-span-8 [class*="bg-ink"]')
      const r = (el) => (el ? Math.round(el.getBoundingClientRect().height) : null)
      return { tabs: r(tabsList), panel: r(panel) }
    })
    heights.push({ tab: i + 1, ...m })
    console.log(`  Tab ${i + 1}: tabs=${m.tabs}px panel=${m.panel}px`)
  }
  const maxPanel = Math.max(...heights.map((h) => h.panel))
  const minPanel = Math.min(...heights.map((h) => h.panel))
  console.log(`\n[desktop] panel min=${minPanel}px max=${maxPanel}px diff=${maxPanel - minPanel}px`)

  // Click tab 1 then tab 6, capture both
  await tabButtons[0].click()
  await page.waitForTimeout(500)
  await page.screenshot({ path: path.join(OUT, 'servicios5-tab1.png') })
  await tabButtons[5].click()
  await page.waitForTimeout(500)
  await page.screenshot({ path: path.join(OUT, 'servicios5-tab6.png') })
  await ctx.close()

  // ───── Mobile: full page screenshot ─────
  const m = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    locale: 'es-AR',
  })
  const mp = await m.newPage()
  await mp.goto('http://localhost:3000/servicios5', { waitUntil: 'networkidle' })
  await mp.waitForTimeout(1200)
  await mp.evaluate(() => {
    const el = document.getElementById('servicios')
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
  })
  await mp.waitForTimeout(700)
  await mp.screenshot({ path: path.join(OUT, 'servicios5-mobile-tab1.png'), fullPage: false })

  // Tap tab 6 on mobile
  const mTabs = await mp.locator('#servicios button').all()
  // Filter to only tab buttons (those with "Compra y Venta", "Alquileres" etc text)
  const labels = ['Compra y Venta', 'Alquileres', 'Tasaciones', 'Asesoramiento Legal', 'Inversiones', 'Administración']
  for (const label of labels) {
    const cnt = await mp.getByRole('button', { name: new RegExp(label, 'i') }).count()
    console.log(`mobile tab "${label}": ${cnt} matches`)
  }
  await mp.getByRole('button', { name: /Administración/i }).first().click()
  await mp.waitForTimeout(700)
  await mp.evaluate(() => {
    const el = document.getElementById('servicios')
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
  })
  await mp.waitForTimeout(400)
  await mp.screenshot({ path: path.join(OUT, 'servicios5-mobile-tab6.png'), fullPage: false })

  const mobMeasure = await mp.evaluate(() => {
    const sec = document.getElementById('servicios')
    return {
      docW: document.documentElement.scrollWidth,
      vpW: window.innerWidth,
      secH: sec ? Math.round(sec.getBoundingClientRect().height) : null,
    }
  })
  console.log(`\n[mobile] viewport ${mobMeasure.vpW}, doc ${mobMeasure.docW}, section ${mobMeasure.secH}px`)
  if (mobMeasure.docW > mobMeasure.vpW + 1) {
    console.log(`!! HORIZONTAL OVERFLOW: ${mobMeasure.docW} > ${mobMeasure.vpW}`)
  }

  await browser.close()
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
