import ReactCountryFlag from 'react-country-flag'

import styles from './styles.module.css'

export default function DashboardTabLangTitle({ tab, name }) {
  return (
    <>
      {tab === 'pt-BR' ? (
        <h1 className={styles.title}>
          {name} em Português <ReactCountryFlag countryCode="BR" svg />
        </h1>
      ) : tab === 'de' ? (
        <h1 className={styles.title}>
          {name} em Alemão <ReactCountryFlag countryCode="DE" svg />
        </h1>
      ) : tab === 'fr' ? (
        <h1 className={styles.title}>
          {name} em Francês <ReactCountryFlag countryCode="FR" svg />
        </h1>
      ) : tab === 'en' ? (
        <h1 className={styles.title}>
          {name} em Inglês <ReactCountryFlag countryCode="US" svg />
        </h1>
      ) : (
        ''
      )}
    </>
  )
}
