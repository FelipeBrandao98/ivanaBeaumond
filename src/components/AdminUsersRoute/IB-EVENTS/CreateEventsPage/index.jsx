'use client'

// React imports
import { useContext } from 'react'

// Context imports
import { CreateImageEventsContext } from '@/Context/CreateImageEventsContext'

// Components imports
import CreateImageEvents from './CreateImageEvents'
import CreateEvents from './CreateEvents'

// Component Declaration
export default function CreateEventsPage() {
  // Instanciate and initialize Contexts functions
  const { image, showCreateImage } = useContext(CreateImageEventsContext)

  // Return components, with functions to call API and language
  return (
    <>{showCreateImage === true ? <CreateImageEvents /> : <CreateEvents />}</>
  )
  //
}
