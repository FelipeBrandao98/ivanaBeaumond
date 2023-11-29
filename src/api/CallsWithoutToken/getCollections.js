'use server'

import api from '@/services/api'

export default async function getCollections(lang) {
  const res = await api.get(`/collections/${lang}`)

  return res.data
}
