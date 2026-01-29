import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google'

import '@/styles/tailwind.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata = {
  title: {
    template: '%s - Abdullah Mujahid',
    default:
      'Abdullah Mujahid - Engineering Lead & Engineering Manager',
  },
  description:
    'Engineering Manager & Tech Lead with 8+ years building scalable systems across AI, fintech, and healthcare. 389+ research citations. Building teams that ship and systems that scale.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-background-light font-body dark:bg-background-dark" suppressHydrationWarning>
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
