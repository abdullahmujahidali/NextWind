'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'

export function GoodiesHero() {
  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-transparent to-transparent dark:from-indigo-950/20" />
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-400/20 via-violet-400/20 to-purple-400/20 blur-3xl dark:from-indigo-500/10 dark:via-violet-500/10 dark:to-purple-500/10" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 px-4 py-1.5 text-sm font-medium text-indigo-600 ring-1 ring-inset ring-indigo-500/20 dark:text-indigo-400 dark:ring-indigo-400/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </span>
            Free &amp; Open Source
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
          >
            Goodies{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              &amp; Tools
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400"
          >
            A collection of free tools, components, and resources I&apos;ve built.
            Grab them, use them, make something cool. No strings attached.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">1</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Tool</div>
            </div>
            <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">Free</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Forever</div>
            </div>
            <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">MIT</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">License</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}
