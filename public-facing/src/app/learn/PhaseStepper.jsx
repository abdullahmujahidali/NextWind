import Link from 'next/link'
import { phases, phaseSlug, phaseShortTitle } from './phases'

// Left-rail stepper showing every phase, with the current one highlighted.
// A connecting line runs through the numbered dots like a progress track.
export function PhaseStepper({ currentSlug }) {
  return (
    <nav aria-label="All phases" className="sticky top-20">
      <Link
        href="/learn"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-primary-700"
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 3 5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Overview
      </Link>

      <ol className="relative">
        {/* vertical track */}
        <span className="absolute left-[11px] top-2 bottom-2 w-px bg-zinc-200" aria-hidden />
        {phases.map((p) => {
          const slug = phaseSlug(p.n)
          const active = slug === currentSlug
          const num = p.n.replace('Phase ', '')
          return (
            <li key={p.n} className="relative">
              <Link
                href={`/learn/${slug}`}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center gap-3 rounded-lg py-1.5 pr-2 transition-colors ${
                  active ? 'text-primary-800' : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                <span
                  className={`relative z-10 flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-semibold ring-4 ring-white ${
                    active
                      ? 'bg-primary text-white'
                      : 'bg-zinc-100 text-zinc-500'
                  }`}
                >
                  {num}
                </span>
                <span className={`text-sm ${active ? 'font-semibold' : ''}`}>
                  {phaseShortTitle(p)}
                </span>
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

// Previous / Next buttons at the bottom of a phase page.
export function PhasePrevNext({ currentSlug }) {
  const idx = phases.findIndex((p) => phaseSlug(p.n) === currentSlug)
  const prev = idx > 0 ? phases[idx - 1] : null
  const next = idx < phases.length - 1 ? phases[idx + 1] : null

  return (
    <div className="mt-12 grid gap-3 border-t border-zinc-200 pt-6 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`/learn/${phaseSlug(prev.n)}`}
          className="group rounded-xl border border-zinc-200 p-4 transition-colors hover:border-primary/50"
        >
          <span className="text-xs text-zinc-400">← Previous</span>
          <span className="mt-1 block font-medium text-zinc-900 group-hover:text-primary-800">
            {prev.n.replace('Phase ', '')}. {phaseShortTitle(prev)}
          </span>
        </Link>
      ) : (
        <Link
          href="/learn"
          className="group rounded-xl border border-zinc-200 p-4 transition-colors hover:border-primary/50"
        >
          <span className="text-xs text-zinc-400">←</span>
          <span className="mt-1 block font-medium text-zinc-900 group-hover:text-primary-800">
            Back to overview
          </span>
        </Link>
      )}
      {next ? (
        <Link
          href={`/learn/${phaseSlug(next.n)}`}
          className="group rounded-xl border border-zinc-200 p-4 text-right transition-colors hover:border-primary/50"
        >
          <span className="text-xs text-zinc-400">Next →</span>
          <span className="mt-1 block font-medium text-zinc-900 group-hover:text-primary-800">
            {next.n.replace('Phase ', '')}. {phaseShortTitle(next)}
          </span>
        </Link>
      ) : (
        <Link
          href="/learn"
          className="group rounded-xl border border-zinc-200 p-4 text-right transition-colors hover:border-primary/50"
        >
          <span className="text-xs text-zinc-400">→</span>
          <span className="mt-1 block font-medium text-zinc-900 group-hover:text-primary-800">
            You’ve reached the end — back to overview
          </span>
        </Link>
      )}
    </div>
  )
}

// Compact phase picker for mobile (a horizontal scroll of numbered chips).
export function PhaseStepperMobile({ currentSlug }) {
  return (
    <nav aria-label="All phases" className="lg:hidden">
      <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
        {phases.map((p) => {
          const slug = phaseSlug(p.n)
          const active = slug === currentSlug
          return (
            <Link
              key={p.n}
              href={`/learn/${slug}`}
              className={`flex h-9 w-9 flex-none items-center justify-center rounded-full text-sm font-semibold ${
                active ? 'bg-primary text-white' : 'bg-zinc-100 text-zinc-600'
              }`}
            >
              {p.n.replace('Phase ', '')}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
