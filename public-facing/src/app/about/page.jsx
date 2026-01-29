'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MediumIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/abdullah.JPG'

const quickFacts = [
  { label: 'Based in', value: 'Lahore, Pakistan' },
  { label: 'Sometimes in', value: 'Dubai, UAE' },
  { label: 'Experience', value: '8+ years' },
  { label: 'Work style', value: 'Hybrid' },
]

const timeline = [
  { year: '2016', event: 'First production app — farm management for 600+ Irish businesses' },
  { year: '2019', event: 'Moved into senior roles, started leading small teams' },
  { year: '2021', event: 'Healthcare tech — built HIPAA-compliant systems processing 10K+ records/day' },
  { year: '2023', event: 'Research published — 389+ citations on computer vision paper' },
  { year: '2024', event: 'Engineering Manager — led RegNxt from zero to 50+ financial institutions' },
  { year: '2025', event: 'AI architecture — multi-LLM systems, voice AI with 92%+ accuracy' },
]

function SocialLink({ icon: Icon, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-zinc-200 p-3 text-zinc-500 transition-all hover:border-primary/30 hover:text-primary dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-primary/30 dark:hover:text-primary-400"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="h-5 w-5 fill-current" />
    </motion.a>
  )
}

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Hero - Simple and Personal */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Image
                src={portraitImage}
                alt="Abdullah Mujahid"
                className="h-32 w-32 rounded-full object-cover shadow-xl ring-4 ring-white dark:ring-zinc-800"
                sizes="128px"
                priority
              />
              <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-4 border-white bg-green-500 dark:border-zinc-900" />
            </motion.div>

            <h1 className="mt-6 font-display text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Abdullah Mujahid
            </h1>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              Engineering Leader & AI Architect
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <SocialLink href="https://github.com/abdullahmujahidali" icon={GitHubIcon} />
              <SocialLink href="https://www.linkedin.com/in/abdullahmujahidali/" icon={LinkedInIcon} />
              <SocialLink href="https://twitter.com/abdulladgaf" icon={TwitterIcon} />
              <SocialLink href="https://medium.com/@abdullahmujahidali" icon={MediumIcon} />
            </div>
          </div>
        </ScrollReveal>

        {/* Quick Facts */}
        <ScrollReveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            {quickFacts.map((fact, i) => (
              <span key={fact.label} className="flex items-center gap-2">
                <span className="text-zinc-500">{fact.label}:</span>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">{fact.value}</span>
                {i < quickFacts.length - 1 && <span className="ml-6 hidden text-zinc-300 dark:text-zinc-700 sm:inline">•</span>}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* The Story */}
        <ScrollReveal className="mt-16">
          <div className="prose prose-zinc mx-auto dark:prose-invert">
            <p className="text-lg leading-relaxed">
              I build systems that scale startups into success stories. My journey started in 2016 with a farm management app for Irish agricultural businesses — my first lesson that <strong>technology only matters when it solves real problems</strong>.
            </p>
            <p>
              Eight years later, that mindset hasn&apos;t changed. The problems have gotten more complex — multi-LLM architectures, real-time voice AI, HIPAA-compliant healthcare systems — but the goal remains the same: ship software that genuinely helps people.
            </p>
            <p>
              What sets me apart is that I&apos;ve been on both sides. I&apos;ve written production code for systems serving 100K+ users. I&apos;ve also built engineering teams from scratch, hired 20+ engineers, and established processes that cut bug rates by 35-45%. I know what good code looks like <em>and</em> what it takes to consistently ship it.
            </p>
            <p>
              Today, I&apos;m particularly excited about AI that goes beyond demos — investor intelligence platforms, medical diagnostics, voice interfaces that actually work. If you&apos;re building something ambitious, I&apos;d love to hear about it.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline - Simple Version */}
        <ScrollReveal className="mt-16">
          <h2 className="text-center font-display text-xl font-bold text-zinc-900 dark:text-zinc-100">
            The highlight reel
          </h2>
          <div className="mt-8 space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <span className="w-12 flex-shrink-0 font-mono text-sm font-medium text-primary dark:text-primary-400">
                  {item.year}
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  {item.event}
                </span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA - Simple and Direct */}
        <ScrollReveal className="mt-16">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
            <h2 className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Want to work together?
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              I&apos;m open to engineering leadership roles, AI architecture consulting, and interesting technical challenges.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://cal.com/abdullahmujahidali"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a call
              </Link>
              <Link
                href="mailto:abdullahmujahidali1@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                abdullahmujahidali1@gmail.com
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  )
}
