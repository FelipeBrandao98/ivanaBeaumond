'use client'

import { AuthProvider } from '@/Context/AuthContext'
import { CreateImageCollectionProvider } from '@/Context/CreateImageCollectionContext'
import { CreateImageNewsProvider } from '@/Context/CreateImageNewsContext'
import { NewsProvider } from '@/Context/NewsContext'

export function Providers({ children }) {
  return (
    <AuthProvider>
      <CreateImageNewsProvider>
        <CreateImageCollectionProvider>
          <NewsProvider>{children}</NewsProvider>
        </CreateImageCollectionProvider>
      </CreateImageNewsProvider>
    </AuthProvider>
  )
}
