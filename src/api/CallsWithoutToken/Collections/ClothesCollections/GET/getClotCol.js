'use server'

import api from '@/services/api'

export default async function getClotCol(lang, collectionId) {
  try {
    const res = await api.get(`/collections/clothes/${lang}/${collectionId}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
