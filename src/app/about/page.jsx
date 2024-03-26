import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/abdullah.JPG'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    "I'm Abdullah Mujahid. I reside in Lahore, Pakistan, where I engineer tomorrow's digital solutions.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I&apos;m Abdullah Mujahid. I reside in Lahore, Pakistan, where I
            engineer tomorrow&apos;s digital solutions.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              As a child, my love for technology was evident. I immersed myself
              in the world of computers, tinkering with code and exploring the
              endless possibilities of programming languages. With a keen
              interest in AI, I delved into research, culminating in the
              publication of a paper on Hand Gesture Recognition, showcasing my
              early passion and expertise.
              <a href="https://www.mdpi.com/2076-3417/11/9/4164">
                My Published Paper
              </a>
            </p>
            <p>
              Fast forward to my career as a Senior Full Stack Software
              Engineer, I find myself at the forefront of innovation. From
              spearheading comprehensive refactoring efforts to optimizing
              backend processes and enhancing frontend usability, each project
              is a testament to my dedication and proficiency in utilizing
              technologies like Django and React to drive impactful solutions.
            </p>
            <p>
              Whether it&apos;s developing essential backend APIs for NFT
              marketplaces or revamping existing systems for enhanced
              efficiency, my journey in software engineering is characterized by
              a relentless pursuit of excellence. With each line of code, I&apos;m
              committed to pushing the boundaries of what&apos;s possible, shaping
              the digital landscape one project at a time.
            </p>
            {/* <p>
              Today, I’m the founder of Planetaria, where we’re working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really <em>can</em> make
              it to orbit — from the comfort of their own backyards.
            </p> */}
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/abdulladgaf"
              icon={TwitterIcon}
            >
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/abdullahmujahidali/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/abdullahmujahidali"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/abdullah-mujahid-211849186/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:abdullahmujahidali1@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              abdullahmujahidali1@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
