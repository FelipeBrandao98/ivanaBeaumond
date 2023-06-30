import Image from 'next/image'

import Collections from './Collections'

import styles from './styles.module.css'

const data = [
  {
    id: 1,
    title: 'Coleção Debutantes',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem tempora. Quas, quisquam cum totam obcaecati architecto porro explicabo aliquid sequi inventore optio dolorum at nesciunt fuga modi aspernatur magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quisquam deleniti aspernatur ut tempora dolorem delectus? Odio dolorem corrupti ut ex accusamus totam cumque officiis consequuntur, sunt odit, pariatur adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, itaque impedit. Totam molestiae tempora possimus officiis. Nobis, aspernatur dolores consequuntur blanditiis ducimus amet provident labore quo, voluptate ipsa perferendis nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis, harum facere nam tempore nulla ducimus iure. Repellat odit, facere voluptatum repudiandae, in aut, sunt delectus itaque et ducimus earum.',
    imageUrl: '/photos_collections_items/debutant_banner_homepage/vestido_debutante_preto_ivana_beaumond.jpg',
  },
  {
    id: 2,
    title: 'Traje do Noivo',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem tempora. Quas, quisquam cum totam obcaecati architecto porro explicabo aliquid sequi inventore optio dolorum at nesciunt fuga modi aspernatur magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quisquam deleniti aspernatur ut tempora dolorem delectus? Odio dolorem corrupti ut ex accusamus totam cumque officiis consequuntur, sunt odit, pariatur adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, itaque impedit. Totam molestiae tempora possimus officiis. Nobis, aspernatur dolores consequuntur blanditiis ducimus amet provident labore quo, voluptate ipsa perferendis nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis, harum facere nam tempore nulla ducimus iure. Repellat odit, facere voluptatum repudiandae, in aut, sunt delectus itaque et ducimus earum.',
    imageUrl: '/photos_collections_items/suit_banner_homepage/terno_bege_homem_deitado_ivana_beaumond.jpg',
  },
  {
    id: 3,
    title: 'Vestido de Noiva',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem tempora. Quas, quisquam cum totam obcaecati architecto porro explicabo aliquid sequi inventore optio dolorum at nesciunt fuga modi aspernatur magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quisquam deleniti aspernatur ut tempora dolorem delectus? Odio dolorem corrupti ut ex accusamus totam cumque officiis consequuntur, sunt odit, pariatur adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, itaque impedit. Totam molestiae tempora possimus officiis. Nobis, aspernatur dolores consequuntur blanditiis ducimus amet provident labore quo, voluptate ipsa perferendis nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis, harum facere nam tempore nulla ducimus iure. Repellat odit, facere voluptatum repudiandae, in aut, sunt delectus itaque et ducimus earum.',
    imageUrl: '/homeimage.jpg',
  },
]

export default function MainPageCollections() {
  return (
    <>
      <section className={styles.section}>
        <Image
          className={styles.imageHeader}
          src={'/photos_collections_items/suit_banner_homepage/terno_bege_homem_deitado_ivana_beaumond.jpg'}
          alt='Ivana Beaumond'
          width={1920}
          height={1080}
        />
        <h1 className={styles.title}>Coleções</h1>
        <div className={styles.subTitle}>
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nam aliquam aperiam ipsam doloremque quo in eligendi magnam officia id dignissimos minima aliquid eveniet, sed excepturi veniam sint. Culpa, quis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus totam animi beatae nam tenetur eveniet doloribus distinctio fugiat, saepe porro minima cum? Consequuntur tempore architecto enim ullam atque eum velit.</h2>
          <h3>Ivana Beaumond ©</h3>
        </div>
      </section>
      <Collections data={data} />
    </>
  )
}