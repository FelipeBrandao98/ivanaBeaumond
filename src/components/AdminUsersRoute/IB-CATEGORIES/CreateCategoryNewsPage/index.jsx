'use client'

// React imports
import { useState, useContext } from 'react'

// Next.js Components imports
import { useRouter } from 'next/navigation'

// Context imports
import { AuthContext } from '@/Context/AuthContext'
import { NewsCategoryContext } from '@/Context/NewsCategoryContext'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Atoms imports
import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'
import DashboardLabel from '@/atoms/AdminUsersRoute/Dashboard/DashboardLabel'
import DashboardCancel from '@/atoms/AdminUsersRoute/Dashboard/DashboardCancel'
import DashboardForm from '@/atoms/AdminUsersRoute/Dashboard/DashboardForm'
import DashboardButton from '@/atoms/AdminUsersRoute/Dashboard/DashboardButton'
import DashboardTabLang from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabLang'
import DashboardTabLangTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabLangTitle'
import DashboardTabPT from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabPT'
import DashboardTabDE from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabDE'
import DashboardTabFR from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabFR'
import DashboardTabEn from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabEN'
import DashboardButtonsArea from '@/atoms/AdminUsersRoute/Dashboard/DashboardButtonsArea'
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'
//

// API Calls imports
import editCategoryNews from '@/api/CallsWithToken/News/CategoryNews/PATCH/editCategoryNews'
import createCategoryNews from '@/api/CallsWithToken/News/CategoryNews/POST/createCategoryNews'
//

// Schema Zod Definition
const createNewsFormSchema = z.object({
  description: z.string().min(4),
  descriptionDe: z.string(),
  descriptionFr: z.string(),
  descriptionEn: z.string(),
})
//

// Component Declaration
export default function CreateCategoryNewsPage() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { category } = useContext(NewsCategoryContext)

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
    resolver: zodResolver(createNewsFormSchema),
  })
  //

  // functions to handle with datas from api
  async function handleCreateNews(formData) {
    setLoading(true)
    category.id
      ? await editCategoryNews(category.id, token, formData)
      : await createCategoryNews(token, formData)
    router.back()
    setLoading(false)
  }

  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMainTitle isBack>Nova Categoria de Notícias</DashboardMainTitle>
      <DashboardContainer hasTab>
        <DashboardTabLang tab={tab} setTab={setTab} />

        <DashboardTabLangTitle tab={tab} name="Categoria de Coleção" />

        <DashboardForm action={handleSubmit(handleCreateNews)}>
          <DashboardTabPT tab={tab}>
            <DashboardLabel
              htmlFor="description"
              name="Título em Português"
              errors={errors.description}
            >
              <input
                type="text"
                id="description"
                defaultValue={category.description && category.description}
                {...register('description')}
              />
            </DashboardLabel>
          </DashboardTabPT>

          <DashboardTabDE tab={tab}>
            <DashboardLabel
              htmlFor="descriptionDe"
              name="Título em Alemão"
              errors={errors.descriptionDe}
            >
              <input
                type="text"
                id="descriptionDe"
                defaultValue={category.descriptionDe && category.descriptionDe}
                {...register('descriptionDe')}
              />
            </DashboardLabel>
          </DashboardTabDE>

          <DashboardTabFR tab={tab}>
            <DashboardLabel
              htmlFor="descriptionFr"
              name="Título em Francês"
              errors={errors.descriptionFr}
            >
              <input
                type="text"
                id="descriptionFr"
                defaultValue={category.descriptionFr && category.descriptionFr}
                {...register('descriptionFr')}
              />
            </DashboardLabel>
          </DashboardTabFR>

          <DashboardTabEn tab={tab}>
            <DashboardLabel
              htmlFor="descriptionEn"
              name="Título em Inglês"
              errors={errors.descriptionEn}
            >
              <input
                type="text"
                id="descriptionEn"
                defaultValue={category.descriptionEn && category.descriptionEn}
                {...register('descriptionEn')}
              />
            </DashboardLabel>
          </DashboardTabEn>

          <DashboardButtonsArea justify="center">
            <DashboardButton
              onClick={(e) => {
                e.preventDefault()
                setCancel(!cancel)
              }}
              mode="cancel"
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
        href="/ib-login/dashboard/categorias"
        cancel={cancel}
        setCancel={setCancel}
      />

      <DashboardLoading loading={loading} />
    </>
  )
  //
}
