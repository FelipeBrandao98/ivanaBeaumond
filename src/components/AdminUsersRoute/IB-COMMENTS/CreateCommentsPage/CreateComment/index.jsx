'use client'

// React imports
import { useState, useContext } from 'react'

// Next.js Components imports
import { useRouter } from 'next/navigation'
import Image from 'next/image'

// Icons imports
import { MdPhoto } from 'react-icons/md'

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
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'
import DashboardForm from '@/atoms/AdminUsersRoute/Dashboard/DashboardForm'
import DashboardLabel from '@/atoms/AdminUsersRoute/Dashboard/DashboardLabel'
import DashboardButtonsArea from '@/atoms/AdminUsersRoute/Dashboard/DashboardButtonsArea'
import DashboardButton from '@/atoms/AdminUsersRoute/Dashboard/DashboardButton'
import DashboardCancel from '@/atoms/AdminUsersRoute/Dashboard/DashboardCancel'
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'
//

// API Calls imports
import { CreateImageCommentContext } from '@/Context/CreateImageCommentContext'
import createComment from '@/api/CallsWithToken/Comments/POST/createComment'

// Schema Zod Definition
const createNewsFormSchema = z.object({
  userName: z.string(),
})
//

// Component Declaration
export default function CreateComment() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { image, handleShowCreateImage, handleChangeImage } = useContext(
    CreateImageCommentContext,
  )

  // States declaratios
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)

  // Instance of Router
  const router = useRouter()

  // Instance of Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(createNewsFormSchema),
  })
  //

  // Functions to manipulate on Form Send
  async function handleCreateNews(formData) {
    setLoading(true)
    formData.imageId = image.id
    await createComment(token, formData)
    handleChangeImage({})
    router.back()
    setLoading(false)
  }
  //

  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMainTitle>Nova Categoria de Coleção</DashboardMainTitle>
      <DashboardContainer>
        <DashboardForm action={handleSubmit(handleCreateNews)}>
          {image.src ? (
            <div className={styles.coverImage} onClick={handleShowCreateImage}>
              <Image
                width={800}
                height={800}
                src={image.url}
                alt="Ivana"
                className={styles.cover}
                onClick={handleShowCreateImage}
              />
            </div>
          ) : (
            <div className={styles.coverImage} onClick={handleShowCreateImage}>
              <MdPhoto
                width={100}
                height={100}
                className={styles.coverImageIcon}
              />
              Escolha uma foto para o cliente!
            </div>
          )}
          <DashboardLabel
            htmlFor="userName"
            name="Nome do Cliente"
            errors={errors.userName}
          >
            <input type="text" id="userName" {...register('userName')} />
          </DashboardLabel>
          <DashboardButtonsArea>
            <DashboardButton
              mode="cancel"
              onClick={(e) => {
                e.preventDefault()
                setCancel(!cancel)
              }}
            >
              Cancelar
            </DashboardButton>
            <DashboardButton type="submit" mode="submit">
              Criar Código de Comentário
            </DashboardButton>
          </DashboardButtonsArea>
        </DashboardForm>
      </DashboardContainer>

      <DashboardCancel
        cancel={cancel}
        setCancel={setCancel}
        href={'/ib-login/dashboard/comentarios'}
      />

      <DashboardLoading loading={loading} />
    </>
  )
  //
}
