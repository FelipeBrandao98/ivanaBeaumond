'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './styles.module.css'
import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

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
            <BsArrowRight width={40} height={40} />
          </button>
          {children}
        </section>
      </menu>
    </>
  )
}
