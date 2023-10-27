'use client'

// Context imports
import { AuthContext } from '@/Context/AuthContext'
import { useContext } from 'react'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function MailerPage({ children }) {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)

  // Return components, with functions to call API and language
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
  //
}
