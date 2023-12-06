// Next.js Components imports
import Image from 'next/image'
import barCode from '@/../public/bar-code.svg'
import Link from 'next/link'

// Icons imports
import { BsStarHalf } from 'react-icons/bs'
import { IoIosCalendar } from 'react-icons/io'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default async function EventsHome({ lang, data }) {
  // Variables
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Return components, with functions to call API and language
  return (
    <section className={styles.section}>
      <div className={styles.detachableAreaLeft}>
        <span className={styles.detachableAreaBigBall} />
        {rows.map((row) => (
          <span key={row} className={styles.detachableAreaBall} />
        ))}
        <span className={styles.detachableAreaBigBall} />
      </div>
      <div className={styles.barCodeArea}>
        <Image
          className={styles.barCodeImage}
          src={barCode}
          alt={languageTraducted.layout.events.barCodeAlt}
          width={40}
          height={20}
        />
        <div className={styles.detachableAreaMiddle}>
          {rows.map((row) => (
            <span key={row} className={styles.detachableAreaBall} />
          ))}
        </div>
      </div>
      <aside className={styles.aside}>
        <h1 className={styles.title}>
          <BsStarHalf size={20} />
          {languageTraducted.layout.events.title}
          <BsStarHalf size={20} />
        </h1>

        <div className={styles.nextEventArea}>
          <h2 className={styles.nextEventP}>
            {languageTraducted.layout.events.nextEvent}
          </h2>
          <Link href={'/'} className={styles.nextEventTitle} legacyBehavior>
            {data.events.nextEvent.title}
          </Link>
          <h4 className={styles.nextEventDate}>{data.events.nextEvent.date}</h4>
        </div>

        <h2>{languageTraducted.layout.events.futureEvents}</h2>
        <div className={styles.futureEventsArea}>
          {data.events.futureEvents.map((event) => {
            return (
              <div className={styles.futureEventsCard} key={event.id}>
                <p className={styles.futureEventsTitle}>{event.title}</p>
                <IoIosCalendar className={styles.iconCalendar} size={2} />
                <p className={styles.futureEventsDate}>{event.date}</p>
              </div>
            )
          })}
        </div>

        <Link href={'/'} className={styles.seeMore} legacyBehavior>
          {languageTraducted.layout.events.seeMore}
        </Link>
      </aside>
      <div className={styles.detachableAreaRight}>
        <span className={styles.detachableAreaBigBall} />
        {rows.map((row) => (
          <span key={row} className={styles.detachableAreaBall} />
        ))}
        <span className={styles.detachableAreaBigBall} />
      </div>
    </section>
  )
  //
}
