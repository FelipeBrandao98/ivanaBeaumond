import styles from './styles.module.css'

export default function SubscribeItem() {
  return (
    <section className={styles.section}>
      <aside className={styles.aside}>
        <h3 className={styles.h3}>
          ASSINE AQUI PARA FICAR POR DENTRO DAS NOSSAS NOVIDADES!
        </h3>
        <form className={styles.form}>
          <input className={styles.input} type="email" placeholder='Seu E-Mail aqui' />
          <button className={styles.button}>Assinar</button>
        </form>
      </aside>
    </section>
  )
}