'use client'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNWQ1NjI4YS01NmUyLTRhZDUtYjEyMS0zZjVhYmE1YzdkZDUiLCJpYXQiOjE2OTY0MzE1MTUsImV4cCI6MTY5NjUxNzkxNX0.85JreD0d_CQYUG5t6ui-rSRyC_BNCiuOaY6kyEmkI_I',
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
