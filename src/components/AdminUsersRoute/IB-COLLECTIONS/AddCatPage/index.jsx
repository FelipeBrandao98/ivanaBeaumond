'use client'

// React imports
import { useContext, useEffect, useState, useCallback } from 'react'

import {
  FiEdit,
  FiFilter,
  FiSearch,
  FiRefreshCcw,
  FiPlus,
  FiArchive,
  FiTrash2,
} from 'react-icons/fi'

import Link from 'next/link'
import Image from 'next/image'

import { CollectionsCatalogContext } from '@/Context/CollectionsCatalogContext'
import { AuthContext } from '@/Context/AuthContext'

// Styles imports
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'
import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'

export default function AddCatPage({ functions }) {
  const router = useRouter()

  const [catalog, setCatalog] = useState([])
  const [loading, setLoading] = useState(false)
  const [isDeleteCollection, setIsDeleteCollection] = useState(false)

  const { createCatalog, deleteCatalog, getCatalog } = functions
  const { collection, handleCollection } = useContext(CollectionsCatalogContext)
  const { token } = useContext(AuthContext)

  const getData = useCallback(async () => {
    const catalog = await getCatalog(token, collection.id)

    setCatalog(catalog)
  }, [token, collection.id, getCatalog])

  async function handleDeleteCatalog(catalogId) {
    setLoading(true)
    await deleteCatalog(token, catalogId)
    router.refresh()
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getData()
    setLoading(false)
  }, [getData])

  return (
    <>
      <DashboardMainTitle>
        Catálogo da coleção: <br />
        {collection.title}
      </DashboardMainTitle>
      <DashboardContainer>
        <div className={styles.optionsArea}>
          <div className={styles.optionsButtons}>
            <button
              onClick={(e) => {
                e.preventDefault()
                router.refresh()
              }}
              className={styles.optionsButton}
            >
              <FiRefreshCcw width={40} height={40} />
            </button>
            <Link
              href={'/ib-login/dashboard/colecoes/addcat'}
              className={styles.optionsButton}
              onClick={(e) => {}}
              legacyBehavior
            >
              <FiPlus width={40} height={40} />
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault()
              }}
              className={styles.optionsButton}
            >
              <FiArchive width={40} height={40} />
            </button>
          </div>
          <div className={styles.optionsButtons}>
            <button
              onClick={(e) => {
                e.preventDefault()
              }}
              className={styles.optionsButton}
            >
              <FiFilter width={40} height={40} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
              }}
              className={styles.optionsButton}
            >
              <FiSearch width={40} height={40} />
            </button>
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Editar Item</th>
              <th>Foto do Item</th>
              <th>Título do Item</th>
              <th>Coleção</th>
              <th>Likes</th>
              <th>Excluir Item</th>
            </tr>
          </thead>
          <tbody>
            {catalog.map((repo) => {
              return (
                <tr key={repo.id}>
                  <td>
                    <td>
                      <Link
                        href={'/ib-login/dashboard/colecoes/novacolecao'}
                        onClick={(e) => {}}
                        className={styles.editButton}
                        legacyBehavior
                      >
                        <FiEdit width={40} height={40} />
                      </Link>
                    </td>
                  </td>
                  <td>
                    <Image
                      className={styles.image}
                      src={repo.cover?.url || ''}
                      alt="Ivana"
                      width={1000}
                      height={1000}
                    />
                  </td>
                  <td>{repo.name}</td>
                  <td>{repo.collection.title}</td>
                  <td>{repo.likes}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setIsDeleteCollection(true)
                      }}
                    >
                      <FiTrash2 width={40} height={40} />
                    </button>
                    {isDeleteCollection && (
                      <section className={styles.confirmCancelModalContainer}>
                        <aside className={styles.confirmCancelModalContent}>
                          <h1 className={styles.confirmCancelModalTitle}>
                            Tem certeza que você deseja deletar essa notícia?
                          </h1>
                          <div className={styles.buttonsArea}>
                            <button
                              onClick={(e) => {
                                e.preventDefault()
                                setIsDeleteCollection(false)
                              }}
                              className={styles.cancelButtonModal}
                            >
                              Não
                            </button>
                            <button
                              className={styles.confirmButton}
                              onClick={(e) => {
                                e.preventDefault()
                                handleDeleteCatalog(repo.id)
                                setIsDeleteCollection(false)
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
      </DashboardContainer>

      <DashboardLoading loading={loading} />
    </>
  )
}
