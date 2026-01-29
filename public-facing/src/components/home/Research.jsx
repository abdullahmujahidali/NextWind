'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const publication = {
  title: 'Real-Time Hand Gesture Recognition Based on Deep Learning YOLOv3 Model',
  journal: 'Applied Sciences (MDPI)',
  year: '2021',
  citations: 389,
  link: 'https://www.mdpi.com/2076-3417/11/9/4164',
  description: 'A lightweight YOLOv3 + DarkNet-53 model achieving 97.68% accuracy for real-time gesture recognition — enabling accessibility technology for people with disabilities to communicate effectively.',
  keywords: ['Computer Vision', 'YOLOv3', 'Deep Learning', 'CNN', 'Accessibility'],
}

export function Research() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Research & Publications"
          title="Academic Contributions"
          description="Peer-reviewed research contributing to the advancement of AI and healthcare technology."
        />

        <ScrollReveal>
          <motion.a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-primary/30 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-primary/30"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Gradient accent */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-primary-end" />

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              {/* Citation count */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="inline-flex flex-col items-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary-end/10 p-6">
                  <div className="font-display text-4xl font-bold text-primary dark:text-primary-400 md:text-5xl">
                    <AnimatedCounter value={publication.citations} suffix="+" />
                  </div>
                  <div className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Citations
                  </div>
                </div>
              </div>

              {/* Publication details */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-accent-success/10 px-3 py-1 text-xs font-medium text-accent-success">
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-accent-success" />
                    High Impact
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
                    Peer Reviewed
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-zinc-900 transition-colors group-hover:text-primary dark:text-zinc-100 dark:group-hover:text-primary-400 md:text-2xl">
                  {publication.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-primary dark:text-primary-400">
                  {publication.journal} • {publication.year}
                </p>

                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  {publication.description}
                </p>

                {publication.keywords && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {publication.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex items-center gap-4">
                  <span className="inline-flex items-center text-sm font-medium text-primary transition-transform group-hover:translate-x-1 dark:text-primary-400">
                    Read Paper
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                  <a
                    href="https://scholar.google.com/citations?user=maVlLj4AAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center text-sm font-medium text-zinc-500 transition-colors hover:text-primary dark:text-zinc-400"
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
                    </svg>
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-primary-end/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  )
}
