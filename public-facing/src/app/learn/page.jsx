import { Roadmap } from './Roadmap'

export const metadata = {
  title: 'Learn to Code — From Zero to Full-Stack & AI Developer',
  description:
    'A free, friendly, step-by-step roadmap that takes a complete beginner from zero to full-stack and AI developer — with a hand-picked video for every step. Everything on it is free.',
  openGraph: {
    title: 'Learn to Code — From Zero to Full-Stack & AI Developer',
    description:
      'A free, beginner-friendly path from knowing nothing to building real websites and AI. One project that grows, a video for every step, and an AI study helper to ask when you’re stuck.',
    type: 'article',
  },
}

export default function LearnPage() {
  return <Roadmap />
}
