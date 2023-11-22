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
import { CollectionsCategoryContext } from '@/Context/CollectionsCategoryContext'
import { CreateImageCategoryContext } from '@/Context/CreateImageCategoryContext'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Styles imports
import styles from './styles.module.css'

// Atoms imports
import DashboardContainer from '@/atoms/Dashboard/DashboardContainer'
import DashboardMainTitle from '@/atoms/Dashboard/DashboardMainTitle'
import DashboardTabLang from '@/atoms/Dashboard/DashboardTabLang'
import DashboardTabLangTitle from '@/atoms/Dashboard/DashboardTabLangTitle'
import DashboardForm from '@/atoms/Dashboard/DashboardForm'
import DashboardTabPT from '@/atoms/Dashboard/DashboardTabPT'
import DashboardLabel from '@/atoms/Dashboard/DashboardLabel'
import DashboardTabDE from '@/atoms/Dashboard/DashboardTabDE'
import DashboardTabFR from '@/atoms/Dashboard/DashboardTabFR'
import DashboardTabEn from '@/atoms/Dashboard/DashboardTabEN'
import DashboardButtonsArea from '@/atoms/Dashboard/DashboardButtonsArea'
import DashboardButton from '@/atoms/Dashboard/DashboardButton'
import DashboardCancel from '@/atoms/Dashboard/DashboardCancel'
import DashboardLoading from '@/atoms/Dashboard/DashboardLoading'
//

// Schema Zod Definition
const createNewsFormSchema = z.object({
  description: z.string(),
  descriptionDe: z.string(),
  descriptionFr: z.string(),
  descriptionEn: z.string(),
  subdescription: z.string(),
  subdescriptionDe: z.string(),
  subdescriptionFr: z.string(),
  subdescriptionEn: z.string(),
})
//

// Component Declaration
export default function CreateCategory({ functions }) {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { category } = useContext(CollectionsCategoryContext)
  const { image, handleShowCreateImage, handleChangeImage } = useContext(
    CreateImageCategoryContext,
  )

  // States declaratios
  const [tab, setTab] = useState('pt-BR')
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)

  // Desestructured functions to call api
  const { createCategory, editCategory } = functions

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
    formData.coverId = image.id
    category.id
      ? await editCategory(category.id, token, formData)
      : await createCategory(token, formData)
    handleChangeImage({})
    router.back()
    setLoading(false)
  }
  //

  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMainTitle>Nova Categoria de Coleção</DashboardMainTitle>
      <DashboardContainer hasTab>
        <DashboardTabLang tab={tab} setTab={setTab} />

        <DashboardTabLangTitle tab={tab} name="Categoria de Coleção" />

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
              {category.cover?.url ? (
                <Image
                  width={800}
                  height={800}
                  className={styles.cover}
                  src={category.cover.url}
                  alt={''}
                />
              ) : (
                <>
                  <MdPhoto
                    width={100}
                    height={100}
                    className={styles.coverImageIcon}
                  />
                  Escolher foto de capa
                </>
              )}
            </div>
          )}

          <DashboardTabPT tab={tab}>
            <DashboardLabel
              htmlFor="description"
              name="Título"
              errors={errors.description}
            >
              <input
                type="text"
                id="description"
                defaultValue={category.description && category.description}
                {...register('description')}
              />
            </DashboardLabel>
            <DashboardLabel
              htmlFor="subdescription"
              name="Descrição"
              errors={errors.subdescription}
            >
              <input
                type="text"
                id="subdescription"
                defaultValue={
                  category.subdescription && category.subdescription
                }
                {...register('subdescription')}
              />
            </DashboardLabel>
          </DashboardTabPT>

          <DashboardTabDE tab={tab}>
            <DashboardLabel
              htmlFor="descriptionDe"
              name="Título"
              errors={errors.descriptionDe}
            >
              <input
                type="text"
                id="descriptionDe"
                defaultValue={category.descriptionDe && category.descriptionDe}
                {...register('descriptionDe')}
              />
            </DashboardLabel>
            <DashboardLabel
              htmlFor="subdescriptionDe"
              name="Descrição"
              errors={errors.subdescriptionDe}
            >
              <input
                type="text"
                id="subdescriptionDe"
                defaultValue={
                  category.subdescriptionDe && category.subdescriptionDe
                }
                {...register('subdescriptionDe')}
              />
            </DashboardLabel>
          </DashboardTabDE>

          <DashboardTabFR tab={tab}>
            <DashboardLabel
              htmlFor="descriptionFr"
              name="Título"
              errors={errors.descriptionFr}
            >
              <input
                type="text"
                id="descriptionFr"
                defaultValue={category.descriptionFr && category.descriptionFr}
                {...register('descriptionFr')}
              />
            </DashboardLabel>
            <DashboardLabel
              htmlFor="subdescriptionFr"
              name="Descrição"
              errors={errors.subdescriptionFr}
            >
              <input
                type="text"
                id="subdescriptionFr"
                defaultValue={
                  category.subdescriptionFr && category.subdescriptionFr
                }
                {...register('subdescriptionFr')}
              />
            </DashboardLabel>
          </DashboardTabFR>

          <DashboardTabEn tab={tab}>
            <DashboardLabel
              htmlFor="descriptionEn"
              name="Título"
              errors={errors.descriptionEn}
            >
              <input
                type="text"
                id="descriptionEn"
                defaultValue={category.descriptionEn && category.descriptionEn}
                {...register('descriptionEn')}
              />
            </DashboardLabel>
            <DashboardLabel
              htmlFor="subdescriptionEn"
              name="Descrição"
              errors={errors.subdescriptionEn}
            >
              <input
                type="text"
                id="subdescriptionEn"
                defaultValue={
                  category.subdescriptionEn && category.subdescriptionEn
                }
                {...register('subdescriptionEn')}
              />
            </DashboardLabel>
          </DashboardTabEn>

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
              {category.id ? 'Editar Categoria' : 'Criar Categoria'}
            </DashboardButton>
          </DashboardButtonsArea>
        </DashboardForm>
      </DashboardContainer>

      <DashboardCancel
        cancel={cancel}
        setCancel={setCancel}
        href={'/ib-login/dashboard/categorias'}
      />

      <DashboardLoading loading={loading} />
    </>
  )
  //
}
