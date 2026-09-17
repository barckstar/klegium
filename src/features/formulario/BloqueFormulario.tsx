import Image from 'next/image'
import { Revelar } from '@/components/Revelar'
import { Formulario, type Campo } from './Formulario'

/**
 * PROVISIONAL. Acá va la foto de los tres fundadores en el terreno, que todavía
 * no está en el proyecto — no aparece en ninguna de las 113 fotos del archivo,
 * así que viene de otro teléfono.
 *
 * Cuando llegue: se deja en public/fotos/ y se cambian estas tres constantes.
 * Es el único lugar del sitio donde hay que tocarla.
 */
const FOTO = '/fotos/trabajo-en-campo.jpg'
const FOTO_ALT =
  'Trabajo de preparación del terreno de cáñamo de Klegium en San Isidro de San Ramón'
const PIE =
  'Quien reciba su mensaje es una de las tres personas que trabaja este terreno, no un centro de llamadas.'

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
