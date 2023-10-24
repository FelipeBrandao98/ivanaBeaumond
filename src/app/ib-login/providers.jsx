'use client'

import { AuthProvider } from '@/Context/AuthContext'
import { CollectionsCategoryProvider } from '@/Context/CollectionsCategoryContext'
import { CollectionsProvider } from '@/Context/CollectionsContext'
import { CreateImageCategoryProvider } from '@/Context/CreateImageCategoryContext'
import { CreateImageCollectionProvider } from '@/Context/CreateImageCollectionContext'
import { CreateImageNewsProvider } from '@/Context/CreateImageNewsContext'
import { NewsCategoryProvider } from '@/Context/NewsCategoryContext'
import { NewsProvider } from '@/Context/NewsContext'

export function Providers({ children }) {
  return (
    <AuthProvider>
      <CreateImageNewsProvider>
        <CreateImageCollectionProvider>
          <CreateImageCategoryProvider>
            <NewsProvider>
              <CollectionsProvider>
                <CollectionsCategoryProvider>
                  <NewsCategoryProvider>{children}</NewsCategoryProvider>
                </CollectionsCategoryProvider>
              </CollectionsProvider>
            </NewsProvider>
          </CreateImageCategoryProvider>
        </CreateImageCollectionProvider>
      </CreateImageNewsProvider>
    </AuthProvider>
  )
}
