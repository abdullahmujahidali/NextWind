'use client'

import Link from 'next/link'
import { phases, phaseSlug, phaseShortTitle } from './phases'
import { refPages } from './nav'
import { DownloadIcon } from './icons'
import { downloadMarkdown } from './markdown'
import { LearnPage } from './ui'
import { JourneyMap } from './JourneyMap'

export function Roadmap() {
  return (
    <LearnPage>
      {/* Hero */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Learn to build software, from scratch
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-600">
          A step-by-step plan for anyone who wants to become a developer but
          isn’t sure where to begin. It’s the order I’d learn things in today —
          one step at a time, with a video to watch for each one. Nothing here
          costs money.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={`/learn/${phaseSlug(phases[0].n)}`}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600"
          >
            Start at the beginning
          </Link>
          <Link
            href="/learn/start-here"
            className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400"
          >
            How this works
          </Link>
          <button
            onClick={downloadMarkdown}
            className="flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400"
          >
            <DownloadIcon />
            Download (Markdown)
          </button>
        </div>
        <p className="mt-2 text-xs text-zinc-400">
          The Markdown file has the whole roadmap, with every link — drop it into
          Notion or read it offline.
        </p>
      </div>

      {/* Why I made this */}
      <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
        Why I made this
      </h2>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-zinc-700">
        <p>
          I started young, mostly out of curiosity about how computers actually
          worked. I taught myself a lot of this — and over time that curiosity
          turned into a career.
        </p>
        <p>
          One thing I learned the hard way:{' '}
          <b>a degree teaches you the fundamentals, not how to build real
          things.</b> The theory matters, but it won’t hand you the skills to
          ship a real app — you pick that up by actually building, on your own,
          one project at a time.
        </p>
        <p>
          I made this because I wish I’d had it: the path that works, in the
          right order, with the detours and mistakes already removed. The biggest
          lesson is the simplest one —{' '}
          <b>you can teach yourself all of this.</b> Stay curious, build real
          things, and keep going.
        </p>
      </div>

      {/* The phases — the journey map */}
      <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
        Your roadmap
      </h2>
      <p className="mt-3 text-[15px] text-zinc-600">
        Eleven steps, in order. Start at the top and work your way down — each
        one opens its own page. Mark a step done and the next one lights up.
      </p>
      <div className="mt-6">
        <JourneyMap />
      </div>

      {/* More / reference pages */}
      <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
        Helpful extras
      </h2>
      <p className="mt-3 text-[15px] text-zinc-600">
        Short reads worth a look before or during the journey.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {refPages.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="group rounded-xl border border-zinc-200 p-4 transition-all hover:-translate-y-px hover:border-primary/50 hover:shadow-sm"
          >
            <span className="flex items-center font-semibold text-zinc-900 group-hover:text-primary-800">
              {r.label}
              <svg
                viewBox="0 0 16 16"
                className="ml-1 h-3.5 w-3.5 text-zinc-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="mt-1 block text-sm text-zinc-500">{r.blurb}</span>
          </Link>
        ))}
      </div>

      <p className="mt-12 text-xs text-zinc-400">
        Put together by Abdullah Mujahid Ali.
      </p>
    </LearnPage>
  )
}
