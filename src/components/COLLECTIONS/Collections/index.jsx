import Image from 'next/image'

import styles from './styles.module.css'

export default function Collections() {
  return (
    <section className={styles.section}>
      <aside className={styles.collection}>
        <div className={styles.contentArea}>
          <div className={styles.titleArea}>
            <h1 className={styles.title}>COLEÇÃO DEBUTANTES</h1>
          </div>
          <div className={styles.row}>
            <div className={styles.descriptionArea}>
              <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis minima id vel aperiam iusto quidem repellendus rem fuga, quo alias, totam voluptates commodi architecto at delectus laboriosam! Magnam, accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vitae eum similique neque sed provident ut magni pariatur, facere ipsam fugiat. Impedit libero minima maiores debitis rem possimus odio consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil ipsa enim est fugiat repellendus minima voluptas asperiores iste a dolores, molestias illo, odio, aperiam veniam aliquam! Earum, dolore officia?<br /> <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, ipsa soluta ea laudantium autem magnam nihil aspernatur et, cumque odit dolor eos mollitia voluptatibus totam! Odit, illo exercitationem! Laboriosam, voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, id deserunt molestias totam eveniet recusandae voluptatem expedita! Dolores nihil assumenda, officiis quo quae, hic necessitatibus adipisci, nobis itaque praesentium magnam.</p>
            </div>

          </div>
          <div className={styles.buttonArea}>
            <button className={styles.button}>
              SAIBA TUDO SOBRE A COLEÇÃO
            </button>
          </div>
        </div>
        <Image
          className={styles.image}
          src={'/photos_collections_items/debutant_banner_homepage/vestido_debutante_preto_ivana_beaumond.jpg'}
          alt='Ivana Beaumond'
          width={1920}
          height={1080}
        />
      </aside>
    </section>
  )
}