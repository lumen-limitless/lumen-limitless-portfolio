import { Metadata } from 'next'

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || ''
const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || ''
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || ''

export const defaultMetadata: Metadata = {
  title: {
    absolute: APP_NAME,
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  themeColor: '#f9f9f9',
  metadataBase: new URL(APP_URL),
  generator: 'Next.js',
  keywords: [
    'studio',
    'web development',
    'web design',
    'web developer',
    'UX design',
    'UI design',
    'web development company',
    'web design company',
    'web developer company',
    'UX design company',
    'UI design company',
    'web development agency',
    'software development',
    'software development company',
    'software development agency',
    'Next.js',
    'Next.js development',
    'Next.js development company',
    'react',
    'react development',
    'react js',
  ],

  openGraph: {
    type: 'website',
    url: APP_URL,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    locale: 'en_US',
  },

  twitter: {
    title: APP_NAME,
    site: APP_URL,
    creator: '@LumenLimitless',
    description: APP_DESCRIPTION,
    card: 'summary_large_image',
  },

  appleWebApp: {
    statusBarStyle: 'default',
    title: APP_NAME,
    capable: true,
  },

  robots: {
    index: true,
    follow: true,
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  manifest: null,
}
