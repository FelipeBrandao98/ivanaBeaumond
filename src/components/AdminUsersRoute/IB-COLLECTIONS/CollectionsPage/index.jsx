'use client'

// React imports
import { useCallback, useContext, useEffect, useState } from 'react'

// Next.js Components imports
import Link from 'next/link'
import Image from 'next/image'

// Icons imports
import { FiEdit, FiFilter, FiSearch, FiTrash2 } from 'react-icons/fi'
import { BiPhotoAlbum } from 'react-icons/bi'

// Context imports
import { AuthContext } from '@/Context/AuthContext'
import { CollectionsContext } from '@/Context/CollectionsContext'
import { CollectionsCatalogContext } from '@/Context/CollectionsCatalogContext'
import { CreateImageCollectionContext } from '@/Context/CreateImageCollectionContext'

// Styles imports
import styles from './styles.module.css'

// Atoms imports
import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'
import DashboardTable from '@/atoms/AdminUsersRoute/Dashboard/DashboardTable'
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'
import DashboardCancel from '@/atoms/AdminUsersRoute/Dashboard/DashboardCancel'
import DashboardActionButtons from '@/atoms/AdminUsersRoute/Dashboard/DashboardActionButtons'

// Api imports
import getCollections from '@/api/CallsWithToken/Collections/GET/getCollections'
import deleteCollection from '@/api/CallsWithToken/Collections/DELETE/deleteCollection'
//

// Component Declaration
export default function CollectionsPage() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { handleCollections } = useContext(CollectionsContext)
  const { handleCollections: handleCatalog } = useContext(
    CollectionsCatalogContext,
  )
  const { handleChangeImage } = useContext(CreateImageCollectionContext)

  // States declaratios
  const [collectionsRepositories, setCollectionsRepositories] = useState([])
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)

  // functions to handle with datas from api
  const getRepo = useCallback(async () => {
    setLoading(true)
    const collections = await getCollections(token)
    setCollectionsRepositories(collections)
    setLoading(false)
  }, [token])

  async function handleDeleteCollection(token, id) {
    setLoading(true)
    await deleteCollection(token, id)
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
      <DashboardMainTitle isBack>Coleções</DashboardMainTitle>
      <DashboardContainer>
        <DashboardActionButtons
          title=""
          cleanContext={handleCollections}
          getRepo={getRepo}
          createLink={'/colecoes/novacolecao'}
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
              <th>Editar coleção</th>
              <th>Foto de Capa</th>
              <th>Título da Coleção</th>
              <th>Descrição da Coleção</th>
              <th>Categoria da Coleção</th>
              <th>Editar Fotos</th>
              <th>Catálogo</th>
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
                    <Link
                      href={'/ib-login/dashboard/colecoes/addcat'}
                      onClick={(e) => {
                        handleCatalog(repo)
                      }}
                    >
                      <BiPhotoAlbum width={100} height={100} />
                    </Link>
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
                        href={handleDeleteCollection}
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
