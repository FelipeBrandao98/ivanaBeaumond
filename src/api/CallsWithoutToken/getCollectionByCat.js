'use server'

import api from '@/services/api'

export default async function getCollectionByCat(lang, categoryId) {
  try {
    const res = await api.get(`/collections/${lang}/category/${categoryId}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
