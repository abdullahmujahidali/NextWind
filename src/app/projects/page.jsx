import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/defispot.svg'
import logoCosmos from '@/images/logos/logo-swissblock.svg'
import logoHelioStream from '@/images/logos/chimera.svg'
import logoOpenShuttle from '@/images/logos/hirecinch.svg'
import logoGladiatorFinance from '@/images/logos/gladiatorFinance.svg'
import logoQuickers from '@/images/logos/quickers.png'
import logoArisbe from '@/images/logos/arisbe.png'
import logoJupiter from '@/images/logos/jupiter.svg'

const projects = [
  {
    name: 'Gladiator Finance',
    description:
      'Gladiator Finance provides an algorithmic stablecoin integrated with an NFT risk protocol. Our mechanics are completely unique, however, our team was inspired by other great projects created and run by amazing teams, such as Tomb Finance and Wolf Game.',
    link: {
      href: 'https://gladiatorfinance.app/',
      label: 'gladiatorfinance.app',
    },
    logo: logoGladiatorFinance,
  },
  {
    name: 'Defispot',
    description:
      'DefiSpot is a multichain decentralized exchange (DEX) that aims to make it possible for users to swap, lend and add/remove liquidity to cryptocurrencies without needing a centralized third party or requiring users to provide Know-Your-Customer (KYC) details.',
    link: { href: 'https://www.defispot.com/', label: 'defispot.com' },
    logo: logoAnimaginary,
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
  {
    name: 'Arisbe',
    description:
      'Virtual meeting and teaching network for research and evelopment',
    link: {
      href: 'https://arisbe.org/',
      label: 'arisbe.org',
    },
    logo: logoArisbe,
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
