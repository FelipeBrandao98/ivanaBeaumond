import { AiOutlineLoading } from 'react-icons/ai'

import styles from './styles.module.css'

export default function LoadingSubscribe() {
  return (
    <AiOutlineLoading
      className={styles.loading}
      width={50}
      height={50}
    />
  )
}