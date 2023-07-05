import styles from './styles.module.css'

export default function SubscribeItem({ content }) {
  return (
    <section className={styles.section}>
      <aside className={styles.aside}>
        <h3 className={styles.h3}>
          {content.text}
        </h3>
        <form className={styles.form}>
          <input className={styles.input} type="email" placeholder={content.placeholder} />
          <button className={styles.button}>{content.submitText}</button>
        </form>
      </aside>
    </section>
  )
}