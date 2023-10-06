import { cookies } from 'next/headers'
import MainPageCollections from '@/components/COLLECTIONS/MainPageCollections'
import api from '@/services/api'

async function getData(lang) {
  const res = await api.get(`/collections/${lang}`)

  return res.data
}

async function getCollectionImages(id) {
  'use server'
  const res = await api.get(`/collections/images/collection-id/${id}`)

  return res.data
}

export default async function Page() {
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie.value

  let data = await getData(lang)
  return (
    <>
      <MainPageCollections
        lang={lang}
        data={data}
        functions={{ getCollectionImages }}
      />
    </>
  )
}
