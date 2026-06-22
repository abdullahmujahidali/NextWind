import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MediumIcon,
} from '@/components/SocialIcons'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Articles', href: '/articles' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/abdullahmujahidali', icon: GitHubIcon },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullahmujahidali/', icon: LinkedInIcon },
    { name: 'Twitter', href: 'https://twitter.com/abdulladgaf', icon: TwitterIcon },
    { name: 'Medium', href: 'https://medium.com/@abdullahmujahidali', icon: MediumIcon },
  ],
}

export function Footer() {
  return (
    <footer className="mt-auto">
      {/* Accent line */}
      <div className="h-px bg-zinc-800" />

      <Container.Outer>
        <div className="py-12">
          <Container.Inner>
            <div className="flex flex-col items-center">
              {/* Resume */}
              <div className="mb-8">
                <a
                  href="/Abdullah-Mujahid-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-primary/50 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>

              {/* Navigation */}
              <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-medium text-zinc-600 transition hover:text-primary dark:text-zinc-400 dark:hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="mailto:abdullahmujahidali1@gmail.com"
                  className="font-medium text-zinc-600 transition hover:text-primary dark:text-zinc-400 dark:hover:text-primary-400"
                >
                  Contact
                </a>
              </nav>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${item.name}`}
                    className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-primary dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-primary-400"
                  >
                    <item.icon className="h-5 w-5 fill-current" />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="mt-8 text-center">
                <p className="text-sm text-zinc-500">
                  &copy; {new Date().getFullYear()} Abdullah Mujahid. All rights reserved.
                </p>
                
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
