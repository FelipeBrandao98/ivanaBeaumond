'use client'

import { CollectionsContext } from '@/Context/CollectionsContext'
import { AuthContext } from '@/Context/AuthContext'

import { AiOutlineLoading } from 'react-icons/ai'

import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './styles.module.css'

const createImageFormSchema = z.object({
  file: z.any(),
})

export default function AddPhotosCollections({ functions }) {
  const [loading, setLoading] = useState(false)
  const [imagesRepositories, setImagesRepositories] = useState([])

  const { token } = useContext(AuthContext)
  const { collections, handleCollections } = useContext(CollectionsContext)

  const { createImagesCollections, getImagesCollections } = functions

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(createImageFormSchema),
  })

  async function handleCreateImage(formData) {
    setLoading(true)
    const file = new FormData()
    file.set('file', formData.file[0])
    const res = await createImagesCollections(token, file, collections.id)
    getImagesCollectionsData(collections.id)
    setLoading(false)
  }

  async function getImagesCollectionsData(id) {
    const res = await getImagesCollections(id)
    setImagesRepositories(res)
  }

  useEffect(() => {
    getImagesCollectionsData(collections.id)
  }, [])

  return (
    <>
      <h1>{collections.title}</h1>
      <section className={styles.container}>
        <aside className={styles.content}>
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
                    <th>Foto</th>
                  </tr>
                </thead>
                <tbody className={styles.body}>
                  {imagesRepositories.map((repo) => {
                    return (
                      <tr key={repo.id}>
                        <td>
                          <Image
                            width={300}
                            height={300}
                            src={repo.url}
                            alt="Ivana"
                          />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </aside>
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
      </section>
    </>
  )
}
