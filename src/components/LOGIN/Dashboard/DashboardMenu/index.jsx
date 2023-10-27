// Next.js Components imports
import Link from 'next/link'

// Icons imports
import { ImNewspaper, ImMail3, ImTicket, ImListNumbered } from 'react-icons/im'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function DashboardMenu() {
  // Return components, with functions to call API and language
  return (
    <>
      <nav className={styles.container}>
        <ul className={styles.content}>
          <li>
            <Link className={styles.button} href={'/ib-login/dashboard/mailer'}>
              <ImMail3 width={40} height={40} className={styles.icon} />
              Mailer
            </Link>
          </li>
          <li>
            <Link
              className={styles.button}
              href={'/ib-login/dashboard/categorias'}
            >
              <ImListNumbered width={40} height={40} className={styles.icon} />
              Categorias
            </Link>
          </li>
          <li>
            <Link
              className={styles.button}
              href={'/ib-login/dashboard/colecoes'}
            >
              <ImTicket width={40} height={40} className={styles.icon} />
              Coleções
            </Link>
          </li>
          <li>
            <Link
              className={styles.button}
              href={'/ib-login/dashboard/noticias'}
            >
              <ImNewspaper width={40} height={40} className={styles.icon} />
              Notícias
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
  //
}
