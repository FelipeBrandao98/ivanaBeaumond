'use client'

import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

import { useCallback, useContext, useEffect, useState } from 'react'

import CreateImageNews from '@/components/IB-NEWS/CreateNewsPage/CreateImageNews'
import CreateNews from '@/components/IB-NEWS/CreateNewsPage/CreateNews'

export default function CreateNewsPage({ functions }) {
  const [categories, setCategories] = useState([])

  const { createNews, editNews, getCategories, createImage } = functions

  const { image, showCreateImage } = useContext(CreateImageNewsContext)

  const getCat = useCallback(async () => {
    const res = await getCategories()
    setCategories(res)
  }, [getCategories])

  useEffect(() => {
    getCat()
  }, [getCat])

  return (
    <>
      {showCreateImage === true ? (
        <CreateImageNews createImage={createImage} />
      ) : (
        <CreateNews
          categories={categories}
          createNews={createNews}
          editNews={editNews}
        />
      )}
    </>
  )
}
