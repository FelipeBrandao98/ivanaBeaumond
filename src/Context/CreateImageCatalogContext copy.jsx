'use client'

// React imports
import { createContext, useState } from 'react'

// Create Context
export const CreateImageCatalogContext = createContext()

// Provider Declaration
export function CreateImageCatalogProvider({ children }) {
  // States declaratios
  const [image, setImage] = useState({})
  const [showCreateImage, setShowCreateImage] = useState(true)

  // Functions to manipulate states
  function handleChangeImage(image) {
    setImage(image)
  }

  function handleShowCreateImage() {
    setShowCreateImage(!showCreateImage)
  }
  //

  // Return Provider with functions and states
  return (
    <CreateImageCatalogContext.Provider
      value={{
        image,
        handleChangeImage,
        showCreateImage,
        handleShowCreateImage,
      }}
    >
      {children}
    </CreateImageCatalogContext.Provider>
  )
  //
}
