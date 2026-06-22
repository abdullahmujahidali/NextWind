'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const expertise = [
  {
    id: 'ai',
    title: 'AI & LLM',
    subtitle: 'Architecture',
    description: 'Multi-LLM systems, RAG pipelines, voice AI agents',
    stats: ['GPT-4', 'Claude', 'Gemini' ,'LangChain', 'Pinecone'],
    metric: '87%',
    metricLabel: 'ML accuracy',
    size: 'large',
  },
  {
    id: 'leadership',
    title: 'Engineering',
    subtitle: 'Leadership',
    description: 'Hiring, mentoring, and running teams through delivery',
    stats: ['6+ teams built', '20+ engineers mentored'],
    metric: '35%',
    metricLabel: 'fewer bugs',
    size: 'medium',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack',
    subtitle: 'Development',
    description: 'React and Python, from first commit to production',
    stats: ['React', 'Next.js', 'Python', 'Django', 'FastAPI'],
    metric: '100K+',
    metricLabel: 'users served',
    size: 'medium',
  },
  {
    id: 'systems',
    title: 'System',
    subtitle: 'Design',
    description: 'HIPAA-compliant, regulatory-ready architectures',
    stats: ['Microservices', 'Event-driven', 'Cloud-native'],
    metric: '99.5%',
    metricLabel: 'uptime',
    size: 'large',
  },
]

function ExpertiseCard({ item, index }) {
  const isLarge = item.size === 'large'

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8 ${
        isLarge ? 'sm:col-span-2 lg:col-span-1' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative">
        {/* Title */}
        <div className="mb-4">
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {item.title}
          </h3>
          <span className="font-display text-2xl font-bold text-primary-400 sm:text-3xl">
            {item.subtitle}
          </span>
        </div>

        {/* Description */}
        <p className="mb-6 text-zinc-400">
          {item.description}
        </p>

        {/* Tech/Stats pills */}
        <div className="mb-6 flex flex-wrap gap-2">
          {item.stats.map((stat) => (
            <span
              key={stat}
              className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300"
            >
              {stat}
            </span>
          ))}
        </div>

        {/* Metric */}
        <div className="flex items-baseline gap-2">
          <span className="font-display text-4xl font-bold text-primary-400">
            {item.metric}
          </span>
          <span className="text-sm text-zinc-500">
            {item.metricLabel}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function WhatIDo() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            What I work on
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Four areas, with the numbers to back them. AI architecture, engineering leadership, full-stack delivery, and systems built for regulated environments.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {expertise.map((item, index) => (
            <ExpertiseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
