import Image from 'next/image'
import { metadatosDe } from '@/lib/sitio'
import { Hero, Eyebrow } from '@/components/Hero'
import { Revelar } from '@/components/Revelar'
import { Faq, FaqJsonLd } from '@/components/Faq'
import { getRed } from '@/lib/datos'
import { BloqueFormulario } from '@/features/formulario/BloqueFormulario'

export const metadata = metadatosDe({
  titulo: 'Red de agricultores',
  descripcion:
    'Una actividad agrícola nueva para San Ramón, con beneficio ambiental, económico y social para el cantón. Conozca cómo puede ser parte.',
  ruta: '/red',
})

export default function PaginaRed() {
  const { beneficios, consulta, advertencia } = getRed()

  return (
    <>
      <FaqJsonLd grupos={['Red de agricultores']} />

      <Hero
        imagen="/fotos/trabajo-en-campo.jpg"
        alt="Trabajo de preparación del terreno de cáñamo en San Ramón, con las montañas al fondo"
        prioridad
        deriva
      >
        <Revelar>
          <Eyebrow>Una invitación a San Ramón</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-balance text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.02] text-[var(--color-beige)]">
            Su terreno puede volver a producir
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-beige)]/90">
            Estamos construyendo una actividad agrícola nueva en el cantón, y hay
            espacio para que más gente sea parte.
          </p>
        </Revelar>
      </Hero>

      {/* -------------------------------------------------------- beneficios */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <Revelar>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
            Qué deja en la zona
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Un cultivo que mueve más que la finca
          </h2>
        </Revelar>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {beneficios.map((b, i) => (
            <Revelar key={b.id} retraso={i * 140} className="h-full">
              <article className="flex h-full flex-col rounded-sm bg-[var(--color-salvia)]/25 p-8 ring-1 ring-[var(--color-verde-bosque)]/20">
                <p className="text-3xl font-semibold text-[var(--color-verde-bosque)]">
                  {b.dato}
                </p>
                <p className="mt-2 text-sm leading-relaxed opacity-70">{b.datoPie}</p>
                <h3 className="mt-6 text-2xl font-semibold">{b.titulo}</h3>
                <p className="mt-4 flex-1 leading-relaxed">{b.detalle}</p>
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
            <Eyebrow>Dónde informarse</Eyebrow>
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
              Antes de empezar
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

      {/* -------------------------------------------------------- conversemos */}
      <section id="conversemos" className="scroll-mt-20 bg-[var(--color-salvia)]/30">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              Sin compromiso
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              ¿Tiene terreno en San Ramón?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">
              Déjenos sus datos y conversamos.
            </p>
          </Revelar>

          <div className="mt-12">
            <BloqueFormulario
              asunto="Interés en la red de agricultores"
              textoBoton="Conversemos"
              mensajeExito="Recibimos sus datos. Nos ponemos en contacto para conversar sobre su terreno."
              campos={[
                { nombre: 'nombre', etiqueta: 'Nombre', requerido: true },
                { nombre: 'contacto', etiqueta: 'Correo o teléfono', requerido: true },
                {
                  nombre: 'ubicacion',
                  etiqueta: 'Dónde está el terreno',
                  requerido: true,
                  ayuda: 'Distrito o comunidad',
                },
                {
                  nombre: 'area',
                  etiqueta: 'Área aproximada',
                  ayuda: 'En metros o hectáreas, aunque sea a ojo',
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
