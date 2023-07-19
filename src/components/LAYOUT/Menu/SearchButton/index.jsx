'use client'
import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

import styles from './styles.module.css'

export default function SearchButton() {
  const [open, setOpen] = useState(false)

  function handleOpenSearch() {
    open ? setOpen(false) : setOpen(true)
  }

  return (
    <>
      <div className={open ? styles.searchOpen : styles.searchClose}>
        <input type='text' />
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
}