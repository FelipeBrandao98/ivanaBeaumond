'use client'

import { CreateImageCollectionContext } from '@/Context/CreateImageCollectionContext'

import { useContext, useEffect, useState } from 'react'

import CreateCollection from '@/components/IB-COLLECTIONS/CreateCollectionsPage/CreateCollection'
import CreateImageCollections from '@/components/IB-COLLECTIONS/CreateCollectionsPage/CreateImageCollections'

export default function CreateCollectionsPage({ functions }) {
  const [categories, setCategories] = useState([])

  const { createCollection, getCategories, createImage } = functions

  const { image, showCreateImage } = useContext(CreateImageCollectionContext)

  async function getCat() {
    const res = await getCategories()
    setCategories(res)
  }

  useEffect(() => {
    getCat()
  }, [])

  return (
    <>
      {showCreateImage === true ? (
        <CreateImageCollections createImage={createImage} />
      ) : (
        <CreateCollection
          categories={categories}
          createCollection={createCollection}
        />
      )}
    </>
  )
}
