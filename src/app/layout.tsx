import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import WeatherProvider from './WeatherProvider'
import TheFooter from '@/components/custom/TheFooter'
import TheHeader from '@/components/custom/TheHeader'
import Loading from './loading'
import { Lato } from 'next/font/google'
import '@/styles/global.sass'

const font_lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  style: 'normal'
})

export const metadata: Metadata = {
  title: 'Weather | Template',
  description: 'Weather Template using NexJS 14'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font_lato.className}>
        <WeatherProvider>
          <TheHeader />
          <main className="container">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <TheFooter />
        </WeatherProvider>
      </body>
    </html>
  )
}
