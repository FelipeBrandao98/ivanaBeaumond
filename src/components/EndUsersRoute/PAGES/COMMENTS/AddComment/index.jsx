'use client'
import { useState } from 'react'
import CommentForm from './CommentForm'
import CommentModal from './CommentModal'
import styles from './styles.module.css'

export default function AddComment({ lang }) {
  const [modal, setClose] = useState(false)

  function handleModal() {
    setClose(!modal)
  }

  return (
    <>
      <section className={styles.container}>
        <aside className={styles.content}>
          <h1>Deixe seu comentário sobre a nossa loja!</h1>
          <button onClick={handleModal}>Deixar agora!</button>
        </aside>
      </section>
      {modal && (
        <CommentModal setClose={handleModal}>
          <CommentForm lang={lang} />
        </CommentModal>
      )}
    </>
  )
}
