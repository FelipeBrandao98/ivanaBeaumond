'use client'
import { createContext, useState } from 'react'

export const AppointmentContext = createContext()

export function AppointmentProvider({ children }) {
  const [appointment, setAppointment] = useState(false)

  function handleAppointment() {
    setAppointment(!appointment)
  }

  return (
    <AppointmentContext.Provider value={{ appointment, handleAppointment }}>
      {children}
    </AppointmentContext.Provider>
  )
}
