import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'OpenOcean API Documentation',
  description: 'Multi-chain DEX aggregator API documentation. Integrate best-rate token swaps across 40+ chains with a single API.',
  generator: 'OpenOcean',
  keywords: ['DEX', 'aggregator', 'API', 'swap', 'DeFi', 'cross-chain', 'blockchain', 'cryptocurrency'],
  authors: [{ name: 'OpenOcean' }],
  icons: {
    icon: '/logo.avif',
  },
  openGraph: {
    title: 'OpenOcean API Documentation',
    description: 'Multi-chain DEX aggregator API documentation. Integrate best-rate token swaps across 40+ chains.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="font-sans antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
