// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import MainPageCollections from '@/components/COLLECTIONS/MainPageCollections'

// API Service imports
import api from '@/services/api'

// functions to call API
async function getData(lang) {
  const res = await api.get(`/collections/${lang}`)

  return res.data
}

async function getCollectionImages(id) {
  'use server'
  const res = await api.get(`/collections/images/collection-id/${id}`)

  return res.data
}
//

export const metadata = {
  title: 'Ivana Beaumond - Coleções',
  description: '',
}

// Component Declaration
export default async function Page() {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie?.value || 'pt-BR'
  //

  // Instantiate response objects from api, by language by the way
  let data = await getData(lang)

  // Return components, with functions to call API and language
  return (
    <>
      <MainPageCollections
        lang={lang}
        data={data}
        functions={{ getCollectionImages }}
      />
    </>
  )
  //
}
