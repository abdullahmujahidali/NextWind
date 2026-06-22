import {
  Hero,
  ImpactStats,
  HowIWork,
  WhatIDo,
  FeaturedProjects,
  TechStack,
  // Timeline,
  Research,
  Certifications,
  LatestArticles,
  ContactCTA,
} from '@/components/home'
import { SectionDivider } from '@/components/ui/SectionHeader'
import { getAllArticles } from '@/lib/getAllArticles'

export default async function Home() {
  const articles = await getAllArticles()

  return (
    <div className="-mt-[var(--header-height,0px)]">
      {/* Hero Section - Full viewport */}
      <Hero />

      {/* Impact Stats */}
      <ImpactStats />

      <SectionDivider />

      {/* How I Work — Forward Deployed Engineering */}
      <HowIWork />

      <SectionDivider />

      {/* What I Do */}
      <WhatIDo />

      <SectionDivider />

      {/* Featured Projects */}
      <FeaturedProjects />

      <SectionDivider />

      {/* Tech Stack */}
      <TechStack />

      <SectionDivider />

      {/* Research & Publications */}
      <Research />

      <SectionDivider />

      {/* Certifications */}
      <Certifications />

      <SectionDivider />

      {/* Latest Articles */}
      <LatestArticles articles={articles} />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
