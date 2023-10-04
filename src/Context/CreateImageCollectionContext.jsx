'use client'

import { createContext, useState } from 'react'

export const CreateImageCollectionContext = createContext()

export function CreateImageCollectionProvider({ children }) {
  const [image, setImage] = useState({})
  const [showCreateImage, setShowCreateImage] = useState(true)

  function handleChangeImage(image) {
    setImage(image)
  }

  function handleShowCreateImage() {
    setShowCreateImage(!showCreateImage)
  }

  return (
    <CreateImageCollectionContext.Provider
      value={{
        image,
        handleChangeImage,
        showCreateImage,
        handleShowCreateImage,
      }}
    >
      {children}
    </CreateImageCollectionContext.Provider>
  )
}
