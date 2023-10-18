'use client'

import { AuthContext } from '@/Context/AuthContext'
import { CollectionsContext } from '@/Context/CollectionsContext'
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
import { BiPhotoAlbum } from 'react-icons/bi'
import { AiOutlineLoading } from 'react-icons/ai'

import styles from './styles.module.css'
import { CreateImageCollectionContext } from '@/Context/CreateImageCollectionContext'

export default function CollectionsPage({ functions }) {
  const [collectionsRepositories, setCollectionsRepositories] = useState([])
  const [isDeleteCollection, setIsDeleteCollection] = useState(false)
  const [loading, setLoading] = useState(false)

  const { getCollections, deleteCollection } = functions
  const { token } = useContext(AuthContext)
  const { handleCollections } = useContext(CollectionsContext)
  const { handleChangeImage } = useContext(CreateImageCollectionContext)

  const getRepo = useCallback(async () => {
    const collections = await getCollections(token)
    setCollectionsRepositories(collections)
  }, [getCollections, token])

  async function handleDeleteCollection(token, id) {
    setLoading(true)
    await deleteCollection(token, id)
    setLoading(false)
    setIsDeleteCollection(false)
    getRepo(token)
  }

  useEffect(() => {
    getRepo(token)
  }, [getRepo, token])

  return (
    <>
      <h1>Coleções</h1>
      <section className={styles.container}>
        <aside className={styles.content}>
          <div className={styles.optionsArea}>
            Todas as Coleções{' '}
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
                href={'/ib-login/dashboard/colecoes/novacolecao'}
                className={styles.optionsButton}
                onClick={(e) => {
                  handleCollections({})
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
                <th>Editar coleção</th>
                <th>Foto de Capa</th>
                <th>Título da Coleção</th>
                <th>Descrição da Coleção</th>
                <th>Categoria da Coleção</th>
                <th>Editar Fotos</th>
                <th>Excluir coleção</th>
              </tr>
            </thead>
            <tbody>
              {collectionsRepositories.map((repo) => {
                return (
                  <tr key={repo.id}>
                    <td>
                      <td>
                        <Link
                          href={'/ib-login/dashboard/colecoes/novacolecao'}
                          onClick={(e) => {
                            handleCollections(repo)
                            handleChangeImage({})
                          }}
                          className={styles.editButton}
                        >
                          <FiEdit width={40} height={40} />
                        </Link>
                      </td>
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
                    <td>{repo.description}</td>
                    <td>{repo.category.description}</td>
                    <td>
                      <Link
                        href={'/ib-login/dashboard/colecoes/addimagens'}
                        onClick={(e) => {
                          handleCollections(repo)
                        }}
                      >
                        <BiPhotoAlbum width={100} height={100} />
                      </Link>
                    </td>
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
                                  handleDeleteCollection(token, repo.id)
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
}
