import type { Metadata } from 'next'
import Image from 'next/image'
import { getCanamiza, beneficiosPublicables } from '@/lib/datos'
import { Formulario } from '@/features/formulario/Formulario'

export const metadata: Metadata = {
  title: 'Cañamiza triturada para cama animal',
  description:
    'Cañamiza de cáñamo industrial cultivado en San Ramón, Costa Rica. Cama natural para caballerizas, fincas y criaderos, con trazabilidad completa. Solicite su cotización.',
}

export default function PaginaCanamiza() {
  const datos = getCanamiza()
  const beneficios = beneficiosPublicables(datos)

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-verde-bosque)]">
            Producto disponible
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{datos.nombre}</h1>
          <p className="mt-4 text-xl text-[var(--color-verde-bosque)]">
            {datos.subtitulo}
          </p>
          <p className="mt-6 text-lg leading-relaxed">{datos.descripcion}</p>
          <a
            href="#cotizacion"
            className="mt-8 inline-block rounded bg-[var(--color-verde-hoja)] px-7 py-3 font-semibold text-[var(--color-verde-profundo)] transition-opacity hover:opacity-90"
          >
            Solicitar cotización
          </a>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg">
          <Image
            src="/fotos/plantulas.jpeg"
            alt="Plántulas de cáñamo industrial establecidas en bolsa, en el vivero de San Ramón"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-[var(--color-salvia)]/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold">Por qué esta cañamiza</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {beneficios.map((b) => (
              <li
                key={b.id}
                className="rounded-lg border border-[var(--color-verde-bosque)]/25 bg-[var(--color-beige)] p-6"
              >
                <h3 className="font-semibold text-[var(--color-verde-bosque)]">
                  {b.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{b.detalle}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold">Para quién</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {datos.publicos.map((p) => (
            <li
              key={p}
              className="rounded-full border border-[var(--color-verde-bosque)]/30 px-5 py-2 text-sm"
            >
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="cotizacion"
        className="scroll-mt-24 bg-[var(--color-verde-profundo)] text-[var(--color-beige)]"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold">Solicite una cotización</h2>
          <p className="mt-3 max-w-xl text-[var(--color-salvia)]">
            El precio depende de la cantidad y de la presentación. Cuéntenos qué
            necesita y le respondemos con una cotización.
          </p>
          <div className="mt-10">
            <Formulario
              asunto="Cotización de cañamiza"
              textoBoton="Solicitar cotización"
              mensajeExito="Recibimos su solicitud. Le respondemos con la cotización lo antes posible."
              campos={[
                { nombre: 'nombre', etiqueta: 'Nombre', requerido: true },
                { nombre: 'contacto', etiqueta: 'Correo o teléfono', requerido: true },
                {
                  nombre: 'establecimiento',
                  etiqueta: 'Tipo de establecimiento',
                  tipo: 'select',
                  opciones: [
                    'Caballeriza',
                    'Finca ganadera',
                    'Aves',
                    'Conejos y pequeños animales',
                    'Agroveterinaria',
                    'Otro',
                  ],
                },
                {
                  nombre: 'cantidad',
                  etiqueta: 'Cantidad estimada',
                  requerido: true,
                  ayuda: 'Por ejemplo: 20 sacos al mes',
                },
                { nombre: 'mensaje', etiqueta: 'Mensaje', tipo: 'area' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}
