import Link from 'next/link'
import styles from './styles.module.css'
import LogoutButton from './LogoutButton/LogoutButton'

export default function Dashboard({ children }) {
  return (
    <section className={styles.container}>
      <menu className={styles.mainMenu}>
        <section className={styles.userArea}></section>
        <section className={styles.menu}>
          <nav>
            <ul>
              <li>
                <Link href={'/mailer'}>Mailer</Link>
              </li>
              <li>
                <Link href={'/categorias'}>Categorias</Link>
              </li>
              <li>
                <Link href={'/categorias'}>Categorias</Link>
              </li>
              <li>
                <Link href={'/colecoes'}>Coleções</Link>
              </li>
              <li>
                <Link href={'/noticias'}>Notícias</Link>
              </li>
            </ul>
          </nav>
          <LogoutButton />
        </section>
      </menu>
      {children}
    </section>
  )
}
