// Icons imports
import { FaBars } from 'react-icons/fa'

import styles from './styles.module.css'

export default function MenuMobileContainer({
  children,
  isOpen,
  handleIsOpen,
}) {
  return (
    <>
      <div className={isOpen ? styles.open : styles.close}>
        <FaBars onClick={handleIsOpen} size={100} className={styles.icon} />

        <menu className={styles.content}>{children}</menu>

        <div
          className={isOpen ? styles.outOpen : ''}
          onClick={handleIsOpen}
        ></div>
      </div>
    </>
  )
}
