'use server'

import api from '@/services/api'

export default async function editCategoryCollection(
  id,
  token,
  updateCategory,
) {
  await api.patch(`/collections/category/${id}`, updateCategory, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}
