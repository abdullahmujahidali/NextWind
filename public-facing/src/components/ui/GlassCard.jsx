'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

export function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  as: Component = 'div',
  ...props
}) {
  const MotionComponent = motion.create(Component)

  return (
    <MotionComponent
      className={clsx(
        'relative rounded-2xl border border-zinc-200/50 bg-white/70 p-6 backdrop-blur-xl',
        'dark:border-zinc-700/50 dark:bg-zinc-900/70',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5',
        glow && 'animate-glow',
        className
      )}
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 to-primary-end/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      )}
      {children}
    </MotionComponent>
  )
}

export function GlassCardHeader({ children, className = '' }) {
  return (
    <div className={clsx('mb-4', className)}>
      {children}
    </div>
  )
}

export function GlassCardTitle({ children, className = '' }) {
  return (
    <h3 className={clsx('font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100', className)}>
      {children}
    </h3>
  )
}

export function GlassCardDescription({ children, className = '' }) {
  return (
    <p className={clsx('mt-2 text-sm text-zinc-600 dark:text-zinc-400', className)}>
      {children}
    </p>
  )
}

export function GlassCardIcon({ children, className = '' }) {
  return (
    <div className={clsx(
      'inline-flex h-12 w-12 items-center justify-center rounded-xl',
      'bg-gradient-to-br from-primary to-primary-end text-white',
      className
    )}>
      {children}
    </div>
  )
}

GlassCard.Header = GlassCardHeader
GlassCard.Title = GlassCardTitle
GlassCard.Description = GlassCardDescription
GlassCard.Icon = GlassCardIcon
