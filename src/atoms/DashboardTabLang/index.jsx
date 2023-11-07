'use client'

import ReactCountryFlag from 'react-country-flag'

import styles from './styles.module.css'

export default function DashboardTabLang({ tab, setTab }) {
  return (
    <>
      <div className={styles.tabArea}>
        <button
          className={`${
            tab === 'pt-BR' ? styles.tabActive : styles.tabInactive
          }`}
          onClick={(e) => {
            e.preventDefault()
            setTab('pt-BR')
          }}
        >
          Português <ReactCountryFlag countryCode="BR" svg />
        </button>
        <button
          className={`${tab === 'de' ? styles.tabActive : styles.tabInactive}`}
          onClick={(e) => {
            e.preventDefault()
            setTab('de')
          }}
        >
          Alemão <ReactCountryFlag countryCode="DE" svg />
        </button>
        <button
          className={`${tab === 'fr' ? styles.tabActive : styles.tabInactive}`}
          onClick={(e) => {
            e.preventDefault()
            setTab('fr')
          }}
        >
          Francês <ReactCountryFlag countryCode="FR" svg />
        </button>
        <button
          className={`${tab === 'en' ? styles.tabActive : styles.tabInactive}`}
          onClick={(e) => {
            e.preventDefault()
            setTab('en')
          }}
        >
          Inglês <ReactCountryFlag countryCode="US" svg />
        </button>
      </div>
    </>
  )
}
