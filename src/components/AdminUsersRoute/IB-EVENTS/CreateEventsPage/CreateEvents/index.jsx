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
import { CreateImageEventsContext } from '@/Context/CreateImageEventsContext'

// Manipulate strings imports
import { format } from 'date-fns'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Styles imports
import styles from './styles.module.css'

// Atoms imports
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'
import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'
import DashboardTabLang from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabLang'
import DashboardTabLangTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabLangTitle'
import DashboardForm from '@/atoms/AdminUsersRoute/Dashboard/DashboardForm'
import DashboardCancel from '@/atoms/AdminUsersRoute/Dashboard/DashboardCancel'
import DashboardButtonsArea from '@/atoms/AdminUsersRoute/Dashboard/DashboardButtonsArea'
import DashboardButton from '@/atoms/AdminUsersRoute/Dashboard/DashboardButton'
import DashboardLabel from '@/atoms/AdminUsersRoute/Dashboard/DashboardLabel'
import DashboardTabPT from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabPT'
import DashboardTabDE from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabDE'
import DashboardTabFR from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabFR'
import DashboardTabEn from '@/atoms/AdminUsersRoute/Dashboard/DashboardTabEN'
//

// Api Functions imports
import editNews from '@/api/CallsWithToken/News/PATCH/editNews'
import createNews from '@/api/CallsWithToken/News/POST/createNews'
import { EventesContext } from '@/Context/EventsContext'
//

// Schema Zod Definition
const createEventFormSchema = z.object({
  isEvent: z.any().transform((data) => Boolean(data)),
  publishDate: z
    .string()
    .nonempty()
    .transform((date) => new Date(date)),
  published: z.boolean(),
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
export default function CreateEvents() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { image, handleShowCreateImage } = useContext(CreateImageEventsContext)
  const { events, handleEvents } = useContext(EventesContext)

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
    resolver: zodResolver(createEventFormSchema),
  })
  //

  // functions to handle with datas from api
  async function handleCreateEvent(formData) {
    setLoading(true)
    formData.coverId = image.id
    events.id
      ? await editNews(news.id, token, formData)
      : await createNews(token, formData)

    router.back()
    handleEvents({})
    setLoading(false)
  }
  //

  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMainTitle>Novo Evento</DashboardMainTitle>

      <DashboardContainer hasTab>
        <DashboardTabLang tab={tab} setTab={setTab} />

        <DashboardTabLangTitle name="Evento" tab={tab} />

        <DashboardForm action={handleSubmit(handleCreateEvent)}>
          <label id="isEvent" htmlFor="isEvent">
            <input
              type="hidden"
              htmlFor="isEvent"
              defaultValue={true}
              value={true}
              {...register('isEvent')}
            />
          </label>

          <DashboardLabel
            htmlFor="publishDate"
            name="Data de Publicação"
            errors={errors.publishDate}
          >
            {events.publishDate ? (
              <input
                type="date"
                id="publishDate"
                defaultValue={
                  events &&
                  format(new Date(events.publishDate), "yyyy'-'MM'-'dd")
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
            {events.published ? (
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
              {events.cover?.url ? (
                <Image
                  width={800}
                  height={800}
                  className={styles.cover}
                  src={events.cover.url}
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
                defaultValue={events && events.coverCredit}
                {...register('coverCredit')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="title"
              name="Título do Evento"
              errors={errors.title}
            >
              <input
                type="text"
                id="title"
                defaultValue={events && events.title}
                {...register('title')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="subtitle"
              name="Sub-Título do Evento"
              errors={errors.subtitle}
            >
              <input
                type="text"
                id="subtitle"
                defaultValue={events && events.subtitle}
                {...register('subtitle')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="body"
              name="Corpo do Evento"
              errors={errors.body}
            >
              <input
                type="textarea"
                className={styles.inputExpanded}
                id="body"
                defaultValue={events && events.body}
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
                defaultValue={events && events.coverCreditDe}
                {...register('coverCreditDe')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="titleDe"
              name="Título do Evento"
              errors={errors.titleDe}
            >
              <input
                type="text"
                id="titleDe"
                defaultValue={events && events.titleDe}
                {...register('titleDe')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="subtitleDe"
              name="Sub-Título do Evento"
              errors={errors.subtitleDe}
            >
              <input
                type="text"
                id="subtitleDe"
                defaultValue={events && events.subtitleDe}
                {...register('subtitleDe')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="bodyDe"
              name="Corpo do Evento"
              errors={errors.bodyDe}
            >
              <input
                type="textarea"
                className={styles.inputExpanded}
                id="bodyDe"
                defaultValue={events && events.bodyDe}
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
                defaultValue={events && events.coverCreditFr}
                {...register('coverCreditFr')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="titleFr"
              name="Título do Evento"
              errors={errors.titleFr}
            >
              <input
                type="text"
                id="titleFr"
                defaultValue={events && events.titleFr}
                {...register('titleFr')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="subtitleFr"
              name="Sub-Título do Evento"
              errors={errors.subtitleFr}
            >
              <input
                type="text"
                id="subtitleFr"
                defaultValue={events && events.subtitleFr}
                {...register('subtitleFr')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="bodyFr"
              name="Corpo do Evento"
              errors={errors.bodyFr}
            >
              <input
                type="textarea"
                className={styles.inputExpanded}
                id="bodyFr"
                defaultValue={events && events.bodyFr}
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
                defaultValue={events && events.coverCreditEn}
                {...register('coverCreditEn')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="titleEn"
              name="Título do Evento"
              errors={errors.titleEn}
            >
              <input
                type="text"
                id="titleEn"
                defaultValue={events && events.titleEn}
                {...register('titleEn')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="subtitleEn"
              name="Sub-Título do Evento"
              errors={errors.subtitleEn}
            >
              <input
                type="text"
                id="subtitleEn"
                defaultValue={events && events.subtitleEn}
                {...register('subtitleEn')}
              />
            </DashboardLabel>

            <DashboardLabel
              htmlFor="bodyEn"
              name="Corpo do Evento"
              errors={errors.bodyEn}
            >
              <input
                type="textarea"
                className={styles.inputExpanded}
                id="bodyEn"
                defaultValue={events && events.bodyEn}
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
              {events.id ? 'Editar Evento' : 'Criar Evento'}
            </DashboardButton>
          </DashboardButtonsArea>
        </DashboardForm>
      </DashboardContainer>

      <DashboardCancel
        cancel={cancel}
        setCancel={setCancel}
        href={'/ib-login/dashboard/eventos'}
      />

      <DashboardLoading loading={loading} />
    </>
  )
  //
}
