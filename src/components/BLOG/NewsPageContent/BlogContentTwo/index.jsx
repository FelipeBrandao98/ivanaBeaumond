// Next.js Components imports
import Image from 'next/image'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function BlogContentTwo() {
  // Return components, with functions to call API and language
  return (
    <div className={styles.contentTwo}>
      <div className={styles.contentTwoTextArea}>
        <p className={styles.contentTwoText}>
          <span className={styles.contentTwoFiristLetter}>N</span>
          adar com búfalos, atravessar igarapés e explorar este denso pedaço da
          selva amazônica, foram uma das dificuldades que Ivana Beaumond e sua
          equipe enfrentaram a fim de realizar mais um editorial exclusivo.
        </p>
      </div>

      <div className={styles.contentTwoImagesArea}>
        <div className={styles.contentTwoImageAreaOne}>
          <Image
            className={styles.contentTwoImageOne}
            width={1920}
            height={1080}
            alt={'Ivana Beaumon'}
            src={'/photos_blog/photo_blog_3.jpg'}
          />
          <p className={styles.contentTwoImageDescriptionOne}>
            Soluta quisquam aliquid, dolor harum unde! Nihil.
          </p>
        </div>
        <div className={styles.contentTwoImageAreaTwo}>
          <Image
            className={styles.contentTwoImageTwo}
            width={1920}
            height={1080}
            alt={'Ivana Beaumon'}
            src={'/photos_blog/photo_blog_2.jpg'}
          />
          <p className={styles.contentTwoImageDescriptionTwo}>
            Lorem ipsum, dolor sit amet
          </p>
        </div>
      </div>
    </div>
  )
  //
}
