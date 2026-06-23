'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LearnSidebar } from './LearnSidebar'
import { MenuIcon } from './icons'

// Client shell: slim top bar + persistent sidebar + content. Hides the
// portfolio chrome while mounted, and owns the mobile-drawer open state.
export function LearnShell({ children, wide = false }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.classList.add('learn-mode')
    return () => document.documentElement.classList.remove('learn-mode')
  }, [])

  // Always land at the top of the new page on navigation, so you never arrive
  // mid-page with the heading scrolled out of view.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="learn-root min-h-screen bg-white text-zinc-800">
      {/* Slim top bar */}
      <header className="learn-bar sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="flex h-14 items-center gap-3 px-4">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="-ml-1 flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
          <Link href="/learn" className="font-semibold tracking-tight text-zinc-900">
            Learn to code
          </Link>
          <Link
            href="/"
            className="ml-auto text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
          >
            ← Abdullah’s site
          </Link>
        </div>
      </header>

      <div className="flex">
        <LearnSidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div
            className={`mx-auto px-5 pb-24 pt-8 sm:pt-12 ${wide ? 'max-w-5xl' : 'max-w-2xl'}`}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Hide the portfolio chrome + slim the scrollbar while in learn mode */}
      <style jsx global>{`
        html.learn-mode header:not(.learn-bar),
        html.learn-mode footer {
          display: none !important;
        }
        html.learn-mode {
          scrollbar-width: thin;
          scrollbar-color: #cbd2dc transparent;
        }
        html.learn-mode ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        html.learn-mode ::-webkit-scrollbar-track {
          background: transparent;
        }
        html.learn-mode ::-webkit-scrollbar-thumb {
          background-color: #cbd2dc;
          border-radius: 9999px;
        }
        html.learn-mode ::-webkit-scrollbar-thumb:hover {
          background-color: #aab3c0;
        }
      `}</style>
    </div>
  )
}
