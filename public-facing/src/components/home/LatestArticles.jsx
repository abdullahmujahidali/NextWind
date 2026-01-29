'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/Button'
import { formatDate } from '@/lib/formatDate'

function ArticleCard({ article }) {
  return (
    <motion.article
      className="group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-primary/30"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center gap-4">
        <time
          className="font-mono text-xs text-zinc-500 dark:text-zinc-500"
          dateTime={article.date}
        >
          {formatDate(article.date)}
        </time>
        <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <span className="text-xs text-zinc-500 dark:text-zinc-500">
          5 min read
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-zinc-900 transition-colors group-hover:text-primary dark:text-zinc-100 dark:group-hover:text-primary-400">
        {article.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
        {article.description}
      </p>

      <div className="mt-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
        Read article
        <svg
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>

      <Link href={`/articles/${article.slug}`} className="absolute inset-0">
        <span className="sr-only">Read {article.title}</span>
      </Link>
    </motion.article>
  )
}

export function LatestArticles({ articles = [] }) {
  if (articles.length === 0) return null

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Latest Articles"
          title="Thoughts & Insights"
          description="Technical deep-dives, lessons learned, and perspectives on software engineering."
        />

        <StaggerContainer
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {articles.slice(0, 3).map((article) => (
            <StaggerItem key={article.slug}>
              <ArticleCard article={article} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {articles.length > 3 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button href="/articles" variant="secondary">
              View All Articles
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
