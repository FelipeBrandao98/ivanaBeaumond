'use server'

import api from '@/services/api'

export default async function createNews(token, createNews) {
  try {
    await api.post('/news', createNews, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
