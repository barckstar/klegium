import { metadatosDe } from '@/lib/sitio'
import { Hero, Eyebrow } from '@/components/Hero'
import { Revelar } from '@/components/Revelar'
import { Faq, FaqJsonLd } from '@/components/Faq'

export const metadata = metadatosDe({
  titulo: 'Preguntas frecuentes',
  descripcion:
    'La ley del cáñamo en Costa Rica, cómo funciona la red de agricultores, la cañamiza y la venta de semilla, respondidas.',
  ruta: '/preguntas',
})



export default function PaginaPreguntas() {
  return (
    <>
      <FaqJsonLd />

      <Hero
        imagen="/fotos/terreno-san-ramon.jpg"
        alt="El terreno de cultivo de cáñamo en San Isidro de San Ramón"
        prioridad
        altura="media"
      >
        <Revelar>
          <Eyebrow>Lo que más nos preguntan</Eyebrow>
          <h1 className="mt-6 text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.02] text-[var(--color-beige)]">
            Preguntas frecuentes
          </h1>
        </Revelar>
      </Hero>

      <section className="mx-auto max-w-5xl px-4 py-24">
        <Faq />
      </section>
    </>
  )
}
