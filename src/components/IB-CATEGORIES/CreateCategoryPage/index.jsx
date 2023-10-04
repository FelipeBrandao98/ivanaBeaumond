'use client'

import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

import { useContext } from 'react'

import CreateImgCat from './CreateImgCat'
import CreateCategory from './CreateCategory'

export default function CreateCategoryPage({ functions }) {
  const { createCategory, createImage } = functions

  const { image, showCreateImage } = useContext(CreateImageNewsContext)

  return (
    <>
      {showCreateImage === true ? (
        <CreateImgCat createImage={createImage} />
      ) : (
        <CreateCategory createNews={createCategory} />
      )}
    </>
  )
}
