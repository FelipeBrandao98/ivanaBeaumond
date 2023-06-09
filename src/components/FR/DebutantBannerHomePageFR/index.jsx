import Image from 'next/image'
import { BsArrowThroughHeartFill } from 'react-icons/bs'

import styles from './styles.module.css'

export default function DebutantBannerHomePageFR() {
  return (
    <>
      <section className={styles.section}>
        <aside className={styles.aside}>
          <Image
            className={styles.image}
            src='/photos_collections_items/debutant_banner_homepage/vestido_debutante_preto_ivana_beaumond.jpg'
            alt='Vestido de Debutante Preto'
            width={1920}
            height={1080}
          />
          <div className={styles.description}>
            <BsArrowThroughHeartFill size={'1.5rem'} />
            <h1 className={styles.h1}>VESTIDOS DE DEBUTANTES</h1>
            <p className={styles.p}>&nbsp;&nbsp; Os vestidos da Ivana Beaumond são confeccionados com os materiais mais nobres e as técnicas mais sofisticadas, o que garante um caimento perfeito e uma qualidade incomparável.<br /> <br />&nbsp;&nbsp;As cores, os bordados e os detalhes são escolhidos com cuidado e precisão para que cada vestido seja exclusivo e reflita a personalidade e o estilo da debutante.</p>
          </div>
        </aside>
      </section>
    </>
  )
}