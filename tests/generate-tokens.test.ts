import { describe, it, expect, beforeAll } from 'vitest'
import { readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'

describe('generate-tokens', () => {
  let css: string
  let brand: { colores: { token: string; hex: string }[] }

  beforeAll(() => {
    execFileSync('node', ['scripts/generate-tokens.mjs'], { stdio: 'pipe' })
    css = readFileSync('src/styles/tokens.css', 'utf8')
    brand = JSON.parse(readFileSync('brand.json', 'utf8'))
  })

  it('genera una variable por cada color de brand.json', () => {
    for (const { token, hex } of brand.colores) {
      expect(css).toContain(`--color-${token}: ${hex};`)
    }
  })

  it('no inventa colores que no estén en brand.json', () => {
    const hexEnCss = [...css.matchAll(/#[0-9A-Fa-f]{6}/g)].map((m) => m[0].toUpperCase())
    const hexEnBrand = brand.colores.map((c) => c.hex.toUpperCase())
    for (const hex of hexEnCss) expect(hexEnBrand).toContain(hex)
  })

  it('avisa que el archivo es generado', () => {
    expect(css).toContain('GENERADO')
  })
})
