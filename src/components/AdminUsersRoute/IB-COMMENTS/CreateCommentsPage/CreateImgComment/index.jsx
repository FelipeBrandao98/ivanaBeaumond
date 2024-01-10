'use client'

// React imports
import { useContext, useState } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Context imports
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
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'
import DashboardForm from '@/atoms/AdminUsersRoute/Dashboard/DashboardForm'
import DashboardLabel from '@/atoms/AdminUsersRoute/Dashboard/DashboardLabel'
import DashboardButton from '@/atoms/AdminUsersRoute/Dashboard/DashboardButton'
//

// Api imports
import createImage from '@/api/CallsWithToken/Images/POST/createImage'
import { CreateImageCommentContext } from '@/Context/CreateImageCommentContext'
//

// Schema Zod Definition
const createImageFormSchema = z.object({
  file: z.any(),
})
//

// Component Declaration
export default function CreateImgComment() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { image, handleShowCreateImage, handleChangeImage } = useContext(
    CreateImageCommentContext,
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
      <DashboardMainTitle href={handleShowCreateImage} isBack>
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
            <>Escolher foto de capa</>
          </div>
        )}
      </DashboardContainer>

      <DashboardLoading loading={loading} />
    </>
  )
  //
}
