'use client'

import { AppointmentProvider } from '@/Context/AppointmentContext'

export function Providers({ children }) {
  return <AppointmentProvider>{children}</AppointmentProvider>
}
