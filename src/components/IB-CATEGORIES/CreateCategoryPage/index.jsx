'use client'

import { useContext } from 'react'

import CreateImgCat from './CreateImgCat'
import CreateCategory from './CreateCategory'
import { CreateImageCategoryContext } from '@/Context/CreateImageCategoryContext'

export default function CreateCategoryPage({ functions }) {
  const { createCategory, editCategory, createImage } = functions

  const { image, showCreateImage } = useContext(CreateImageCategoryContext)

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
}
