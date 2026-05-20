import { chromium, devices } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const OUT = path.resolve('./scripts/mobile-smoke-screenshots')
const BASE = 'http://localhost:3000'

const log = (...a) => console.log('[smoke]', ...a)
const issues = []
const addIssue = (page, severity, msg) => {
  issues.push({ page, severity, msg })
  log(`  ${severity.toUpperCase()}: ${msg}`)
}

async function shot(page, name) {
  const file = path.join(OUT, `${name}.png`)
  await page.screenshot({ path: file, fullPage: false })
  await page.screenshot({ path: file.replace('.png', '-full.png'), fullPage: true })
}

async function testPage(browser, route, label) {
  log(`\n=== ${label} (${route}) ===`)
  const ctx = await browser.newContext({
    ...devices['iPhone 13'],
    locale: 'es-AR',
  })
  const consoleErrors = []
  const pageErrors = []
  const page = await ctx.newPage()
  page.on('console', (m) => {
    if (m.type() === 'error') consoleErrors.push(m.text())
  })
  page.on('pageerror', (e) => pageErrors.push(e.message))

  await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 })
  await page.waitForTimeout(800)

  const dims = await page.evaluate(() => ({
    docW: document.documentElement.scrollWidth,
    docH: document.documentElement.scrollHeight,
    vpW: window.innerWidth,
    vpH: window.innerHeight,
    htmlOverflow: getComputedStyle(document.documentElement).overflowX,
  }))
  log(`  viewport ${dims.vpW}x${dims.vpH}, document ${dims.docW}x${dims.docH}, overflow-x=${dims.htmlOverflow}`)
  if (dims.docW > dims.vpW + 1) {
    addIssue(label, 'high', `horizontal overflow: doc ${dims.docW}px > viewport ${dims.vpW}px`)
  }

  await shot(page, `${label}-1-initial`)

  if (route === '/') {
    const burger = page.locator('nav button[aria-label*="menú" i], nav button[aria-label*="menu" i]').first()
    const burgerExists = await burger.count()
    if (burgerExists) {
      const hasHandler = await burger.evaluate((el) => {
        const events = ['click', 'onclick']
        return events.some((e) => el[e] != null) || el.getAttribute('onclick') != null
      })
      log(`  hamburger found. inline handler attribute: ${hasHandler}`)
      try {
        await burger.click({ force: true, timeout: 3000 })
        await page.waitForTimeout(700)
        await shot(page, `${label}-2-burger-clicked`)
      } catch (e) {
        addIssue(label, 'high', `no se pudo clickear hamburguesa: ${e.message.split('\n')[0]}`)
      }
      const menuItemsVisible = await page
        .locator('nav a, nav div a')
        .filter({ hasText: /nosotros|blog|servicios|calculadora/i })
        .evaluateAll((els) =>
          els.filter((e) => e.offsetParent !== null && e.getBoundingClientRect().width > 0).length,
        )
      log(`  visible nav items after click: ${menuItemsVisible}`)
      if (menuItemsVisible === 0) {
        addIssue(label, 'high', 'hamburger button no abre menú móvil — botón sin handler')
      }
    } else {
      addIssue(label, 'high', 'no se encontró botón hamburguesa en mobile')
    }
  }

  if (route.startsWith('/calculadora') || route.startsWith('/calc')) {
    try {
      const compradorBtn = page.getByRole('button', { name: /comprador/i }).first()
      const compradorVisible = await compradorBtn.isVisible().catch(() => false)
      if (!compradorVisible) {
        addIssue(label, 'medium', 'no se ve el botón de splash "Comprador" en mobile')
      } else {
        log(`  splash visible, click "Comprador"…`)
        await compradorBtn.click({ force: true, timeout: 5000 })
        await page.waitForTimeout(900)
        await shot(page, `${label}-2-comprador-selected`)

        const dimsAfter = await page.evaluate(() => ({
          docW: document.documentElement.scrollWidth,
          docH: document.documentElement.scrollHeight,
          vpW: window.innerWidth,
          vpH: window.innerHeight,
        }))
        log(`  after-select: doc ${dimsAfter.docW}x${dimsAfter.docH}, vp ${dimsAfter.vpW}x${dimsAfter.vpH}`)
        if (dimsAfter.docW > dimsAfter.vpW + 1) {
          addIssue(label, 'high', `tras seleccionar rol: overflow ${dimsAfter.docW}px > ${dimsAfter.vpW}px`)
        }

        try {
          const precioInput = page.locator('input[type="number"]').first()
          if (await precioInput.count()) {
            await precioInput.fill('200000', { timeout: 3000 })
            await page.waitForTimeout(400)
            await shot(page, `${label}-3-precio-changed`)
          }
        } catch (e) {
          addIssue(label, 'medium', `precio input fill falló: ${e.message.split('\n')[0]}`)
        }

        try {
          const slider = page.locator('input[type="range"]').first()
          if (await slider.count()) {
            const box = await slider.boundingBox()
            if (box) {
              await page.mouse.click(box.x + box.width * 0.7, box.y + box.height / 2)
              await page.waitForTimeout(400)
            } else {
              addIssue(label, 'low', 'slider visible pero sin boundingBox (probable display:none parent)')
            }
          }
        } catch (e) {
          addIssue(label, 'low', `slider click falló: ${e.message.split('\n')[0]}`)
        }

        const cambiarRol = page.getByRole('button', { name: /cambiar rol/i }).first()
        if (await cambiarRol.count()) {
          const visible = await cambiarRol.isVisible().catch(() => false)
          const box = await cambiarRol.boundingBox().catch(() => null)
          log(`  "cambiar rol" visible=${visible}, box=${box ? `${Math.round(box.width)}x${Math.round(box.height)} at ${Math.round(box.x)},${Math.round(box.y)}` : 'null'}`)
          if (!visible) addIssue(label, 'low', 'botón "Cambiar rol" no visible en mobile')
        }
      }
    } catch (e) {
      addIssue(label, 'high', `splash/calc flow falló: ${e.message.split('\n')[0]}`)
    }

    try {
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
      await page.waitForTimeout(500)
      await shot(page, `${label}-4-bottom-scrolled`)
    } catch (e) {
      log(`  scroll to bottom failed: ${e.message.split('\n')[0]}`)
    }
  }

  if (consoleErrors.length) {
    addIssue(label, 'medium', `${consoleErrors.length} console errors: ${consoleErrors.slice(0, 3).join(' | ')}`)
  }
  if (pageErrors.length) {
    addIssue(label, 'high', `${pageErrors.length} page errors: ${pageErrors.slice(0, 3).join(' | ')}`)
  }

  await ctx.close()
}

;(async () => {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true })
  const browser = await chromium.launch()
  try {
    await testPage(browser, '/', 'home')
    await testPage(browser, '/outofservice', 'outofservice')
    await testPage(browser, '/calculadora', 'calculadora')
    await testPage(browser, '/blog/alquileres-caba', 'blog-caba')
    await testPage(browser, '/blog/alquileres-gba', 'blog-gba')
    await testPage(browser, '/blog/demanda-departamentos-pequenos', 'blog-lima')
  } finally {
    await browser.close()
  }

  log('\n========== REPORT ==========')
  if (issues.length === 0) {
    log('No issues detected.')
  } else {
    for (const i of issues) {
      log(`[${i.severity}] ${i.page}: ${i.msg}`)
    }
  }
  log(`\nScreenshots in: ${OUT}`)
})().catch((e) => {
  console.error('SMOKE FAILED:', e)
  process.exit(1)
})
