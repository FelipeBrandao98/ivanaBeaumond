'use client'

import { useState } from 'react'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import EndUserForm from '@/atoms/EndUsersRoute/Forms/EndUserForm'
import styles from './styles.module.css'
import EndUserLabel from '@/atoms/EndUsersRoute/Forms/EndUserLabel'
import EndUserSendButton from '@/atoms/EndUsersRoute/Forms/EndUserSendButton'
import getLangDict from '@/utils/getLangDict'
import { BsFillStarFill, BsStar } from 'react-icons/bs'
import updateComments from '@/api/CallsWithoutToken/Comments/PATCH/updateComment'

const createAppointmentFormSchema = z.object({
  description: z.string(),
  commentCode: z.string(),
})

export default function CommentForm({ lang, dark }) {
  // States declaratios
  const [createAppointmentLoader, setCreateAppointmentLoader] = useState('')
  const [avaliationPoints, setAvaliationPoints] = useState(0)

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Instance of Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(createAppointmentFormSchema),
  })
  //

  // Functions to manipulate on Form Send
  async function handleCreateAppointment(formData) {
    setCreateAppointmentLoader('loading')
    // createAppointment(formData)
    const commentCode = formData.commentCode
    formData.avaliation = avaliationPoints
    delete formData.commentCode
    await updateComments(commentCode, formData)
    setCreateAppointmentLoader('loaded')
  }

  function handlePoints(point) {
    setAvaliationPoints(point)
  }
  return (
    <div
      className={
        dark ? `${styles.container} ${styles.dark}` : `${styles.container}`
      }
    >
      <h1>Comment Form</h1>
      <EndUserForm action={handleSubmit(handleCreateAppointment)} inAppointment>
        <EndUserLabel
          name="Deixe aqui a sua nota para a nossa loja"
          htmlFor="avaliation"
          errors={errors.avaliation}
        >
          {avaliationPoints === 0 ? (
            <div className={styles.avaliationArea}>
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(1)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(2)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(3)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(4)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(5)
                }}
              />
            </div>
          ) : avaliationPoints === 1 ? (
            <div className={styles.avaliationArea}>
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(1)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(2)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(3)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(4)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(5)
                }}
              />
            </div>
          ) : avaliationPoints === 2 ? (
            <div className={styles.avaliationArea}>
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(1)
                }}
              />
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(2)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(3)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(4)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(5)
                }}
              />
            </div>
          ) : avaliationPoints === 3 ? (
            <div className={styles.avaliationArea}>
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(1)
                }}
              />
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(2)
                }}
              />
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(3)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(4)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(5)
                }}
              />
            </div>
          ) : avaliationPoints === 4 ? (
            <div className={styles.avaliationArea}>
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(1)
                }}
              />
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(2)
                }}
              />
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(3)
                }}
              />
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(4)
                }}
              />
              <BsStar
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(5)
                }}
              />
            </div>
          ) : avaliationPoints === 5 ? (
            <div className={styles.avaliationArea}>
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(1)
                }}
              />
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(2)
                }}
              />
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(3)
                }}
              />
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(4)
                }}
              />
              <BsFillStarFill
                className={styles.point}
                width={100}
                height={100}
                onClick={(e) => {
                  e.preventDefault()
                  handlePoints(5)
                }}
              />
            </div>
          ) : (
            ''
          )}
        </EndUserLabel>

        <EndUserLabel
          name={'Qual seu código de registro de comentário?'}
          htmlFor={'commentCode'}
          errors={errors.commentCode}
        >
          <input
            type="text"
            htmlFor="commentCode"
            {...register('commentCode')}
          />
        </EndUserLabel>

        <EndUserLabel
          name={'Deixe seu comentário nessa área abaixo'}
          htmlFor={'description'}
          errors={errors.description}
        >
          <textarea
            className={styles.inputExpanded}
            type="text"
            htmlFor="description"
            {...register('description')}
          />
        </EndUserLabel>

        {createAppointmentLoader === 'loading' ? (
          <EndUserSendButton loader="loading">
            {languageTraducted.layout.menu.appointmentBanner.button.sending}
          </EndUserSendButton>
        ) : createAppointmentLoader === 'loaded' ? (
          <EndUserSendButton loader="loaded">
            {languageTraducted.layout.menu.appointmentBanner.button.sent}{' '}
          </EndUserSendButton>
        ) : (
          <EndUserSendButton type="submit">
            {languageTraducted.layout.menu.appointmentBanner.button.send}
          </EndUserSendButton>
        )}
      </EndUserForm>
    </div>
  )
}
