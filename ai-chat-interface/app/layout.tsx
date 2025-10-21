import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'

import {
  Geist as V0_Font_Geist,
  Geist_Mono as V0_Font_Geist_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

// Initialize fonts
const _geist = V0_Font_Geist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const _geistMono = V0_Font_Geist_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'ComplianceIQ Chat',
  description: 'AI-powered chat interface with VoltAgent',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans antialiased`}>
          <NuqsAdapter>{children}</NuqsAdapter>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
