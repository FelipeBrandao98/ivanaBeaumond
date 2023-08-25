import Link from 'next/link'

import Deposition from './Deposition'

import styles from './styles.module.css'

export default function DepositionsArea({ data }) {
  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>
        VEJA AQUI O QUE NOSSOS CLIENTES ESTÃO FALANDO DE NOSSA LOJA!
      </h1>
      <div className={styles.row}>
        {data.map((deposition) => {
          return <Deposition key={deposition.id} data={deposition} />
        })}
      </div>
      <Link className={styles.seeMoreButton} href={'pt-BR/comentarios'}>
        Mais Comentários
      </Link>
    </section>
  )
}
