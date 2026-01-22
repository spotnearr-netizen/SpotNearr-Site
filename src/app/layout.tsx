import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotnearr - Discover Local Shops & Services',
  description: 'Find nearby Shops and Services like cafes, shops, plumbers and more. Get real-time updates and exclusive offers.',
  metadataBase: new URL('https://www.spotnearr.in'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-200`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
