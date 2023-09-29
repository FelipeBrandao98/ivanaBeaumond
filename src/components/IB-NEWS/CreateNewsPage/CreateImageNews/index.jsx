'use client'

import { useContext } from 'react'

import { BsArrowLeft } from 'react-icons/bs'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

import styles from './styles.module.css'
import { AuthContext } from '@/Context/AuthContext'

const createImageFormSchema = z.object({
  file: z.any(),
})

export default function CreateImageNews({ createImage }) {
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
    const file = new FormData()
    file.set('file', formData.file[0])
    const res = await createImage(token, file)
    handleChangeImage(res)
  }

  return (
    <>
      <button onClick={handleShowCreateImage} className={styles.title}>
        <BsArrowLeft width={40} height={40} />
        <h1>voltar</h1>
      </button>
      <section className={styles.container}>
        <aside className={styles.content}>
          <form action={handleSubmit(handleCreateImage)}>
            <label htmlFor="file">
              <input type="file" id="file" {...register('file')} />
              <button type="submit">Enviar</button>
            </label>
          </form>
        </aside>
      </section>
    </>
  )
}
