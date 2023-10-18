import Event from './Event'
import styles from './styles.module.css'

export default function EventsOthersPosts({ children }) {
  return (
    <div className={styles.content}>
      <Event title="Eventos Futuros" />
      <Event title="Eventos Passados" />
    </div>
  )
}
