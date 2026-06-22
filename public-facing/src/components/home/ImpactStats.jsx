'use client'

import { StatCard } from '@/components/ui/AnimatedCounter'
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'
import {
  yearsOfExperience,
  RESEARCH_CITATIONS,
  PROJECTS_SHIPPED,
} from '@/lib/siteFacts'

const stats = [
  { value: yearsOfExperience, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: 'K+', label: 'Users Served' },
  { value: RESEARCH_CITATIONS, suffix: '+', label: 'Research Citations' },
  { value: PROJECTS_SHIPPED, suffix: '+', label: 'Projects Shipped' },
]

export function ImpactStats() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          staggerDelay={0.15}
        >
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative p-6 text-center">
                  <StatCard
                    value={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
