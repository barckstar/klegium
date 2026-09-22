import { metadatosDe } from '@/lib/sitio'
import Image from 'next/image'
import { Hero, Eyebrow } from '@/components/Hero'
import { Revelar } from '@/components/Revelar'
import { getCanamiza, beneficiosPublicables } from '@/lib/datos'
import { Faq, FaqJsonLd } from '@/components/Faq'
import { Fuentes } from '@/components/Fuentes'
import { BloqueFormulario } from '@/features/formulario/BloqueFormulario'

export const metadata = metadatosDe({
  titulo: 'Cañamiza triturada para cama animal',
  descripcion:
    'Cama natural de cáñamo cultivado en San Ramón, Costa Rica. Para caballos, ganado, aves y conejos, con trazabilidad hasta la parcela.',
  ruta: '/canamiza',
})


export default function PaginaCanamiza() {
  const datos = getCanamiza()
  const beneficios = beneficiosPublicables(datos)

  return (
    <>
      <FaqJsonLd grupos={['Cañamiza']} />

      <Hero
        imagen="/fotos/canamiza-textura.jpg"
        alt="Cañamiza de cáñamo industrial triturada, lista para usarse como cama animal"
        prioridad
        deriva
      >
        <Revelar>
          <Eyebrow>Producto disponible</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-balance text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.02] text-[var(--color-beige)]">
            {datos.nombre}
          </h1>
          <p className="mt-5 text-2xl font-light tracking-wide text-[var(--color-verde-hoja)]">
            {datos.nombreComercial}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-beige)]/90">
            {datos.subtitulo}
          </p>
          <a
            href="#cotizacion"
            className="mt-10 inline-block rounded-sm bg-[var(--color-verde-hoja)] px-8 py-4 font-semibold text-[var(--color-verde-profundo)] transition-transform duration-300 hover:-translate-y-1"
          >
            Solicitar cotización
          </a>
        </Revelar>
      </Hero>

      {/* -------------------------------------------------------- qué es */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2">
          <Revelar desde="izquierda">
            <p className="text-balance text-2xl font-light leading-[1.5] sm:text-[1.75rem]">
              {datos.descripcion}
            </p>
          </Revelar>
          <Revelar desde="derecha" retraso={150}>
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src="/fotos/canamiza-textura.jpg"
                alt="Detalle de la cañamiza triturada: el núcleo leñoso del tallo del cáñamo"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </Revelar>
        </div>
      </section>

      {/* ---------------------------------------------------- beneficios */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <Revelar>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
            Características del material
          </p>
        </Revelar>

        <div className="mt-12 grid gap-px bg-[var(--color-verde-bosque)]/20 sm:grid-cols-2">
          {beneficios.map((b, i) => (
            <Revelar
              key={b.id}
              retraso={i * 100}
              /* Con un número impar de beneficios la última celda quedaba vacía.
                 Al ocupar las dos columnas, la rejilla cierra pareja. */
              className={`h-full ${
                beneficios.length % 2 === 1 && i === beneficios.length - 1
                  ? 'sm:col-span-2'
                  : ''
              }`}
            >
              <div className="h-full bg-[var(--color-beige)] p-8 transition-colors duration-300 hover:bg-[var(--color-salvia)]/30 sm:p-10">
                <span className="text-sm tabular-nums tracking-widest text-[var(--color-verde-bosque)]/60">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-verde-bosque)]">
                  {b.titulo}
                </h3>
                <p className="mt-3 leading-relaxed">{b.detalle}</p>
              </div>
            </Revelar>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------- animales */}
      <section className="bg-[var(--color-salvia)]/30">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              Para cada animal
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Ventajas y consideraciones por especie
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed">
              El desempeño del material varía según la especie y el sistema de manejo.
              Se exponen tanto las ventajas como las limitaciones de cada caso.
            </p>
          </Revelar>

          <div className="mt-14 space-y-px bg-[var(--color-verde-bosque)]/20">
            {datos.animales.map((a, i) => (
              <Revelar key={a.id} retraso={i * 90}>
                <article className="grid gap-8 bg-[var(--color-beige)] p-8 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-12 md:p-10">
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[var(--color-verde-profundo)]">
                      {a.foto ? (
                        <Image
                          src={a.foto}
                          alt={a.fotoAlt ?? a.nombre}
                          fill
                          sizes="240px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
                          <Image
                            src="/marca/isotipo-claro.png"
                            alt=""
                            aria-hidden="true"
                            width={384}
                            height={457}
                            className="h-10 w-auto opacity-40"
                          />
                          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-salvia)]/70">
                            Foto pendiente
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold">{a.nombre}</h3>
                    <p className="mt-2 text-sm leading-relaxed opacity-75">
                      {a.contexto}
                    </p>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-verde-bosque)]">
                        Ventajas
                      </p>
                      <ul className="mt-4 space-y-3">
                        {a.ventajas.map((v) => (
                          <li key={v} className="flex gap-3 text-sm leading-relaxed">
                            <span aria-hidden="true" className="text-[var(--color-verde-hoja)]">
                              ✓
                            </span>
                            <span>{v}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-75">
                        A considerar
                      </p>
                      <ul className="mt-4 space-y-3">
                        {a.desventajas.map((d) => (
                          <li key={d} className="flex gap-3 text-sm leading-relaxed opacity-80">
                            <span aria-hidden="true" className="opacity-50">
                              —
                            </span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Revelar>
            ))}
          </div>

          <Revelar>
            <div className="mt-12 border-l-2 border-[var(--color-verde-bosque)] bg-[var(--color-beige)] p-6">
              <p className="leading-relaxed">{datos.notaHonestidad}</p>
            </div>
            <p className="mt-8 text-sm leading-relaxed opacity-70">
              Distribución a través de{' '}
              {datos.canales.join(' y ').toLowerCase()}.
            </p>
          </Revelar>
        </div>
      </section>

      {/* ----------------------------------------------------- cotización */}
      <section
        id="cotizacion"
        className="relative isolate scroll-mt-20 overflow-hidden bg-[var(--color-verde-profundo)] text-[var(--color-beige)]"
      >
        <Image
          src="/fotos/vivero-bolsas.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-20"
        />
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Revelar>
            <Eyebrow>Cotización</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Solicitud de cotización
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-salvia)]">
              El precio depende del volumen y de la presentación requerida. Indíquenos
              sus datos y le remitiremos la propuesta correspondiente.
            </p>
          </Revelar>

          <Revelar retraso={150}>
            <div className="mt-12">
              <BloqueFormulario
                fondo="oscuro"
                asunto="Cotización de cañamiza"
                textoBoton="Solicitar cotización"
                mensajeExito="Hemos recibido su solicitud. Le remitiremos la cotización a la brevedad."
                campos={[
                  { nombre: 'nombre', etiqueta: 'Nombre completo', requerido: true },
                  { nombre: 'contacto', etiqueta: 'Correo electrónico o teléfono', requerido: true },
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
                    ayuda: 'Por ejemplo: 20 sacos mensuales',
                  },
                  { nombre: 'mensaje', etiqueta: 'Detalle de la consulta', tipo: 'area' },
                ]}
              />
            </div>
          </Revelar>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-24">
        <Revelar>
          <h2 className="text-3xl font-semibold sm:text-4xl">Preguntas frecuentes</h2>
        </Revelar>
        <div className="mt-12">
          <Faq grupos={['Cañamiza']} />
        </div>
      </section>

      <Fuentes grupo="canamiza" fondo="claro" />
    </>
  )
}
