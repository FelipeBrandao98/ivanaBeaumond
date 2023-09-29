'use client'

import { AuthContext } from '@/Context/AuthContext'
import { useContext, useEffect, useState } from 'react'
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

export default function CollectionsPage({ functions }) {
  const [collectionsRepositories, setCollectionsRepositories] = useState([])

  const { getCollections } = functions
  const { token } = useContext(AuthContext)

  async function getRepo(token) {
    const collections = await getCollections(token)
    setCollectionsRepositories(collections)
  }

  useEffect(() => {
    getRepo(token)
  }, [])

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
                href={'/ib-login/dashboard/noticias/novanoticia'}
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
                <th>Foto de Capa</th>
                <th>Título da Coleção</th>
                <th>Descrição da Coleção</th>
                <th>Categoria da Coleção</th>
              </tr>
            </thead>
            <tbody>
              {console.log(collectionsRepositories)}
              {collectionsRepositories.map((repo) => {
                return (
                  <tr key={repo.id}>
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
                  </tr>
                )
              })}
            </tbody>
          </table>
        </aside>
      </section>
    </>
  )
}
