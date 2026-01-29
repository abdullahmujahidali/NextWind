import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
  gradient:
    'bg-gradient-to-r from-primary to-primary-end font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:brightness-110 active:brightness-95 transition-all duration-200',
  ghost:
    'bg-transparent font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800',
  outline:
    'border-2 border-primary bg-transparent font-semibold text-primary hover:bg-primary hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-zinc-900 transition-colors',
}

const sizeStyles = {
  sm: 'py-1.5 px-3 text-xs',
  md: 'py-2 px-4 text-sm',
  lg: 'py-3 px-6 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  href,
  ...props
}) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-lg outline-offset-2 transition active:transition-none font-medium',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
