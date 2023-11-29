'use server'

import api from '@/services/api'

export default async function getCategoryNews() {
  const res = await api.get('/news/category/pt-BR')
  return res.data
}
