'use client'

// React imports
import { useState } from 'react'

// Icons imports
import { HiX } from 'react-icons/hi'

// Utils imports
import getLocalStorage from '@/utils/getLocalStorage'
import setLocalStorage from '@/utils/setLocalStorage'

// styles imports
import styles from './styles.module.css'
import { useEffect } from 'react'

// Component Declaration
export default function CookieNotice() {
  // States declaratios
  const [close, setClose] = useState(false)

  // Use Effects
  useEffect(() => {
    setClose(getLocalStorage('lgpd'))
  }, [])
  //

  // Return modal, if cookies, don`t accepted
  return (
    <>
      <section className={!close ? `${styles.container}` : `${styles.hide}`}>
        <aside className={styles.content}>
          <button
            className={styles.closeButton}
            onClick={(e) => {
              e.preventDefault()
              setClose(!close)
            }}
          >
            <HiX className={styles.closeButtonIcon} width={100} height={100} />
          </button>
          <p className={styles.text}>
            Nós e os terceiros selecionados usamos cookies ou tecnologias
            similares para finalidades técnicas e, com seu consentimento, para
            outras finalidades conforme especificado na política de cookie.
            <br />
            Negar consentimento pode tornar as funcionalidades relacionadas
            indisponíveis. Use o botão “Aceitar” para consentir. Use o botão
            “Recusar” ou feche este aviso para continuar sem aceitar.
            <br />
            <a>Política de Privacidade</a>
          </p>
          <div className={styles.buttonArea}>
            <button className={styles.readMoreButton}>Saiba Mais!</button>
            <button
              className={styles.refuseButton}
              onClick={(e) => {
                e.preventDefault()
                setLocalStorage('lgpd', false)
                setClose(!close)
              }}
            >
              Recusar!
            </button>
            <button
              className={styles.acceptButton}
              onClick={(e) => {
                e.preventDefault()
                setLocalStorage('lgpd', true)
                setClose(!close)
              }}
            >
              Aceitar!
            </button>
          </div>
        </aside>
      </section>
    </>
  )
  //
}
