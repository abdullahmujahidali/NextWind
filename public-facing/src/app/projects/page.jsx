import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
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

const projects = [
  {
    name: 'AIRA - Investor Intelligence Platform',
    description:
      'Architected an AI-powered investor intelligence platform from MVP to production. Features multi-LLM architecture with per-tenant configuration for intelligent deal analysis, pitch deck extraction, and personalized outreach. Built advanced Elasticsearch-powered investor search reducing discovery time by 60%.',
    link: {
      href: 'https://aira.astelventures.com',
      label: 'aira.astelventures.com',
    },
    logo: logoAira,
  },
  {
    name: 'Mitra AI - Voice Relationship Mentor',
    description:
      'Built real-time voice AI agents using Python and LiveKit, integrating GPT-4, Speechmatics/Deepgram STT, and ElevenLabs TTS. Implemented speaker diarization with 92%+ accuracy for couples sessions, with HIPAA-compliant AES-256-GCM encryption for all transcripts.',
    link: {
      href: '#',
      label: 'mitra.ai',
    },
    logo: logoMitra,
  },
  {
    name: 'Veterinary AI',
    description:
      'Led technical vision for a veterinary SaaS platform reducing diagnostic time by 40% for 50+ practices. Developed custom LLM solutions analyzing 10,000+ medical records daily with 87% accuracy. Integrated LangGraph for AI workflows and Pinecone for vector storage.',
    link: {
      href: 'https://app.staging.veterinaryai.com/',
      blank: true,
      label: 'veterinaryai.com',
    },
    logo: logoVetAi,
  },
  {
    name: 'RegNxt - Regulatory Reporting',
    description:
      'As Engineering Manager at Sparignite, I designed and built this regulatory reporting platform from the ground up. Led UI/UX design, architected the backend, managed DevOps, and lead a team of 6 engineers. Platform reduced compliance reporting time by 40% for financial institutions and passed all regulatory audits.',
    link: { href: 'https://www.regnxt.eu', label: 'regnxt.eu' },
    logo: logoRegnxt,
  },
  {
    name: 'SI Paradigm - Medical Lab Platform',
    description:
      'Led 7 developers delivering a HIPAA-compliant laboratory management platform reducing lab processing time by 30%. Integrated with 5 third-party laboratory systems. Redis caching improved response times by 45% during peak hours. Achieved 100% client retention.',
    link: { href: '#', label: 'siparadigm.com' },
    logo: logoSiParadigm,
  },
  {
    name: 'Public Editor',
    description:
      'Architected secure MFA authentication improving account security by 65%. Integrated Anthropic Claude 3.5 reducing manual content review by 75%. Built NLP solutions processing 10,000+ news articles daily with 92% accuracy. Amazon SES achieved 99.8% email delivery.',
    link: { href: '#', label: 'publiceditor.io' },
    logo: logoPublicEditor,
  },
  {
    name: 'Hirecinch - ATS Platform',
    description:
      'Led product strategy and team of 4 developers through major refactoring. Resume Parser microservice automated candidate extraction with 85% accuracy, saving recruiters 20+ hours weekly. Custom career pages improved application completion by 45%. Stripe integration increased revenue collection by 30%.',
    link: { href: 'https://hirecinch.com/', label: 'hirecinch.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Deals 4 Autos - Car BDC Platform',
    description:
      'Led transformation from PHP to React/Django architecture increasing dealership efficiency by 35%. Managed 5 developers while serving 40+ active dealerships. Payment system processing $2M+ monthly with 99.8% reliability. AWS migration improved uptime from 94% to 99.5%.',
    link: { href: '#', label: 'deals4autos.com' },
    logo: logoDeals4Autos,
  },
  {
    name: 'LKSY - Educational Platform',
    description:
      'Built interactive learning platform enabling 1,500+ students to complete Scratch coding exercises. AWS S3 handled 20,000+ monthly submissions with 99.9% availability. Whisker framework on Lambda provided immediate feedback, improving learning outcomes by 30%.',
    link: { href: 'https://www.jilaee.org/', label: 'jilaee.org' },
    logo: logoLKSY,
  },
  {
    name: 'Gladiator Finance',
    description:
      'An NFT marketplace with algorithmic stablecoin integrated with an NFT risk protocol. Developed essential backend APIs and implemented frontend wallet integrations to facilitate smart contract function calls from the backend.',
    link: {
      href: 'https://gladiatorfinance.app/',
      label: 'gladiatorfinance.app',
    },
    logo: logoGladiatorFinance,
  },
  {
    name: 'Defispot',
    description:
      'A multi-chain decentralized exchange for swapping, lending and liquidity management without KYC. Developed backend wallet APIs using exchange.js powering a versatile multi-chain wallet for Ethereum, Bitcoin, and other cryptocurrencies.',
    link: { href: 'https://www.defispot.com/', label: 'defispot.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'Swissblock Exchange',
    description:
      'A unique centralized exchange with innovative features like paper trading. Gasless nature with comprehensive trading options including Future, Spot, and Margin trading.',
    link: { href: 'https://swissblock.net/', label: 'swissblock.net' },
    logo: logoCosmos,
  },
  {
    name: 'Arisbe - E-Learning',
    description:
      'E-learning platform with Django and React.js hosted on AWS. Features virtual classes with Zoom integration, quiz creation tools, and assessment capabilities.',
    link: {
      href: 'https://arisbe.org/',
      label: 'arisbe.org',
    },
    logo: logoArisbe,
  },
  {
    name: 'Chimera - NFT Game',
    description:
      'An NFT-based game set in a mystical land of floating islands and magical creatures. Resource gathering, artefact creation, and trading mechanics.',
    link: { href: 'https://chimeras.io/', label: 'chimeras.io' },
    logo: logoHelioStream,
  },
]
function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Systems I\'ve built that serve thousands of users and solve real problems.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Systems I've built that actually ship and scale."
      intro="From AI-powered platforms analyzing thousands of medical records to investment tools connecting startups with investors&mdash;these are the projects where I've led teams, architected solutions, and delivered measurable business impact. Each one taught me something new about building software that matters."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
