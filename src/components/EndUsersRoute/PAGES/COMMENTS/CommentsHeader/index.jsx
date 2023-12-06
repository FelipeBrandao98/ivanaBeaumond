// Next.js Components imports
import Image from 'next/image'

// Styles imports
import styles from './styles.module.css'

// Atoms imports
import PageHeader from '@/atoms/EndUsersRoute/PageHeader'

// Component Declaration
export default function CommentsHeader() {
  // Return components, with functions to call API and language
  return (
    <>
      <PageHeader>
        <Image
          className={styles.imageHeader}
          src={'/ivana-beaumond-event-homepage.jpg'}
          alt="Ivana Beaumond"
          width={1920}
          height={1080}
        />
        <h1 className={styles.title}>Comentários</h1>
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
      </PageHeader>
    </>
  )
  //
}
