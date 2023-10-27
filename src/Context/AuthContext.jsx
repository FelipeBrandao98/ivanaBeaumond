'use client'

// React imports
import { createContext, useState } from 'react'

// Create Context
export const AuthContext = createContext()

// Provider Declaration
export function AuthProvider({ children }) {
  // States declaratios
  const [token, setToken] = useState('')

  // Functions to manipulate states
  async function handleChangeToken(accessToken) {
    setToken(accessToken)
  }

  async function handleLogout() {
    setToken(null)
  }
  //

  // Return Provider with functions and states
  return (
    <AuthContext.Provider value={{ token, handleChangeToken, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
  //
}
