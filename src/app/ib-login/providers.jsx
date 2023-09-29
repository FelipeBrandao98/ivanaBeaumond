'use client'

import { AuthProvider } from '@/Context/AuthContext'
import { CreateImageNewsProvider } from '@/Context/CreateImageNewsContext'

export function Providers({ children }) {
  return (
    <AuthProvider>
      <CreateImageNewsProvider>{children}</CreateImageNewsProvider>
    </AuthProvider>
  )
}
