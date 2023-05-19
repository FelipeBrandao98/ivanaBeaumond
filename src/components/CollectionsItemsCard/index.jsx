import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

import styles from './styles.module.css'

export default function CollectionsItemsCard() {
  return (
    <section className={styles.section}>
      <aside className={styles.aside}>
        <h3>Vestidos de Noiva</h3>
        <Image
          className={styles.image}
          src='/noiva.jpg'
          alt='Vestido de Noiva'
          width={720}
          height={1080}
        />
        <div className={styles.comments}>
          <p>Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!</p>
          <button><a href="">Descubra Agora <FaArrowRight /></a></button>
        </div>
      </aside>

      <aside className={styles.aside}>
        <h3>Vestidos de Noiva</h3>
        <Image
          className={styles.image}
          src='/noiva.jpg'
          alt='Vestido de Noiva'
          width={720}
          height={1080}
        />
        <div className={styles.comments}>
          <p>Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!</p>
          <button><a href="">Descubra Agora <FaArrowRight /></a></button>
        </div>
      </aside>

      <aside className={styles.aside}>
        <h3>Vestidos de Noiva</h3>
        <Image
          className={styles.image}
          src='/noiva.jpg'
          alt='Vestido de Noiva'
          width={720}
          height={1080}
        />
        <div className={styles.comments}>
          <p>Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!</p>
          <button><a href="">Descubra Agora <FaArrowRight /></a></button>
        </div>
      </aside>

      <aside className={styles.aside}>
        <h3>Vestidos de Noiva</h3>
        <Image
          className={styles.image}
          src='/noiva.jpg'
          alt='Vestido de Noiva'
          width={720}
          height={1080}
        />
        <div className={styles.comments}>
          <p>Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!</p>
          <button><a href="">Descubra Agora <FaArrowRight /></a></button>
        </div>
      </aside>

      <aside className={styles.aside}>
        <h3>Vestidos de Noiva</h3>
        <Image
          className={styles.image}
          src='/noiva.jpg'
          alt='Vestido de Noiva'
          width={720}
          height={1080}
        />
        <div className={styles.comments}>
          <p>Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!</p>
          <button><a href="">Descubra Agora <FaArrowRight /></a></button>
        </div>
      </aside>

      <aside className={styles.aside}>
        <h3>Vestidos de Noiva</h3>
        <Image
          className={styles.image}
          src='/noiva.jpg'
          alt='Vestido de Noiva'
          width={720}
          height={1080}
        />
        <div className={styles.comments}>
          <p>Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!</p>
          <button><a href="">Descubra Agora <FaArrowRight /></a></button>
        </div>
      </aside>
    </section>
  )
}