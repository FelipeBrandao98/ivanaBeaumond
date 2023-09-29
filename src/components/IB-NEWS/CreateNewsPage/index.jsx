'use client'

import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

import { useContext, useEffect, useState } from 'react'

import CreateImageNews from '@/components/IB-NEWS/CreateNewsPage/CreateImageNews'
import CreateNews from '@/components/IB-NEWS/CreateNewsPage/CreateNews'

export default function CreateNewsPage({ functions }) {
  const [categories, setCategories] = useState([])

  const { createNews, getCategories, createImage } = functions

  const { image, showCreateImage } = useContext(CreateImageNewsContext)

  async function getCat() {
    const res = await getCategories()
    setCategories(res)
  }

  useEffect(() => {
    getCat()
  }, [])

  return (
    <>
      {showCreateImage === true ? (
        <CreateImageNews createImage={createImage} />
      ) : (
        <CreateNews categories={categories} createNews={createNews} />
      )}
    </>
  )
}
