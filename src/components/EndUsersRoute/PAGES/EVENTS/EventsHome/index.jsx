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
import formatToUrl from '@/utils/formatToUrl'
import { format } from 'date-fns'

// Component Declaration
export default async function EventsHome({ lang, data }) {
  const nextEvents = []
  const pastEvents = []

  function organizeEvents(events) {
    const currentDate = new Date()

    console.log(events)

    events.map((event) => {
      if (new Date(event.publishDate) >= currentDate) {
        nextEvents.push(event)
      } else {
        pastEvents.push(event)
      }
    })
  }

  // Variables
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Return components, with functions to call API and language
  return (
    <>
      {organizeEvents(data)}
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
              {console.log(pastEvents)}
            </h2>
            {nextEvents.map((event) => {
              return (
                <>
                  <Link
                    href={`/eventos/${formatToUrl(event.title)}/${event.id}`}
                    className={styles.nextEventTitle}
                  >
                    {event.title}
                  </Link>
                  <h4 className={styles.nextEventDate}>
                    {format(new Date(event.publishDate), "dd'/'MM'/'yyyy")}
                  </h4>
                </>
              )
            })}
          </div>

          <h2>{languageTraducted.layout.events.futureEvents}</h2>
          <div className={styles.futureEventsArea}>
            {pastEvents.map((event) => {
              return (
                <div className={styles.futureEventsCard} key={event.id}>
                  <p className={styles.futureEventsTitle}>{event.title}</p>
                  <IoIosCalendar className={styles.iconCalendar} size={2} />
                  <p className={styles.futureEventsDate}>
                    {format(new Date(event.publishDate), "dd'/'MM'/'yyyy")}
                  </p>
                </div>
              )
            })}
          </div>

          <Link href={'/eventos'} className={styles.seeMore}>
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
    </>
  )
  //
}
