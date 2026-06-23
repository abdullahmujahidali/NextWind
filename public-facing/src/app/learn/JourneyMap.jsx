'use client'

import Link from 'next/link'
import { phases, phaseSlug, phaseShortTitle } from './phases'
import { useProgress } from './useProgress'

function CheckIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 10.5 8.5 14 15 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function JourneyMap() {
  const { ready, isDone, completedCount, total, nextSlug, allDone } = useProgress()

  return (
    <div>
      {/* Progress header + continue button */}
      <div className="mb-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-zinc-500">Your progress</p>
            <p className="text-lg font-semibold text-zinc-900">
              {ready ? `${completedCount} of ${total} phases done` : `${total} phases`}
            </p>
          </div>
          <Link
            href={`/learn/${nextSlug}`}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            {!ready || completedCount === 0
              ? 'Start at Phase 0 →'
              : allDone
                ? 'Review →'
                : 'Continue →'}
          </Link>
        </div>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-zinc-200">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: ready ? `${(completedCount / total) * 100}%` : '0%' }}
          />
        </div>
      </div>

      {/* Vertical path */}
      <ol className="relative">
        {phases.map((p, i) => {
          const slug = phaseSlug(p.n)
          const num = p.n.replace('Phase ', '')
          const done = ready && isDone(slug)
          const isNext = ready && !done && slug === nextSlug
          const last = i === phases.length - 1

          return (
            <li key={p.n} className="relative pb-3 pl-14 last:pb-0">
              {/* connecting line */}
              {!last && (
                <span
                  className={`absolute left-[19px] top-10 h-[calc(100%-2rem)] w-0.5 ${
                    done ? 'bg-primary' : 'bg-zinc-200'
                  }`}
                  aria-hidden
                />
              )}

              {/* stop marker */}
              <span
                className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                  done
                    ? 'bg-primary text-white'
                    : isNext
                      ? 'bg-white text-primary-700 ring-2 ring-primary'
                      : 'bg-zinc-100 text-zinc-400'
                }`}
              >
                {done ? <CheckIcon className="h-5 w-5" /> : num}
              </span>

              <Link
                href={`/learn/${slug}`}
                className={`group block rounded-xl border p-4 transition-all hover:-translate-y-px hover:shadow-sm ${
                  isNext
                    ? 'border-primary/60 bg-primary-100/30'
                    : 'border-zinc-200 hover:border-primary/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-zinc-900">
                    {phaseShortTitle(p)}
                  </h3>
                  {done && (
                    <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800">
                      Done
                    </span>
                  )}
                  {isNext && (
                    <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-white">
                      Up next
                    </span>
                  )}
                  <span className="ml-auto hidden text-xs font-medium text-zinc-400 sm:block">
                    {p.time}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-zinc-500">{p.why}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
