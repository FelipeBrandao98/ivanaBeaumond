// Icons imports
import { BsFillExclamationTriangleFill } from 'react-icons/bs'

import styles from './styles.module.css'

export default function CautionTitle() {
  return (
    <>
      <h1 className={styles.caution}>
        <span className={styles.cautionIcon}>
          Atenção{' '}
          <BsFillExclamationTriangleFill
            width={50}
            height={50}
            className={styles.icon}
          />
        </span>
        <span className={styles.cautionTwo}>
          acesso apenas para pessoas autorizadas!
        </span>
      </h1>
    </>
  )
}
