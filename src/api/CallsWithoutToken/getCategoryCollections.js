'use server'

import api from '@/services/api'

export default async function getCategoryCollections(lang) {
  const res = await api.get(`/collections/category/${lang}`)

  return res.data
}
