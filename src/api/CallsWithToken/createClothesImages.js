'use server'

import api from '@/services/api'

export default async function createClothesImages(
  token,
  collectionId,
  coverId,
) {
  try {
    const res = await api.post(
      `/collections/clothes/`,
      {
        coverId,
        collectionId,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    )

    return res.data
  } catch (err) {
    console.log(err)
  }
}
