'use client'
import { useState } from 'react'
import LoadingSubscribe from './LoadingSubscribe'
import SuccessSubscribe from './SuccessSubscribe'
import styles from './styles.module.css'

export default function SubscribeItem({ content }) {
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setChecked(true)
    }, 5000);
  }

  return (
    <section className={styles.section}>
      {
        checked === false && loading === false ?
          <aside className={styles.aside}>
            <h3 className={styles.h3}>
              {content.text}
            </h3>
            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <input
                className={styles.input}
                type="email" placeholder={content.placeholder}
              />
              <button
                className={styles.button}
              >
                {content.submitText}
              </button>
            </form>
          </aside> :
          loading ?
            <LoadingSubscribe /> :
            checked ?
              <SuccessSubscribe /> :
              <aside className={styles.aside}>
                <h3 className={styles.h3}>
                  {content.text}
                </h3>
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                >
                  <input
                    className={styles.input}
                    type="email" placeholder={content.placeholder}
                  />
                  <button
                    className={styles.button}
                  >
                    {content.submitText}
                  </button>
                </form>
              </aside>
      }
    </section>
  )
}