'use server'

import api from '@/services/api'

export default async function getClothesImages(lang, collectionId) {
  if (!collectionId) {
    collectionId = lang
    lang = undefined
  }

  if (lang) {
    try {
      const res = await api.get(`/collections/clothes/${lang}/${collectionId}`)

      return res.data
    } catch (err) {
      console.log(err)
    }
  } else {
    try {
      const res = await api.get(`/collections/clothes/${collectionId}`)

      return res.data
    } catch (err) {
      console.log(err)
    }
  }
}
