import styles from './styles.module.css'

export default function EndUserForm(props) {
  const { children, inAppointment } = props

  return (
    <>
      <form {...props} className={inAppointment && styles.container}>
        {children}
      </form>
    </>
  )
}
