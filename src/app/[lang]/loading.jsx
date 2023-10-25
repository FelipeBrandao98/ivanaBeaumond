import { cookies } from 'next/headers'

import useLangDict from '@/utils/useLangDict'

import styles from '@/styles/loading.module.css'

export default function Loading() {
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie?.value || 'pt-BR'

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
}
