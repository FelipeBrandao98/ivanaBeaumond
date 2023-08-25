import Image from 'next/image'

import Collections from './Collections'

import styles from './styles.module.css'

export default function MainPageCollections({ data }) {
  return (
    <>
      <section className={styles.section}>
        <Image
          className={styles.imageHeader}
          src={
            '/photos_collections_items/suit_banner_homepage/terno_bege_homem_deitado_ivana_beaumond.jpg'
          }
          alt="Ivana Beaumond"
          width={1920}
          height={1080}
        />
        <h1 className={styles.title}>Coleções</h1>
        <div className={styles.subTitle}>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            nam aliquam aperiam ipsam doloremque quo in eligendi magnam officia
            id dignissimos minima aliquid eveniet, sed excepturi veniam sint.
            Culpa, quis. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Possimus totam animi beatae nam tenetur eveniet doloribus
            distinctio fugiat, saepe porro minima cum? Consequuntur tempore
            architecto enim ullam atque eum velit.
          </h2>
          <h3>Ivana Beaumond ©</h3>
        </div>
      </section>
      <Collections data={data} />
    </>
  )
}
