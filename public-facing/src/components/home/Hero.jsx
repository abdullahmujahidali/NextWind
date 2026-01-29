'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { RotatingText } from '@/components/ui/TypewriterText'
import { StaticGradientBackground } from '@/components/ui/GradientBackground'
import { Button } from '@/components/Button'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MediumIcon,
} from '@/components/SocialIcons'

const roles = [
  'Engineering Lead',
  'Engineering Manager',
  'AI/LLM Architect',
  'Tech Lead',
]

function SocialLink({ icon: Icon, href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group rounded-full p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="h-5 w-5 fill-zinc-600 transition-colors group-hover:fill-primary dark:fill-zinc-400 dark:group-hover:fill-primary-400" />
    </motion.a>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-20">
      <StaticGradientBackground />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary dark:border-primary/30 dark:bg-primary/10 dark:text-primary-300">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-accent-success" />
              Open to new opportunities
            </span>
          </motion.div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Hi, I&apos;m</span>
            <span className="mt-2 block bg-gradient-to-r from-primary to-primary-end bg-clip-text text-transparent">
              Abdullah Mujahid
            </span>
          </h1>

          <div className="mt-6 flex items-center justify-center text-xl font-medium text-zinc-600 dark:text-zinc-400 sm:text-2xl">
            <span className="text-primary dark:text-primary-400">
              <RotatingText texts={roles} interval={3000} />
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
          >
            I build systems that scale startups into success stories. 8+ years turning ambitious ideas into production systems that serve thousands of users daily.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/projects" variant="gradient">
              View My Work
            </Button>
            <Button href="/about" variant="secondary">
              Let&apos;s Talk
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <SocialLink
              href="https://github.com/abdullahmujahidali"
              icon={GitHubIcon}
              label="Follow on GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/abdullahmujahidali/"
              icon={LinkedInIcon}
              label="Follow on LinkedIn"
            />
            <SocialLink
              href="https://twitter.com/abdulladgaf"
              icon={TwitterIcon}
              label="Follow on Twitter"
            />
            <SocialLink
              href="https://medium.com/@abdullahmujahidali"
              icon={MediumIcon}
              label="Follow on Medium"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned at bottom of section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-zinc-400"
        >
          <span className="mb-2 text-xs font-medium uppercase tracking-wider">Scroll</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
