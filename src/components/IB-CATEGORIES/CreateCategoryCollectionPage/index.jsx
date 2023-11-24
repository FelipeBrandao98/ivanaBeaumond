'use client'

// React imports
import { useContext } from 'react'

// Context imports
import { CreateImageCategoryContext } from '@/Context/CreateImageCategoryContext'

// Components imports
import CreateImgCategoryCollection from './CreateImgCategoryCollection'
import CreateCategoryCollection from './CreateCategoryCollection'

// Component Declaration
export default function CreateCategoryCollectionPage({ functions }) {
  // Instanciate and initialize Contexts functions
  const { showCreateImage } = useContext(CreateImageCategoryContext)

  // Return components, with functions to call API and language
  return (
    <>
      {showCreateImage === true ? (
        <CreateImgCategoryCollection />
      ) : (
        <CreateCategoryCollection />
      )}
    </>
  )
  //
}
