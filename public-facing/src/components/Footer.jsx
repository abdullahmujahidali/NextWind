import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MediumIcon,
} from '@/components/SocialIcons'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-primary dark:hover:text-primary-400"
    >
      {children}
    </Link>
  )
}

function SocialLink({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group rounded-full p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <Icon className="h-5 w-5 fill-zinc-500 transition-colors group-hover:fill-primary dark:fill-zinc-400 dark:group-hover:fill-primary-400" />
    </a>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      {/* Gradient accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <Container.Outer>
        <div className="pb-16 pt-10">
          <Container.Inner>
            <div className="flex flex-col items-center gap-8">
              {/* Navigation */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="mailto:abdullahmujahidali1@gmail.com">Contact</NavLink>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                <SocialLink
                  href="https://github.com/abdullahmujahidali"
                  icon={GitHubIcon}
                  label="Follow on GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/abdullahmujahidali/"
                  icon={LinkedInIcon}
                  label="Follow on LinkedIn"
                />
                <SocialLink
                  href="https://twitter.com/abdulladgaf"
                  icon={TwitterIcon}
                  label="Follow on Twitter"
                />
                <SocialLink
                  href="https://medium.com/@abdullahmujahidali"
                  icon={MediumIcon}
                  label="Follow on Medium"
                />
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  &copy; {new Date().getFullYear()} Abdullah Mujahid. All rights reserved.
                </p>
                <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-600">
                  Built with Next.js, Tailwind CSS, and Framer Motion
                </p>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
