'use client'

// React imports
import { Suspense, useContext, useState } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Icons imports
import { FaTruckLoading } from 'react-icons/fa'

// Context imports
import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'
import { AuthContext } from '@/Context/AuthContext'

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

// Api Functions imports
import createImage from '@/api/CallsWithToken/createImage'
//

// Schema Zod Definition
const createImageFormSchema = z.object({
  file: z.any(),
})
//

// Component Declaration
export default function CreateImageNews() {
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
      <DashboardMainTitle onClick={handleShowCreateImage} isBack>
        voltar
      </DashboardMainTitle>

      <DashboardContainer>
        <DashboardForm action={handleSubmit(handleCreateImage)}>
          <DashboardLabel htmlFor="file" errors={errors.file}>
            <input
              className={styles.input}
              type="file"
              id="file"
              {...register('file')}
            />
          </DashboardLabel>
          <DashboardButton type="submit" mode="submit">
            Enviar Imagem
          </DashboardButton>
        </DashboardForm>

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
      </DashboardContainer>

      <DashboardLoading loading={loading} />
    </>
  )
  //
}
