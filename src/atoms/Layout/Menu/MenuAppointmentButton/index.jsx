// Styles imports
import styles from './styles.module.css'

export default function MenuAppointmentButton(props) {
  const { children, short } = props

  return (
    <>
      <nav
        className={
          short ? `${styles.container} ${styles.short}` : styles.container
        }
      >
        <ul>
          <li {...props}>{props.children}</li>
        </ul>
      </nav>
    </>
  )
}
