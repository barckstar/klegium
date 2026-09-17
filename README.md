# Sitio web de Klegium

Cáñamo industrial. San Isidro de San Ramón, Alajuela, Costa Rica.

## Arrancar

    npm install
    npm run dev

## Reglas que no se rompen

- **Los metadatos salen de `metadatosDe()`**, en `src/lib/sitio.ts`. Nunca se escribe un
  objeto `metadata` a mano en una página: en Next el `openGraph` de la página reemplaza al
  del layout, así que hacerlo a mano deja la página sin `og:image` y el enlace se ve roto
  al compartirlo.
- **Los colores salen de `brand.json`.** Para cambiar uno se cambia ahí y se corre
  `npm run tokens`. Nunca se escribe un hex a mano en un componente.
  `src/styles/tokens.css` es generado y está en `.gitignore`.
- **El tagline es "Cultivamos el presente, construimos el futuro."** Con *Cultivamos*.
- **Proporción 70/30/10.** El verde hoja `#7CB342` es acento: va solo en lo accionable
  —botones, enlaces, el dato que salta—. Repartirlo lo anula.
- **Afirmaciones sin fuente no se publican.** Van en `content/data/canamiza.json` con
  `requiereFuente: true` y la página las filtra sola. Para publicar una hay que conseguir
  la fuente primero, guardarla en `D:\Klegium\docs\research\`, y recién ahí cambiar el flag.
- **La semilla no se vende** hasta que salga el permiso de la ONS. La página informa y
  recoge interés: sin precio, sin "comprar".
- **No se pide el número de permiso** en ningún formulario. La validación se hace fuera
  de la web.
- **Este repo es público.** No entran documentos de trámites, cédulas ni datos de
  importación. Eso vive en `D:\Klegium`, que es privado.

## Estructura

| Carpeta | Qué hay |
|---|---|
| `src/app/` | Una carpeta por ruta |
| `src/components/` | Navbar y footer |
| `src/features/` | Piezas con lógica propia (formulario) |
| `src/lib/datos.ts` | Lectura y validación de `content/data/*.json` con Zod |
| `content/data/` | El contenido estructurado. **Acá se edita el texto, no en los componentes** |
| `public/fotos/` | Fotos reales del cultivo |

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Desarrollo |
| `npm run build` | Build de producción |
| `npm run tokens` | Regenera los tokens CSS desde `brand.json` |
| `npm run verificar` | Revisa metadatos e iconos sobre el HTML generado |

El `verificar` corre solo después de cada `npm run build` (`postbuild`) y **falla el
build** si a una página le falta título, descripción, canónica, Open Graph, Twitter Card,
idioma, su único `h1` o el `alt` de una imagen. También comprueba que existan los cinco
iconos. Revisa el HTML que de verdad se sirve, no el código fuente.

## 🔴 Falta antes de publicar

1. **A dónde llegan los formularios.** Sin `NEXT_PUBLIC_FORM_ENDPOINT` configurado, los
   formularios validan pero **no entregan nada**. Un formulario que traga solicitudes en
   silencio es peor que no tener formulario. Se resuelve con una cuenta de Formspree,
   Web3Forms o EmailJS y una variable de entorno.
2. **El dominio `klegium.com`.** Sin registrar.
3. **El logo en SVG.** Hoy el sitio usa "KLEGIUM" en Montserrat Semibold, que es la
   tipografía oficial. El JPEG que existe tiene fondo blanco y no sirve sobre las
   secciones oscuras.
4. **Fotos del producto.** `/canamiza` no tiene foto de la cañamiza porque no existe
   ninguna. Hacen falta: el material suelto, su presentación de venta, y aplicado en una
   cama. No usar banco de imágenes.
5. **Redes sociales.** No hay cuentas, así que no hay sidebar social ni enlaces.

## Deuda conocida

- **Sin tests de componentes.** Sí hay una verificación automática de metadatos e iconos
  (`npm run verificar`, enganchada al `postbuild`). Se decidió dejarlos para después: es un MVP y el `build` ya hace de
  red —type-check más render estático de todas las rutas, así que un componente roto
  no compila. Lo que sí conviene cubrir cuando haya con qué correrlos:
  el filtro de `requiereFuente` (es el que impide publicar afirmaciones sin respaldo),
  la lógica del navbar, y la validación de los JSON.
