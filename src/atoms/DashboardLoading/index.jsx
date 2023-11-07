import { AiOutlineLoading } from 'react-icons/ai'

import styles from './styles.module.css'

export default function DashboardLoading({ loading }) {
  return (
    <>
      {loading && (
        <section className={styles.container}>
          <aside className={styles.content}>
            Enviando dados...{' '}
            <AiOutlineLoading
              width={100}
              height={100}
              className={styles.loading}
            />
          </aside>
        </section>
      )}
    </>
  )
}
