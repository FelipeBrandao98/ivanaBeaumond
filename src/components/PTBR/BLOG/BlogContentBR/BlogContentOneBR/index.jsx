import Image from 'next/image'

import styles from './styles.module.css'

export default function BlogContentOneBR() {
  return (
    <div className={styles.contentOne}>
      <p className={styles.contentOneText}><span className={styles.contentOneTextFirstLetter}>R</span>ealizado na Fazenda São Jerônimo, Ilha do Marajó-PA, lugar que foi palco da gravação de diversos realitys de sucesso, incluindo o “No Limite” da Rede Globo, Ivana explica sobre o porquê da escolha desse local e a relação entre a natureza e vestidos de noiva.</p>
      <Image
        src='/photos_blog/photo_blog_1.jpeg'
        alt='Foto Ivana Beaumond'
        width={1920}
        height={1080}
        className={styles.contentOneImage}
      />
    </div>
  )
}