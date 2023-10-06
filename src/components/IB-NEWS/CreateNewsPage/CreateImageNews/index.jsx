'use client'

import { Suspense, useContext, useState } from 'react'
import Image from 'next/image'

import { BsArrowLeft } from 'react-icons/bs'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

import styles from './styles.module.css'
import { AuthContext } from '@/Context/AuthContext'
import { FaTruckLoading } from 'react-icons/fa'
import { AiOutlineLoading } from 'react-icons/ai'

const createImageFormSchema = z.object({
  file: z.any(),
})

export default function CreateImageNews({ createImage }) {
  const [loading, setLoading] = useState(false)

  const { token } = useContext(AuthContext)
  const { image, handleShowCreateImage, handleChangeImage } = useContext(
    CreateImageNewsContext,
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
            <Suspense
              fallback={
                <div className={styles.coverLoading}>
                  Carregando... <FaTruckLoading width={40} height={40} />
                </div>
              }
            >
              <div className={styles.coverImage}>
                <Image
                  width={2000}
                  height={2000}
                  src={image.url}
                  alt="Ivana"
                  className={styles.cover}
                />
              </div>
            </Suspense>
          ) : (
            <div className={styles.coverImage}>Escolha a foto de capa</div>
          )}
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
