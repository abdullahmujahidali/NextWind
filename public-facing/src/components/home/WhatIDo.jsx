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
    gradient: 'from-violet-500 to-purple-600',
    size: 'large',
  },
  {
    id: 'leadership',
    title: 'Engineering',
    subtitle: 'Leadership',
    description: 'Building teams that ship quality code on time',
    stats: ['6+ teams built', '20+ engineers mentored'],
    metric: '35%',
    metricLabel: 'fewer bugs',
    gradient: 'from-blue-500 to-cyan-500',
    size: 'medium',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack',
    subtitle: 'Development',
    description: 'From prototype to production at scale',
    stats: ['React', 'Next.js', 'Python', 'Django', 'FastAPI'],
    metric: '100K+',
    metricLabel: 'users served',
    gradient: 'from-emerald-500 to-teal-500',
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
    gradient: 'from-orange-500 to-amber-500',
    size: 'large',
  },
]

function ExpertiseCard({ item, index }) {
  const isLarge = item.size === 'large'

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8 ${
        isLarge ? 'sm:col-span-2 lg:col-span-1' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5 dark:group-hover:opacity-10`}
      />

      {/* Gradient accent corner */}
      <div
        className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 group-hover:blur-3xl dark:opacity-20 dark:group-hover:opacity-40`}
      />

      <div className="relative">
        {/* Title */}
        <div className="mb-4">
          <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
            {item.title}
          </h3>
          <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text font-display text-2xl font-bold text-transparent sm:text-3xl`}>
            {item.subtitle}
          </span>
        </div>

        {/* Description */}
        <p className="mb-6 text-zinc-600 dark:text-zinc-400">
          {item.description}
        </p>

        {/* Tech/Stats pills */}
        <div className="mb-6 flex flex-wrap gap-2">
          {item.stats.map((stat) => (
            <span
              key={stat}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {stat}
            </span>
          ))}
        </div>

        {/* Metric */}
        <div className="flex items-baseline gap-2">
          <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text font-display text-4xl font-bold text-transparent`}>
            {item.metric}
          </span>
          <span className="text-sm text-zinc-500">
            {item.metricLabel}
          </span>
        </div>
      </div>

      {/* Border gradient on hover */}
      <div
        className={`absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
        style={{
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px'
        }}
      />
    </motion.div>
  )
}

export function WhatIDo() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 text-center">
          <span className="font-mono text-sm font-medium uppercase tracking-wider text-primary dark:text-primary-400">
            What I Do
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Four Pillars of Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Combining technical depth with leadership experience to deliver systems that scale and teams that ship.
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
