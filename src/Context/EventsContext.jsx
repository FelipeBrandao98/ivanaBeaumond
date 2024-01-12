'use client'

// React imports
import { createContext, useState } from 'react'

// Create Context
export const EventesContext = createContext()

// Provider Declaration
export function EventsProvider({ children }) {
  // States declaratios
  const [events, setEvents] = useState([])

  // Functions to manipulate states
  function handleEvents(events) {
    setEvents(events)
  }
  //

  // Return Provider with functions and states
  return (
    <EventesContext.Provider value={{ events, handleEvents }}>
      {children}
    </EventesContext.Provider>
  )
  //
}
