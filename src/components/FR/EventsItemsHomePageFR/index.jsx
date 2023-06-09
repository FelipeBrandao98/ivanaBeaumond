import { BsStarHalf } from 'react-icons/bs'
import { IoIosCalendar } from 'react-icons/io'
import Image from 'next/image'

import styles from './styles.module.css'

export default async function EventsItemsHomePageFR({ data }) {

  return (
    <section className={styles.section}>
      <div className={styles.barCodeArea}>
        <Image
          className={styles.barCodeImage}
          src='/bar-code.svg'
          alt='Código de Barras - Ivana Beaumond'
          width={40}
          height={20}
        />
      </div>
      <aside className={styles.aside}>
        <h1 className={styles.title}>
          <BsStarHalf size={'1.5rem'} />
          EVENTOS
          <BsStarHalf size={'1.5rem'} />
        </h1>

        <div className={styles.nextEventsArea}>
          <h2 className={styles.h2}>Próximo Evento</h2>
          <h3 className={styles.h3}>São Paulo Fashion Week</h3>
          <h4 className={styles.h4}>27 de Setembro</h4>
        </div>


        <h2>Eventos Futuros</h2>
        <div className={styles.futureEventsArea}>

          {data.events.map((event) => {
            return (
              <div className={styles.futureEventsCard} key={event.id}>
                <p className={styles.futureEventsTitle}>{event.title}</p>
                <IoIosCalendar
                  className={styles.iconCalendar}
                  size={'2rem'}
                />
                <p className={styles.futureEventsDate}>{event.date}</p>
              </div>
            )
          })}

        </div>

        <p>Veja Mais</p>

      </aside>
    </section>
  )
}