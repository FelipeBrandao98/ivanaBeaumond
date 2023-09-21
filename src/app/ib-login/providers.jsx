'use client'

import { AuthProvider } from '@/Context/AuthContext'

export function Providers({ children }) {
  return <AuthProvider>{children}</AuthProvider>
}
