'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const techStack = {
  'Frontend': ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  'Backend': ['Python', 'Django', 'FastAPI', 'Node.js', 'Go', 'GraphQL'],
  'AI & ML': ['OpenAI GPT-4', 'Claude AI', 'LangChain', 'LangGraph', 'Agno', 'RAG Pipelines', 'Hugging Face'],
  'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'Neo4j', 'Pinecone', 'Elasticsearch'],
  'Cloud & DevOps': ['AWS', 'Azure', 'Digital Ocean', 'Docker', 'Kubernetes', 'Terraform', 'S3/S3Mock', 'CI/CD'],
  'Tools': ['Git', 'Jira', 'ClickUp', 'Pytest', 'Jest', 'Sentry'],
}

const leadershipHighlights = [
  {
    quote: "Built engineering teams from scratch",
    detail: "Hired and onboarded 20+ engineers across 6 teams. Created interview processes, onboarding docs, and team culture from zero.",
  },
  {
    quote: "Turned junior devs into tech leads",
    detail: "Through regular 1:1s, code reviews, and stretch assignments. Three of my mentees now lead their own teams.",
  },
  {
    quote: "Ship every sprint, no exceptions",
    detail: "Established Agile practices that actually work. 95%+ sprint completion rate across all teams I've led.",
  },
  {
    quote: "Bridge the gap between business and tech",
    detail: "I translate founder vision into technical roadmaps. No jargon, just clear deliverables and honest timelines.",
  },
]

function TechBadge({ name }) {
  return (
    <motion.span
      className="inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.span>
  )
}

export function TechStack() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills & Expertise"
          title="Technical & Leadership Toolkit"
          description="8+ years of hands-on engineering combined with proven leadership experience."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Technical Skills - Left Column */}
          <ScrollReveal>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
              <h3 className="mb-6 text-lg font-semibold text-zinc-900 dark:text-white">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(techStack).map(([category, skills]) => (
                  <div key={category}>
                    <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                      {category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <TechBadge key={skill} name={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Leadership - Right Column */}
          <ScrollReveal>
            <div className="flex h-full flex-col">
              <h3 className="mb-6 text-lg font-semibold text-zinc-900 dark:text-white">
                How I Lead
              </h3>
              <div className="flex flex-1 flex-col gap-4">
                {leadershipHighlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative flex-1 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Quote mark */}
                    <div className="absolute -left-2 -top-2 font-serif text-4xl text-zinc-300 opacity-50 dark:text-zinc-700">
                      &ldquo;
                    </div>
                    <p className="mb-2 font-medium text-zinc-900 dark:text-white">
                      {item.quote}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.detail}
                    </p>
                    {/* Subtle gradient line on left */}
                    <div className="absolute bottom-4 left-0 top-4 w-0.5 rounded-full bg-gradient-to-b from-primary/50 via-primary-end/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Stats */}
        <ScrollReveal className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-8 py-6 dark:border-zinc-800 dark:bg-zinc-900/30">
            <div className="text-center">
              <span className="block text-2xl font-bold text-zinc-900 dark:text-white">6+</span>
              <span className="text-sm text-zinc-500">Teams Built</span>
            </div>
            <div className="hidden h-8 w-px bg-zinc-200 dark:bg-zinc-800 sm:block" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-zinc-900 dark:text-white">20+</span>
              <span className="text-sm text-zinc-500">Engineers Mentored</span>
            </div>
            <div className="hidden h-8 w-px bg-zinc-200 dark:bg-zinc-800 sm:block" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-zinc-900 dark:text-white">35%</span>
              <span className="text-sm text-zinc-500">Fewer Bugs</span>
            </div>
            <div className="hidden h-8 w-px bg-zinc-200 dark:bg-zinc-800 sm:block" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-zinc-900 dark:text-white">95%</span>
              <span className="text-sm text-zinc-500">Sprint Completion</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
