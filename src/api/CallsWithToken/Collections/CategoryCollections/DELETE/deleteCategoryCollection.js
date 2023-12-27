'use server'

import api from '@/services/api'

export default async function deleteCategoryCollection(token, id) {
  try {
    await api.delete(`/news/category/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
