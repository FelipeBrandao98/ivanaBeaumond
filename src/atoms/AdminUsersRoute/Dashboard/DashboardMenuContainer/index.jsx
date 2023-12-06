'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './styles.module.css'
import { useState } from 'react'

export default function DashboardMenuContainer({ children }) {
  const [expand, setExpand] = useState(false)

  return (
    <>
      <menu
        className={
          expand
            ? `${styles.expanded} ${styles.container}`
            : `${styles.container}`
        }
      >
        <section className={styles.content}>
          <button
            className={styles.expandButton}
            onClick={(e) => {
              e.preventDefault()
              setExpand(!expand)
            }}
          >
            <AiOutlineMenu width={40} height={40} />
          </button>
          {children}
        </section>
      </menu>
    </>
  )
}
