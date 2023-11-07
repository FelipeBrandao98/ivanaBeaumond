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
import { NewsContext } from '@/Context/NewsContext'
import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

// Manipulate strings imports
import { format } from 'date-fns'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Styles imports
import styles from './styles.module.css'

// Atoms imports
import DashboardLoading from '@/atoms/DashboardLoading'
import DashboardMainTitle from '@/atoms/DashboardMainTitle'
import DashboardContainer from '@/atoms/DashboardContainer'
import DashboardTabLang from '@/atoms/DashboardTabLang'
import DashboardTabLangTitle from '@/atoms/DashboardTabLangTitle'
import DashboardForm from '@/atoms/DashboardForm'
import DashboardCancel from '@/atoms/DashboardCancel'
import DashboardButtonsArea from '@/atoms/DashboardButtonsArea'
import DashboardButton from '@/atoms/DashboardButton'
import DashboardLabel from '@/atoms/DashboardLabel'
import DashboardTabPT from '@/atoms/DashboardTabPT'
import DashboardTabDE from '@/atoms/DashboardTabDE'
import DashboardTabFR from '@/atoms/DashboardTabFR'
import DashboardTabEn from '@/atoms/DashboardTabEN'
//

// Schema Zod Definition
const createNewsFormSchema = z.object({
  publishDate: z
    .string()
    .nonempty()
    .transform((date) => new Date(date)),
  published: z.boolean(),
  categoryId: z
    .string()
    .nonempty()
    .transform((category) => Number(category)),
  title: z.string(),
  titleDe: z.string(),
  titleEn: z.string(),
  titleFr: z.string(),
  coverCredit: z.string(),
  coverCreditDe: z.string(),
  coverCreditEn: z.string(),
  coverCreditFr: z.string(),
  subtitle: z.string(),
  subtitleDe: z.string(),
  subtitleEn: z.string(),
  subtitleFr: z.string(),
  // publishDate: z.string(),
  // published: z.boolean(),
  body: z.string(),
  bodyDe: z.string(),
  bodyEn: z.string(),
  bodyFr: z.string(),
})
//

