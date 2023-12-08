'use client'

// React imports
import { useCallback, useContext, useEffect, useState } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Icons imports
import { IoIosExpand } from 'react-icons/io'
import { FiX } from 'react-icons/fi'

// Context imports
import { CollectionsContext } from '@/Context/CollectionsContext'
import { AuthContext } from '@/Context/AuthContext'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Styles imports
import styles from './styles.module.css'
import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'

const createImageFormSchema = z.object({
  file: z.any(),
})

// Component Declaration
export default function AddPhotosCollections({ functions }) {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { collections } = useContext(CollectionsContext)

  // States declaratios
  const [loading, setLoading] = useState(false)
  const [resized, setResized] = useState(false)
  const [resizedImage, setResizedImage] = useState('')
  const [imagesRepositories, setImagesRepositories] = useState([])

  // Desestructured functions to call api
  const { createImagesCollections, getImagesCollections } = functions

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
    const res = await createImagesCollections(token, file, collections.id)
    getImagesCollectionsData(collections.id)
    setLoading(false)
  }

  const getImagesCollectionsData = useCallback(async () => {
    const res = await getImagesCollections(collections.id)
    setImagesRepositories(res)
  }, [collections.id, getImagesCollections])
  //

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
                {imagesRepositories.map((repo) => {
                  return (
                    <tr key={repo.id}>
                      <td></td>
                      <td>
                        <div
                          className={styles.imageArea}
                          onClick={(e) => {
                            setResized(true)
                            setResizedImage(repo.url)
                          }}
                        >
                          <Image
                            width={300}
                            height={300}
                            src={repo.url}
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
                      <td></td>
                    </tr>
                  )
                })}
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
      {loading && <DashboardLoading />}
    </>
  )
  //
}
