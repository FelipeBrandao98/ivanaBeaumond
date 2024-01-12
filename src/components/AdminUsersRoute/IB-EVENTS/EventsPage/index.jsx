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

// Atoms imports
import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'
import DashboardTable from '@/atoms/AdminUsersRoute/Dashboard/DashboardTable'
import DashboardCancel from '@/atoms/AdminUsersRoute/Dashboard/DashboardCancel'
import DashboardActionButtons from '@/atoms/AdminUsersRoute/Dashboard/DashboardActionButtons'

// Api imports
import getNews from '@/api/CallsWithToken/News/GET/getNews'
import deleteNews from '@/api/CallsWithToken/News/DELETE/deleteNews'
import getEvents from '@/api/CallsWithToken/Events/GET/getEvents'
import { EventesContext } from '@/Context/EventsContext'
import { CreateImageEventsContext } from '@/Context/CreateImageEventsContext'

// Component Declaration
export default function EventsPage() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { handleEvents } = useContext(EventesContext)
  const { handleChangeImage } = useContext(CreateImageEventsContext)

  // States declaratios
  const [eventsRepositories, setEventsRepositories] = useState([])
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)

  // functions to handle with datas from api
  const getRepo = useCallback(async () => {
    setLoading(true)
    const events = await getEvents(token)
    setEventsRepositories(events)
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
      <DashboardMainTitle isBack>Eventos</DashboardMainTitle>
      <DashboardContainer>
        <DashboardActionButtons
          title=""
          cleanContext={handleEvents}
          getRepo={getRepo}
          createLink={'/eventos/novoevento'}
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

              <th>Data de Publicação</th>

              <th>Deletar Notícia</th>
            </tr>
          </thead>
          <tbody>
            {eventsRepositories.map((repo) => {
              return (
                <tr key={repo.id}>
                  <td>
                    <Link
                      href={'/ib-login/dashboard/eventos/novoevento'}
                      onClick={(e) => {
                        handleEvents(repo)
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
