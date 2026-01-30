'use client'

import { useEffect, useState, useCallback } from 'react'
import clsx from 'clsx'
import debounce from 'just-debounce-it'
import { motion, AnimatePresence } from 'framer-motion'

import { socialIconsMap } from './social-icons'
import { tryParseUrlDomain } from './utils'

function LinkIcon({ className, visible }) {
  return (
    <motion.svg
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.5,
      }}
      transition={{ duration: 0.15 }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m10.5-1.5 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </motion.svg>
  )
}

export default function UrlField({
  value = '',
  onChange,
  placeholder = 'Enter any URL...',
  className,
}) {
  const [Icon, setIcon] = useState(null)
  const [iconUrl, setIconUrl] = useState(null)
  const [inputValue, setInputValue] = useState(value)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleIconDisplay = useCallback(
    debounce((inp) => {
      setIconUrl(null)
      setIcon(null)

      if (!inp || !inp.includes('.')) return

      const domain = tryParseUrlDomain(inp)
      if (!domain) return

      const IconComponent = Object.entries(socialIconsMap).find(([k]) => domain === k)?.[1]

      if (IconComponent) {
        setIcon(() => IconComponent)
        setIconUrl(null)
      } else {
        setIcon(null)
        setIconUrl(`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(domain)}`)
      }
    }, 150),
    []
  )

  const handleChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)
    handleIconDisplay(newValue)
    onChange?.(newValue)
  }

  const showIcon = !!Icon || !!iconUrl

  return (
    <div className={clsx('relative w-full', className)}>
      <div
        className={clsx(
          'flex items-center gap-3 rounded-xl border-2 bg-zinc-50 px-4 py-4 shadow-sm transition-all dark:bg-zinc-800/50',
          isFocused
            ? 'border-indigo-500 ring-4 ring-indigo-500/10 dark:ring-indigo-500/20'
            : 'border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600'
        )}
      >
        {/* Icon container */}
        <div className="relative flex h-6 w-6 flex-shrink-0 items-center justify-center">
          <LinkIcon
            className="absolute h-6 w-6 text-zinc-400"
            visible={!showIcon}
          />

          <AnimatePresence mode="wait">
            {Icon && (
              <motion.div
                key="social-icon"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, type: 'spring', stiffness: 300 }}
                className="absolute"
              >
                <Icon className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {iconUrl && !Icon && (
              <motion.div
                key="favicon"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, type: 'spring', stiffness: 300 }}
                className="absolute"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src={iconUrl}
                  className="h-6 w-6 rounded"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input */}
        <input
          type="url"
          value={inputValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-lg text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-white dark:placeholder:text-zinc-500"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        {/* Clear */}
        <AnimatePresence>
          {inputValue && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              type="button"
              onClick={() => {
                setInputValue('')
                setIcon(null)
                setIconUrl(null)
                onChange?.('')
              }}
              className="rounded-full bg-zinc-200 p-1.5 text-zinc-500 transition-colors hover:bg-zinc-300 hover:text-zinc-700 dark:bg-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-600 dark:hover:text-zinc-200"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
