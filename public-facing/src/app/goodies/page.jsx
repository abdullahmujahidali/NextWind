import { Container } from '@/components/Container'
import { GoodiesHero } from '@/components/goodies/GoodiesHero'
import { UrlFieldShowcase } from '@/components/goodies/UrlFieldShowcase'

export const metadata = {
  title: 'Goodies',
  description:
    'Free tools and components. Grab them, use them, make something cool.',
}

export default function GoodiesPage() {
  return (
    <>
      <GoodiesHero />
      <Container className="mt-16 sm:mt-20">
        <UrlFieldShowcase />
      </Container>
    </>
  )
}
