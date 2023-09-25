'use client'

import { AuthContext } from '@/Context/AuthContext'
import { useContext, useEffect, useState } from 'react'

import ReactCountryFlag from 'react-country-flag'

import styles from './styles.module.css'
import Link from 'next/link'

export default function CreateNewsPage({ functions }) {
  const [tab, setTab] = useState('pt-BR')
  const [categories, setCategories] = useState([])
  const [cancel, setCancel] = useState(false)

  const { token } = useContext(AuthContext)
  const { createNews, getCategories } = functions

  async function postNews(token) {
    const news = await createNews(token, createNews)
  }

  async function getCat() {
    const res = await getCategories()
    setCategories(res)
  }

  useEffect(async () => {
    await getCat()
  }, [])

  function handleCancelModal() {
    setCancel(!cancel)
  }

  return (
    <>
      <h1>Nova Notícia</h1>
      <section className={styles.container}>
        <aside className={styles.content}>
          <div className={styles.tabArea}>
            <button
              className={`${
                tab === 'pt-BR' ? styles.tabActive : styles.tabInactive
              }`}
              onClick={(e) => {
                e.preventDefault()
                setTab('pt-BR')
              }}
            >
              Português <ReactCountryFlag countryCode="BR" svg />
            </button>
            <button
              className={`${
                tab === 'de' ? styles.tabActive : styles.tabInactive
              }`}
              onClick={(e) => {
                e.preventDefault()
                setTab('de')
              }}
            >
              Alemão <ReactCountryFlag countryCode="DE" svg />
            </button>
            <button
              className={`${
                tab === 'fr' ? styles.tabActive : styles.tabInactive
              }`}
              onClick={(e) => {
                e.preventDefault()
                setTab('fr')
              }}
            >
              Francês <ReactCountryFlag countryCode="FR" svg />
            </button>
            <button
              className={`${
                tab === 'en' ? styles.tabActive : styles.tabInactive
              }`}
              onClick={(e) => {
                e.preventDefault()
                setTab('en')
              }}
            >
              Inglês <ReactCountryFlag countryCode="US" svg />
            </button>
          </div>
          {tab === 'pt-BR' ? (
            <h1 className={styles.title}>
              Notícia em Português <ReactCountryFlag countryCode="BR" svg />
            </h1>
          ) : tab === 'de' ? (
            <h1 className={styles.title}>
              Notícia em Alemão <ReactCountryFlag countryCode="DE" svg />
            </h1>
          ) : tab === 'fr' ? (
            <h1 className={styles.title}>
              Notícia em Francês <ReactCountryFlag countryCode="FR" svg />
            </h1>
          ) : tab === 'en' ? (
            <h1 className={styles.title}>
              Notícia em Inglês <ReactCountryFlag countryCode="US" svg />
            </h1>
          ) : (
            ''
          )}
          <form>
            <label htmlFor="categories" className={styles.labelCategory}>
              Categoria da Notícia
              <select
                id="categories"
                name="categories"
                className={styles.select}
                required
              >
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.description}
                    </option>
                  )
                })}
              </select>
            </label>
            <label htmlFor="search-email" className={styles.labelImage}>
              Foto de Capa
              <input type="file" className={styles.input} />
            </label>
            <div
              className={`${
                tab === 'pt-BR' ? styles.ptActive : styles.ptInactive
              }`}
            >
              <label htmlFor="search-email" className={styles.label}>
                Crédito da Foto
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Título da Notícia
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Subtítulo da Notícia
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Corpo da Notícia
                <input type="textarea" className={styles.inputExpanded} />
              </label>
            </div>
            <div
              className={`${
                tab === 'de' ? styles.deActive : styles.deInactive
              }`}
            >
              <label htmlFor="search-email" className={styles.label}>
                Crédito da Foto
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Título da Notícia
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Subtítulo da Notícia
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Corpo da Notícia
                <input type="text" className={styles.inputExpanded} />
              </label>
            </div>
            <div
              className={`${
                tab === 'fr' ? styles.frActive : styles.frInactive
              }`}
            >
              <label htmlFor="search-email" className={styles.label}>
                Crédito da Foto
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Título da Notícia
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Subtítulo da Notícia
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Corpo da Notícia
                <input type="text" className={styles.inputExpanded} />
              </label>
            </div>
            <div
              className={`${
                tab === 'en' ? styles.enActive : styles.enInactive
              }`}
            >
              <label htmlFor="search-email" className={styles.label}>
                Crédito da Foto
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Título da Notícia
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Subtítulo da Notícia
                <input type="text" className={styles.input} />
              </label>
              <label htmlFor="search-email" className={styles.label}>
                Corpo da Notícia
                <input type="text" className={styles.inputExpanded} />
              </label>
            </div>
          </form>
          <div className={styles.formButtonsArea}>
            <button
              className={styles.cancelButton}
              onClick={(e) => {
                e.preventDefault()
                handleCancelModal()
              }}
            >
              Cancelar
            </button>
            <button className={styles.submitButton} type="submit">
              Criar Notícia
            </button>
          </div>
        </aside>
      </section>
      {cancel && (
        <section className={styles.confirmCancelModalContainer}>
          <aside className={styles.confirmCancelModalContent}>
            <h1 className={styles.confirmCancelModalTitle}>
              Tem certeza que você deseja cancelar?
            </h1>
            <div className={styles.buttonsArea}>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleCancelModal()
                }}
                className={styles.cancelButtonModal}
              >
                Não
              </button>
              <Link
                className={styles.cancelButton}
                href={'/ib-login/dashboard/noticias'}
              >
                Cancelar
              </Link>
            </div>
          </aside>
        </section>
      )}
    </>
  )
}
