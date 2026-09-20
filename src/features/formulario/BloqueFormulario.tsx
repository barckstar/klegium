import { Formulario, type Campo } from './Formulario'

/**
 * Envoltorio del formulario.
 *
 * Existe para que las cuatro páginas usen la misma configuración y el mismo
 * ancho. Si más adelante hace falta algo al lado —una foto, un dato de
 * contacto— se agrega acá una sola vez.
 */
export function BloqueFormulario({
  campos,
  asunto,
  textoBoton,
  mensajeExito,
}: {
  campos: Campo[]
  asunto: string
  textoBoton: string
  mensajeExito: string
  /** Se acepta por compatibilidad con las páginas; hoy no cambia nada. */
  fondo?: 'claro' | 'oscuro'
}) {
  return (
    <Formulario
      campos={campos}
      asunto={asunto}
      textoBoton={textoBoton}
      mensajeExito={mensajeExito}
    />
  )
}
