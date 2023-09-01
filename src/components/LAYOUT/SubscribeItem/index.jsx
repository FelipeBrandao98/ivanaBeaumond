'use client'
import { useState } from 'react'
import LoadingSubscribe from './LoadingSubscribe'
import SuccessSubscribe from './SuccessSubscribe'

import api from '@/services/api'

import styles from './styles.module.css'
import useLangDict from '@/utils/useLangDict'

export default function SubscribeItem({ lang, content }) {
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)

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

  return (
    <section className={styles.section}>
      {checked === false && loading === false ? (
        <aside className={styles.aside}>
          <h3 className={styles.h3}>
            {useLangDict(lang).layout.subscribeItem.text}
          </h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="email"
              id="mail"
              name="mail"
              required
              placeholder={useLangDict(lang).layout.subscribeItem.placeholder}
            />
            <button type="submit" className={styles.button}>
              {useLangDict(lang).layout.subscribeItem.submitText}
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
  )
}
