'use server'

import api from '@/services/api'

export default async function createCategoryNews(token, createCategory) {
  try {
    await api.post('/news/category', createCategory, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
