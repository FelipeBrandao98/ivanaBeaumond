'use server'

import api from '@/services/api'

export default async function getUniqueCollection(lang, collectionId) {
  try {
    const res = await api.get(`/collections/${lang}/${collectionId}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
