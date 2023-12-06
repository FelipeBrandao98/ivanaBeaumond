import styles from './styles.module.css'

export default function NewsParagraph({ children }) {
  return (
    <>
      <p className={styles.paragraph}>{children}</p>
    </>
  )
}
