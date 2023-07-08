import { BsFillTelephoneFill } from 'react-icons/bs'

import styles from './styles.module.css'

export default function AdressItem() {
  return (
    <section className={styles.container}>
      <aside className={styles.mapsArea}>
        <div className={styles.map}>
          <h1 className={styles.addressTitle}>Endereço Tijuca</h1>
          <p className={styles.address}>Rua Guapeni, 38 - Tijuca</p>

          <iframe
            className={styles.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14698.79757101161!2d-43.229718!3d-22.924456000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e411c8c41cd%3A0x70d0dc6e359f5768!2sIvana%20Beaumond%20Paris!5e0!3m2!1spt-BR!2sus!4v1688823790172!5m2!1spt-BR!2sus"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />

          <div className={styles.phoneArea}>
            <a className={styles.phone} href="">
              <BsFillTelephoneFill
                width={20}
                height={20}
              />
              (21) 2567-5507
            </a>
            <a className={styles.phone} href="">
              <BsFillTelephoneFill
                width={20}
                height={20}
              />
              (21) 3269-5507
            </a>
            <a className={styles.phone} href="">
              <BsFillTelephoneFill
                width={20}
                height={20}
              />
              (21) 3908-0750
            </a>
          </div>
        </div>

        <div className={styles.map}>
          <h1 className={styles.addressTitle}>Endereço Barra da Tijuca</h1>
          <p className={styles.address}>Estrada da Barra da Tijuca, 1636<br />Bloco D – Loja A – Shopping Itanhangá</p>
          <iframe
            className={styles.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14690.675906121283!2d-43.304241!3d-22.999197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd0ccbd775ee1%3A0x11145c1c43e46369!2sEstrada%20da%20Barra%20da%20Tijuca%2C%201636%20-%20Itanhang%C3%A1%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022641-003%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1688824036020!5m2!1spt-BR!2sus"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
          <div className={styles.phoneArea}>
            <a className={styles.phone} href="">
              <BsFillTelephoneFill
                width={20}
                height={20}
              />
              (21) 2491-0752
            </a>
            <a className={styles.phone} href="">
              <BsFillTelephoneFill
                width={20}
                height={20}
              />
              (21) 3738-0752
            </a>
          </div>
        </div>
      </aside>
    </section >
  )
}