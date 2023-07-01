import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import styles from './styles.module.css'

export default function CollectionsItemsCard({ data }) {
  return (
    <section className={styles.section}>

      {data.categories.map((categorie) => {
        return (
          <aside
            key={categorie.id}
            className={styles.aside}
          >
            <h3>{categorie.name}</h3>
            <Image
              className={styles.image}
              src={categorie.imageUrl}
              alt={categorie.imageAlt}
              width={1080}
              height={1920}
            />
            <div className={styles.comments}>
              <p>{categorie.description}</p>
              <button><Link href={categorie.route}>Descubra Agora <FaArrowRight /></Link></button>
            </div>
          </aside>
        )
      })}

    </section>
  )
}