'use client'

import { useRouter } from 'next/navigation'
import { phases, phaseSlug, phaseShortTitle } from './phases'
import { useProgress } from './useProgress'

// "Mark as done" control shown at the bottom of a phase page. Marking done
// advances the learner to the next phase.
export function PhaseDoneButton({ slug }) {
  const { ready, isDone, setPhaseDone } = useProgress()
  const router = useRouter()
  const done = ready && isDone(slug)

  const idx = phases.findIndex((p) => phaseSlug(p.n) === slug)
  const next = idx >= 0 && idx < phases.length - 1 ? phases[idx + 1] : null

  const markDone = () => {
    setPhaseDone(slug, true)
    if (next) router.push(`/learn/${phaseSlug(next.n)}`)
  }

  if (done) {
    return (
      <div className="mt-10 flex flex-wrap items-center gap-3 rounded-xl border border-primary/40 bg-primary-100/40 px-5 py-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 10.5 8.5 14 15 6.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-[15px] font-medium text-primary-800">
          You’ve marked this phase done. Nice work.
        </span>
        <button
          onClick={() => setPhaseDone(slug, false)}
          className="ml-auto text-sm font-medium text-zinc-500 underline-offset-2 hover:text-zinc-800 hover:underline"
        >
          Undo
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={markDone}
      className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-600"
    >
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 10.5 8.5 14 15 6.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {next
        ? `Mark done & go to ${next.n.replace('Phase ', '')}. ${phaseShortTitle(next)}`
        : 'Mark this phase done'}
    </button>
  )
}
