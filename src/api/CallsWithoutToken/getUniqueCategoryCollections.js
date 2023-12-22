'use server'

import api from '@/services/api'

export default async function getUniqueCategoryCollections(lang, categoryId) {
  try {
    const res = await api.get(`/collections/category/${lang}/${categoryId}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
