'use client'

// Providers imports
import { AppointmentProvider } from '@/Context/AppointmentContext'

// Component Declaration
export function Providers({ children }) {
  // Return Components Providers
  return <AppointmentProvider>{children}</AppointmentProvider>
  //
}
