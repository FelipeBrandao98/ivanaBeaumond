'use client'

// Providers imports
import { AuthProvider } from '@/Context/AuthContext'
import { CollectionsCatalogProvider } from '@/Context/CollectionsCatalogContext'
import { CollectionsCategoryProvider } from '@/Context/CollectionsCategoryContext'
import { CollectionsProvider } from '@/Context/CollectionsContext'
import { CreateImageCatalogProvider } from '@/Context/CreateImageCatalogContext copy'
import { CreateImageCategoryProvider } from '@/Context/CreateImageCategoryContext'
import { CreateImageCollectionProvider } from '@/Context/CreateImageCollectionContext'
import { CreateImageCommentProvider } from '@/Context/CreateImageCommentContext'
import { CreateImageEventsProvider } from '@/Context/CreateImageEventsContext'
import { CreateImageNewsProvider } from '@/Context/CreateImageNewsContext'
import { EventsProvider } from '@/Context/EventsContext'
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
            <CreateImageCatalogProvider>
              <CreateImageCommentProvider>
                <EventsProvider>
                  <CreateImageEventsProvider>
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
                  </CreateImageEventsProvider>
                </EventsProvider>
              </CreateImageCommentProvider>
            </CreateImageCatalogProvider>
          </CreateImageCategoryProvider>
        </CreateImageCollectionProvider>
      </CreateImageNewsProvider>
    </AuthProvider>
  )
  //
}
