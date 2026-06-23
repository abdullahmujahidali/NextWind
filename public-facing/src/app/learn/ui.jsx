import Link from 'next/link'
import Image from 'next/image'
import { LearnShell } from './LearnShell'
import { YouTubeIcon } from './icons'

import claudeLogo from '@/images/logos/claude.png'
import chatgptLogo from '@/images/logos/chatgpt.png'
import geminiLogo from '@/images/logos/gemini.png'
import cursorLogo from '@/images/logos/cursor.png'

const TOOL_LOGOS = {
  claude: claudeLogo,
  chatgpt: chatgptLogo,
  gemini: geminiLogo,
  cursor: cursorLogo,
}

// NOTE: this module stays server-safe. LearnShell (a client component) owns the
// top bar, sidebar, and the learn-mode global styles.

// Shared shell for the overview and every reference / phase page.
export function LearnPage({ children, wide = false }) {
  return <LearnShell wide={wide}>{children}</LearnShell>
}

// A page header for reference pages: small "back" link, big title, intro.
export function PageHeader({ title, intro }) {
  return (
    <header>
      <Link
        href="/learn"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-primary-700"
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 3 5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Overview
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">{intro}</p>
      )}
    </header>
  )
}

export function Note({ children, className = '' }) {
  return (
    <div
      className={`rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-[15px] leading-relaxed text-zinc-700 ${className}`}
    >
      {children}
    </div>
  )
}

export function FieldCard({ name, what, ai }) {
  return (
    <div className="rounded-xl border border-zinc-200 p-5">
      <h3 className="text-lg font-semibold text-zinc-900">{name}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-zinc-700">{what}</p>
      <div className="mt-3 rounded-lg bg-primary-100/40 px-3 py-2.5 text-[14px] leading-relaxed text-zinc-700">
        <b className="text-primary-800">How AI changes it:</b> {ai}
      </div>
    </div>
  )
}

export function ToolCard({ logo, name, tag, desc, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3.5 rounded-xl border border-zinc-200 p-4 no-underline transition-all hover:-translate-y-px hover:border-primary/50 hover:shadow-sm"
    >
      <span className="flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <Image
          src={TOOL_LOGOS[logo]}
          alt={`${name} logo`}
          className="h-7 w-7 object-contain"
        />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-zinc-900">{name}</h3>
          {tag && (
            <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800">
              {tag}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-zinc-600">{desc}</p>
      </div>
    </a>
  )
}

export function AccountCard({ icon, name, what, why, links }) {
  return (
    <div className="rounded-xl border border-zinc-200 p-5">
      <div className="flex items-center gap-2.5">
        {icon}
        <h3 className="text-lg font-semibold text-zinc-900">{name}</h3>
        <span className="text-sm text-zinc-500">— {what}</span>
      </div>
      <p className="mt-2 text-[15px] leading-relaxed text-zinc-700">{why}</p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 no-underline transition-colors hover:border-primary/50 hover:bg-primary-100/30 sm:flex-1"
          >
            {l.tag === 'Video' ? (
              <YouTubeIcon className="h-4 w-4 flex-none text-red-500" />
            ) : (
              <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-medium text-zinc-500">
                {l.tag}
              </span>
            )}
            {l.label}
          </a>
        ))}
      </div>
    </div>
  )
}

