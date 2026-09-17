'use client'

import { useState } from 'react'

export type Campo = {
  nombre: string
  etiqueta: string
  tipo?: 'texto' | 'area' | 'select'
  opciones?: string[]
  requerido?: boolean
  ayuda?: string
}

type Estado = 'inicial' | 'enviando' | 'enviado' | 'error'

/**
 * Formulario del sitio. Valida en el cliente y entrega a un endpoint externo
 * (Formspree, Web3Forms, EmailJS…) definido en NEXT_PUBLIC_FORM_ENDPOINT.
 *
 * ponytail: un solo componente configurado por props en vez de uno por página.
 * Si algún formulario necesita lógica propia, ahí se separa — no antes.
 */
export function Formulario({
  campos,
  asunto,
  textoBoton,
  mensajeExito,
}: {
  campos: Campo[]
  asunto: string
  textoBoton: string
  mensajeExito: string
}) {
  const [errores, setErrores] = useState<Record<string, string>>({})
  const [estado, setEstado] = useState<Estado>('inicial')

  async function alEnviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    const datos = Object.fromEntries(
      new FormData(evento.currentTarget)
    ) as Record<string, string>

    // Trampa anti-bot: invisible para personas, irresistible para un script.
    if (datos.sitioWeb) return

    const nuevos: Record<string, string> = {}
    for (const campo of campos) {
      if (campo.requerido && !datos[campo.nombre]?.trim()) {
        nuevos[campo.nombre] = 'Este campo es obligatorio'
      }
    }
    if (Object.keys(nuevos).length > 0) {
      setErrores(nuevos)
      return
    }

    setErrores({})
    setEstado('enviando')

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
    if (!endpoint) {
      setEstado('error')
      return
    }

    try {
      const respuesta = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...datos, _asunto: asunto }),
      })
      setEstado(respuesta.ok ? 'enviado' : 'error')
    } catch {
      setEstado('error')
    }
  }

  if (estado === 'enviado') {
    return (
      <p
        role="status"
        className="rounded-lg border border-[var(--color-verde-hoja)] bg-white/60 p-6 text-[var(--color-negro)]"
      >
        {mensajeExito}
      </p>
    )
  }

  const clasesControl =
    'mt-1 w-full rounded border border-[var(--color-salvia)] bg-white/80 p-3 text-[var(--color-negro)] placeholder:text-[var(--color-negro)]/50'

  return (
    <form onSubmit={alEnviar} noValidate className="grid max-w-xl gap-5">
      {campos.map((campo) => (
        <div key={campo.nombre}>
          <label htmlFor={campo.nombre} className="block text-sm font-semibold">
            {campo.etiqueta}
            {campo.requerido && <span aria-hidden="true"> *</span>}
          </label>

          {campo.tipo === 'area' ? (
            <textarea
              id={campo.nombre}
              name={campo.nombre}
              rows={4}
              defaultValue=""
              className={clasesControl}
            />
          ) : campo.tipo === 'select' ? (
            <select
              id={campo.nombre}
              name={campo.nombre}
              defaultValue={campo.opciones?.[0]}
              className={clasesControl}
            >
              {campo.opciones?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input id={campo.nombre} name={campo.nombre} className={clasesControl} />
          )}

          {campo.ayuda && (
            <p className="mt-1 text-xs opacity-70">{campo.ayuda}</p>
          )}
          {errores[campo.nombre] && (
            <p className="mt-1 text-sm font-semibold text-red-700">
              {errores[campo.nombre]}
            </p>
          )}
        </div>
      ))}

      <input
        type="text"
        name="sitioWeb"
        defaultValue=""
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px]"
      />

      <button
        type="submit"
        disabled={estado === 'enviando'}
        className="justify-self-start rounded bg-[var(--color-verde-hoja)] px-7 py-3 font-semibold text-[var(--color-verde-profundo)] transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {estado === 'enviando' ? 'Enviando…' : textoBoton}
      </button>

      {estado === 'error' && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          No se pudo enviar el formulario. Por favor intente de nuevo más tarde.
        </p>
      )}
    </form>
  )
}
