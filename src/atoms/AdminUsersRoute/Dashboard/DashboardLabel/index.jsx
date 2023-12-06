import styles from './styles.module.css'

export default function DashboardLabel(props) {
  const { htmlFor, name, errors, children } = props

  return (
    <>
      <label htmlFor={htmlFor} className={styles.label}>
        {name}: <br />
        {children}
        {errors && <span className={styles.error}>{errors?.message}</span>}
      </label>
    </>
  )
}
