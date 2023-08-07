import './globals.css'
import { Manrope } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Analytics from './analytics'
import { defaultMetadata } from './metadata'

const manrope = Manrope({
    subsets: ['latin'],
})

export const metadata = defaultMetadata

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            </head>

            <body className={`${manrope.className}`}>
                <a href="#main" className="sr-only" aria-label="skip">
                    skip to main content
                </a>

                <header id="header">
                    <Nav />
                </header>

                <main id="main">{children}</main>
                <footer id="footer">
                    <Footer />
                </footer>
            </body>
            <Analytics />
        </html>
    )
}
