import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import { Header } from '../components/layout/header'
import { Footer } from '../components/layout/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TickerLens Research Platform',
  description: 'AI-Powered Equity Research Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} min-h-screen bg-gray-50 flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}