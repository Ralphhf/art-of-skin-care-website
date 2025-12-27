import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { BUSINESS_INFO, CONTACT } from '@/lib/constants'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://artofskincare.com'),
  title: {
    default: `${BUSINESS_INFO.name} | Premier Beauty Salon in Somerset, NJ`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: BUSINESS_INFO.description.slice(0, 155) + '...',
  keywords: [
    'beauty salon',
    'skin care',
    'facials',
    'haircuts',
    'manicures',
    'pedicures',
    'massage',
    'waxing',
    'makeup',
    'Somerset NJ',
    'New Brunswick',
    'spa',
    'esthetician',
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://artofskincare.com',
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} | Premier Beauty Salon in Somerset, NJ`,
    description: BUSINESS_INFO.tagline,
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: BUSINESS_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_INFO.name} | Premier Beauty Salon`,
    description: BUSINESS_INFO.tagline,
    images: ['/images/hero.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: 'https://artofskincare.com',
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address,
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.state,
      postalCode: CONTACT.zipCode,
      addressCountry: 'US',
    },
    image: '/images/hero.jpg',
    priceRange: '$$',
    servesCuisine: 'Beauty Services',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '150',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
