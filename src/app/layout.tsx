import React from 'react'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.scss'
import { StoreProvider } from '@/components'

const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'House test task 2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body className={`${ubuntu.variable}`}>{children}</body>
      </html>
    </StoreProvider>
  )
}
