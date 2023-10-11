'use client'

import { AuthContext } from '@/Context/AuthContext'
import { CreateImageNewsContext } from '@/Context/CreateImageNewsContext'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext } from 'react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import ReactCountryFlag from 'react-country-flag'
import { MdPhoto } from 'react-icons/md'

import styles from './styles.module.css'
import { CollectionsCategoryContext } from '@/Context/CollectionsCategoryContext'
import { CreateImageCategoryContext } from '@/Context/CreateImageCategoryContext'
import { useRouter } from 'next/navigation'

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

export default function CreateCategory({ createCategory, editCategory }) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [tab, setTab] = useState('pt-BR')
  const [cancel, setCancel] = useState(false)

  const { token } = useContext(AuthContext)
  const { category, handleCategory } = useContext(CollectionsCategoryContext)
  const { image, handleShowCreateImage, handleChangeImage } = useContext(
    CreateImageCategoryContext,
  )

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
    category.id
      ? await editCategory(category.id, token, formData)
      : await createCategory(token, formData)
    handleChangeImage({})
    router.back()
    setLoading(false)
  }

  function handleCancelModal() {
    setCancel(!cancel)
  }

  return (
    <>
      <h1>Nova Categoria de Coleção</h1>
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
              Categoria de Coleção em Português{' '}
              <ReactCountryFlag countryCode="BR" svg />
            </h1>
          ) : tab === 'de' ? (
            <h1 className={styles.title}>
              Categoria de Coleção em Alemão{' '}
              <ReactCountryFlag countryCode="DE" svg />
            </h1>
          ) : tab === 'fr' ? (
            <h1 className={styles.title}>
              Categoria de Coleção em Francês{' '}
              <ReactCountryFlag countryCode="FR" svg />
            </h1>
          ) : tab === 'en' ? (
            <h1 className={styles.title}>
              Categoria de Coleção em Inglês{' '}
              <ReactCountryFlag countryCode="US" svg />
            </h1>
          ) : (
            ''
          )}

          <form action={handleSubmit(handleCreateNews)}>
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

            <div
              className={`${
                tab === 'pt-BR' ? styles.ptActive : styles.ptInactive
              }`}
            >
              <label htmlFor="description" className={styles.label}>
                Título:
                <input
                  type="text"
                  className={styles.input}
                  id="description"
                  defaultValue={category.description && category.description}
                  {...register('description')}
                />
                {errors.description && (
                  <span className={styles.error}>
                    {errors.description.message}
                  </span>
                )}
              </label>
              <label htmlFor="subdescription" className={styles.label}>
                Descrição:
                <input
                  type="text"
                  className={styles.input}
                  id="subdescription"
                  defaultValue={
                    category.subdescription && category.subdescription
                  }
                  {...register('subdescription')}
                />
                {errors.subdescription && (
                  <span className={styles.error}>
                    {errors.subdescription.message}
                  </span>
                )}
              </label>
            </div>
            <div
              className={`${
                tab === 'de' ? styles.deActive : styles.deInactive
              }`}
            >
              <label htmlFor="descriptionDe" className={styles.label}>
                Título:
                <input
                  type="text"
                  className={styles.input}
                  id="descriptionDe"
                  defaultValue={
                    category.descriptionDe && category.descriptionDe
                  }
                  {...register('descriptionDe')}
                />
                {errors.descriptionDe && (
                  <span className={styles.error}>
                    {errors.descriptionDe.message}
                  </span>
                )}
              </label>
              <label htmlFor="subdescriptionDe" className={styles.label}>
                Descrição:
                <input
                  type="text"
                  className={styles.input}
                  id="subdescriptionDe"
                  defaultValue={
                    category.subdescriptionDe && category.subdescriptionDe
                  }
                  {...register('subdescriptionDe')}
                />
                {errors.subdescriptionDe && (
                  <span className={styles.error}>
                    {errors.subdescriptionDe.message}
                  </span>
                )}
              </label>
            </div>
            <div
              className={`${
                tab === 'fr' ? styles.frActive : styles.frInactive
              }`}
            >
              <label htmlFor="descriptionFr" className={styles.label}>
                Título:
                <input
                  type="text"
                  className={styles.input}
                  id="descriptionFr"
                  defaultValue={
                    category.descriptionFr && category.descriptionFr
                  }
                  {...register('descriptionFr')}
                />
                {errors.descriptionFr && (
                  <span className={styles.error}>
                    {errors.descriptionFr.message}
                  </span>
                )}
              </label>
              <label htmlFor="subdescriptionFr" className={styles.label}>
                Descrição:
                <input
                  type="text"
                  className={styles.input}
                  id="subdescriptionFr"
                  defaultValue={
                    category.subdescriptionFr && category.subdescriptionFr
                  }
                  {...register('subdescriptionFr')}
                />
                {errors.subdescriptionFr && (
                  <span className={styles.error}>
                    {errors.subdescriptionFr.message}
                  </span>
                )}
              </label>
            </div>
            <div
              className={`${
                tab === 'en' ? styles.enActive : styles.enInactive
              }`}
            >
              <label htmlFor="descriptionEn" className={styles.label}>
                Título:
                <input
                  type="text"
                  className={styles.input}
                  id="descriptionEn"
                  defaultValue={
                    category.descriptionEn && category.descriptionEn
                  }
                  {...register('descriptionEn')}
                />
                {errors.descriptionEn && (
                  <span className={styles.error}>
                    {errors.descriptionEn.message}
                  </span>
                )}
              </label>
              <label htmlFor="subdescriptionEn" className={styles.label}>
                Descrição:
                <input
                  type="text"
                  className={styles.input}
                  id="subdescriptionEn"
                  defaultValue={
                    category.subdescriptionEn && category.subdescriptionEn
                  }
                  {...register('subdescriptionEn')}
                />
                {errors.subdescriptionEn && (
                  <span className={styles.error}>
                    {errors.subdescriptionEn.message}
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
                {category.id ? 'Editar Categoria' : 'Criar Categoria'}
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
    </>
  )
}
