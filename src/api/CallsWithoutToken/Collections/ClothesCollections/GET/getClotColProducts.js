'use server'

import api from '@/services/api'

export default async function getClotColProducts(lang, collectionId) {
  try {
    const res = await api.get(
      `/collections/clothes/${lang}/product/${collectionId}`,
    )

    return res.data
  } catch (err) {
    console.log(err)
  }
}
