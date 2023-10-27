// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function BlogTitleOne() {
  // Return components, with functions to call API and language
  return (
    <div className={styles.titleArea}>
      <h2 className={styles.title}>
        <span className={styles.titleTypeOne}>Selva</span>
        <br /> Amazônica
      </h2>
    </div>
  )
  //
}
