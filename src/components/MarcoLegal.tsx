import { Revelar } from '@/components/Revelar'
import { Eyebrow } from '@/components/Hero'

/**
 * La ley que ampara la actividad.
 *
 * Va en el sitio porque el cáñamo carga un prejuicio que hay que desarmar de
 * entrada: lo primero que piensa mucha gente es "¿eso se puede?". La respuesta
 * es un número de ley, no un argumento.
 */
export function MarcoLegal() {
  return (
    <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
      <div className="mx-auto max-w-5xl px-4 py-24">
        <Revelar>
          <Eyebrow>La ley que nos ampara</Eyebrow>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold sm:text-4xl">
            Esto no es un vacío legal. Es una actividad regulada.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-salvia)]">
            El cáñamo industrial en Costa Rica tiene ley propia, reglamento
            propio y autoridad competente. Cultivarlo con autorización no es una
            zona gris: es cumplir una norma que existe desde 2022.
          </p>
        </Revelar>

        <div className="mt-14 grid gap-px bg-[var(--color-salvia)]/20 md:grid-cols-2">
          <Revelar className="h-full">
            <article className="h-full bg-[var(--color-verde-profundo)] p-8 sm:p-10">
              <p className="text-3xl font-semibold text-[var(--color-verde-hoja)]">
                Ley N.° 10113
              </p>
              <p className="mt-4 leading-relaxed">
                Ley del cannabis para uso medicinal y terapéutico y del cáñamo
                para uso alimentario e industrial.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-salvia)]">
                Del 2 de marzo de 2022. Entre sus objetivos está promover el
                desarrollo económico y social de las zonas rurales y fomentar
                encadenamientos que beneficien a pequeños productores
                agropecuarios.
              </p>
            </article>
          </Revelar>

          <Revelar retraso={140} className="h-full">
            <article className="h-full bg-[var(--color-verde-profundo)] p-8 sm:p-10">
              <p className="text-3xl font-semibold text-[var(--color-verde-hoja)]">
                Decreto 44585
              </p>
              <p className="mt-4 leading-relaxed">
                Reglamento del cáñamo para uso alimentario e industrial
                (44585-MP-MAG-MS).
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-salvia)]">
                Define que el MAG es la autoridad competente para autorizar
                cultivo, adquisición de material propagativo y actividades
                relacionadas, y para fiscalizar densidades, áreas, variedades,
                insumos, trazabilidad y volúmenes.
              </p>
            </article>
          </Revelar>
        </div>

        <Revelar retraso={220}>
          <div className="mt-12 border-l-2 border-[var(--color-verde-hoja)] pl-6">
            <p className="leading-relaxed">
              Nuestra autorización específica es la resolución{' '}
              <strong className="text-[var(--color-verde-hoja)]">
                RA-CA-MAG-DNEA-002-2026
              </strong>
              , con vigencia de seis años.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-salvia)]">
              El cáñamo industrial no es psicoactivo: son variedades con
              contenido de THC por debajo del límite legal, sujetas a muestreo
              oficial. No es lo mismo que el cannabis de uso medicinal, y mucho
              menos que el uso recreativo.
            </p>
          </div>
        </Revelar>
      </div>
    </section>
  )
}
