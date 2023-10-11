'use client'

import { createContext, useState } from 'react'

export const CreateImageCategoryContext = createContext()

export function CreateImageCategoryProvider({ children }) {
  const [image, setImage] = useState({})
  const [showCreateImage, setShowCreateImage] = useState(true)

  function handleChangeImage(image) {
    setImage(image)
  }

  function handleShowCreateImage() {
    setShowCreateImage(!showCreateImage)
  }

  return (
    <CreateImageCategoryContext.Provider
      value={{
        image,
        handleChangeImage,
        showCreateImage,
        handleShowCreateImage,
      }}
    >
      {children}
    </CreateImageCategoryContext.Provider>
  )
}
