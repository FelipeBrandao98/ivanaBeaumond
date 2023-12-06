'use client'

// React imports
import { useContext } from 'react'

// Next.js Components imports
import Image from 'next/image'
import imageCover from '@/../public/IMG_2967.jpg'

// Context imports
import { AppointmentContext } from '@/Context/AppointmentContext'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Components impors
import AppointmentForm from '@/components/CONTACT/AppointmentForm'

// Atoms imports
import MenuAppointmentContainer from '@/atoms/Layout/Menu/MenuAppointmentContainer'
import MenuAppointmentCloseButton from '@/atoms/Layout/Menu/MenuAppointmentCloseButton'
import MenuApppointmentImage from '@/atoms/Layout/Menu/MenuAppointmentImage'
import MenuAppointmentExpandButton from '@/atoms/Layout/Menu/MenuAppointmentExpandButton'
//

// Component Declaration
export default function AppointmentBanner({ lang }) {
  // Instanciate and initialize Contexts functions
  const { appointment, handleAppointment } = useContext(AppointmentContext)

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Return components, with functions to call API and language
  return (
    <>
      {appointment && (
        <MenuAppointmentContainer>
          <MenuAppointmentExpandButton href={`${lang}/contato`} />

          <MenuAppointmentCloseButton onClick={handleAppointment} />

          <div>
            <AppointmentForm lang={lang} />

            <MenuApppointmentImage>
              <Image
                alt="Foto de Capa"
                src={imageCover}
                placeholder="blur"
                width={1280}
                height={720}
              />
            </MenuApppointmentImage>
          </div>
        </MenuAppointmentContainer>
      )}
    </>
  )
  //
}
