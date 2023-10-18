'use client'

import { AuthContext } from '@/Context/AuthContext'
import { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {
  FiArchive,
  FiEdit,
  FiFilter,
  FiPlus,
  FiRefreshCcw,
  FiSearch,
  FiTrash2,
} from 'react-icons/fi'

import styles from './styles.module.css'
import { CollectionsCategoryContext } from '@/Context/CollectionsCategoryContext'

export default function CategoriesPage({ functions }) {
  const [
    categoriesCollectionsRepositories,
    setCategoriesCollectionsRepositories,
  ] = useState([])

  const [categoriesNewsRepositories, setCategoriesNewsRepositories] = useState(
    [],
  )

  const { getCategoriesCollections, getCategoriesNews } = functions

  const { token } = useContext(AuthContext)
  const { handleCategory } = useContext(CollectionsCategoryContext)

  const getRepo = useCallback(async () => {
    const categoriesCollections = await getCategoriesCollections(token)
    const categoriesNews = await getCategoriesNews(token)
    setCategoriesCollectionsRepositories(categoriesCollections)
    setCategoriesNewsRepositories(categoriesNews)
  }, [getCategoriesCollections, getCategoriesNews, token])

  useEffect(() => {
    getRepo(token)
  }, [getRepo, token])

  return (
    <>
      <h1>Categorias</h1>
      <section className={styles.container}>
        <aside className={styles.content}>
          <div>
            <div className={styles.optionsArea}>
              Todas as Categorias de Coleções{' '}
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
                  onClick={(e) => {
                    handleCategory({})
                  }}
                  href={'/ib-login/dashboard/categorias/novacategoriacolecao'}
                  className={styles.optionsButton}
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
                  <th>Editar Categoria</th>
                  <th>Foto de Capa</th>
                  <th>Título da Categoria</th>
                  <th>Descrição da Categoria</th>
                  <th>Excluir coleção</th>
                </tr>
              </thead>
              <tbody>
                {categoriesCollectionsRepositories.map((repo) => {
                  return (
                    <tr key={repo.id}>
                      <td>
                        <Link
                          onClick={(e) => {
                            handleCategory(repo)
                          }}
                          href={
                            '/ib-login/dashboard/categorias/novacategoriacolecao'
                          }
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
                      <td>{repo.description}</td>
                      <td>{repo.subdescription}</td>
                      <td>
                        {' '}
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            getRepo()
                          }}
                        >
                          <FiTrash2 width={40} height={40} />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div>
            <div className={styles.optionsArea}>
              Todas as Categorias de Notícias{' '}
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
                  href={'/ib-login/dashboard/categorias/novacategoriacolecao'}
                  className={styles.optionsButton}
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
                  <FiTrash2 width={40} height={40} />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    getRepo()
                  }}
                  className={styles.optionsButton}
                >
                  <FiArchive width={40} height={40} />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    getRepo()
                  }}
                  className={styles.optionsButton}
                >
                  <FiEdit width={40} height={40} />
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
                  <th>Nome da Categoria</th>
                </tr>
              </thead>
              <tbody>
                {categoriesNewsRepositories.map((repo) => {
                  return (
                    <tr key={repo.id}>
                      <td>{repo.description}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </aside>
      </section>
    </>
  )
}
