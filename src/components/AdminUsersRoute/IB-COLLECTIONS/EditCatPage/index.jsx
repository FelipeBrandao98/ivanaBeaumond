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
import { CollectionsCatalogContext } from '@/Context/CollectionsCatalogContext'
import editCatalog from '@/api/CallsWithToken/Collections/ClothesCollections/PATCH/editCatalog'
import { CreateImageCatalogContext } from '@/Context/CreateImageCatalogContext copy'
//

// Schema Zod Definition
const createCollectionFormSchema = z.object({
  name: z.string(),
  nameDe: z.string(),
  nameEn: z.string(),
  nameFr: z.string(),
})
//

// Component Declaration
export default function EditCatPage() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { collections } = useContext(CollectionsCatalogContext)
  const { image, handleShowCreateImage } = useContext(CreateImageCatalogContext)

  // States declaratios
  const [tab, setTab] = useState('pt-BR')
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
    resolver: zodResolver(createCollectionFormSchema),
  })
  //

  // functions to handle with datas from api
  async function handleEditCatalog(formData) {
    setLoading(true)
    await editCatalog(token, collections.id, formData)
    router.back()
  }
  //

  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMainTitle>Editar Roupa</DashboardMainTitle>
      <DashboardContainer hasTab>
        <DashboardTabLang tab={tab} setTab={setTab} />

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

        <DashboardTabLangTitle tab={tab} name="Editar nome da roupa" />

        <DashboardForm action={handleSubmit(handleEditCatalog)}>
          <DashboardTabPT tab={tab}>
            <DashboardLabel
              htmlFor="name"
              name="Nome da Roupa"
              errors={errors.name}
            >
              <input
                type="text"
                id="name"
                defaultValue={collections.name && collections.name}
                {...register('name')}
              />
            </DashboardLabel>
          </DashboardTabPT>

          <DashboardTabDE tab={tab}>
            <DashboardLabel
              htmlFor="nameDe"
              name="Nome da Roupa"
              errors={errors.nameDe}
            >
              <input
                type="text"
                id="nameDe"
                defaultValue={collections.nameDe && collections.nameDe}
                {...register('nameDe')}
              />
            </DashboardLabel>
          </DashboardTabDE>

          <DashboardTabFR tab={tab}>
            <DashboardLabel
              htmlFor="nameFr"
              name="Nome da Roupa"
              errors={errors.nameFr}
            >
              <input
                type="text"
                id="nameFr"
                defaultValue={collections.nameFr && collections.nameFr}
                {...register('nameFr')}
              />
            </DashboardLabel>
          </DashboardTabFR>

          <DashboardTabEn tab={tab}>
            <DashboardLabel
              htmlFor="nameEn"
              name="Nome da Roupa"
              errors={errors.nameEn}
            >
              <input
                type="text"
                id="nameEn"
                defaultValue={collections.nameEn && collections.nameEn}
                {...register('nameEn')}
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
              {collections.id ? 'Editar Roupa' : 'Criar Coleção'}
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
