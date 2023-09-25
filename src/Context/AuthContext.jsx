'use client'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNWQ1NjI4YS01NmUyLTRhZDUtYjEyMS0zZjVhYmE1YzdkZDUiLCJpYXQiOjE2OTU2NTAxMTIsImV4cCI6MTY5NTczNjUxMn0.SIcCb13JOow9JcX4W4_j_BCPSRw0kRn85Wwp9TUE62k',
  )

  async function handleChangeToken(accessToken) {
    setToken(accessToken)
  }

  async function handleLogout() {
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, handleChangeToken, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
