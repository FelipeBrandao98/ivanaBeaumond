import './globals.css'
import { Inter } from 'next/font/google'

import Home from '../components/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ivana Beaumond',
  description: 'Seu site de noivas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Home />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
