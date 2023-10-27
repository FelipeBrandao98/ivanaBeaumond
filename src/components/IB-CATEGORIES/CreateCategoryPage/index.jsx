'use client'

// React imports
import { useContext } from 'react'

// Context imports
import { CreateImageCategoryContext } from '@/Context/CreateImageCategoryContext'

// Components imports
import CreateImgCat from './CreateImgCat'
import CreateCategory from './CreateCategory'

// Component Declaration
export default function CreateCategoryPage({ functions }) {
  // Instanciate and initialize Contexts functions
  const { image, showCreateImage } = useContext(CreateImageCategoryContext)

  // Desestructured functions to call api
  const { createCategory, editCategory, createImage } = functions

  // Return components, with functions to call API and language
  return (
    <>
      {showCreateImage === true ? (
        <CreateImgCat createImage={createImage} />
      ) : (
        <CreateCategory
          createCategory={createCategory}
          editCategory={editCategory}
        />
      )}
    </>
  )
  //
}
