'use client'

import { useState } from 'react'
import UrlField from './url-field/UrlField'

export function UrlFieldShowcase() {
  const [url, setUrl] = useState('')

  return (
    <section>
      <div className="mb-10">
        <div className="inline-block rounded-lg bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          Interactive Tool
        </div>
        <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">
          Smart URL Field
        </h2>
        <p className="mt-2 max-w-lg text-zinc-600 dark:text-zinc-400">
          Type any URL and watch it automatically detect the brand and display the favicon.
        </p>
      </div>

      <div className="relative rounded-2xl bg-gradient-to-b from-indigo-500 to-purple-600 p-[1px]">
        <div className="rounded-2xl bg-white dark:bg-zinc-900">
          {/* Header bar */}
          <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="text-sm font-medium text-zinc-400">
              Try it out
            </div>
            <div className="w-[52px]" /> {/* Spacer for centering */}
          </div>

          <div className="px-6 py-12 sm:px-12 sm:py-16">
            <div className="mx-auto max-w-md">
              <UrlField
                value={url}
                onChange={setUrl}
                placeholder="Enter any URL..."
              />
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}
