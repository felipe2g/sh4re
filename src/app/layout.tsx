import { NavigationBar } from '@/components/NavigationBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from "@/context/store"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sh4re - Share your code annonymously',
  description: 'Share your code annonymously, encrypted or not',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <NavigationBar.Root />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
