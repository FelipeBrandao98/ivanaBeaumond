'use client'

// React imports
import { useCallback, useContext, useEffect, useState } from 'react'

// Context imports
import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

// Components imports
import CreateImageNews from './CreateImageNews'
import CreateNews from './CreateNews'

// Api Functions imports
import getCategoryNews from '@/api/CallsWithoutToken/getCategoryNews'
//

// Component Declaration
export default function CreateNewsPage() {
  // Instanciate and initialize Contexts functions
  const { image, showCreateImage } = useContext(CreateImageNewsContext)

  // States declaratios
  const [categories, setCategories] = useState([])

  // functions to handle with datas from api
  const getCat = useCallback(async () => {
    const res = await getCategoryNews()
    setCategories(res)
  }, [])
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
        <CreateImageNews />
      ) : (
        <CreateNews categories={categories} />
      )}
    </>
  )
  //
}
