import Image from 'next/image'
import { metadatosDe } from '@/lib/sitio'
import { Hero, Eyebrow } from '@/components/Hero'
import { Revelar } from '@/components/Revelar'
import { Faq, FaqJsonLd } from '@/components/Faq'
import { getRed } from '@/lib/datos'
import { BloqueFormulario } from '@/features/formulario/BloqueFormulario'

export const metadata = metadatosDe({
  titulo: 'Reactivación económica regional',
  descripcion:
    'Propuesta de impacto local para el cantón de San Ramón: una actividad agrícola regulada que genera encadenamiento productivo, empleo y capacitación.',
  ruta: '/red',
})

export default function PaginaRed() {
  const { propuesta, impactos, consulta, advertencia } = getRed()

  return (
    <>
      <FaqJsonLd grupos={['Red de agricultores']} />

      <Hero
        imagen="/fotos/trabajo-en-campo.jpg"
        alt="Labores de preparación del terreno de cultivo en San Isidro de San Ramón"
        prioridad
        deriva
      >
        <Revelar>
          <Eyebrow>{propuesta.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-balance text-[clamp(2.25rem,6.5vw,4.25rem)] font-semibold leading-[1.04] text-[var(--color-beige)]">
            {propuesta.titulo}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-beige)]/90">
            {propuesta.entrada}
          </p>
        </Revelar>
      </Hero>

      {/* ----------------------------------------------------------- cadena */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Revelar>
            <Eyebrow>El encadenamiento</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold sm:text-4xl">
              No se trata únicamente de sembrar y vender una planta
            </h2>
          </Revelar>

          <Revelar retraso={150}>
            <ol className="mt-14 grid gap-px bg-[var(--color-salvia)]/25 sm:grid-cols-2 lg:grid-cols-6">
              {propuesta.cadena.map((etapa, i) => (
                <li
                  key={etapa}
                  className="bg-[var(--color-verde-profundo)] px-5 py-8 text-center"
                >
                  <span className="block text-xs tabular-nums tracking-widest text-[var(--color-salvia)]/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-3 block font-semibold">{etapa}</span>
                </li>
              ))}
            </ol>
          </Revelar>

          <Revelar retraso={250}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--color-salvia)]">
              {propuesta.cierre}
            </p>
          </Revelar>
        </div>
      </section>

      {/* --------------------------------------------------------- impactos */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <Revelar>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
            Impacto esperado
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold sm:text-4xl">
            Qué representa para el cantón
          </h2>
        </Revelar>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {impactos.map((im, i) => (
            <Revelar key={im.id} retraso={i * 120} className="h-full">
              <article className="flex h-full flex-col rounded-sm bg-[var(--color-salvia)]/25 p-8 ring-1 ring-[var(--color-verde-bosque)]/20 sm:p-10">
                <h3 className="text-2xl font-semibold text-[var(--color-verde-bosque)]">
                  {im.titulo}
                </h3>
                <p className="mt-3 leading-relaxed">{im.resumen}</p>
                <ul className="mt-7 space-y-3 border-t border-[var(--color-verde-bosque)]/20 pt-6">
                  {im.puntos.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <span aria-hidden="true" className="text-[var(--color-verde-bosque)]">
                        —
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Revelar>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- consulta */}
      <section className="relative isolate overflow-hidden bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <Image
          src="/fotos/terreno-san-ramon.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-25"
        />
        <div className="mx-auto max-w-4xl px-4 py-24">
          <Revelar>
            <Eyebrow>Información y consulta</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-4xl">
              {consulta.titulo}
            </h2>
            <p className="mt-8 text-lg leading-relaxed">{consulta.entrada}</p>
          </Revelar>

          <Revelar retraso={150}>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {consulta.puntos.map((p) => (
                <li
                  key={p}
                  className="border-l-2 border-[var(--color-verde-hoja)] pl-5 leading-relaxed"
                >
                  {p}
                </li>
              ))}
            </ul>
          </Revelar>

          <Revelar retraso={250}>
            <p className="mt-10 text-lg leading-relaxed text-[var(--color-salvia)]">
              {consulta.cierre}
            </p>
          </Revelar>
        </div>
      </section>

      {/* ------------------------------------------------------- advertencia */}
      <section className="bg-[var(--color-verde-hoja)] text-[var(--color-verde-profundo)]">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] opacity-70">
              Consideración previa
            </p>
            <p className="mt-6 text-balance text-xl leading-relaxed">{advertencia}</p>
          </Revelar>
        </div>
      </section>

      {/* ---------------------------------------------------------------- faq */}
      <section className="mx-auto max-w-5xl px-4 py-24">
        <Revelar>
          <h2 className="text-3xl font-semibold sm:text-4xl">Preguntas frecuentes</h2>
        </Revelar>
        <div className="mt-12">
          <Faq grupos={['Red de agricultores']} />
        </div>
      </section>

      {/* ----------------------------------------------------------- contacto */}
      <section id="conversemos" className="scroll-mt-20 bg-[var(--color-salvia)]/30">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              Sin compromiso
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Propietarios de terrenos en San Ramón
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">
              Si desea información sobre la iniciativa, indíquenos sus datos y nos
              comunicamos con usted.
            </p>
          </Revelar>

          <div className="mt-12">
            <BloqueFormulario
              asunto="Consulta sobre la iniciativa"
              textoBoton="Enviar consulta"
              mensajeExito="Hemos recibido su consulta. Nos comunicaremos con usted a la brevedad."
              campos={[
                { nombre: 'nombre', etiqueta: 'Nombre completo', requerido: true },
                { nombre: 'contacto', etiqueta: 'Correo electrónico o teléfono', requerido: true },
                {
                  nombre: 'ubicacion',
                  etiqueta: 'Ubicación del inmueble',
                  requerido: true,
                  ayuda: 'Distrito o comunidad',
                },
                {
                  nombre: 'area',
                  etiqueta: 'Área aproximada',
                  ayuda: 'En metros cuadrados o hectáreas',
                },
                { nombre: 'mensaje', etiqueta: 'Consulta', tipo: 'area' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}
