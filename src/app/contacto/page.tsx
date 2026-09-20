import { metadatosDe } from '@/lib/sitio'
import Link from 'next/link'
import { BloqueFormulario } from '@/features/formulario/BloqueFormulario'

export const metadata = metadatosDe({
  titulo: 'Contacto',
  descripcion:
    'Escríbanos sobre cañamiza, la red de agricultores o el proyecto de cáñamo industrial en San Ramón, Costa Rica.',
  ruta: '/contacto',
})


export default function PaginaContacto() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold sm:text-5xl">Contacto</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">
        Indíquenos sus datos y nos comunicaremos con usted.
      </p>
      <p className="mt-4 max-w-xl leading-relaxed">
        Si su consulta corresponde a cañamiza,{' '}
        <Link
          href="/canamiza#cotizacion"
          className="font-semibold underline decoration-[var(--color-verde-hoja)] decoration-2 underline-offset-4"
        >
          solicite la cotización aquí
        </Link>{' '}
        de modo que llegue con la información necesaria. Si es propietario de un inmueble en San Ramón,{' '}
        <Link
          href="/red"
          className="font-semibold underline decoration-[var(--color-verde-hoja)] decoration-2 underline-offset-4"
        >
          consulte la propuesta de impacto local
        </Link>
        .
      </p>

      <div className="mt-12">
        <BloqueFormulario
          asunto="Contacto general"
          textoBoton="Enviar consulta"
          mensajeExito="Hemos recibido su mensaje. Le responderemos a la brevedad."
          campos={[
            { nombre: 'nombre', etiqueta: 'Nombre completo', requerido: true },
            { nombre: 'contacto', etiqueta: 'Correo electrónico o teléfono', requerido: true },
            { nombre: 'mensaje', etiqueta: 'Consulta', tipo: 'area', requerido: true },
          ]}
        />
      </div>
    </div>
  )
}
