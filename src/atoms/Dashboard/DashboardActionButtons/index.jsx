// Next.js Components imports
import Link from 'next/link'

// Icons imports
import { FiArchive, FiPlus, FiRefreshCcw } from 'react-icons/fi'

import styles from './styles.module.css'

export default function DashboardActionButtons({
  title,
  getRepo,
  cleanContext,
  createLink,
}) {
  return (
    <aside className={styles.container}>
      {title}
      <section className={styles.content}>
        <button
          onClick={(e) => {
            e.preventDefault()
            getRepo()
          }}
          className={styles.button}
        >
          <FiRefreshCcw width={40} height={40} />
          Refresh
        </button>
        <Link
          onClick={(e) => {
            cleanContext({})
          }}
          href={`/ib-login/dashboard/${createLink}`}
          className={styles.button}
          legacyBehavior
        >
          <FiPlus width={40} height={40} />
          Novo
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault()
            getRepo()
          }}
          className={styles.button}
        >
          <FiArchive width={40} height={40} />
          Arquivar
        </button>
      </section>
    </aside>
  )
}
