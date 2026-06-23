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

      {/* What you'll be able to build */}
      <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
        What you’ll be able to build
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-zinc-700">
        This isn’t just watching tutorials. By the end you’ll have real things
        online that you made yourself — and the skills people actually get paid
        for.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[
          ['~6 months in', 'Your first website online, with a link you can share.'],
          ['~1 year in', 'A full app — login, database, the works — live on the internet.'],
          ['By the end', 'A portfolio of real projects, ready for freelance work or a junior dev job.'],
          ['The whole time', 'You learn by building, not just watching. Every phase ends with something real.'],
        ].map(([when, what]) => (
          <div key={when} className="rounded-xl border border-zinc-200 p-4">
            <p className="text-sm font-semibold text-primary-700">{when}</p>
            <p className="mt-1 text-[15px] text-zinc-700">{what}</p>
          </div>
        ))}
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
