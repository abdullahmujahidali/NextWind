'use client'

import { useCallback, useEffect, useState } from 'react'
import { phases, phaseSlug } from './phases'

const KEY = 'learn-progress-v1'

function read() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

function write(set) {
  try {
    localStorage.setItem(KEY, JSON.stringify([...set]))
  } catch {}
}

// Tracks which phase slugs the learner has marked done. localStorage-backed,
// synced across components (and tabs) via a custom event.
export function useProgress() {
  const [done, setDone] = useState(() => new Set())
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setDone(read())
    setReady(true)
    const sync = () => setDone(read())
    window.addEventListener('learn-progress', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('learn-progress', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const setPhaseDone = useCallback((slug, value) => {
    setDone((prev) => {
      const next = new Set(prev)
      if (value) next.add(slug)
      else next.delete(slug)
      write(next)
      // notify other mounted hooks in this tab
      window.dispatchEvent(new Event('learn-progress'))
      return next
    })
  }, [])

  const slugs = phases.map((p) => phaseSlug(p.n))
  const completedCount = slugs.filter((s) => done.has(s)).length
  // "Up next" = the first phase in order that isn't done yet.
  const nextSlug = slugs.find((s) => !done.has(s)) || slugs[slugs.length - 1]

  return {
    ready,
    done,
    isDone: (slug) => done.has(slug),
    setPhaseDone,
    completedCount,
    total: slugs.length,
    nextSlug,
    allDone: completedCount === slugs.length,
  }
}
