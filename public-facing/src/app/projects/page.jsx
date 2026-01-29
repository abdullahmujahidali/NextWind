'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

import logoArisbe from '@/images/logos/arisbe.png'
import logoHelioStream from '@/images/logos/chimera.svg'
import logoAnimaginary from '@/images/logos/defispot.svg'
import logoGladiatorFinance from '@/images/logos/gladiatorFinance.svg'
import logoOpenShuttle from '@/images/logos/hirecinch.svg'
import logoLKSY from '@/images/logos/lksy.png'
import logoCosmos from '@/images/logos/logo-swissblock.svg'
import logoPublicEditor from '@/images/logos/pe.png'
import logoRegnxt from '@/images/logos/regnxt.png'
import logoVetAi from '@/images/logos/vetai.svg'
import logoAira from '@/images/logos/astelventures-1.png'
import logoMitra from '@/images/logos/mitra-ai.svg'
import logoSiParadigm from '@/images/logos/siParadigm.svg'
import logoDeals4Autos from '@/images/logos/airbnb.svg'

const featuredProjects = [
  {
    name: 'AIRA',
    tagline: 'AI-powered investor intelligence',
    role: 'Lead Architect',
    outcome: 'Multi-LLM system processing millions of data points, 60% faster investor discovery',
    link: 'https://aira.astelventures.com',
    logo: logoAira,
    tech: ['Python', 'LangChain', 'Elasticsearch', 'RAG'],
  },
  {
    name: 'RegNxt',
    tagline: 'Regulatory reporting for European banks',
    role: 'Engineering Manager',
    outcome: 'Built team of 6, platform now serves 50+ financial institutions',
    link: 'https://www.regnxt.eu',
    logo: logoRegnxt,
    tech: ['React', 'Django', 'PostgreSQL', 'AWS'],
  },
  {
    name: 'Mitra AI',
    tagline: 'Real-time voice AI for therapy sessions',
    role: 'Technical Lead',
    outcome: '92%+ speaker diarization accuracy, HIPAA-compliant',
    link: '#',
    logo: logoMitra,
    tech: ['Python', 'LiveKit', 'GPT-4', 'WebSockets'],
  },
  {
    name: 'VeterinaryAI',
    tagline: 'AI diagnostics for veterinary practices',
    role: 'Tech Lead',
    outcome: '10K+ medical records analyzed daily with 87% accuracy',
    link: 'https://app.staging.veterinaryai.com/',
    logo: logoVetAi,
    tech: ['LangGraph', 'Pinecone', 'FastAPI', 'React'],
  },
]

const otherProjects = [
  {
    name: 'SI Paradigm',
    description: 'HIPAA-compliant lab management platform, 30% faster processing',
    logo: logoSiParadigm,
    link: '#',
  },
  {
    name: 'Public Editor',
    description: 'Claude AI integration for news content review, 75% less manual work',
    logo: logoPublicEditor,
    link: '#',
  },
  {
    name: 'Hirecinch',
    description: 'ATS platform with resume parsing, 20+ hrs/week saved for recruiters',
    logo: logoOpenShuttle,
    link: 'https://hirecinch.com/',
  },
  {
    name: 'Deals 4 Autos',
    description: 'Car dealership platform processing $2M+/month',
    logo: logoDeals4Autos,
    link: '#',
  },
  {
    name: 'LKSY',
    description: 'Educational platform for 1,500+ students learning Scratch',
    logo: logoLKSY,
    link: 'https://www.jilaee.org/',
  },
  {
    name: 'Gladiator Finance',
    description: 'NFT marketplace with algorithmic stablecoin',
    logo: logoGladiatorFinance,
    link: 'https://gladiatorfinance.app/',
  },
  {
    name: 'Defispot',
    description: 'Multi-chain DEX for swapping and liquidity management',
    logo: logoAnimaginary,
    link: 'https://www.defispot.com/',
  },
  {
    name: 'Swissblock',
    description: 'Centralized exchange with paper trading',
    logo: logoCosmos,
    link: 'https://swissblock.net/',
  },
  {
    name: 'Arisbe',
    description: 'E-learning platform with Zoom integration',
    logo: logoArisbe,
    link: 'https://arisbe.org/',
  },
  {
    name: 'Chimera',
    description: 'NFT-based game with resource gathering mechanics',
    logo: logoHelioStream,
    link: 'https://chimeras.io/',
  },
]

function FeaturedCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-primary/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <Image src={project.logo} alt="" className="h-6 w-6 object-contain" unoptimized />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 group-hover:text-primary dark:text-zinc-100 dark:group-hover:text-primary-400">
              {project.name}
            </h3>
            <p className="text-sm text-zinc-500">{project.role}</p>
          </div>
        </div>
        <svg className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-primary dark:group-hover:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>

      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{project.tagline}</p>

      <div className="mt-4 rounded-lg bg-zinc-50 px-4 py-3 dark:bg-zinc-800/50">
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{project.outcome}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs text-zinc-500">{t}</span>
        ))}
      </div>
    </motion.a>
  )
}

function SmallCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
        <Image src={project.logo} alt="" className="h-6 w-6 object-contain" unoptimized />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-zinc-900 group-hover:text-primary dark:text-zinc-100 dark:group-hover:text-primary-400">
          {project.name}
        </h3>
        <p className="truncate text-sm text-zinc-500">{project.description}</p>
      </div>
      <svg className="h-4 w-4 flex-shrink-0 text-zinc-400 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header - Simple */}
        <ScrollReveal>
          <h1 className="font-display text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            14 projects shipped over 8 years. AI platforms, healthcare systems, fintech tools, and more. Here are the highlights.
          </p>
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal className="mt-8">
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="text-zinc-500">
              <strong className="text-zinc-900 dark:text-zinc-100">100K+</strong> users served
            </span>
            <span className="text-zinc-500">
              <strong className="text-zinc-900 dark:text-zinc-100">$2M+</strong> processed monthly
            </span>
            <span className="text-zinc-500">
              <strong className="text-zinc-900 dark:text-zinc-100">50+</strong> institutions
            </span>
          </div>
        </ScrollReveal>

        {/* Featured Projects */}
        <div className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            Featured
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <FeaturedCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mt-16">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            More projects
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {otherProjects.map((project, index) => (
              <SmallCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="mt-16 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            Interested in working together?{' '}
            <a
              href="https://cal.com/abdullahmujahidali"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline dark:text-primary-400"
            >
              Let&apos;s talk
            </a>
          </p>
        </ScrollReveal>

      </div>
    </div>
  )
}
