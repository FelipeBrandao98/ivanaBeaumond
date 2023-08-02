import Image from 'next/image'
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'

import styles from './styles.module.css'

export default function Deposition() {
  return (
    <aside className={styles.container}>
      <div className={styles.avatarArea}>
        <Image
          className={styles.avatar}
          src={'/avatar.jpg'}
          width={100}
          height={100}
          alt='Ivana Beaumond'
        />
        <p className={styles.avatarName}>John Maynard Keynes</p>
      </div>

      <div className={styles.classificationArea}>
        <AiOutlineStar
          className={styles.star}
          width={50}
          height={50}
        />
        <AiOutlineStar
          className={styles.star}
          width={50}
          height={50}
        />
        <AiOutlineStar
          className={styles.star}
          width={50}
          height={50}
        />
        <AiOutlineStar
          className={styles.star}
          width={50}
          height={50}
        />
        <AiOutlineStar
          className={styles.star}
          width={50}
          height={50}
        />
      </div>

      <div className={styles.depositionArea}>
        <p className={styles.deposition}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ullam id labore neque inventore animi? At nisi quibusdam sit quia, nesciunt voluptates exercitationem ipsam? Incidunt deleniti ullam nam animi explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe impedit voluptatum deserunt sapiente hic recusandae rem quae, vitae inventore molestiae iusto similique laboriosam nesciunt odio, perspiciatis aut beatae, nobis quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse ad sequi tenetur odio. Vitae quam at, libero ad magnam temporibus odit laboriosam consequuntur ipsam placeat sit quas error labore!</p>
      </div>

      <div className={styles.dateArea}>
        <p className={styles.date}>21/02/23</p>
      </div>

      <div className={styles.likeArea}>
        <AiOutlineHeart
          className={styles.heart}
          width={50}
          height={50}
        />
        <p className={styles.numberOfLike}>1</p>
      </div>
    </aside >
  )
}