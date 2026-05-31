import type { Metadata } from 'next'
import { Geist, Geist_Mono, Barlow_Condensed, Barlow, DM_Serif_Display, IBM_Plex_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: ["700", "800", "900"], variable: "--font-display" });
const _barlow = Barlow({ subsets: ["latin"], weight: ["600"], variable: "--font-barlow" });
const _dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], style: ["italic", "normal"], variable: "--font-serif" });
const _ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata: Metadata = {
  title: 'Pinnacle Roofing Co. | Expert Roofing & Waterproofing — NYC & NJ',
  description: 'Licensed & insured roofing contractor serving NYC and New Jersey since 2004. Roof installation, repair, waterproofing, gutters, and emergency services. 500+ projects completed.',
  generator: 'v0.app',
  openGraph: {
    title: 'Pinnacle Roofing Co. | Expert Roofing & Waterproofing',
    description: 'Premium roofing services across NYC & NJ. Family-owned since 2004. 20+ years of excellence.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_barlowCondensed.variable} ${_barlow.variable} ${_dmSerifDisplay.variable} ${_ibmPlexSans.variable} bg-background`}>
      <body className="font-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
