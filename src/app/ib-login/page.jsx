// Components imports
import LoginPage from '@/components/LOGIN/LoginPage'

// API Service imports
import api from '@/services/api'

// functions to call API
async function login(formData) {
  'use server'
  const res = await api.post('/auth/login', formData)
  return res.data
}
// Component Declaration
export default function Page() {
  // Return components, with functions API
  return (
    <>
      <LoginPage login={login} />
    </>
  )
  //
}
