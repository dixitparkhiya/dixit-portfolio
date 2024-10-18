import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Caveat } from 'next/font/google'

import { config } from 'global-config'
import { Header } from './_components/header'
import { Footer } from './_components/footer'
import { Providers } from './providers'

import '~/styles/main.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap'
})

const dancingScript = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <body
        className={`scroll-smooth relative ${inter.variable} ${dancingScript.variable}`}
      >
        {/* Background images at the top and bottom */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-header-gradient bg-no-repeat bg-cover z-[-1]" />
        <Providers>
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-footer-gradient bg-no-repeat bg-cover z-[-1]" />
          {/* <div className="absolute bottom-0 left-0 w-full h-[500px] bg-header-gradient bg-no-repeat bg-cover z-[-1] rotate-180" /> */}
        </Providers>
        

        {/* SVG Noise Texture */}
        <svg
          id="texture"
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-99] opacity-20 translate-y-0 filter contrast-[120%] brightness-[120%] dark:brightness-[50%] dark:contrast-[30%]"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.95"
              numOctaves="10"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        
      </body>
    </html>
  )
}
