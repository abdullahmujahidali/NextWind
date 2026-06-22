'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

import logoClickUp from '@/images/logos/clickup.png'
import logoGoogleCloud from '@/images/logos/googlecloud.png'
import logoGoogle from '@/images/logos/google-g.svg'
import logoPython from '@/images/logos/python.svg'

const certifications = [
  {
    name: 'ClickUp Expert',
    issuer: 'ClickUp University',
    date: 'Jan 2025',
    logo: logoClickUp,
    link: 'https://verify.skilljar.com/c/fp5pzrxt93ui',
  },
  {
    name: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud',
    date: 'Dec 2024',
    logo: logoGoogleCloud,
    link: 'https://www.credly.com/badges/43aa7d34-a493-4b39-a7e8-6125ec12c9a1',
  },
  {
    name: 'Entry-Level Python Programmer (PCEP)',
    issuer: 'Python Institute',
    date: 'Sep 2024',
    logo: logoPython,
    link: 'https://www.linkedin.com/in/abdullahmujahidali/details/certifications/',
  },
  {
    name: 'Foundations of Project Management',
    issuer: 'Google',
    date: 'Aug 2023',
    logo: logoGoogle,
    link: 'https://www.credly.com/badges/QDAFEKP2UPLD',
  },
]

function CertificationCard({ cert }) {
  const CardWrapper = cert.link ? 'a' : 'div'
  const linkProps = cert.link ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <motion.div
      className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-colors hover:border-primary/40"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <CardWrapper {...linkProps} className="flex h-full flex-col p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-white p-2.5">
          <Image src={cert.logo} alt={cert.issuer} className="h-full w-full object-contain" unoptimized />
        </div>

        <h3 className="mt-4 font-display text-base font-semibold leading-snug text-zinc-100">
          {cert.name}
        </h3>
        <p className="mt-1 text-sm text-zinc-400">
          {cert.issuer}
        </p>

        <div className="mt-auto flex items-center gap-2 pt-4">
          <p className="font-mono text-xs text-zinc-500">
            {cert.date}
          </p>
          {cert.link && (
            <span className="text-xs text-primary-400 opacity-0 transition-opacity group-hover:opacity-100">
              Verify →
            </span>
          )}
        </div>
      </CardWrapper>
    </motion.div>
  )
}

export function Certifications() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Certifications"
        />

        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.1}
        >
          {certifications.map((cert) => (
            <StaggerItem key={cert.name} className="h-full">
              <CertificationCard cert={cert} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
