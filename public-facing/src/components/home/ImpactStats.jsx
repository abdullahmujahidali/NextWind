'use client'

import { StatCard } from '@/components/ui/AnimatedCounter'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

const stats = [
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: 'K+', label: 'Users Served' },
  { value: 389, suffix: '+', label: 'Research Citations' },
  { value: 15, suffix: '+', label: 'Projects Shipped' },
]

export function ImpactStats() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <span className="font-mono text-sm font-medium uppercase tracking-wider text-primary dark:text-primary-400">
            Impact & Results
          </span>
        </ScrollReveal>

        <StaggerContainer
          className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4"
          staggerDelay={0.15}
        >
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary-end/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
