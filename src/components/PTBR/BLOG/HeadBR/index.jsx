import styles from './styles.module.css'

export default function BlogHeadBR() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.dateArea}>
          <span className={styles.day}>29</span>
          <span className={styles.month}>Janeiro</span>
          <span className={styles.year}>2023</span>
        </div>

        <h1 className={styles.title}>Ivana Beaumond é destaque na mídia com seu novo editorial no Pará</h1>
      </section>
      <section>
        <aside>
          <div className={styles.contentOne}>
            <p>Realizado na Fazenda São Jerônimo, Ilha do Marajó-PA, lugar que foi palco da gravação de diversos realitys de sucesso, incluindo o “No Limite” da Rede Globo, Ivana explica sobre o porquê da escolha desse local e a relação entre a natureza e vestidos de noiva.</p>
          </div>
        </aside>
      </section>
    </>
  )
}