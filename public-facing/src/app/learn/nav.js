import { phases, phaseSlug, phaseShortTitle } from './phases'
import { HomeIcon, FlagIcon, MapIcon, SparkIcon, BookIcon, HeartIcon } from './icons'

// The reference (non-phase) pages, in reading order. Used by the sidebar and
// the overview's "helpful extras" links.
export const refPages = [
  { href: '/learn/start-here', label: 'Before you start', icon: FlagIcon, blurb: 'How this works, what you need, and the two accounts to set up.' },
  { href: '/learn/fields', label: 'Kinds of work', icon: MapIcon, blurb: 'Web dev, QA, project management, and how AI is changing each.' },
  { href: '/learn/tools', label: 'AI tools for coding', icon: SparkIcon, blurb: 'ChatGPT, Claude, Gemini and friends — and which to start with.' },
  { href: '/learn/glossary', label: 'Word bank', icon: BookIcon, blurb: 'Quick plain-English meanings for the jargon.' },
  { href: '/learn/advice', label: 'Habits & honest advice', icon: HeartIcon, blurb: 'What to keep up, and a few honest things to remember.' },
]

export const overviewItem = { href: '/learn', label: 'Overview', icon: HomeIcon }

// Phase links for the sidebar.
export const phaseLinks = phases.map((p) => ({
  href: `/learn/${phaseSlug(p.n)}`,
  num: p.n.replace('Phase ', ''),
  label: phaseShortTitle(p),
}))
