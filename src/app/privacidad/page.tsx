import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Qué datos recoge Klegium en sus formularios, para qué los usa y cómo pedir que se borren.',
}

export default function PaginaPrivacidad() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Política de privacidad</h1>

      <h2 className="mt-12 text-xl font-semibold">Qué datos recogemos</h2>
      <p className="mt-3 leading-relaxed">
        Solo lo que usted escribe en nuestros formularios: su nombre, un correo o
        teléfono de contacto, y los datos de su consulta —la cantidad que
        necesita, la ubicación de su terreno o su mensaje. Nada más.
      </p>
      <p className="mt-3 leading-relaxed">
        No usamos cookies de seguimiento, ni perfiles publicitarios, ni
        herramientas de analítica que identifiquen a los visitantes.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Para qué los usamos</h2>
      <p className="mt-3 leading-relaxed">
        Únicamente para responderle y dar seguimiento a su consulta. No vendemos
        ni compartimos sus datos con terceros con fines comerciales.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Qué no le pedimos</h2>
      <p className="mt-3 leading-relaxed">
        Si consulta por semilla, <strong>no le pedimos su número de permiso en
        el sitio web</strong>. La validación del permiso se hace después,
        directamente con usted y fuera de esta página. Es un dato sensible y no
        hay razón para recogerlo en un formulario público.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Cómo se envían</h2>
      <p className="mt-3 leading-relaxed">
        Los formularios se entregan por correo electrónico a través de un
        servicio de envío que actúa como intermediario técnico. No guardamos su
        información en una base de datos en este sitio.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Sus derechos</h2>
      <p className="mt-3 leading-relaxed">
        Puede pedirnos en cualquier momento que borremos sus datos de contacto.
        Escríbanos desde la página de contacto y lo hacemos.
      </p>
    </div>
  )
}
