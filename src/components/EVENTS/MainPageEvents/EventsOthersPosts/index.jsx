// Components imports
import Event from './Event'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function EventsOthersPosts({ children }) {
  // Return components, with functions to call API and language
  return (
    <div className={styles.content}>
      <Event title="Eventos Futuros" />
      <Event title="Eventos Passados" />
    </div>
  )
  //
}
