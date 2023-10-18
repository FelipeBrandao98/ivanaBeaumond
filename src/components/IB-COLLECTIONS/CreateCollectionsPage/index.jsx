'use client'

import { CreateImageCollectionContext } from '@/Context/CreateImageCollectionContext'

import { useCallback, useContext, useEffect, useState } from 'react'

import CreateCollection from '@/components/IB-COLLECTIONS/CreateCollectionsPage/CreateCollection'
import CreateImageCollections from '@/components/IB-COLLECTIONS/CreateCollectionsPage/CreateImageCollections'

export default function CreateCollectionsPage({ functions }) {
  const [categories, setCategories] = useState([])

  const { createCollection, editCollection, getCategories, createImage } =
    functions

  const { image, showCreateImage } = useContext(CreateImageCollectionContext)

  const getCat = useCallback(async () => {
    const res = await getCategories()
    setCategories(res)
  }, [getCategories])

  useEffect(() => {
    getCat()
  }, [getCat])

  return (
    <>
      {showCreateImage === true ? (
        <CreateImageCollections createImage={createImage} />
      ) : (
        <CreateCollection
          categories={categories}
          createCollection={createCollection}
          editCollection={editCollection}
        />
      )}
    </>
  )
}
