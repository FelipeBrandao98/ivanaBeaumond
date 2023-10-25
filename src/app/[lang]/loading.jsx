// Cookies imports
import { cookies } from 'next/headers'

// Function to traduct component imports
import useLangDict from '@/utils/useLangDict'

// Styles imports
import styles from '@/styles/loading.module.css'

// Component Declaration
export default function Loading() {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie?.value || 'pt-BR'
  //

  // Return components, with functions to call API and language
  return (
    <div className={styles.content}>
      <h1 className={styles.loading}>{useLangDict(lang).loading.title}</h1>
      <div className={styles.flagArea}>
        <div className={styles.blueArea}></div>
        <div className={styles.whiteArea}></div>
        <div className={styles.redArea}></div>
      </div>
    </div>
  )
  //
}
