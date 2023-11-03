'use client'

// Providers imports
import { AuthProvider } from '@/Context/AuthContext'
import { CollectionsCatalogProvider } from '@/Context/CollectionsCatalogContext'
import { CollectionsCategoryProvider } from '@/Context/CollectionsCategoryContext'
import { CollectionsProvider } from '@/Context/CollectionsContext'
import { CreateImageCategoryProvider } from '@/Context/CreateImageCategoryContext'
import { CreateImageCollectionProvider } from '@/Context/CreateImageCollectionContext'
import { CreateImageNewsProvider } from '@/Context/CreateImageNewsContext'
import { NewsCategoryProvider } from '@/Context/NewsCategoryContext'
import { NewsProvider } from '@/Context/NewsContext'

// Component Declaration
export function Providers({ children }) {
  // Return Components Providers
  return (
    <AuthProvider>
      <CreateImageNewsProvider>
        <CreateImageCollectionProvider>
          <CreateImageCategoryProvider>
            <NewsProvider>
              <CollectionsProvider>
                <CollectionsCategoryProvider>
                  <NewsCategoryProvider>
                    <CollectionsCatalogProvider>
                      {children}
                    </CollectionsCatalogProvider>
                  </NewsCategoryProvider>
                </CollectionsCategoryProvider>
              </CollectionsProvider>
            </NewsProvider>
          </CreateImageCategoryProvider>
        </CreateImageCollectionProvider>
      </CreateImageNewsProvider>
    </AuthProvider>
  )
  //
}
