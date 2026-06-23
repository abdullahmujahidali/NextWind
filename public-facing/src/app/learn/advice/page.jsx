import Link from 'next/link'
import { LearnPage, PageHeader } from '../ui'
import { HABITS, HONEST } from '../content'
import { LinkedInIcon } from '../icons'

export const metadata = {
  title: 'Habits & honest advice — Learn to Code',
  description: 'What to keep up, and a few honest things to remember.',
}

export default function AdvicePage() {
  return (
    <LearnPage>
      <PageHeader
        title="Habits & honest advice"
        intro="The small things that, kept up over time, make the difference."
      />

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        Habits that pay off
      </h2>
      <div className="mt-4 space-y-3">
        {HABITS.map(([h, why]) => (
          <div key={h} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
            <p className="text-[15px] text-zinc-700">
              <b className="text-zinc-900">{h}.</b> {why}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold text-zinc-900">
        A few honest things
      </h2>
      <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-zinc-700">
        {HONEST.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <div className="mt-10 rounded-xl bg-primary-100/50 p-5 text-[15px] leading-relaxed text-zinc-800">
        <b>The whole thing in one line:</b> Python, then how to think like a
        programmer, then the web, React, the backend, databases, one full app
        online, and finally AI. A little maths in the background, and a small
        project at the end of every phase.
      </div>

      <div className="mt-10 border-t border-zinc-200 pt-8">
        <p className="text-[15px] text-zinc-700">
          If you get stuck or just want someone in your corner, reach out. I
          don’t mind.
        </p>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-primary-700">
          <a href="mailto:abdullahmujahidali1@gmail.com">
            abdullahmujahidali1@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/abdullahmujahidali/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/learn/phase-0"
          className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600"
        >
          Start at Phase 0 →
        </Link>
      </div>
    </LearnPage>
  )
}
