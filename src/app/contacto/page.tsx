import type { Metadata } from 'next'
import Link from 'next/link'
import { Formulario } from '@/features/formulario/Formulario'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Escríbanos sobre cañamiza, la red de agricultores, semilla o el proyecto de cáñamo industrial en San Ramón, Costa Rica.',
}

export default function PaginaContacto() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
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
  )
}
