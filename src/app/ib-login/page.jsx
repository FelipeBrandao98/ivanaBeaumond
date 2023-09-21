import api from '@/services/api'

import { LoginPage } from '@/components/LOGIN/LoginPage'

async function login(formData) {
  'use server'
  const res = await api.post('/auth/login', formData)
  return res.data
}

export default function Page() {
  return (
    <>
      <LoginPage login={login} />
    </>
  )
}
