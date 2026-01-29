'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function TypewriterText({
  texts = [],
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentFullText = texts[currentTextIndex]

    if (isDeleting) {
      setDisplayText((prev) => prev.slice(0, -1))
    } else {
      setDisplayText((prev) => currentFullText.slice(0, prev.length + 1))
    }
  }, [currentTextIndex, isDeleting, texts])

  useEffect(() => {
    if (texts.length === 0) return

    const currentFullText = texts[currentTextIndex]
    let timeout

    if (!isDeleting && displayText === currentFullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    } else {
      timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, texts, tick, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={`inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="inline-block"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="ml-1 inline-block h-[1em] w-[3px] bg-current"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  )
}

export function RotatingText({
  texts = [],
  className = '',
  interval = 3000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (texts.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, interval)

    return () => clearInterval(timer)
  }, [texts, interval])

  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="inline-block"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
