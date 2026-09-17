import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const brand = JSON.parse(readFileSync('brand.json', 'utf8'))
const salida = 'src/styles/tokens.css'

const variables = brand.colores
  .map(({ token, hex, uso }) => `  --color-${token}: ${hex}; /* ${uso} */`)
  .join('\n')

const css = `/* GENERADO por scripts/generate-tokens.mjs — no editar a mano.
   La fuente de verdad es brand.json. Para cambiar un color, cambialo ahí
   y corré: npm run tokens */

@theme {
${variables}
  --font-marca: '${brand.tipografia.principal.familia}', system-ui, sans-serif;
}
`

mkdirSync(dirname(salida), { recursive: true })
writeFileSync(salida, css, 'utf8')
console.log(`tokens generados: ${brand.colores.length} colores -> ${salida}`)
