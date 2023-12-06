'use client'

// React imports
import { useState } from 'react'

// Icons imports
import { BiSearchAlt2 } from 'react-icons/bi'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function SearchButton() {
  // States declaratios
  const [open, setOpen] = useState(false)

  // Functions to manipulate states
  function handleOpenSearch() {
    open ? setOpen(false) : setOpen(true)
  }
  //

  // Return components, with functions to call API and language
  return (
    <>
      <div className={open ? styles.searchOpen : styles.searchClose}>
        <input type="text" />
        <input type="button" value="Buscar" />
      </div>

      <div className={styles.searchIconArea}>
        <BiSearchAlt2
          onClick={handleOpenSearch}
          className={styles.searchIcon}
          width={40}
          height={40}
        />
      </div>
    </>
  )
  //
}
