import Link from 'next/link'
import styles from './styles.module.css'

export default function EndUserSeeAllButton(props) {
  const { dark, children } = props

  return (
    <>
      <div
        className={
          dark ? `${styles.container} ${styles.dark}` : styles.container
        }
      >
        {children}
      </div>
    </>
  )
}
