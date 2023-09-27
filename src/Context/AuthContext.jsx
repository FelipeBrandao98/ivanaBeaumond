'use client'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNWQ1NjI4YS01NmUyLTRhZDUtYjEyMS0zZjVhYmE1YzdkZDUiLCJpYXQiOjE2OTU4Mzc4NTQsImV4cCI6MTY5NTkyNDI1NH0.i36Kmy-l2hScqemAiiPA-WGNjaZrBw146X2CXnpSg8k',
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
