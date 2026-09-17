import Image from 'next/image'
import { Revelar } from '@/components/Revelar'
import { Formulario, type Campo } from './Formulario'

/** La foto del equipo. Está acá y no en cada página: se cambia en un solo lugar. */
const FOTO = '/fotos/los-tres.jpg'
const FOTO_ALT =
  'Los tres fundadores de Klegium en el terreno de cultivo de San Isidro de San Ramón'
const PIE =
  'Somos tres. Quien reciba su mensaje es una de estas personas, no un centro de llamadas.'

/**
 * Formulario con la foto del equipo al lado.
 *
 * La foto no es decoración: en los cuatro formularios del sitio la persona
 * está a punto de dejar sus datos, y ver quiénes los van a recibir es
 * exactamente lo que hace falta en ese momento.
 */
export function BloqueFormulario({
  campos,
  asunto,
  textoBoton,
  mensajeExito,
  fondo = 'claro',
}: {
  campos: Campo[]
  asunto: string
  textoBoton: string
  mensajeExito: string
  fondo?: 'claro' | 'oscuro'
}) {
  const oscuro = fondo === 'oscuro'

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16">
      <Formulario
        campos={campos}
        asunto={asunto}
        textoBoton={textoBoton}
        mensajeExito={mensajeExito}
      />

      <Revelar desde="derecha" retraso={150} className="lg:sticky lg:top-28 lg:self-start">
        <figure>
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src={FOTO}
              alt={FOTO_ALT}
              fill
              sizes="(max-width: 1024px) 100vw, 352px"
              className="object-cover"
            />
          </div>
          <figcaption
            className={`mt-4 text-sm leading-relaxed ${
              oscuro ? 'text-[var(--color-salvia)]' : 'opacity-70'
            }`}
          >
{PIE}
          </figcaption>
        </figure>
      </Revelar>
    </div>
  )
}
