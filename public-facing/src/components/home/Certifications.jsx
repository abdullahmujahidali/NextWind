'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

import logoClickUp from '@/images/logos/clickup.png'
import logoGoogleCloud from '@/images/logos/googlecloud.png'
import logoSigma from '@/images/logos/sigma.png'
import logoHackerRank from '@/images/logos/hacker.png'

const certifications = [
  {
    name: 'ClickUp Expert Certificate',
    issuer: 'ClickUp University',
    date: '2025',
    logo: logoClickUp,
    color: 'from-pink-500 to-rose-500',
    link: 'https://verify.skilljar.com/c/fp5pzrxt93ui',
  },
  {
    name: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud',
    date: '2024',
    logo: logoGoogleCloud,
    color: 'from-blue-500 to-cyan-500',
    link: 'https://www.credly.com/badges/43aa7d34-a493-4b39-a7e8-6125ec12c9a1',
  },
  {
    name: 'Lean Six Sigma White Belt',
    issuer: 'Six Sigma Council',
    date: '2023',
    logo: logoSigma,
    color: 'from-green-500 to-emerald-500',
    link: 'https://www.credly.com/badges/de779bc9-9286-4d54-a90a-9aa98ef9cfc7',
  },
  {
    name: 'Python & Problem Solving',
    issuer: 'HackerRank',
    date: '2023',
    logo: logoHackerRank,
    color: 'from-emerald-500 to-green-600',
    link: 'https://www.hackerrank.com/certificates/117ba4a298d2',
  },
]

function CertificationCard({ cert }) {
  const CardWrapper = cert.link ? 'a' : 'div'
  const linkProps = cert.link ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-primary/30"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <CardWrapper {...linkProps} className="block">
        {/* Gradient accent */}
        <div
          className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${cert.color}`}
        />

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 shadow-md ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-zinc-700">
            <Image
              src={cert.logo}
              alt={cert.issuer}
              className="h-8 w-8 object-contain"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {cert.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {cert.issuer}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <p className="font-mono text-xs text-zinc-500">
                Issued {cert.date}
              </p>
              {cert.link && (
                <span className="text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Verify →
                </span>
              )}
            </div>
          </div>
        </div>
      </CardWrapper>

      {/* Hover effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-primary-end/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  )
}

export function Certifications() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certifications"
          title="Professional Credentials"
          description="Continuous learning and industry-recognized certifications."
        />

        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.1}
        >
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <CertificationCard cert={cert} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
