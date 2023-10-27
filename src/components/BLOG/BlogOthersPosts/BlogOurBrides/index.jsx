// Next.js Components imports
import Image from 'next/image'

// Icons imports
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function BlogOurBrides() {
  // Return components, with functions to call API and language
  return (
    <section className={styles.section}>
      <h4 className={styles.title}>Nossas Noivas</h4>

      <div className={styles.contentArea}>
        <div className={styles.fromLeftArea}>
          <button className={styles.fromLeftButton}>
            <FiArrowLeft
              className={styles.fromLeftImage}
              width={100}
              height={100}
            />
          </button>
        </div>

        <div className={styles.postsArea}>
          <aside className={styles.post}>
            <h5 className={styles.postTitle}>
              Ivana Beaumond assina novo editorial de noivas em Paris
            </h5>
            <div className={styles.imageArea}>
              <Image
                className={styles.image}
                src={'/homeimage.jpg'}
                alt={'Ivana Beaumond'}
                width={'320'}
                height={'180'}
              />
              <p className={styles.imageDescription}>
                Soluta: quisquam aliquid.
              </p>
            </div>
            <p className={styles.subTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum{' '}
            </p>
            <p className={styles.date}>29/10/2015</p>
            <div className={styles.seeMoreArea}>
              <button className={styles.seeMoreButton}>Leia Mais</button>
            </div>
          </aside>

          <aside className={styles.post}>
            <h5 className={styles.postTitle}>
              Ivana Beaumond assina novo editorial de noivas em Paris
            </h5>
            <div className={styles.imageArea}>
              <Image
                className={styles.image}
                src={'/homeimage.jpg'}
                alt={'Ivana Beaumond'}
                width={'320'}
                height={'180'}
              />
              <p className={styles.imageDescription}>
                Soluta: quisquam aliquid.
              </p>
            </div>
            <p className={styles.subTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum{' '}
            </p>
            <p className={styles.date}>29/10/2015</p>
            <div className={styles.seeMoreArea}>
              <button className={styles.seeMoreButton}>Leia Mais</button>
            </div>
          </aside>
        </div>

        <div className={styles.fromRightArea}>
          <button className={styles.fromRightButton}>
            <FiArrowRight
              className={styles.fromRightImage}
              width={100}
              height={100}
            />
          </button>
        </div>
      </div>
    </section>
  )
  //
}
