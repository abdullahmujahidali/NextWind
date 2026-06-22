'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const principles = [
  {
    step: 'Embed',
    title: 'Work where the problem is',
    body: 'I sit with the people who feel the pain — dairy farmers, clinicians, founders — and learn the workflow before writing code. For SilagePlan that meant standing in the field while drones measured feed piles.',
  },
  {
    step: 'Build',
    title: 'Ship against real workflows',
    body: 'No abstract backlog. I build the thing the customer will use on Monday, in their context, and put it in their hands fast. Tight loops beat big specs.',
  },
  {
    step: 'Iterate',
    title: 'Stay close, keep shipping',
    body: 'I watch how it actually gets used, fix what breaks, and hand off something the team can run. The goal is a system that outlives my involvement, not a demo.',
  },
]

export function HowIWork() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            How I work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Forward-deployed. I embed with a team, build in their context, and ship
            production software against the work as it actually happens — not a spec
            written far from it.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => (
            <motion.div
              key={item.step}
              className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-primary/40 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="font-mono text-sm font-medium text-primary-400">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-primary-400">
                {item.step}
              </p>
              <p className="mt-4 text-zinc-400">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