// Component Declaration
export default function CreateNews({ categories, functions }) {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { image, handleShowCreateImage } = useContext(CreateImageNewsContext)
  const { news, handleNews } = useContext(NewsContext)

  // States declaratios
  const [tab, setTab] = useState('pt-BR')
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)

  // Desestructured functions to call api
  const { createNews, editNews } = functions

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
    formData.coverId = image.id
    news.id
      ? await editNews(news.id, token, formData)
      : await createNews(token, formData)

    router.back()
    setLoading(false)
  }
  //

  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMainTitle>Nova Notícia</DashboardMainTitle>

      <DashboardContainer hasTab>
        <DashboardTabLang tab={tab} setTab={setTab} />

        <DashboardTabLangTitle name="Notícia" tab={tab} />

        <DashboardForm action={handleSubmit(handleCreateNews)}>
          <DashboardLabel
            htmlFor="publishDate"
            name="Data de Publicação"
            errors={errors.publishDate}
          >
            {news.publishDate ? (
              <input
                type="date"
                id="publishDate"
                defaultValue={
                  news && format(new Date(news.publishDate), "yyyy'-'MM'-'dd")
                }
                {...register('publishDate')}
              />
            ) : (
              <input
                type="date"
                id="publishDate"
                {...register('publishDate')}
              />
            )}
          </DashboardLabel>

          <div className={styles.checkbox}>
            Publicar agora?
            {news.published ? (
              <input
                type="checkbox"
                id="published"
                checked
                {...register('published')}
              />
            ) : (
              <input
                type="checkbox"
                id="published"
                {...register('published')}
              />
            )}
            <label htmlFor="published"></label>
          </div>

          <DashboardLabel
            htmlFor="categoryId"
            name="Categoria da Notícia"
            errors={errors.categoryId}
          >
            <select
              id="categoryId"
              className={styles.select}
              defaultValue={news && news.categoryId}
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
              {news.cover?.url ? (
                <Image
                  width={800}
                  height={800}
                  className={styles.cover}
                  src={news.cover.url}
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
              htmlFor="coverCredit"
              name="Crédito da Foto"
              errors={errors.coverCredit}
            >
              <input
                type="text"
                className={styles.input}
                id="coverCredit"
                defaultValue={news && news.coverCredit}
                {...register('coverCredit')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="title"
              name="Título da Notícia"
              errors={errors.title}
            >
              <input
                type="text"
                id="title"
                defaultValue={news && news.title}
                {...register('title')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="subtitle"
              name="Sub-Título da Notícia"
              errors={errors.subtitle}
            >
              <input
                type="text"
                id="subtitle"
                defaultValue={news && news.subtitle}
                {...register('subtitle')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="body"
              name="Corpo da Notícia"
              errors={errors.body}
            >
              <input
                type="textarea"
                className={styles.inputExpanded}
                id="body"
                defaultValue={news && news.body}
                {...register('body')}
              />
            </DashboardLabel>
          </DashboardTabPT>

          <DashboardTabDE tab={tab}>
            <DashboardLabel
              htmlFor="coverCreditDe"
              name="Crédito da Foto"
              errors={errors.coverCreditDe}
            >
              <input
                type="text"
                className={styles.input}
                id="coverCreditDe"
                defaultValue={news && news.coverCreditDe}
                {...register('coverCreditDe')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="titleDe"
              name="Título da Notícia"
              errors={errors.titleDe}
            >
              <input
                type="text"
                id="titleDe"
                defaultValue={news && news.titleDe}
                {...register('titleDe')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="subtitleDe"
              name="Sub-Título da Notícia"
              errors={errors.subtitleDe}
            >
              <input
                type="text"
                id="subtitleDe"
                defaultValue={news && news.subtitleDe}
                {...register('subtitleDe')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="bodyDe"
              name="Corpo da Notícia"
              errors={errors.bodyDe}
            >
              <input
                type="textarea"
                className={styles.inputExpanded}
                id="bodyDe"
                defaultValue={news && news.bodyDe}
                {...register('bodyDe')}
              />
            </DashboardLabel>
          </DashboardTabDE>

          <DashboardTabFR tab={tab}>
            <DashboardLabel
              htmlFor="coverCreditFr"
              name="Crédito da Foto"
              errors={errors.coverCreditFr}
            >
              <input
                type="text"
                className={styles.input}
                id="coverCreditFr"
                defaultValue={news && news.coverCreditFr}
                {...register('coverCreditFr')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="titleFr"
              name="Título da Notícia"
              errors={errors.titleFr}
            >
              <input
                type="text"
                id="titleFr"
                defaultValue={news && news.titleFr}
                {...register('titleFr')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="subtitleFr"
              name="Sub-Título da Notícia"
              errors={errors.subtitleFr}
            >
              <input
                type="text"
                id="subtitleFr"
                defaultValue={news && news.subtitleFr}
                {...register('subtitleFr')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="bodyFr"
              name="Corpo da Notícia"
              errors={errors.bodyFr}
            >
              <input
                type="textarea"
                className={styles.inputExpanded}
                id="bodyFr"
                defaultValue={news && news.bodyFr}
                {...register('bodyFr')}
              />
            </DashboardLabel>
          </DashboardTabFR>

          <DashboardTabEn tab={tab}>
            <DashboardLabel
              htmlFor="coverCreditEn"
              name="Crédito da Foto"
              errors={errors.coverCreditEn}
            >
              <input
                type="text"
                className={styles.input}
                id="coverCreditEn"
                defaultValue={news && news.coverCreditEn}
                {...register('coverCreditEn')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="titleEn"
              name="Título da Notícia"
              errors={errors.titleEn}
            >
              <input
                type="text"
                id="titleEn"
                defaultValue={news && news.titleEn}
                {...register('titleEn')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="subtitleEn"
              name="Sub-Título da Notícia"
              errors={errors.subtitleEn}
            >
              <input
                type="text"
                id="subtitleEn"
                defaultValue={news && news.subtitleEn}
                {...register('subtitleEn')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="bodyEn"
              name="Corpo da Notícia"
              errors={errors.bodyEn}
            >
              <input
                type="textarea"
                className={styles.inputExpanded}
                id="bodyEn"
                defaultValue={news && news.bodyEn}
                {...register('bodyEn')}
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
              {news.id ? 'Editar Notícia' : 'Criar Notícia'}
            </DashboardButton>
          </DashboardButtonsArea>
        </DashboardForm>
      </DashboardContainer>

      <DashboardCancel
        cancel={cancel}
        setCancel={setCancel}
        href={'/ib-login/dashboard/noticias'}
      />

      <DashboardLoading loading={loading} />
    </>
  )
  //
}
