'use server'

import api from '@/services/api'

export default async function getCollections(lang) {
  try {
    const res = await api.get(`/collections/${lang}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
