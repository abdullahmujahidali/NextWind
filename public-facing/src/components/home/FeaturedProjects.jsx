'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const projects = [
  {
    title: 'RegNxt',
    role: 'Engineering Manager',
    oneLiner: 'Regulatory reporting for European banks',
    outcome: 'Built from scratch → 50+ institutions now use it',
    tech: ['React', 'Django', 'PostgreSQL', 'AWS'],
    color: 'bg-blue-500',
  },
  {
    title: 'AIRA',
    role: 'Lead Architect',
    oneLiner: 'AI-powered investor intelligence',
    outcome: 'Multi-LLM system processing millions of data points',
    tech: ['Next.js', 'LangChain', 'RAG', 'Pinecone'],
    color: 'bg-violet-500',
  },
  {
    title: 'Mitra AI',
    role: 'Technical Lead',
    oneLiner: 'Real-time voice AI for therapy',
    outcome: '92%+ accuracy speaker diarization, HIPAA compliant',
    tech: ['Python', 'LiveKit', 'GPT-4', 'WebSockets'],
    color: 'bg-pink-500',
  },
  {
    title: 'VeterinaryAI',
    role: 'Tech Lead',
    oneLiner: 'AI diagnostics for 50+ vet practices',
    outcome: '10K+ medical records analyzed daily, 87% accuracy',
    tech: ['LangGraph', 'Pinecone', 'FastAPI', 'React'],
    color: 'bg-emerald-500',
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12">
          <span className="font-mono text-sm font-medium uppercase tracking-wider text-primary dark:text-primary-400">
            Featured Work
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Projects I&apos;m proud of
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Not just code — outcomes. Each project solved a real problem for real users.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Color indicator */}
              <div className={`absolute left-0 top-0 h-full w-1 ${project.color}`} />

              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{project.title}</h3>
                    <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {project.role}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">{project.oneLiner}</p>
                </div>
                <svg
                  className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-zinc-900 dark:text-zinc-600 dark:group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>

              <div className="mt-4 rounded-lg bg-zinc-100 px-4 py-3 dark:bg-zinc-800/50">
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{project.outcome}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-zinc-500">
                    {t}
                  </span>
                ))}
              </div>

              <Link href="/projects" className="absolute inset-0">
                <span className="sr-only">View {project.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <ScrollReveal className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            View all projects
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
