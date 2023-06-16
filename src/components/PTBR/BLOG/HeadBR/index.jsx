import Image from 'next/image'
import styles from './styles.module.css'
import BlogContentBR from '../BlogContentBR'

export default function BlogHeadBR() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.dateArea}>
          <span className={styles.day}>29</span>
          <span className={styles.month}>Janeiro</span>
          <span className={styles.year}>2023</span>
        </div>

        <h1 className={styles.title}><span className={styles.titleTwo}>Ivana Beaumond</span><br /> é destaque na mídia com seu novo editorial no Pará</h1>
      </section>
      <BlogContentBR />
    </>
  )
}