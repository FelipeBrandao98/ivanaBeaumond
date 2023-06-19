import Image from 'next/image'

import styles from './styles.module.css'

export default function BlogInTheMedia() {
  return (
    <section className={styles.section}>
      <h4 className={styles.title}>Na mídia</h4>

      <div className={styles.postsArea}>
        <aside className={styles.post}>
          <h5 className={styles.postTitle}>Ivana Beaumond assina novo editorial de noivas em Paris</h5>
          <div className={styles.imageArea}>
            <Image
              className={styles.image}
              src={'/homeimage.jpg'}
              alt={'Ivana Beaumond'}
              width={'320'}
              height={'180'}
            />
            <p className={styles.imageDescription}>Soluta: quisquam aliquid.</p>
          </div>
          <p className={styles.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum </p>
          <div className={styles.seeMoreArea}>
            <button className={styles.seeMoreButton}>Leia Mais</button>
          </div>
          <p className={styles.date}>29/10/2015</p>
        </aside>

        <aside className={styles.post}>
          <h5 className={styles.postTitle}>Ivana Beaumond assina novo editorial de noivas em Paris</h5>
          <div className={styles.imageArea}>
            <Image
              className={styles.image}
              src={'/homeimage.jpg'}
              alt={'Ivana Beaumond'}
              width={'320'}
              height={'180'}
            />
            <p className={styles.imageDescription}>Soluta: quisquam aliquid.</p>
          </div>
          <p className={styles.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum </p>
          <div className={styles.seeMoreArea}>
            <button className={styles.seeMoreButton}>Leia Mais</button>
          </div>
          <p className={styles.date}>29/10/2015</p>
        </aside>
      </div>
    </section>
  )
}