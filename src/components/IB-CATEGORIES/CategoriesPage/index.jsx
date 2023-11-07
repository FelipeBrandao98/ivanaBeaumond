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

// Context imports
import { AuthContext } from '@/Context/AuthContext'
import { CollectionsCategoryContext } from '@/Context/CollectionsCategoryContext'
import { NewsCategoryContext } from '@/Context/NewsCategoryContext'

// Styles imports
import styles from './styles.module.css'
import DashboardContainer from '@/atoms/DashboardContainer'
import DashboardMainTitle from '@/atoms/DashboardMainTitle'

// Component Declaration
export default function CategoriesPage({ functions }) {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { handleCategory: handleCatNews } = useContext(NewsCategoryContext)
  const { handleCategory: HandleCatCollections } = useContext(
    CollectionsCategoryContext,
  )

  // States declaratios
  const [
    categoriesCollectionsRepositories,
    setCategoriesCollectionsRepositories,
  ] = useState([])
  const [categoriesNewsRepositories, setCategoriesNewsRepositories] = useState(
    [],
  )

  // Desestructured functions to call api
  const { getCategoriesCollections, getCategoriesNews } = functions

  // functions to handle with datas from api
  const getRepo = useCallback(async () => {
    const categoriesCollections = await getCategoriesCollections(token)
    const categoriesNews = await getCategoriesNews(token)
    setCategoriesCollectionsRepositories(categoriesCollections)
    setCategoriesNewsRepositories(categoriesNews)
  }, [getCategoriesCollections, getCategoriesNews, token])
  //

  // Use Effects
  useEffect(() => {
    getRepo(token)
  }, [getRepo, token])
  //

  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMainTitle>Categorias</DashboardMainTitle>
      <DashboardContainer>
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
                  HandleCatCollections({})
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
                          HandleCatCollections(repo)
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
                href={'/ib-login/dashboard/categorias/novacategorianoticia'}
                className={styles.optionsButton}
                onClick={(e) => {
                  handleCatNews({})
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
                <th>Editar Categoria</th>
                <th>Nome da Categoria</th>
                <th>Excluir coleção</th>
              </tr>
            </thead>
            <tbody>
              {categoriesNewsRepositories.map((repo) => {
                return (
                  <tr key={repo.id}>
                    <td>
                      <Link
                        onClick={(e) => {
                          handleCatNews(repo)
                        }}
                        href={
                          '/ib-login/dashboard/categorias/novacategorianoticia'
                        }
                      >
                        <FiEdit width={40} height={40} />
                      </Link>
                    </td>
                    <td>{repo.description}</td>
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
      </DashboardContainer>
    </>
  )
  //
}
