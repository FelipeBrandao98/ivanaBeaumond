'use client'

// React imports
import { useCallback, useContext, useEffect, useState } from 'react'

// Context imports
import { CreateImageCollectionContext } from '@/Context/CreateImageCollectionContext'

// Components imports
import CreateCollection from '@/components/IB-COLLECTIONS/CreateCollectionsPage/CreateCollection'
import CreateImageCollections from '@/components/IB-COLLECTIONS/CreateCollectionsPage/CreateImageCollections'

// Component Declaration
export default function CreateCollectionsPage({ functions }) {
  // Instanciate and initialize Contexts functions
  const { image, showCreateImage } = useContext(CreateImageCollectionContext)

  // States declaratios
  const [categories, setCategories] = useState([])

  // Desestructured functions to call api
  const { createCollection, editCollection, getCategories, createImage } =
    functions

  // functions to handle with datas from api
  const getCat = useCallback(async () => {
    const res = await getCategories()
    setCategories(res)
  }, [getCategories])
  //

  // Use Effects
  useEffect(() => {
    getCat()
  }, [getCat])
  //

  // Return components, with functions to call API and language
  return (
    <>
      {showCreateImage === true ? (
        <CreateImageCollections functions={{ createImage }} />
      ) : (
        <CreateCollection
          functions={{ createCollection, editCollection }}
          categories={categories}
        />
      )}
    </>
  )
  //
}
