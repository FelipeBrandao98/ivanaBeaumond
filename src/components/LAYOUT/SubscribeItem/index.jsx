'use client'

// React imports
import { useState } from 'react'

// Components imports
import LoadingSubscribe from './LoadingSubscribe'
import SuccessSubscribe from './SuccessSubscribe'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Styles imports
import styles from './styles.module.css'

// API Service imports
import api from '@/services/api'

export default function SubscribeItem({ lang, content }) {
  // States declaratios
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Functions to manipulate on Form Send
  async function handleSubmit(event) {
    event.preventDefault()

    setLoading(true)

    const data = {
      mail: event.target.mail.value,
    }

    try {
      await api.post('mailer', data)
    } catch (err) {
      alert('error 404')
    }

    setLoading(false)
    setChecked(true)
  }
  //

  // Return components, with functions to call API and language
  return (
    <>
      <section className={styles.section}>
        {checked === false && loading === false ? (
          <aside className={styles.aside}>
            <h3 className={styles.h3}>
              {languageTraducted.layout.subscribeItem.text}
            </h3>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                type="email"
                id="mail"
                name="mail"
                required
                placeholder={languageTraducted.layout.subscribeItem.placeholder}
              />
              <button type="submit" className={styles.button}>
                {languageTraducted.layout.subscribeItem.submitText}
              </button>
            </form>
          </aside>
        ) : loading ? (
          <LoadingSubscribe />
        ) : checked ? (
          <SuccessSubscribe />
        ) : (
          <aside className={styles.aside}>
            <h3 className={styles.h3}>{content.text}</h3>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                type="email"
                id="mail"
                name="mail"
                required
                placeholder={content.placeholder}
              />

              <button type="submit" className={styles.button}>
                {content.submitText}
              </button>
            </form>
          </aside>
        )}
      </section>
    </>
  )
  //
}
