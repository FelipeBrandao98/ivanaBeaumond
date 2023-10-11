'use client'

import { AuthContext } from '@/Context/AuthContext'
import { NewsContext } from '@/Context/NewsContext'
import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'

import { format } from 'date-fns'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import ReactCountryFlag from 'react-country-flag'
import { MdPhoto } from 'react-icons/md'
import { AiOutlineLoading } from 'react-icons/ai'

import styles from './styles.module.css'

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

export default function CreateNews({ categories, createNews, editNews }) {
  const router = useRouter()

  const [tab, setTab] = useState('pt-BR')
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)

  const { token } = useContext(AuthContext)
  const { image, handleShowCreateImage } = useContext(CreateImageNewsContext)
  const { news, handleNews } = useContext(NewsContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(createNewsFormSchema),
  })

  async function handleCreateNews(formData) {
    setLoading(true)
    formData.coverId = image.id
    news.id
      ? await editNews(news.id, token, formData)
      : await createNews(token, formData)

    router.back()
  }

  function handleCancelModal() {
    setCancel(!cancel)
  }

  return (
    <>
      <h1>Nova Notícia</h1>
      <section className={styles.container}>
        <aside className={styles.content}>
          <div className={styles.tabArea}>
            <button
              className={`${
                tab === 'pt-BR' ? styles.tabActive : styles.tabInactive
              }`}
              onClick={(e) => {
                e.preventDefault()
                setTab('pt-BR')
              }}
            >
              Português <ReactCountryFlag countryCode="BR" svg />
            </button>
            <button
              className={`${
                tab === 'de' ? styles.tabActive : styles.tabInactive
              }`}
              onClick={(e) => {
                e.preventDefault()
                setTab('de')
              }}
            >
              Alemão <ReactCountryFlag countryCode="DE" svg />
            </button>
            <button
              className={`${
                tab === 'fr' ? styles.tabActive : styles.tabInactive
              }`}
              onClick={(e) => {
                e.preventDefault()
                setTab('fr')
              }}
            >
              Francês <ReactCountryFlag countryCode="FR" svg />
            </button>
            <button
              className={`${
                tab === 'en' ? styles.tabActive : styles.tabInactive
              }`}
              onClick={(e) => {
                e.preventDefault()
                setTab('en')
              }}
            >
              Inglês <ReactCountryFlag countryCode="US" svg />
            </button>
          </div>
          {tab === 'pt-BR' ? (
            <h1 className={styles.title}>
              Notícia em Português <ReactCountryFlag countryCode="BR" svg />
            </h1>
          ) : tab === 'de' ? (
            <h1 className={styles.title}>
              Notícia em Alemão <ReactCountryFlag countryCode="DE" svg />
            </h1>
          ) : tab === 'fr' ? (
            <h1 className={styles.title}>
              Notícia em Francês <ReactCountryFlag countryCode="FR" svg />
            </h1>
          ) : tab === 'en' ? (
            <h1 className={styles.title}>
              Notícia em Inglês <ReactCountryFlag countryCode="US" svg />
            </h1>
          ) : (
            ''
          )}

          <form action={handleSubmit(handleCreateNews)}>
            <label htmlFor="publishDate" className={styles.labelCategory}>
              Data de Publicação
              {news.publishDate ? (
                <input
                  type="date"
                  id="publishDate"
                  defaultValue={
                    news && format(new Date(news.publishDate), "yyyy'-'MM'-'dd")
                  }
                  {...register('publishDate')}
                  className={styles.input}
                />
              ) : (
                <input
                  type="date"
                  id="publishDate"
                  {...register('publishDate')}
                  className={styles.input}
                />
              )}
            </label>
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
            <label htmlFor="categoryId" className={styles.labelCategory}>
              Categoria da Notícia
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
              {errors.categoryId && (
                <span className={styles.error}>
                  {errors.categoryId.message}
                </span>
              )}
            </label>
            {image.src ? (
              <div
                className={styles.coverImage}
                onClick={handleShowCreateImage}
              >
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
              <div
                className={styles.coverImage}
                onClick={handleShowCreateImage}
              >
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

            <div
              className={`${
                tab === 'pt-BR' ? styles.ptActive : styles.ptInactive
              }`}
            >
              <label htmlFor="coverCredit" className={styles.label}>
                Crédito da Foto
                <input
                  type="text"
                  className={styles.input}
                  id="coverCredit"
                  defaultValue={news && news.coverCredit}
                  {...register('coverCredit')}
                />
                {errors.coverCredit && (
                  <span className={styles.error}>
                    {errors.coverCredit.message}
                  </span>
                )}
              </label>
              <label htmlFor="title" className={styles.label}>
                Título da Notícia
                <input
                  type="text"
                  className={styles.input}
                  id="title"
                  defaultValue={news && news.title}
                  {...register('title')}
                />
                {errors.title && (
                  <span className={styles.error}>{errors.title.message}</span>
                )}
              </label>
              <label htmlFor="subtitle" className={styles.label}>
                Subtítulo da Notícia
                <input
                  type="text"
                  className={styles.input}
                  id="subtitle"
                  defaultValue={news && news.subtitle}
                  {...register('subtitle')}
                />
                {errors.subtitle && (
                  <span className={styles.error}>
                    {errors.subtitle.message}
                  </span>
                )}
              </label>
              <label htmlFor="body" className={styles.label}>
                Corpo da Notícia
                <input
                  type="textarea"
                  className={styles.inputExpanded}
                  id="body"
                  defaultValue={news && news.body}
                  {...register('body')}
                />
                {errors.body && (
                  <span className={styles.error}>{errors.body.message}</span>
                )}
              </label>
            </div>
            <div
              className={`${
                tab === 'de' ? styles.deActive : styles.deInactive
              }`}
            >
              <label htmlFor="coverCreditDe" className={styles.label}>
                Crédito da Foto
                <input
                  type="text"
                  className={styles.input}
                  id="coverCreditDe"
                  defaultValue={news && news.coverCreditDe}
                  {...register('coverCreditDe')}
                />
                {errors.coverCreditDe && (
                  <span className={styles.error}>
                    {errors.coverCreditDe.message}
                  </span>
                )}
              </label>
              <label htmlFor="titleDe" className={styles.label}>
                Título da Notícia
                <input
                  type="text"
                  className={styles.input}
                  id="titleDe"
                  defaultValue={news && news.titleDe}
                  {...register('titleDe')}
                />
                {errors.titleDe && (
                  <span className={styles.error}>{errors.titleDe.message}</span>
                )}
              </label>
              <label htmlFor="subtitleDe" className={styles.label}>
                Subtítulo da Notícia
                <input
                  type="text"
                  className={styles.input}
                  id="subtitleDe"
                  defaultValue={news && news.subtitleDe}
                  {...register('subtitleDe')}
                />
                {errors.subtitleDe && (
                  <span className={styles.error}>
                    {errors.subtitleDe.message}
                  </span>
                )}
              </label>
              <label htmlFor="bodyDe" className={styles.label}>
                Corpo da Notícia
                <input
                  type="textarea"
                  className={styles.inputExpanded}
                  id="bodyDe"
                  defaultValue={news && news.bodyDe}
                  {...register('bodyDe')}
                />
                {errors.bodyDe && (
                  <span className={styles.error}>{errors.bodyDe.message}</span>
                )}
              </label>
            </div>
            <div
              className={`${
                tab === 'fr' ? styles.frActive : styles.frInactive
              }`}
            >
              <label htmlFor="coverCreditFr" className={styles.label}>
                Crédito da Foto
                <input
                  type="text"
                  className={styles.input}
                  id="coverCreditFr"
                  defaultValue={news && news.coverCreditFr}
                  {...register('coverCreditFr')}
                />
                {errors.coverCreditFr && (
                  <span className={styles.error}>
                    {errors.coverCreditFr.message}
                  </span>
                )}
              </label>
              <label htmlFor="titleFr" className={styles.label}>
                Título da Notícia
                <input
                  type="text"
                  className={styles.input}
                  id="titleFr"
                  defaultValue={news && news.titleFr}
                  {...register('titleFr')}
                />
                {errors.titleFr && (
                  <span className={styles.error}>{errors.titleFr.message}</span>
                )}
              </label>
              <label htmlFor="subtitleFr" className={styles.label}>
                Subtítulo da Notícia
                <input
                  type="text"
                  className={styles.input}
                  id="subtitleFr"
                  defaultValue={news && news.subtitleFr}
                  {...register('subtitleFr')}
                />
                {errors.subtitleFr && (
                  <span className={styles.error}>
                    {errors.subtitleFr.message}
                  </span>
                )}
              </label>
              <label htmlFor="bodyFr" className={styles.label}>
                Corpo da Notícia
                <input
                  type="textarea"
                  className={styles.inputExpanded}
                  id="bodyFr"
                  defaultValue={news && news.bodyFr}
                  {...register('bodyFr')}
                />
                {errors.bodyFr && (
                  <span className={styles.error}>{errors.bodyFr.message}</span>
                )}
              </label>
            </div>
            <div
              className={`${
                tab === 'en' ? styles.enActive : styles.enInactive
              }`}
            >
              <label htmlFor="coverCreditEn" className={styles.label}>
                Crédito da Foto
                <input
                  type="text"
                  className={styles.input}
                  id="coverCreditEn"
                  defaultValue={news && news.coverCreditEn}
                  {...register('coverCreditEn')}
                />
                {errors.coverCreditEn && (
                  <span className={styles.error}>
                    {errors.coverCreditEn.message}
                  </span>
                )}
              </label>
              <label htmlFor="titleEn" className={styles.label}>
                Título da Notícia
                <input
                  type="text"
                  className={styles.input}
                  id="titleEn"
                  defaultValue={news && news.titleEn}
                  {...register('titleEn')}
                />
                {errors.titleEn && (
                  <span className={styles.error}>{errors.titleEn.message}</span>
                )}
              </label>
              <label htmlFor="subtitleEn" className={styles.label}>
                Subtítulo da Notícia
                <input
                  type="text"
                  className={styles.input}
                  id="subtitleEn"
                  defaultValue={news && news.subtitleEn}
                  {...register('subtitleEn')}
                />
                {errors.subtitleEn && (
                  <span className={styles.error}>
                    {errors.subtitleEn.message}
                  </span>
                )}
              </label>
              <label htmlFor="bodyEn" className={styles.label}>
                Corpo da Notícia
                <input
                  type="textarea"
                  className={styles.inputExpanded}
                  id="bodyEn"
                  defaultValue={news && news.bodyEn}
                  {...register('bodyEn')}
                />
                {errors.bodyEn && (
                  <span className={styles.error}>{errors.bodyEn.message}</span>
                )}
              </label>
            </div>
            <div className={styles.formButtonsArea}>
              <button
                className={styles.cancelButton}
                onClick={(e) => {
                  e.preventDefault()
                  handleCancelModal()
                }}
              >
                Cancelar
              </button>
              <button className={styles.submitButton} type="submit">
                {news.id ? 'Editar Notícia' : 'Criar Notícia'}
              </button>
            </div>
          </form>
        </aside>
      </section>
      {cancel && (
        <section className={styles.confirmCancelModalContainer}>
          <aside className={styles.confirmCancelModalContent}>
            <h1 className={styles.confirmCancelModalTitle}>
              Tem certeza que você deseja cancelar?
            </h1>
            <div className={styles.buttonsArea}>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleCancelModal()
                }}
                className={styles.cancelButtonModal}
              >
                Não
              </button>
              <Link
                className={styles.cancelButton}
                href={'/ib-login/dashboard/noticias'}
              >
                Cancelar
              </Link>
            </div>
          </aside>
        </section>
      )}
      {loading && (
        <section className={styles.loadingContainer}>
          <aside className={styles.loadingContent}>
            Enviando dados...{' '}
            <AiOutlineLoading
              width={100}
              height={100}
              className={styles.loading}
            />
          </aside>
        </section>
      )}
    </>
  )
}
