'use client'

import { AuthProvider } from '@/Context/AuthContext'
import { CollectionsProvider } from '@/Context/CollectionsContext'
import { CreateImageCollectionProvider } from '@/Context/CreateImageCollectionContext'
import { CreateImageNewsProvider } from '@/Context/CreateImageNewsContext'
import { NewsProvider } from '@/Context/NewsContext'

export function Providers({ children }) {
  return (
    <AuthProvider>
      <CreateImageNewsProvider>
        <CreateImageCollectionProvider>
          <NewsProvider>
            <CollectionsProvider>{children}</CollectionsProvider>
          </NewsProvider>
        </CreateImageCollectionProvider>
      </CreateImageNewsProvider>
    </AuthProvider>
  )
}
