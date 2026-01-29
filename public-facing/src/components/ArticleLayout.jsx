'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { formatDate } from '@/lib/formatDate'
import portraitImage from '@/images/abdullah.JPG'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({ children, article, isRssFeed = false }) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  if (isRssFeed) {
    return children
  }

  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/articles"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-current transition-transform group-hover:-translate-x-1" />
            Back to articles
          </Link>

          <article>
            {/* Header */}
            <header className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
              {/* Date */}
              <time
                dateTime={article.date}
                className="text-sm text-zinc-500"
              >
                {formatDate(article.date)}
              </time>

              {/* Title */}
              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                {article.title}
              </h1>

              {/* Description */}
              {article.description && (
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                  {article.description}
                </p>
              )}

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={portraitImage}
                  alt={article.author}
                  className="h-10 w-10 rounded-full object-cover"
                  sizes="40px"
                />
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {article.author}
                  </p>
                  <p className="text-sm text-zinc-500">
                    Engineering Leader & AI Architect
                  </p>
                </div>
              </div>
            </header>

            {/* Content */}
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>

            {/* Footer */}
            <footer className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <Link
                  href="/articles"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  <ArrowLeftIcon className="h-4 w-4 stroke-current transition-transform group-hover:-translate-x-1" />
                  Back to all articles
                </Link>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-zinc-500">Share:</span>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                    aria-label="Share on Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </Container>
    </div>
  )
}
