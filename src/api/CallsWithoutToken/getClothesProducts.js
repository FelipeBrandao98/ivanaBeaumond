'use server'

import api from '@/services/api'

export default async function getClothesProducts(lang, collectionId) {
  try {
    const res = await api.get(
      `/collections/clothes/${lang}/${collectionId}/product`,
    )

    return res.data
  } catch (err) {
    console.log(err)
  }
}
