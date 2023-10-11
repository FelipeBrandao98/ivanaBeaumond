'use client'

import { AuthContext } from '@/Context/AuthContext'
import { CreateImageCollectionContext } from '@/Context/CreateImageCollectionContext'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext } from 'react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import ReactCountryFlag from 'react-country-flag'
import { MdPhoto } from 'react-icons/md'
import { AiOutlineLoading } from 'react-icons/ai'

import styles from './styles.module.css'
import { CollectionsContext } from '@/Context/CollectionsContext'
import { useRouter } from 'next/navigation'

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

export default function CreateCollection({
  categories,
  createCollection,
  editCollection,
}) {
  const router = useRouter()

  const [tab, setTab] = useState('pt-BR')
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)

  const { token } = useContext(AuthContext)
  const { collections, handleCollections } = useContext(CollectionsContext)
  const { image, handleShowCreateImage } = useContext(
    CreateImageCollectionContext,
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(createCollectionFormSchema),
  })

  async function handleCreateCollection(formData) {
    setLoading(true)
    formData.coverId = image.id
    collections.id
      ? await editCollection(collections.id, token, formData)
      : await createCollection(token, formData)

    router.back()
  }

  function handleCancelModal() {
    setCancel(!cancel)
  }

  return (
    <>
      <h1>Nova Coleção</h1>
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
              Coleção em Português <ReactCountryFlag countryCode="BR" svg />
            </h1>
          ) : tab === 'de' ? (
            <h1 className={styles.title}>
              Coleção em Alemão <ReactCountryFlag countryCode="DE" svg />
            </h1>
          ) : tab === 'fr' ? (
            <h1 className={styles.title}>
              Coleção em Francês <ReactCountryFlag countryCode="FR" svg />
            </h1>
          ) : tab === 'en' ? (
            <h1 className={styles.title}>
              Coleção em Inglês <ReactCountryFlag countryCode="US" svg />
            </h1>
          ) : (
            ''
          )}

          <form action={handleSubmit(handleCreateCollection)}>
            <label htmlFor="categoryId" className={styles.labelCategory}>
              Categoria da Coleção
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

            <div
              className={`${
                tab === 'pt-BR' ? styles.ptActive : styles.ptInactive
              }`}
            >
              <label htmlFor="title" className={styles.label}>
                Título da Coleção
                <input
                  type="text"
                  className={styles.input}
                  id="title"
                  defaultValue={collections.title && collections.title}
                  {...register('title')}
                />
                {errors.title && (
                  <span className={styles.error}>{errors.title.message}</span>
                )}
              </label>
              <label htmlFor="description" className={styles.label}>
                Descrição da Coleção
                <input
                  type="text"
                  className={styles.input}
                  id="description"
                  defaultValue={
                    collections.description && collections.description
                  }
                  {...register('description')}
                />
                {errors.description && (
                  <span className={styles.error}>
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
            <div
              className={`${
                tab === 'de' ? styles.deActive : styles.deInactive
              }`}
            >
              <label htmlFor="titleDe" className={styles.label}>
                Título da Coleção
                <input
                  type="text"
                  className={styles.input}
                  id="titleDe"
                  defaultValue={collections.titleDe && collections.titleDe}
                  {...register('titleDe')}
                />
                {errors.titleDe && (
                  <span className={styles.error}>{errors.titleDe.message}</span>
                )}
              </label>
              <label htmlFor="descriptionDe" className={styles.label}>
                Descrição da Coleção
                <input
                  type="text"
                  className={styles.input}
                  id="descriptionDe"
                  defaultValue={
                    collections.descriptionDe && collections.descriptionDe
                  }
                  {...register('descriptionDe')}
                />
                {errors.descriptionDe && (
                  <span className={styles.error}>
                    {errors.descriptionDe.message}
                  </span>
                )}
              </label>
            </div>
            <div
              className={`${
                tab === 'fr' ? styles.frActive : styles.frInactive
              }`}
            >
              <label htmlFor="titleFr" className={styles.label}>
                Título da Coleção
                <input
                  type="text"
                  className={styles.input}
                  id="titleFr"
                  defaultValue={collections.titleFr && collections.titleFr}
                  {...register('titleFr')}
                />
                {errors.titleFr && (
                  <span className={styles.error}>{errors.titleFr.message}</span>
                )}
              </label>
              <label htmlFor="descriptionFr" className={styles.label}>
                Descrição da Coleção
                <input
                  type="text"
                  className={styles.input}
                  id="descriptionFr"
                  defaultValue={
                    collections.descriptionFr && collections.descriptionFr
                  }
                  {...register('descriptionFr')}
                />
                {errors.descriptionFr && (
                  <span className={styles.error}>
                    {errors.descriptionFr.message}
                  </span>
                )}
              </label>
            </div>
            <div
              className={`${
                tab === 'en' ? styles.enActive : styles.enInactive
              }`}
            >
              <label htmlFor="titleEn" className={styles.label}>
                Título da Coleção
                <input
                  type="text"
                  className={styles.input}
                  id="titleEn"
                  defaultValue={collections.titleEn && collections.titleEn}
                  {...register('titleEn')}
                />
                {errors.titleEn && (
                  <span className={styles.error}>{errors.titleEn.message}</span>
                )}
              </label>
              <label htmlFor="descriptionEn" className={styles.label}>
                Descrição da Coleção
                <input
                  type="text"
                  className={styles.input}
                  id="descriptionEn"
                  defaultValue={
                    collections.descriptionEn && collections.descriptionEn
                  }
                  {...register('descriptionEn')}
                />
                {errors.descriptionEn && (
                  <span className={styles.error}>
                    {errors.descriptionEn.message}
                  </span>
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
                {collections.id ? 'Editar Coleção' : 'Criar Coleção'}
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
