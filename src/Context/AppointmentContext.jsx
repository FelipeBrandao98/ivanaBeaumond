'use client'

// React imports
import { createContext, useState } from 'react'

// Create Context
export const AppointmentContext = createContext()

// Provider Declaration
export function AppointmentProvider({ children }) {
  // States declaratios
  const [appointment, setAppointment] = useState(false)

  // Functions to manipulate states
  function handleAppointment() {
    setAppointment(!appointment)
  }

  // Return Provider with functions and states
  return (
    <AppointmentContext.Provider value={{ appointment, handleAppointment }}>
      {children}
    </AppointmentContext.Provider>
  )
  //
}
