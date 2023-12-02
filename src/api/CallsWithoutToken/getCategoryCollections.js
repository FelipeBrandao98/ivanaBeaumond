'use server'

import api from '@/services/api'

export default async function getCategoryCollections(lang) {
  try {
    const res = await api.get(`/collections/category/${lang}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
