'use server'

import api from '@/services/api'

export default async function deleteCategoryNews(token, id) {
  try {
    await api.delete(`/collections/category/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
