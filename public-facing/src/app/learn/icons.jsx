// Simple inline brand / tool marks. Monochrome so they inherit currentColor
// unless a brand fill is given. Sized via className (default h-5 w-5).

export function GitHubIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

export function LinkedInIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function YouTubeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.53A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.12c1.88.53 9.38.53 9.38.53s7.5 0 9.38-.53a3 3 0 0 0 2.12-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  )
}

export function DownloadIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 15h12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ---- sidebar nav icons (stroke, inherit currentColor) ---- */

function Stroke({ children, className = 'h-[18px] w-[18px]' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  )
}

export const HomeIcon = (p) => (
  <Stroke {...p}><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v9h14v-9" /></Stroke>
)
export const FlagIcon = (p) => (
  <Stroke {...p}><path d="M5 21V4" /><path d="M5 4h11l-1.5 3L16 10H5" /></Stroke>
)
export const MapIcon = (p) => (
  <Stroke {...p}><path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2Z" /><path d="M9 4v14M15 6v14" /></Stroke>
)
export const SparkIcon = (p) => (
  <Stroke {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></Stroke>
)
export const BookIcon = (p) => (
  <Stroke {...p}><path d="M5 4h10a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z" /><path d="M5 17h12" /></Stroke>
)
export const HeartIcon = (p) => (
  <Stroke {...p}><path d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9Z" /></Stroke>
)
export const ChevronIcon = (p) => (
  <Stroke {...p}><path d="m9 6 6 6-6 6" /></Stroke>
)
export const MenuIcon = (p) => (
  <Stroke {...p}><path d="M4 6h16M4 12h16M4 18h16" /></Stroke>
)
export const CloseIcon = (p) => (
  <Stroke {...p}><path d="M6 6l12 12M18 6 6 18" /></Stroke>
)

// A small rounded badge with the tool's first letter — a lightweight stand-in
// for full brand logos, tinted per tool.
export function ToolMark({ letter, className = '', bg = 'bg-zinc-800' }) {
  return (
    <span
      className={`inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl text-sm font-bold text-white ${bg} ${className}`}
    >
      {letter}
    </span>
  )
}
