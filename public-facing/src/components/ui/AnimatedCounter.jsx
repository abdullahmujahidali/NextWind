'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

export function AnimatedCounter({
  value,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hasAnimated, setHasAnimated] = useState(false)

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 75,
    damping: 15,
    duration: duration * 1000,
  })

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  )

  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value)
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated, spring, value])

  useEffect(() => {
    return display.on('change', (latest) => {
      setDisplayValue(latest)
    })
  }, [display])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  )
}

export function StatCard({
  value,
  label,
  prefix = '',
  suffix = '',
  className = '',
}) {
  return (
    <div className={`text-center ${className}`}>
      <div className="font-display text-4xl font-bold text-primary dark:text-primary-300 sm:text-5xl">
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </div>
      <div className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        {label}
      </div>
    </div>
  )
}
