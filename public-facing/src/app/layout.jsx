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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abdullahmujahid.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Abdullah Mujahid',
    default: 'Abdullah Mujahid - Engineering Leader & AI Architect',
  },
  description:
    'Engineering Manager & Tech Lead with 8+ years building scalable systems across AI, fintech, and healthcare. 389+ research citations. Building teams that ship and systems that scale.',
  keywords: [
    'Abdullah Mujahid',
    'Engineering Manager',
    'Tech Lead',
    'AI Architect',
    'Full Stack Developer',
    'Python Developer',
    'React Developer',
    'Django',
    'LangChain',
    'Machine Learning',
    'Software Engineer',
    'Lahore',
    'Pakistan',
  ],
  authors: [{ name: 'Abdullah Mujahid', url: siteUrl }],
  creator: 'Abdullah Mujahid',
  publisher: 'Abdullah Mujahid',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Abdullah Mujahid',
    title: 'Abdullah Mujahid - Engineering Leader & AI Architect',
    description:
      'Engineering Manager & Tech Lead with 8+ years building scalable systems across AI, fintech, and healthcare. Building teams that ship and systems that scale.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Abdullah Mujahid - Engineering Leader & AI Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Mujahid - Engineering Leader & AI Architect',
    description:
      'Engineering Manager & Tech Lead with 8+ years building scalable systems across AI, fintech, and healthcare.',
    creator: '@abdulladgaf',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdullah Mujahid',
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  sameAs: [
    'https://github.com/abdullahmujahidali',
    'https://www.linkedin.com/in/abdullahmujahidali/',
    'https://twitter.com/abdulladgaf',
    'https://medium.com/@abdullahmujahidali',
  ],
  jobTitle: 'Engineering Leader & AI Architect',
  worksFor: {
    '@type': 'Organization',
    name: 'Astel Ventures',
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'COMSATS University',
  },
  knowsAbout: [
    'Software Engineering',
    'AI/ML',
    'Python',
    'React',
    'Django',
    'LangChain',
    'System Design',
    'Engineering Leadership',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
