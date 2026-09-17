import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero, Eyebrow } from '@/components/Hero'
import { getCanamiza, beneficiosPublicables } from '@/lib/datos'
import { Formulario } from '@/features/formulario/Formulario'

export const metadata: Metadata = {
  title: 'Cañamiza triturada para cama animal',
  description:
    'Cañamiza de cáñamo industrial cultivado en San Ramón, Costa Rica. Cama natural para caballerizas, fincas y criaderos, con trazabilidad hasta la parcela. Solicite su cotización.',
}

export default function PaginaCanamiza() {
  const datos = getCanamiza()
  const beneficios = beneficiosPublicables(datos)

  return (
    <>
      <Hero
        imagen="/fotos/cultivo-verde.jpg"
        alt="Cultivo de cáñamo industrial de Klegium en San Ramón"
        prioridad
      >
        <Eyebrow>Producto disponible</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-balance text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.02] text-[var(--color-beige)]">
          {datos.nombre}
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-snug text-[var(--color-verde-hoja)]">
          {datos.subtitulo}
        </p>
        <a
          href="#cotizacion"
          className="mt-10 inline-block rounded-sm bg-[var(--color-verde-hoja)] px-8 py-4 font-semibold text-[var(--color-verde-profundo)] transition-transform hover:-translate-y-0.5"
        >
          Solicitar cotización
        </a>
      </Hero>

      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-4xl px-4 py-24">
          <p className="text-balance text-2xl font-light leading-[1.5] sm:text-[1.75rem]">
            {datos.descripcion}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24">
        <Eyebrow>
          <span className="text-[var(--color-verde-bosque)]">Por qué esta cañamiza</span>
        </Eyebrow>

        <div className="mt-12 grid gap-px bg-[var(--color-verde-bosque)]/20 sm:grid-cols-2">
          {beneficios.map((b, i) => (
            <div key={b.id} className="bg-[var(--color-beige)] p-8 sm:p-10">
              <span className="text-sm tabular-nums tracking-widest text-[var(--color-verde-bosque)]/60">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--color-verde-bosque)]">
                {b.titulo}
              </h3>
              <p className="mt-3 leading-relaxed">{b.detalle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[var(--color-negro)] text-[var(--color-beige)]">
        <Image
          src="/fotos/vivero-bolsas.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-25"
        />
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Eyebrow>Para quién</Eyebrow>
          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-2xl font-light sm:text-3xl">
            {datos.publicos.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="cotizacion" className="scroll-mt-20 bg-[var(--color-beige)]">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Eyebrow>
            <span className="text-[var(--color-verde-bosque)]">Cotización</span>
          </Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Cuéntenos qué necesita
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">
            El precio depende de la cantidad y de la presentación. Déjenos los
            datos y le respondemos con una cotización.
          </p>

          <div className="mt-12">
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
