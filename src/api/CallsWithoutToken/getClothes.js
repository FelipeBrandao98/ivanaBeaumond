'use server'

import api from '@/services/api'

export default async function getClothes(lang, collectionId) {
  try {
    const res = await api.get(`/collections/clothes/${lang}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
