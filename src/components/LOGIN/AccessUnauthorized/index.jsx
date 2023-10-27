// Next.js Components imports
import { useRouter } from 'next/navigation'

// Icons imports
import { BsFillExclamationTriangleFill } from 'react-icons/bs'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function AccessUnauthorized() {
  // Instance of router
  const router = useRouter()

  // Return components, with functions to call API and language
  return (
    <>
      <section className={styles.container}>
        <aside className={styles.content}>
          <h1 className={styles.title}>
            Opa!
            <BsFillExclamationTriangleFill
              width={50}
              height={50}
              className={styles.icon}
            />
          </h1>

          <p className={styles.text}>
            Parece que você não está logado,
            <br />
            por favor faça login novamente clicando no botão abaixo!
          </p>

          <button
            onClick={(e) => {
              e.preventDefault()
              router.push('/ib-login')
            }}
            className={styles.button}
          >
            Fazer login novamente!
          </button>
        </aside>
      </section>
    </>
  )
  //
}
