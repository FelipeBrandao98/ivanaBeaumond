'use client'

// React imports
import { useCallback, useContext, useEffect, useState } from 'react'

// Next.js Components imports
import Link from 'next/link'
import Image from 'next/image'

// Icons imports
import {
  FiArchive,
  FiEdit,
  FiFilter,
  FiPlus,
  FiRefreshCcw,
  FiSearch,
  FiTrash2,
} from 'react-icons/fi'
import { AiOutlineLoading } from 'react-icons/ai'

// Context imports
import { AuthContext } from '@/Context/AuthContext'
import { NewsContext } from '@/Context/NewsContext'
import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

// Manipulate strings imports
import { format } from 'date-fns'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function NewsPage({ functions }) {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { handleNews } = useContext(NewsContext)
  const { handleChangeImage } = useContext(CreateImageNewsContext)

  // States declaratios
  const [newsRepositories, setNewsRepositories] = useState([])
  const [isDeleteNews, setIsDeleteNews] = useState(false)
  const [loading, setLoading] = useState(false)

  // Desestructured functions to call api
  const { getNews, deleteNews } = functions

  // functions to handle with datas from api
  const getRepo = useCallback(async () => {
    const news = await getNews(token)
    setNewsRepositories(news)
  }, [getNews, token])

  async function handleDeleteNews(token, id) {
    setLoading(true)
    await deleteNews(token, id)
    setLoading(false)
    setIsDeleteNews(false)
    getRepo(token)
  }
  //

  // Use Effects
  useEffect(() => {
    getRepo(token)
  }, [getRepo, token])
  //

  // Return components, with functions to call API and language
  return (
    <>
      <h1>Notícias</h1>
      <section className={styles.container}>
        <aside className={styles.content}>
          <div className={styles.optionsArea}>
            Todas as notícias{' '}
            <div className={styles.optionsButtons}>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  getRepo()
                }}
                className={styles.optionsButton}
              >
                <FiRefreshCcw width={40} height={40} />
              </button>
              <Link
                href={'/ib-login/dashboard/noticias/novanoticia'}
                className={styles.optionsButton}
                onClick={(e) => {
                  handleNews({})
                  handleChangeImage({})
                }}
              >
                <FiPlus width={40} height={40} />
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  getRepo()
                }}
                className={styles.optionsButton}
              >
                <FiArchive width={40} height={40} />
              </button>
            </div>
          </div>
          <div className={styles.optionsButtons}>
            <button
              onClick={(e) => {
                e.preventDefault()
                getRepo()
              }}
              className={styles.optionsButton}
            >
              <FiFilter width={40} height={40} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                getRepo()
              }}
              className={styles.optionsButton}
            >
              <FiSearch width={40} height={40} />
            </button>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Editar Notícia</th>
                <th>Foto de Capa</th>
                <th>Título da Notícia</th>
                <th>Categoria</th>
                <th>Data de Publicação</th>
                <th>Deletar Notícia</th>
              </tr>
            </thead>
            <tbody>
              {newsRepositories.map((repo) => {
                return (
                  <tr key={repo.id}>
                    <td>
                      <Link
                        href={'/ib-login/dashboard/noticias/novanoticia'}
                        onClick={(e) => {
                          handleNews(repo)
                          handleChangeImage({})
                        }}
                        className={styles.editButton}
                      >
                        <FiEdit width={40} height={40} />
                      </Link>
                    </td>
                    <td>
                      <Image
                        width={200}
                        height={100}
                        src={repo.cover ? repo.cover.url : ''}
                        alt={repo.cover ? repo.cover.author : ''}
                        className={styles.image}
                      />
                    </td>
                    <td>{repo.title}</td>
                    <td>{repo.category.description}</td>
                    <td>
                      {format(new Date(repo.publishDate), "dd'/'MM'/'yyyy")}
                    </td>
                    <td>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          setIsDeleteNews(true)
                        }}
                      >
                        <FiTrash2 width={40} height={40} />
                      </button>
                      {isDeleteNews && (
                        <section className={styles.confirmCancelModalContainer}>
                          <aside className={styles.confirmCancelModalContent}>
                            <h1 className={styles.confirmCancelModalTitle}>
                              Tem certeza que você deseja deletar essa notícia?
                            </h1>
                            <div className={styles.buttonsArea}>
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  setIsDeleteNews(false)
                                }}
                                className={styles.cancelButtonModal}
                              >
                                Não
                              </button>
                              <button
                                className={styles.confirmButton}
                                onClick={(e) => {
                                  e.preventDefault()
                                  handleDeleteNews(token, repo.id)
                                }}
                              >
                                Sim
                              </button>
                            </div>
                          </aside>
                        </section>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </aside>
      </section>
      {loading && (
        <section className={styles.loadingContainer}>
          <aside className={styles.loadingContent}>
            Enviando dados...{' '}
            <AiOutlineLoading
              width={100}
              height={100}
              className={styles.loading}
            />
          </aside>
        </section>
      )}
    </>
  )
  //
}
