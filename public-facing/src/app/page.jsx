import {
  Hero,
  ImpactStats,
  WhatIDo,
  FeaturedProjects,
  TechStack,
  Timeline,
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

      {/* What I Do */}
      <WhatIDo />

      <SectionDivider />

      {/* Featured Projects */}
      <FeaturedProjects />

      <SectionDivider />

      {/* Tech Stack */}
      <TechStack />

      <SectionDivider />

      {/* Career Timeline */}
      <Timeline />

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
