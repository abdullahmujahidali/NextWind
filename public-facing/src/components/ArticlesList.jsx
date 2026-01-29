'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { formatDate } from '@/lib/formatDate'

function estimateReadingTime(description) {
  const wordsPerMinute = 200
  const words = description?.split(' ').length || 0
  const estimatedWords = words * 10
  const minutes = Math.ceil(estimatedWords / wordsPerMinute)
  return Math.max(3, minutes) // Minimum 3 min read
}

function ArticleCard({ article, index }) {
  const readTime = estimateReadingTime(article.description)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/articles/${article.slug}`}
        className="group block rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-primary/30"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Date and reading time */}
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <time dateTime={article.date}>
                {formatDate(article.date)}
              </time>
              <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span>{readTime} min read</span>
            </div>

            {/* Title */}
            <h2 className="mt-3 font-display text-xl font-semibold text-zinc-900 group-hover:text-primary dark:text-zinc-100 dark:group-hover:text-primary-400">
              {article.title}
            </h2>

            {/* Description */}
            <p className="mt-2 line-clamp-2 text-zinc-600 dark:text-zinc-400">
              {article.description}
            </p>

            {/* Read more link */}
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary dark:text-primary-400">
              Read article
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 transition-all group-hover:bg-primary/10 group-hover:text-primary dark:bg-zinc-800 dark:group-hover:bg-primary/20 dark:group-hover:text-primary-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export function ArticlesList({ articles }) {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <h1 className="font-display text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Articles
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Thoughts on software engineering, AI, and building products that matter.
            I write about what I learn and what I think others might find useful.
          </p>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal className="mt-6">
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <span>
              <strong className="text-zinc-900 dark:text-zinc-100">{articles.length}</strong> articles
            </span>
            <span>
              <strong className="text-zinc-900 dark:text-zinc-100">Python</strong>, <strong className="text-zinc-900 dark:text-zinc-100">Django</strong>, <strong className="text-zinc-900 dark:text-zinc-100">JavaScript</strong>
            </span>
          </div>
        </ScrollReveal>

        {/* Articles List */}
        <div className="mt-12 space-y-4">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="mt-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            Want more? Follow me on{' '}
            <a
              href="https://medium.com/@abdullahmujahidali"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline dark:text-primary-400"
            >
              Medium
            </a>
          </p>
        </ScrollReveal>

      </div>
    </div>
  )
}
