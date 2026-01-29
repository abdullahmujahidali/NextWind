'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

import logoAstelVentures from '@/images/logos/astelventures-1.png'
import logoSparignite from '@/images/logos/regnxt.png'
import logoVadaInnovation from '@/images/logos/vadainnovation.svg'
import logoCrocuszone from '@/images/logos/download.png'
import logoCarteBlanche from '@/images/logos/carteblanche.svg'
import logoGlobalgroupone from '@/images/logos/globalGroupOne.svg'
import logoDeswot from '@/images/logos/cosmos.svg'

const journey = [
  {
    year: '2025',
    role: 'Senior Software Engineer',
    company: 'Astel Ventures',
    logo: logoAstelVentures,
    highlight: 'AI-powered investment intelligence',
    impact: 'Architecting multi-LLM platform processing millions of data points',
    current: true,
  },
  {
    year: '2024',
    role: 'Engineering Manager',
    company: 'Sparignite',
    logo: logoSparignite,
    highlight: 'Led RegNxt from 0 → production',
    impact: 'Built team of 6, serving 50+ financial institutions',
    current: true,
  },
  {
    year: '2024',
    role: 'Technical Lead',
    company: 'Vada Innovation',
    logo: logoVadaInnovation,
    highlight: 'Voice AI & real-time systems',
    impact: '92%+ speaker diarization accuracy, HIPAA compliant',
  },
  {
    year: '2023',
    role: 'Engineering Manager',
    company: 'Crocus Zone',
    logo: logoCrocuszone,
    highlight: 'Team scaling & process optimization',
    impact: '45% performance improvement across platforms',
  },
  {
    year: '2021',
    role: 'Senior Software Engineer',
    company: 'Carte Blanche',
    logo: logoCarteBlanche,
    highlight: 'Healthcare & compliance systems',
    impact: 'HIPAA-compliant platforms, 10K+ daily medical records',
  },
  {
    year: '2019',
    role: 'Software Engineer',
    company: 'Global Group One',
    logo: logoGlobalgroupone,
    highlight: 'Enterprise solutions',
    impact: 'Core platform features serving 40+ dealerships',
  },
  {
    year: '2017',
    role: 'Full Stack Engineer',
    company: 'deSwot',
    logo: logoDeswot,
    highlight: 'Where it all started',
    impact: 'Built foundation across the full stack',
  },
]

export function Timeline() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12">
          <span className="font-mono text-sm font-medium uppercase tracking-wider text-primary dark:text-primary-400">
            Career Journey
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            8 years, 7 companies, 1 mission
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Building systems that matter and teams that ship.
          </p>
        </ScrollReveal>

        {/* Journey Grid */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-[23px] top-0 w-px bg-gradient-to-b from-primary via-zinc-300 to-zinc-200 dark:via-zinc-700 dark:to-zinc-800 md:left-[100px]" />

          <div className="space-y-2">
            {journey.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.year}`}
                className="group relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="flex items-stretch gap-4 md:gap-8">
                  {/* Year */}
                  <div className="flex w-12 flex-shrink-0 items-center justify-end md:w-20">
                    <span className={`font-mono text-sm ${item.current ? 'font-bold text-primary' : 'text-zinc-500'}`}>
                      {item.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="relative flex items-center">
                    <div className={`h-3 w-3 rounded-full ${item.current ? 'bg-primary' : 'bg-zinc-300 dark:bg-zinc-700'} z-10`} />
                    {item.current && (
                      <div className="absolute h-3 w-3 animate-ping rounded-full bg-primary" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 rounded-xl border p-4 transition-all md:p-5 ${
                    item.current
                      ? 'border-primary/30 bg-primary/5'
                      : 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50'
                  }`}>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
                          <Image
                            src={item.logo}
                            alt={item.company}
                            className="h-6 w-6 object-contain"
                            unoptimized
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-zinc-900 dark:text-white">{item.role}</h3>
                            {item.current && (
                              <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                                Now
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-zinc-500">{item.company}</p>
                        </div>
                      </div>
                      <div className="sm:text-right">
                        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.highlight}</p>
                        <p className="text-xs text-zinc-500">{item.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <ScrollReveal className="mt-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Years', value: '8+' },
              { label: 'Companies', value: '7' },
              { label: 'Work Style', value: 'Hybrid' },
              { label: 'Products Shipped', value: '15+' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900/30">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
