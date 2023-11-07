'use client'

// React imports
import { useCallback, useContext, useEffect, useState } from 'react'

// Context imports
import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

// Components imports
import CreateImageNews from '@/components/IB-NEWS/CreateNewsPage/CreateImageNews'
import CreateNews from '@/components/IB-NEWS/CreateNewsPage/CreateNews'

// Component Declaration
export default function CreateNewsPage({ functions }) {
  // Instanciate and initialize Contexts functions
  const { image, showCreateImage } = useContext(CreateImageNewsContext)

  // States declaratios
  const [categories, setCategories] = useState([])

  // Desestructured functions to call api
  const { createNews, editNews, getCategories, createImage } = functions

  // functions to handle with datas from api
  const getCat = useCallback(async () => {
    const res = await getCategories()
    setCategories(res)
  }, [getCategories])
  //

  // Use Effects
  useEffect(() => {
    getCat()
  }, [getCat])
  //

  // Return components, with functions to call API and language
  return (
    <>
      {showCreateImage === true ? (
        <CreateImageNews functions={createImage} />
      ) : (
        <CreateNews
          functions={{ createNews, editNews }}
          categories={categories}
        />
      )}
    </>
  )
  //
}
