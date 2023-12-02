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
import { NewsContext } from '@/Context/NewsContext'
import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

// Manipulate strings imports
import { format } from 'date-fns'

// Styles imports
import styles from './styles.module.css'
import DashboardContainer from '@/atoms/Dashboard/DashboardContainer'
import DashboardLoading from '@/atoms/Dashboard/DashboardLoading'
import DashboardMainTitle from '@/atoms/Dashboard/DashboardMainTitle'
import DashboardTable from '@/atoms/Dashboard/DashboardTable'
import DashboardCancel from '@/atoms/Dashboard/DashboardCancel'
import DashboardActionButtons from '@/atoms/Dashboard/DashboardActionButtons'

// Api imports
import getNews from '@/api/CallsWithToken/getNews'

// Component Declaration
export default function NewsPage() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { handleNews } = useContext(NewsContext)
  const { handleChangeImage } = useContext(CreateImageNewsContext)

  // States declaratios
  const [newsRepositories, setNewsRepositories] = useState([])
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)

  // functions to handle with datas from api
  const getRepo = useCallback(async () => {
    setLoading(true)
    const news = await getNews(token)
    setNewsRepositories(news)
    setLoading(false)
  }, [token])

  async function handleDeleteNews(token, id) {
    setLoading(true)
    await deleteNews(token, id)
    setLoading(false)
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
      <DashboardMainTitle>Notícias</DashboardMainTitle>
      <DashboardContainer>
        <DashboardActionButtons
          title=""
          cleanContext={handleNews}
          getRepo={getRepo}
          createLink={'/noticias/novanoticia'}
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
                      legacyBehavior
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
                        setCancel(!cancel)
                      }}
                    >
                      <DashboardCancel
                        cancel={cancel}
                        setCancel={setCancel}
                        message="Tem certeza que deseja excluir essa notícia? uma vez excluída, não é possível recuperar!"
                        href={handleDeleteNews}
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
