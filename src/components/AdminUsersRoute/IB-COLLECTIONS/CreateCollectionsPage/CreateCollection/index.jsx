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
import { CreateImageCollectionContext } from '@/Context/CreateImageCollectionContext'
import { CollectionsContext } from '@/Context/CollectionsContext'

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
import DashboardTabLang from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabLang'
import DashboardTabLangTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabLangTitle'
import DashboardForm from '@/atoms/AdminUsersRoute/Dashboard/DashboardForm'
import DashboardLabel from '@/atoms/AdminUsersRoute/Dashboard/DashboardLabel'
import DashboardCancel from '@/atoms/AdminUsersRoute/Dashboard/DashboardCancel'
import DashboardTabPT from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabPT'
import DashboardTabDE from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabDE'
import DashboardTabFR from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabFR'
import DashboardTabEn from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabEN'
import DashboardButtonsArea from '@/atoms/AdminUsersRoute/Dashboard/DashboardButtonsArea'
import DashboardButton from '@/atoms/AdminUsersRoute/Dashboard/DashboardButton'
//

// Schema Zod Definition
const createCollectionFormSchema = z.object({
  categoryId: z
    .string()
    .nonempty()
    .transform((category) => Number(category)),
  title: z.string(),
  titleDe: z.string(),
  titleEn: z.string(),
  titleFr: z.string(),
  description: z.string(),
  descriptionDe: z.string(),
  descriptionEn: z.string(),
  descriptionFr: z.string(),
})
//

// Component Declaration
export default function CreateCollection({ categories, functions }) {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { collections, handleCollections } = useContext(CollectionsContext)
  const { image, handleShowCreateImage } = useContext(
    CreateImageCollectionContext,
  )

  // States declaratios
  const [tab, setTab] = useState('pt-BR')
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)

  // Desestructured functions to call api
  const { createCollection, editCollection } = functions

  // Instance of Router
  const router = useRouter()

  // Instance of Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(createCollectionFormSchema),
  })
  //

  // functions to handle with datas from api
  async function handleCreateCollection(formData) {
    setLoading(true)
    formData.coverId = image.id
    collections.id
      ? await editCollection(collections.id, token, formData)
      : await createCollection(token, formData)

    router.back()
  }
  //

  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMainTitle>Nova Coleção</DashboardMainTitle>
      <DashboardContainer hasTab>
        <DashboardTabLang tab={tab} setTab={setTab} />

        <DashboardTabLangTitle tab={tab} name="Nova coleção" />

        <DashboardForm action={handleSubmit(handleCreateCollection)}>
          <DashboardLabel
            htmlFor="categoryId"
            name="Categoria da Coleção"
            errors={errors.categoryId}
          >
            <select
              id="categoryId"
              className={styles.select}
              defaultValue={collections.categoryId && collections.categoryId}
              {...register('categoryId')}
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.description}
                  </option>
                )
              })}
            </select>
          </DashboardLabel>

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
              {collections.cover?.url ? (
                <Image
                  width={800}
                  height={800}
                  className={styles.cover}
                  src={collections.cover.url}
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
              htmlFor="title"
              name="Título da Coleção"
              errors={errors.title}
            >
              <input
                type="text"
                id="title"
                defaultValue={collections.title && collections.title}
                {...register('title')}
              />
            </DashboardLabel>
            <DashboardLabel
              htmlFor="description"
              name="Descrição da Coleção"
              errors={errors.description}
            >
              <input
                type="text"
                id="description"
                defaultValue={
                  collections.description && collections.description
                }
                {...register('description')}
              />
            </DashboardLabel>
          </DashboardTabPT>

          <DashboardTabDE tab={tab}>
            <DashboardLabel
              htmlFor="titleDe"
              name="Título da Coleção"
              errors={errors.titleDe}
            >
              <input
                type="text"
                id="titleDe"
                defaultValue={collections.titleDe && collections.titleDe}
                {...register('titleDe')}
              />
            </DashboardLabel>
            <DashboardLabel
              htmlFor="descriptionDe"
              name="Descrição da Coleção"
              errors={errors.descriptionDe}
            >
              <input
                type="text"
                id="descriptionDe"
                defaultValue={
                  collections.descriptionDe && collections.descriptionDe
                }
                {...register('descriptionDe')}
              />
            </DashboardLabel>
          </DashboardTabDE>

          <DashboardTabFR tab={tab}>
            <DashboardLabel
              htmlFor="titleFr"
              name="Título da Coleção"
              errors={errors.titleFr}
            >
              <input
                type="text"
                id="titleFr"
                defaultValue={collections.titleFr && collections.titleFr}
                {...register('titleFr')}
              />
            </DashboardLabel>
            <DashboardLabel
              htmlFor="descriptionFr"
              name="Descrição da Coleção"
              errors={errors.descriptionFr}
            >
              <input
                type="text"
                id="descriptionFr"
                defaultValue={
                  collections.descriptionFr && collections.descriptionFr
                }
                {...register('descriptionFr')}
              />
            </DashboardLabel>
          </DashboardTabFR>

          <DashboardTabEn tab={tab}>
            <DashboardLabel
              htmlFor="titleEn"
              name="Título da Coleção"
              errors={errors.titleEn}
            >
              <input
                type="text"
                id="titleEn"
                defaultValue={collections.titleEn && collections.titleEn}
                {...register('titleEn')}
              />
            </DashboardLabel>
            <DashboardLabel
              htmlFor="descriptionEn"
              name="Descrição da Coleção"
              errors={errors.descriptionEn}
            >
              <input
                type="text"
                id="descriptionEn"
                defaultValue={
                  collections.descriptionEn && collections.descriptionEn
                }
                {...register('descriptionEn')}
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
            <DashboardButton mode="submit" type="submit">
              {collections.id ? 'Editar Coleção' : 'Criar Coleção'}
            </DashboardButton>
          </DashboardButtonsArea>
        </DashboardForm>
      </DashboardContainer>

      <DashboardCancel
        href={'/ib-login/dashboard/colecoes'}
        cancel={cancel}
        setCancel={setCancel}
      />

      <DashboardLoading loading={loading} />
    </>
  )
  //
}
