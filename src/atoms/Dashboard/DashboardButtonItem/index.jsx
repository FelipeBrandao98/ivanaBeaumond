import Link from 'next/link'

import styles from './styles.module.css'

export default function DashboardButtonItem({ children, href, selected }) {
  return (
    <>
      <li className={styles.content}>
        <Link
          className={
            selected
              ? `${styles.button} ${styles.selected}`
              : `${styles.button}`
          }
          href={href}
          legacyBehavior
        >
          {children}
        </Link>
      </li>
    </>
  )
}
