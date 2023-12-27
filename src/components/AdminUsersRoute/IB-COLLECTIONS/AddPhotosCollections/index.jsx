'use client'

// React imports
import { useCallback, useContext, useEffect, useState } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Icons imports
import { IoIosExpand } from 'react-icons/io'
import { FiTrash2, FiX } from 'react-icons/fi'

// Context imports
import { CollectionsContext } from '@/Context/CollectionsContext'
import { AuthContext } from '@/Context/AuthContext'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Styles imports
import styles from './styles.module.css'

// Atoms imports
import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'
import DashboardCancel from '@/atoms/AdminUsersRoute/Dashboard/DashboardCancel'

// API Calls imports
import getClotCol from '@/api/CallsWithoutToken/Collections/ClothesCollections/GET/getClotCol'
import deleteClothesImages from '@/api/CallsWithToken/Images/DELETE/deleteClothesImages'
import createClothesImages from '@/api/CallsWithToken/Images/POST/createClothesImages'
import createImage from '@/api/CallsWithToken/Images/POST/createImage'

const createImageFormSchema = z.object({
  file: z.any(),
})

// Component Declaration
export default function AddPhotosCollections() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { collections } = useContext(CollectionsContext)

  // States declaratios
  const [loading, setLoading] = useState(false)
  const [cancel, setCancel] = useState(false)
  const [resized, setResized] = useState(false)
  const [resizedImage, setResizedImage] = useState('')
  const [imagesRepositories, setImagesRepositories] = useState([])

  // Instance of Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(createImageFormSchema),
  })
  //

  // functions to handle with datas from api
  async function handleCreateImage(formData) {
    setLoading(true)
    const file = new FormData()
    file.set('file', formData.file[0])
    const res = await createImage(token, file)
    await createClothesImages(token, collections.id, res.id)
    getImagesCollectionsData(collections.id)
    setLoading(false)
  }

  const getImagesCollectionsData = useCallback(async () => {
    const res = await getClotCol(collections.id)
    setImagesRepositories(res)
  }, [collections.id])
  //

  async function handleDeleteClothesImage(token, imageId) {
    setLoading(true)
    await deleteClothesImages(token, imageId)
    getImagesCollectionsData()
    setLoading(false)
  }

  // Use Effects
  useEffect(() => {
    getImagesCollectionsData()
  }, [getImagesCollectionsData, collections.id])
  //

  // Return components, with functions to call API and language
  return (
    <>
      <h1>{collections.title}</h1>
      <DashboardContainer>
        <Image
          src={collections.cover.url}
          alt={'ivana'}
          width={800}
          height={800}
          className={styles.coverImage}
        />

        <div className={styles.listContent}>
          <div className={styles.sendFile}>
            <form
              className={styles.form}
              action={handleSubmit(handleCreateImage)}
            >
              <label htmlFor="file" className={styles.label}>
                <input
                  className={styles.input}
                  type="file"
                  id="file"
                  {...register('file')}
                />
              </label>
              <button type="submit" className={styles.sendButton}>
                Enviar Imagem
              </button>
            </form>
          </div>

          <div className={styles.fileList}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Editar Foto</th>
                  <th>Foto</th>
                  <th>Excluir Foto</th>
                </tr>
              </thead>
              <tbody className={styles.body}>
                {imagesRepositories
                  ? imagesRepositories.map((repo) => {
                      return (
                        <tr key={repo.id}>
                          <td></td>
                          <td>
                            {console.log(repo)}
                            <div
                              className={styles.imageArea}
                              onClick={(e) => {
                                setResized(true)
                                setResizedImage(repo.cover.url)
                              }}
                            >
                              <Image
                                width={300}
                                height={300}
                                src={repo.cover.url}
                                alt="Ivana"
                                className={styles.image}
                              />
                              <IoIosExpand
                                width={50}
                                height={50}
                                className={styles.expand}
                              />
                            </div>
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
                                message="Tem certeza que deseja excluir essa Fotografia? uma vez excluída, não é possível recuperar!"
                                href={handleDeleteClothesImage}
                                token={token}
                                id={repo.id}
                              />
                              <FiTrash2 width={40} height={40} />
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  : ''}
              </tbody>
            </table>
          </div>
        </div>
        {resized && (
          <section className={styles.resizedModalContainer}>
            <aside className={styles.resizedModalContent}>
              <FiX
                width={50}
                height={50}
                className={styles.resizedCloseButton}
                onClick={(e) => setResized(false)}
              />
              <Image
                width={1440}
                height={720}
                alt="Ivana"
                src={resizedImage}
                className={styles.resizedImage}
              />
            </aside>
          </section>
        )}
      </DashboardContainer>
      {loading && <DashboardLoading loading={loading} />}
    </>
  )
  //
}
