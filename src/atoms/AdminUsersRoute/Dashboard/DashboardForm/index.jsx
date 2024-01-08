import styles from './styles.module.css'

export default function DashboardForm(props) {
  const { children } = props

  return (
    <>
      <form className={styles.container} {...props}>
        {children}
      </form>
    </>
  )
}
