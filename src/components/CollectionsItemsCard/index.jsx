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
          src='/photos_collections_items/vestido_de_noiva_ivana_beaumond.jpg'
          alt='Vestido de Noiva'
          width={1080}
          height={1920}
        />
        <div className={styles.comments}>
          <p>Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!</p>
          <button><a href="">Descubra Agora <FaArrowRight /></a></button>
        </div>
      </aside>

      <aside className={styles.aside}>
        <h3>Vestidos de Debutante</h3>
        <Image
          className={styles.image}
          src='/photos_collections_items/vestido_de_debutante_ivana_beaumond.jpg'
          alt='Vestido de Debutante'
          width={1080}
          height={1920}
        />
        <div className={styles.comments}>
          <p>Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!</p>
          <button><a href="">Descubra Agora <FaArrowRight /></a></button>
        </div>
      </aside>

      <aside className={styles.aside}>
        <h3>Ternos</h3>
        <Image
          className={styles.image}
          src='/photos_collections_items/terno_ivana_beaumond.jpg'
          alt='Terno'
          width={1080}
          height={1920}
        />
        <div className={styles.comments}>
          <p>Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!</p>
          <button><a href="">Descubra Agora <FaArrowRight /></a></button>
        </div>
      </aside>

      <aside className={styles.aside}>
        <h3>Vestidos de Festa</h3>
        <Image
          className={styles.image}
          src='/photos_collections_items/vestido_de_festa_ivana_beaumond.jpg'
          alt='Vestido de Festa'
          width={1080}
          height={1920}
        />
        <div className={styles.comments}>
          <p>Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!</p>
          <button><a href="">Descubra Agora <FaArrowRight /></a></button>
        </div>
      </aside>

      <aside className={styles.aside}>
        <h3>Vestidos de Dama</h3>
        <Image
          className={styles.image}
          src='/photos_collections_items/vestido_de_dama_ivana_beaumond.jpg'
          alt='Vestido de Dama'
          width={1080}
          height={1920}
        />
        <div className={styles.comments}>
          <p>Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!</p>
          <button><a href="">Descubra Agora <FaArrowRight /></a></button>
        </div>
      </aside>

    </section>
  )
}