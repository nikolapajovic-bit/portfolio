import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'

// Self-hosted by Next.js, preloaded, non-render-blocking — replaces the old
// CSS @import to Google Fonts. Exposes itself as var(--font-inter).
const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

// NOTE: replace with your real deployed domain once you have one.
const SITE_URL = 'https://nikolas-portfolio.vercel.app'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Nikola Pajović | Software Engineer',
    template: '%s | Nikola Pajović',
  },
  description:
    'Portfolio of Nikola Pajović — Software Engineering student building full-stack web and mobile products with Next.js, Node.js, and React Native.',
  keywords: [
    'Nikola Pajović',
    'Software Engineer',
    'Full-stack developer',
    'Next.js developer',
    'React Native developer',
    'Portfolio',
  ],
  authors: [{ name: 'Nikola Pajović' }],
  creator: 'Nikola Pajović',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Nikola Pajović | Software Engineer',
    description:
      'Full-stack web and mobile projects — Next.js, Node.js, React Native, and more.',
    siteName: 'Nikola Pajović',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Nikola Pajović | Software Engineer',
    description:
      'Full-stack web and mobile projects — Next.js, Node.js, React Native, and more.',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nikola Pajović',
  url: SITE_URL,
  jobTitle: 'Software Engineer',
  email: 'mailto:nikpajovic@gmail.com',
  sameAs: [
    'https://github.com/nikolapajovic-bit',
    'https://www.linkedin.com/in/nikola-pajovic-818410191',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}