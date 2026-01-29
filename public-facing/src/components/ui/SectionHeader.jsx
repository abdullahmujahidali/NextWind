'use client'

import { ScrollReveal } from './ScrollReveal'
import clsx from 'clsx'

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  return (
    <ScrollReveal
      className={clsx(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block font-mono text-sm font-medium uppercase tracking-wider text-primary dark:text-primary-400">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className={clsx(
          'mt-4 text-lg text-zinc-600 dark:text-zinc-400',
          align === 'center' && 'mx-auto max-w-2xl'
        )}>
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}

export function SectionDivider({ className = '' }) {
  return (
    <div className={clsx('py-12 md:py-20', className)}>
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />
    </div>
  )
}
