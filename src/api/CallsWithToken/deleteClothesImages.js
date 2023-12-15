'use server'

import api from '@/services/api'

export default async function deleteClothesImages(token, clotheId) {
  try {
    const res = await api.delete(`/collections/clothes/${clotheId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

    return res.data
  } catch (err) {
    console.log(err)
  }
}
