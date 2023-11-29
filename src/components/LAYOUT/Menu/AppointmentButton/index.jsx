'use client'

import { useContext } from 'react'

// Icons imports
import { FaChevronRight } from 'react-icons/fa'

// Context imports
import { AppointmentContext } from '@/Context/AppointmentContext'
import MenuAppointmentButton from '@/atoms/Layout/Menu/MenuAppointmentButton'

export default function AppointmentButton({ children, short }) {
  const { handleAppointment } = useContext(AppointmentContext)

  return (
    <>
      <MenuAppointmentButton onClick={handleAppointment} short={short}>
        {children} <FaChevronRight size={20} />
      </MenuAppointmentButton>
    </>
  )
}
