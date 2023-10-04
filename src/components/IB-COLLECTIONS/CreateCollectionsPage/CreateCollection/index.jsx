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

import styles from './styles.module.css'

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

export default function CreateCollection({ categories, createCollection }) {
  const [tab, setTab] = useState('pt-BR')
  const [cancel, setCancel] = useState(false)

  const { token } = useContext(AuthContext)
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
    formData.coverId = image.id
    const res = await createCollection(token, formData)
    console.log(res)
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
                defaultValue=""
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
                <MdPhoto
                  width={100}
                  height={100}
                  className={styles.coverImageIcon}
                />
                Escolher foto de capa
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
                Criar Notícia
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
