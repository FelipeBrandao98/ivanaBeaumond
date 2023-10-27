'use client'

// React imports
import { Suspense, useContext, useState } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Icons imports
import { BsArrowLeft } from 'react-icons/bs'
import { FaTruckLoading } from 'react-icons/fa'
import { AiOutlineLoading } from 'react-icons/ai'

// Context imports
import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'
import { AuthContext } from '@/Context/AuthContext'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Styles imports
import styles from './styles.module.css'

const createImageFormSchema = z.object({
  file: z.any(),
})

// Component Declaration
export default function CreateImageNews({ createImage }) {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { image, handleShowCreateImage, handleChangeImage } = useContext(
    CreateImageNewsContext,
  )

  // States declaratios
  const [loading, setLoading] = useState(false)

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
    handleChangeImage(res)
    setLoading(false)
  }
  //

  // Return components, with functions to call API and language
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
  //
}
