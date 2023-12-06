import styles from './styles.module.css'

export default function EndUserCheckBoxLabel(props) {
  const { htmlFor, name, children } = props

  return (
    <>
      <label htmlFor={htmlFor} className={styles.label}>
        {children}
        {name}
        <span className={styles.newCheckbox}></span>
      </label>
    </>
  )
}
