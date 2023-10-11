'use client'

import { Suspense, useContext, useState } from 'react'
import Image from 'next/image'

import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineLoading } from 'react-icons/ai'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CreateImageCategoryContext } from '@/Context/CreateImageCategoryContext'

import styles from './styles.module.css'
import { AuthContext } from '@/Context/AuthContext'
import { CollectionsCategoryContext } from '@/Context/CollectionsCategoryContext'
import { FaTruckLoading } from 'react-icons/fa'

const createImageFormSchema = z.object({
  file: z.any(),
})

export default function CreateImgCat({ createImage }) {
  const [loading, setLoading] = useState(false)

  const { token } = useContext(AuthContext)
  const { category, handleCategory } = useContext(CollectionsCategoryContext)
  const { image, handleShowCreateImage, handleChangeImage } = useContext(
    CreateImageCategoryContext,
  )

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
    const res = await createImage(token, file)
    handleChangeImage(res)
    setLoading(false)
  }

  return (
    <>
      <button onClick={handleShowCreateImage} className={styles.title}>
        <BsArrowLeft width={40} height={40} />
        <h1>voltar</h1>
      </button>
      <section className={styles.container}>
        <aside className={styles.content}>
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
          {image.src ? (
            <div className={styles.coverImage}>
              <Image
                width={800}
                height={800}
                src={image.url}
                alt="Ivana"
                className={styles.cover}
              />
            </div>
          ) : (
            <div className={styles.coverImage}>
              {category.cover?.url ? (
                <Image
                  width={800}
                  height={800}
                  className={styles.cover}
                  src={category.cover.url}
                  alt={''}
                />
              ) : (
                <>Escolher foto de capa</>
              )}
            </div>
          )}
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
