import styles from '@/styles/loading.module.css'
import RedirectLanguageComponent from '@/components/RedirectLanguageComponent'
import LanguageHook from '@/hooks/LanguageContext'

export default async function Page() {
  return (
    <>
      <LanguageHook>
        <RedirectLanguageComponent />
      </LanguageHook>
      <div className={styles.content}>
        <h1 className={styles.loading}>Carregando...</h1>
        <div className={styles.flagArea}>
          <div className={styles.blueArea}></div>
          <div className={styles.whiteArea}></div>
          <div className={styles.redArea}></div>
        </div>
      </div>
    </>
  )
}
