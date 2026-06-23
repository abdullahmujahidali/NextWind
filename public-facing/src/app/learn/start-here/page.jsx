import Link from 'next/link'
import Image from 'next/image'
import { LearnPage, PageHeader, Note, AccountCard } from '../ui'
import { GitHubIcon, LinkedInIcon } from '../icons'
import figParts from '../../../../public/learn/figure2-three-parts.png'

export const metadata = {
  title: 'Before you start — Learn to Code',
  description: 'How this works, what you need, and the accounts to set up.',
}

export default function StartHerePage() {
  return (
    <LearnPage>
      <PageHeader
        title="Before you start"
        intro="A few things to know before Phase 0 — how to use this, what you actually need, and two accounts to set up early."
      />

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">How this works</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-zinc-700">
        <p>
          Do the steps in order. Each one builds on the last, so skipping ahead
          usually backfires. For every phase: watch the main video first, type
          the code out yourself instead of copying it, then build the small
          project at the end. That last part is where the learning actually
          happens.
        </p>
        <p>
          You’ll feel lost sometimes. That’s normal, and it doesn’t mean you’re
          not cut out for this. It means you’re learning something hard. Everyone
          who codes has felt it, and most still do.
        </p>
      </div>

      <Note className="mt-6">
        <b>About how long this takes:</b> realistically a year and a half to three
        years, depending on how much time you put in. You don’t wait that long to
        see results — you’ll have a website online in about six months and a full
        app in about a year. An hour most days beats a long weekend once a month.
      </Note>

      <Note className="mt-4">
        <b>You don’t need a powerful computer.</b> An old laptop is fine all the
        way through. If all you have is a phone, you can still write and run real
        code in the browser with Replit (replit.com) or Google Colab
        (colab.research.google.com). No excuse to wait.
      </Note>

      <h2 className="mt-12 text-xl font-semibold text-zinc-900">
        Two accounts to set up early
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-zinc-700">
        They’re free, take ten minutes, and end up mattering more than any
        certificate when you’re looking for work.
      </p>
      <div className="mt-5 space-y-4">
        <AccountCard
          icon={<GitHubIcon className="h-6 w-6" />}
          name="GitHub"
          what="where your code lives online"
          why="Every project you build goes here, and over time it becomes the proof that you can actually code. When you apply for a job or a freelance gig, people look at your GitHub before anything else — it shows what you’ve built, not just what you claim."
          links={[
            { tag: 'Sign up', label: 'github.com', href: 'https://github.com/signup' },
            { tag: 'Video', label: 'How to create a GitHub account and your first repo', href: 'https://www.youtube.com/results?search_query=how+to+create+github+account+for+beginners+2024' },
          ]}
        />
        <AccountCard
          icon={<LinkedInIcon className="h-6 w-6 text-[#0a66c2]" />}
          name="LinkedIn"
          what="where you’re found for work"
          why="This is where recruiters and clients look for developers. A simple, honest profile — what you’re learning, the projects you’ve shipped, a link to your GitHub — is enough to start. Most early opportunities come from someone seeing your work here, not from sending CVs into the void."
          links={[
            { tag: 'Sign up', label: 'linkedin.com', href: 'https://www.linkedin.com/signup' },
            { tag: 'Video', label: 'How to make a LinkedIn profile that gets noticed', href: 'https://www.youtube.com/results?search_query=how+to+make+a+good+linkedin+profile+for+developers+beginners' },
          ]}
        />
      </div>

      <figure className="my-10">
        <Image
          src={figParts}
          alt="Frontend, backend, and database and how they talk"
          className="mx-auto w-full max-w-xl rounded-xl border border-zinc-200 bg-white"
        />
        <figcaption className="mt-3 text-center text-sm text-zinc-500">
          The three parts of a website, and how they talk to each other.
        </figcaption>
      </figure>

      <Link
        href="/learn/phase-0"
        className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600"
      >
        Start at Phase 0 →
      </Link>
    </LearnPage>
  )
}
