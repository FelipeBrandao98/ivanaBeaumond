import Image from 'next/image'
import img from '@/../public/photo_header/_ELC8701 2.jpg'
import styles from './styles.module.css'
import { FiX } from 'react-icons/fi'

export default function CommentModal({ children, setClose }) {
  return (
    <>
      <section className={styles.container}>
        <aside className={styles.content}>
          {children}
          <Image
            className={styles.image}
            src={img}
            alt="Ivana Beaumond"
            width={1080}
            height={1080}
          />
          <button className={styles.closeButton} onClick={setClose}>
            <FiX width={50} height={50} />
          </button>
        </aside>
      </section>
    </>
  )
}
