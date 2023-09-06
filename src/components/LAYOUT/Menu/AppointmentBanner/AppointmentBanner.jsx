import { HiX } from 'react-icons/hi'

import styles from './styles.module.css'

export default function AppointmentBanner({ isHidden, close }) {
  return (
    <>
      {isHidden ? (
        <section className={styles.container}>
          <aside className={styles.content}>
            <span className={styles.closeButton} onClick={close}>
              <HiX width={20} height={20} />
            </span>
            <form action="" className={styles.form}>
              <h1 className={styles.title}>Faça seu agendamento</h1>
              <label className={styles.label} htmlFor="name">
                Seu Nome:
                <input type="text" id="name" />
              </label>
              <label className={styles.label} htmlFor="mail">
                Seu E-mail:
                <input type="email" name="mail" id="mail" />
              </label>
              <label className={styles.label} htmlFor="phone">
                Seu Telefone:
                <input type="tel" name="phone" id="phone" />
              </label>
              <label className={styles.label}>
                O que deseja alugar?
                <label className={styles.labelTwo} htmlFor="bride">
                  <input type="checkbox" name="bride" id="bride" />
                  Vestido de Noiva
                </label>
                <label className={styles.labelTwo} htmlFor="">
                  <input type="checkbox" name="" id="" />
                  Traje do Noivo
                </label>
                <label className={styles.labelTwo} htmlFor="debutant">
                  <input type="checkbox" name="debutant" id="debutant" />
                  Vestido de Debutantes
                </label>
                <label className={styles.labelTwo} htmlFor="">
                  <input type="checkbox" name="" id="" />
                  Vestido de Daminha
                </label>
                <label className={styles.labelTwo} htmlFor="party">
                  <input type="checkbox" name="party" id="party" />
                  Vestido de Festa
                </label>
              </label>
              <label htmlFor="merry-date">
                Quando é a data da sua festa/casamento?
                <input
                  type="datetime-local"
                  name="merry-date"
                  id="merry-date"
                />
              </label>
            </form>
          </aside>
        </section>
      ) : (
        ''
      )}
    </>
  )
}
