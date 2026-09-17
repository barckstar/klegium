import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Revelar } from '@/components/Revelar'
import { Formulario } from '@/features/formulario/Formulario'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Escríbanos sobre cañamiza, la red de agricultores, semilla o el proyecto de cáñamo industrial en San Ramón, Costa Rica.',
}

export default function PaginaContacto() {
  return (
    <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-20">
      <div>
      <h1 className="text-4xl font-semibold sm:text-5xl">Contacto</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">
        Déjenos sus datos y le respondemos.
      </p>
      <p className="mt-4 max-w-xl leading-relaxed">
        Si su consulta es por cañamiza,{' '}
        <Link
          href="/canamiza#cotizacion"
          className="font-semibold underline decoration-[var(--color-verde-hoja)] decoration-2 underline-offset-4"
        >
          pida la cotización acá
        </Link>{' '}
        y nos llega con los datos que necesitamos. Si tiene terreno en San Ramón,{' '}
        <Link
          href="/red"
          className="font-semibold underline decoration-[var(--color-verde-hoja)] decoration-2 underline-offset-4"
        >
          empiece por la red de agricultores
        </Link>
        .
      </p>

      <div className="mt-12">
        <Formulario
          asunto="Contacto general"
          textoBoton="Enviar mensaje"
          mensajeExito="Recibimos su mensaje. Le respondemos lo antes posible."
          campos={[
            { nombre: 'nombre', etiqueta: 'Nombre', requerido: true },
            { nombre: 'contacto', etiqueta: 'Correo o teléfono', requerido: true },
            { nombre: 'mensaje', etiqueta: 'Mensaje', tipo: 'area', requerido: true },
          ]}
        />
      </div>
      </div>

      {/* Foto del equipo. Reemplazar por la de los tres en el campo cuando esté
          en el proyecto; esta es del montaje del vivero. */}
      <Revelar desde="derecha" retraso={150} className="lg:sticky lg:top-28 lg:self-start">
        <figure>
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/fotos/equipo-campo.jpg"
              alt="El equipo de Klegium trabajando en el montaje del vivero en San Isidro de San Ramón"
              fill
              sizes="(max-width: 1024px) 100vw, 416px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 text-sm leading-relaxed opacity-70">
            Somos tres. Todo lo que ve en este sitio salió de este terreno, en
            San Isidro de San Ramón.
          </figcaption>
        </figure>
      </Revelar>
    </div>
  )
}
