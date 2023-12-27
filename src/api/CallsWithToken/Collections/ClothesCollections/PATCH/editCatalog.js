'use server'

import api from '@/services/api'

export default async function editCatalog(token, clotheId, updateCatalog) {
  await api.patch(`/collections/clothes/${clotheId}`, updateCatalog, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}
