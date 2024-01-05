import Link from 'next/link'
import styles from './styles.module.css'

export default function EndUserSeeAllButton(props) {
  const { dark, children, noBack } = props

  return (
    <>
      <button
        className={
          dark && noBack
            ? `${styles.container} ${styles.dark} ${styles.noBack}`
            : dark
              ? `${styles.container} ${styles.dark}`
              : styles.container
        }
      >
        {children}
      </button>
    </>
  )
}
