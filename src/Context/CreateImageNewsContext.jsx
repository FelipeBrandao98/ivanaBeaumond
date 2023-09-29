'use client'

import { createContext, useState } from 'react'

export const CreateImageNewsContext = createContext()

export function CreateImageNewsProvider({ children }) {
  const [image, setImage] = useState({})
  const [showCreateImage, setShowCreateImage] = useState(true)

  function handleChangeImage(image) {
    setImage(image)
  }

  function handleShowCreateImage() {
    setShowCreateImage(!showCreateImage)
  }

  return (
    <CreateImageNewsContext.Provider
      value={{
        image,
        handleChangeImage,
        showCreateImage,
        handleShowCreateImage,
      }}
    >
      {children}
    </CreateImageNewsContext.Provider>
  )
}
