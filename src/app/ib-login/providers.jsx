'use client'

import { AuthProvider } from '@/Context/AuthContext'
import { CreateImageCollectionProvider } from '@/Context/CreateImageCollectionContext'
import { CreateImageNewsProvider } from '@/Context/CreateImageNewsContext'

export function Providers({ children }) {
  return (
    <AuthProvider>
      <CreateImageNewsProvider>
        <CreateImageCollectionProvider>
          {children}
        </CreateImageCollectionProvider>
      </CreateImageNewsProvider>
    </AuthProvider>
  )
}
