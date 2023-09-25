'use client'

import { AuthContext } from '@/Context/AuthContext'
import { useContext } from 'react'

import styles from './styles.module.css'

export default function MailerPage({ children }) {
  const { token } = useContext(AuthContext)

  return (
    <>
      <h1>Mailer</h1>
      <section className={styles.container}>
        <aside className={styles.content}>
          <p>Procurar e-mail</p>
          <form>
            <label htmlFor="search-email" className={styles.label}>
              Digite o e-mail que deseja procurar:
              <input type="text" className={styles.input} />
            </label>
          </form>
        </aside>
      </section>
    </>
  )
}
