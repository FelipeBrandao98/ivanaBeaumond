// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function Loading({ lang }) {
  // Return components, with functions to call API and language
  return (
    <div className={styles.content}>
      <h1 className={styles.loading}>{getLangDict(lang).loading.title}</h1>
      <div className={styles.flagArea}>
        <div className={styles.blueArea}></div>
        <div className={styles.whiteArea}></div>
        <div className={styles.redArea}></div>
      </div>
    </div>
  )
  //
}
