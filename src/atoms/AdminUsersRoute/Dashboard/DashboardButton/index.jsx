import styles from './styles.module.css'

export default function DashboardButton(props) {
  const { children, mode } = props

  return (
    <>
      <button
        className={
          mode === 'submit'
            ? `${styles.button} ${styles.submit}`
            : mode === 'cancel'
              ? `${styles.button} ${styles.cancel}`
              : `${styles.button}`
        }
        {...props}
      >
        {children}
      </button>
    </>
  )
}
