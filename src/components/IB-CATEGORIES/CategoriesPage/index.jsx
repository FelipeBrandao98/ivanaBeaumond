'use client'

// React imports
import { useCallback, useContext, useEffect, useState } from 'react'

// Next.js Components imports
import Link from 'next/link'
import Image from 'next/image'

// Icons imports
import { FiEdit, FiFilter, FiSearch, FiTrash2 } from 'react-icons/fi'

// Context imports
import { AuthContext } from '@/Context/AuthContext'
import { CollectionsCategoryContext } from '@/Context/CollectionsCategoryContext'
import { NewsCategoryContext } from '@/Context/NewsCategoryContext'

// Styles imports
import styles from './styles.module.css'

// Atoms imports
import DashboardContainer from '@/atoms/Dashboard/DashboardContainer'
import DashboardMainTitle from '@/atoms/Dashboard/DashboardMainTitle'
import DashboardTable from '@/atoms/Dashboard/DashboardTable'
import DashboardCancel from '@/atoms/Dashboard/DashboardCancel'
import DashboardLoading from '@/atoms/Dashboard/DashboardLoading'
import DashboardActionButtons from '@/atoms/Dashboard/DashboardActionButtons'
//

import getCategoryCollections from '@/api/getCategoryCollections'
import getCategoryNews from '@/api/getCategoryNews'
import deleteCategoryCollection from '@/api/deleteCategoryCollection'
import deleteCategoryNews from '@/api/deleteCategoryNews'

// Component Declaration
export default function CategoriesPage() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { handleCategory: handleCatNews } = useContext(NewsCategoryContext)
  const { handleCategory: HandleCatCollections } = useContext(
    CollectionsCategoryContext,
  )

  // States declaratios
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)
  const [
    categoriesCollectionsRepositories,
    setCategoriesCollectionsRepositories,
  ] = useState([])
  const [categoriesNewsRepositories, setCategoriesNewsRepositories] = useState(
    [],
  )

  // functions to handle with datas from api
  const getRepo = useCallback(async () => {
    setLoading(true)
    const categoriesCollections = await getCategoryCollections(token)
    const categoriesNews = await getCategoryNews(token)
    setCategoriesCollectionsRepositories(categoriesCollections)
    setCategoriesNewsRepositories(categoriesNews)
    setLoading(false)
  }, [token])
  //

  async function handleDeleteCategorieCollection(token, id) {
    setLoading(true)
    await deleteCategoryCollection(token, id)
    getRepo(token)
    setLoading(false)
  }

  async function handleDeleteCategorieNews(token, id) {
    setLoading(true)
    await deleteCategoryNews(token, id)
    getRepo(token)
    setLoading(false)
  }

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
        <DashboardActionButtons
          title="Categorias de Coleções"
          cleanContext={HandleCatCollections}
          getRepo={getRepo}
          createLink={'/categorias/novacategoriacolecao'}
        />

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

        <DashboardTable>
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
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setCancel(!cancel)
                      }}
                    >
                      <DashboardCancel
                        cancel={cancel}
                        setCancel={setCancel}
                        message="Tem certeza que deseja excluir essa notícia? uma vez excluída, não é possível recuperar!"
                        href={handleDeleteCategorieCollection}
                        token={token}
                        id={repo.id}
                      />
                      <FiTrash2 width={40} height={40} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </DashboardTable>

        <hr />

        <DashboardActionButtons
          title="Categorias de Notícias"
          cleanContext={handleCatNews}
          getRepo={getRepo}
          createLink={'/categorias/novacategorianoticia'}
        />

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

        <DashboardTable>
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
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setCancel(!cancel)
                      }}
                    >
                      <DashboardCancel
                        cancel={cancel}
                        setCancel={setCancel}
                        message="Tem certeza que deseja excluir essa notícia? uma vez excluída, não é possível recuperar!"
                        href={handleDeleteCategorieNews}
                        token={token}
                        id={repo.id}
                      />
                      <FiTrash2 width={40} height={40} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </DashboardTable>
      </DashboardContainer>

      <DashboardLoading loading={loading} />
    </>
  )
  //
}
