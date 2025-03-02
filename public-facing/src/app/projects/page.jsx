import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoArisbe from '@/images/logos/arisbe.png'
import logoHelioStream from '@/images/logos/chimera.svg'
import logoAnimaginary from '@/images/logos/defispot.svg'
import logoGladiatorFinance from '@/images/logos/gladiatorFinance.svg'
import logoOpenShuttle from '@/images/logos/hirecinch.svg'
import logoJupiter from '@/images/logos/jupiter.svg'
import logoLKSY from '@/images/logos/lksy.png'
import logoCosmos from '@/images/logos/logo-swissblock.svg'
import logoPublicEditor from '@/images/logos/pe.png'
import logoQuickers from '@/images/logos/quickers.png'
import logoRegnxt from '@/images/logos/regnxt.png'
import logoVetAi from '@/images/logos/vetai.svg'

const projects = [
  {
    name: 'Veterinary AI',
    description:
      'A comprehensive SaaS platform for veterinary practices using microservices. Features include a doctor-facing admin portal for prompt engineering and AI interaction, alongside a public-facing interface for pet owners. Implements custom LLM solutions for analyzing medical records and uses LangGraph for orchestrating AI workflows.',
    link: {
      href: 'https://app.staging.veterinaryai.com/',
      blank: true,
      label: 'veterinaryai.com',
    },
    logo: logoVetAi,
  },
  {
    name: 'RegNxt',
    description:
      'A scalable regulatory reporting platform for financial institutions. Features data versioning with comprehensive audit trails and visualization tools for complex data relationships. Implemented clean architecture patterns and built a responsive UI with advanced filtering capabilities.',
    link: { href: 'https://www.regnxt.eu', label: 'regnxt.eu' },
    logo: logoRegnxt,
  },
  {
    name: 'Public Editor',
    description:
      'Developed and automated the Public Editor platform with robust authentication and payment integrations. Integrated Anthropic\'s Claude 3.5 for advanced automation, NLP solutions to analyze content, and tools for scraping articles.',
    link: { href: '#', label: 'publiceditor.io' },
    logo: logoPublicEditor,
  },
  {
    name: 'LKSY',
    description:
      'An educational platform for JILAEE that allows users to complete coding tasks using Scratch. Built with Django and hosted on Heroku, with tasks and submissions managed through AWS S3 and tested with the Whisker framework on AWS Lambda.',
    link: { href: 'https://www.jilaee.org/', label: 'jilaee.org' },
    logo: logoLKSY,
  },
  {
    name: 'Hirecinch',
    description:
      'An intuitive applicant tracking system with features for both recruiters and candidates. Led a major refactoring project for scalability, implemented a billing system with Stripe\'s API, integrated AI workflows, and created a custom career page generator.',
    link: { href: 'https://hirecinch.com/', label: 'hirecinch.com' },
    logo: logoOpenShuttle,
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
      'A multi-chain decentralized exchange that allows users to swap, lend and manage liquidity without KYC. Developed essential backend wallet APIs using exchange.js to power a versatile multi-chain wallet for Ethereum, Bitcoin, and other cryptocurrencies.',
    link: { href: 'https://www.defispot.com/', label: 'defispot.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'Arisbe',
    description:
      'An e-learning platform using Django and React.js, hosted on AWS. Features virtual classes with Zoom integration, quiz creation tools, and assessment capabilities. Designed the architecture and implemented custom front-end components.',
    link: {
      href: 'https://arisbe.org/',
      label: 'arisbe.org',
    },
    logo: logoArisbe,
  },
  {
    name: 'Chimera',
    description:
      'Chimeras is an exciting NFT-based game set in a mystical land of floating islands and magical creatures. Look for resources, create artefacts and trade. Bring prosperity to your land.',
    link: { href: 'https://chimeras.io/', label: 'chimeras.io' },
    logo: logoHelioStream,
  },
  {
    name: 'Swissblock',
    description:
      'Swissblock is a unique centralized exchange resembling platforms like FTX but with innovative features like paper trading. A standout feature of this exchange is its gasless nature, offering a range of trading options, including Future, Spot, and Margin trading.',
    link: { href: 'https://swissblock.net/', label: 'swissblock.net' },
    logo: logoCosmos,
  },
  {
    name: 'Hirecinch',
    description:
      'The most intuitive & affordable Applicant Tracking System!. All in one hiring software that enables you to attract quality applicants & evaluate them collaboratively so you can find the right fit for your team.',
    link: { href: 'https://hirecinch.com/', label: 'hirecinch.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Quickers',
    description:
      'Quickes is a e-commerce store for grocery in London, United Kingdom. It is a one stop shop for all your grocery needs. Offers a wide range of products from fresh fruits and vegetables to packaged goods.',
    link: { href: 'http://quickers.uk/', label: 'quickers.uk' },
    logo: logoQuickers,
  },
  {
    name: 'Jupiterscript',
    description:
      'A comprehensive solution for easily working with templates, scripts, and implementing them on routers.',
    link: {
      href: 'https://app.jupiterscript.com/',
      label: 'app.jupiterscript.com',
    },
    logo: logoJupiter,
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
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
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
