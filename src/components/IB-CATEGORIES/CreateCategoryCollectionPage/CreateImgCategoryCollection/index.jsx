'use client'

// React imports
import { useContext, useState } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Context imports
import { CreateImageCategoryContext } from '@/Context/CreateImageCategoryContext'
import { AuthContext } from '@/Context/AuthContext'
import { CollectionsCategoryContext } from '@/Context/CollectionsCategoryContext'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Styles imports
import styles from './styles.module.css'

// Atoms imports
import DashboardContainer from '@/atoms/Dashboard/DashboardContainer'
import DashboardLoading from '@/atoms/Dashboard/DashboardLoading'
import DashboardMainTitle from '@/atoms/Dashboard/DashboardMainTitle'
import DashboardForm from '@/atoms/Dashboard/DashboardForm'
import DashboardLabel from '@/atoms/Dashboard/DashboardLabel'
import DashboardButton from '@/atoms/Dashboard/DashboardButton'
//

// Api imports
import createImage from '@/api/CallsWithToken/createImage'
//

// Schema Zod Definition
const createImageFormSchema = z.object({
  file: z.any(),
})
//

// Component Declaration
export default function CreateImgCategoryCollection() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { category } = useContext(CollectionsCategoryContext)
  const { image, handleShowCreateImage, handleChangeImage } = useContext(
    CreateImageCategoryContext,
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

  // Functions to manipulate on Form Send
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
      <DashboardMainTitle onClick={handleShowCreateImage} isBack>
        voltar
      </DashboardMainTitle>

      <DashboardContainer>
        <DashboardForm action={handleSubmit(handleCreateImage)}>
          <DashboardLabel htmlFor="file" errors={errors.file}>
            <input type="file" id="file" {...register('file')} />
          </DashboardLabel>
          <DashboardButton type="submit" mode="submit">
            Enviar Imagem
          </DashboardButton>
        </DashboardForm>
        {image.src ? (
          <div className={styles.coverImage}>
            <Image
              src={image.url}
              width={500}
              height={500}
              alt="Ivana"
              className={styles.cover}
            />
          </div>
        ) : (
          <div className={styles.coverImage}>
            {category.cover?.url ? (
              <Image
                className={styles.cover}
                src={category.cover.url}
                width={500}
                height={500}
                alt={''}
              />
            ) : (
              <>Escolher foto de capa</>
            )}
          </div>
        )}
      </DashboardContainer>

      <DashboardLoading loading={loading} />
    </>
  )
  //
}
