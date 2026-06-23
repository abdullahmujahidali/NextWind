import { notFound } from 'next/navigation'
import { phases, phaseSlug, phaseShortTitle } from '../phases'
import { PhaseBody } from '../PhaseBody'
import { PhasePrevNext } from '../PhaseStepper'
import { PhaseDoneButton } from '../PhaseDoneButton'
import { LearnPage } from '../ui'

export function generateStaticParams() {
  return phases.map((p) => ({ phase: phaseSlug(p.n) }))
}

function findPhase(slug) {
  return phases.find((p) => phaseSlug(p.n) === slug)
}

export function generateMetadata({ params }) {
  const p = findPhase(params.phase)
  if (!p) return {}
  return {
    title: `${p.n}: ${phaseShortTitle(p)} — Learn to Code`,
    description: p.why,
  }
}

export default function PhasePage({ params }) {
  const p = findPhase(params.phase)
  if (!p) notFound()

  const num = p.n.replace('Phase ', '')

  return (
    <LearnPage>
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
          {num}
        </span>
        <div>
          <p className="text-sm font-medium text-zinc-500">
            Phase {num} · {p.time}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {phaseShortTitle(p)}
          </h1>
        </div>
      </div>

      <div className="mt-8">
        <PhaseBody p={p} />
      </div>

      <PhaseDoneButton slug={params.phase} />

      <PhasePrevNext currentSlug={params.phase} />
    </LearnPage>
  )
}
