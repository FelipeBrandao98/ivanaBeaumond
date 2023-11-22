import Image from 'next/image'

// Styles imports
import styles from './styles.module.css'

export default function NewsSubtitle({ lang, content }) {
  const { text, imageUrl, imageCredit } = content

  return (
    <div className={styles.content}>
      <p className={styles.text}>
        <span className={styles.firstLetter}>{text[0]}</span>
        {text.substring(1)}
      </p>
      <div className={styles.imageArea}>
        <Image
          src={imageUrl}
          alt={imageCredit}
          width={1920}
          height={1080}
          className={styles.image}
        />
        <p className={styles.imageDescription}>{imageCredit}</p>
      </div>
    </div>
  )
}
