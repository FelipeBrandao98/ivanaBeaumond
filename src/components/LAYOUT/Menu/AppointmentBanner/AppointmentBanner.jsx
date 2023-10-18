'use client'

import { useState } from 'react'
import { HiX } from 'react-icons/hi'
import { AiOutlineLoading, AiOutlineCheckCircle } from 'react-icons/ai'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './styles.module.css'

import useLangDict from '@/utils/useLangDict'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
)

const createAppointmentFormSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório!')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório!')
    .email('Formato de e-mail inválido!'),
  phone: z
    .string()
    .nonempty('O número de telefone é obrigatório!')
    .min(10, { message: 'O número de telefone é inválido!' })
    .max(14, { message: 'O número de telefone é inválido!' })
    .regex(phoneRegex, 'Telefone inválido!'),
  bride: z.boolean(),
  groom: z.boolean(),
  debutant: z.boolean(),
  bridesmaid: z.boolean(),
  party: z.boolean(),
  merryDate: z.string().transform((dateString, ctx) => {
    const date = new Date(dateString)
    if (!z.date().safeParse(date).success) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: 'Data Inválida!',
      })
    }
    if (date < new Date()) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: 'Data não pode ser anterior ao dia de hoje!',
      })
    }
    return date
  }),
})

export default function AppointmentBanner({
  lang,
  createAppointment,
  isHidden,
  close,
}) {
  const [createAppointmentLoader, setCreateAppointmentLoader] = useState('')

  const languageTraducted = useLangDict(lang)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(createAppointmentFormSchema),
  })

  function handleCreateAppointment(formData) {
    setCreateAppointmentLoader('loading')
    createAppointment(formData)
    setTimeout(setCreateAppointmentLoader('loaded'), 5000)
  }

  return (
    <>
      {isHidden && (
        <section className={styles.container}>
          <aside className={styles.content}>
            <span className={styles.closeButton} onClick={close}>
              <HiX width={20} height={20} />
            </span>

            <form
              action={handleSubmit(handleCreateAppointment)}
              className={styles.form}
            >
              <h1 className={styles.title}>
                {languageTraducted.layout.menu.appointmentBanner.title}
              </h1>

              <label className={styles.label} htmlFor="name">
                {languageTraducted.layout.menu.appointmentBanner.yourName}
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  {...register('name')}
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name.message}</span>
                )}
              </label>

              <label className={styles.label} htmlFor="mail">
                {languageTraducted.layout.menu.appointmentBanner.yourEmail}
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  {...register('email')}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email.message}</span>
                )}
              </label>

              <label className={styles.label} htmlFor="phone">
                {languageTraducted.layout.menu.appointmentBanner.yourPhone}
                <input
                  className={styles.input}
                  type="tel"
                  id="phone"
                  {...register('phone')}
                />
                {errors.phone && (
                  <span className={styles.error}>{errors.phone.message}</span>
                )}
              </label>

              {languageTraducted.layout.menu.appointmentBanner.rent}

              <fieldset className={styles.checkArea}>
                <label className={styles.labelTwo} htmlFor="bride">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="bride"
                    id="bride"
                    {...register('bride')}
                  />
                  <span className={styles.newCheckbox}></span>
                  {languageTraducted.layout.menu.appointmentBanner.bride}
                </label>

                <label className={styles.labelTwo} htmlFor="groom">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name=""
                    id="groom"
                    {...register('groom')}
                  />
                  <span className={styles.newCheckbox}></span>
                  {languageTraducted.layout.menu.appointmentBanner.groom}
                </label>

                <label className={styles.labelTwo} htmlFor="debutant">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="debutant"
                    id="debutant"
                    {...register('debutant')}
                  />
                  <span className={styles.newCheckbox}></span>
                  {languageTraducted.layout.menu.appointmentBanner.debutant}
                </label>

                <label className={styles.labelTwo} htmlFor="bridesmaid">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="bridesmaid"
                    id="bridesmaid"
                    {...register('bridesmaid')}
                  />
                  <span className={styles.newCheckbox}></span>
                  {languageTraducted.layout.menu.appointmentBanner.bridesmaid}
                </label>

                <label className={styles.labelTwo} htmlFor="party">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="party"
                    id="party"
                    {...register('party')}
                  />
                  <span className={styles.newCheckbox}></span>
                  {languageTraducted.layout.menu.appointmentBanner.party}
                </label>
              </fieldset>

              <label htmlFor="merryDate">
                {languageTraducted.layout.menu.appointmentBanner.merryDate}
                <input
                  className={styles.input}
                  type="datetime-local"
                  id="merryDate"
                  {...register('merryDate')}
                />
                {errors.merryDate && (
                  <span className={styles.error}>
                    {errors.merryDate.message}
                  </span>
                )}
              </label>

              {createAppointmentLoader === 'loading' ? (
                <button className={styles.buttonLoading}>
                  {
                    languageTraducted.layout.menu.appointmentBanner.button
                      .sending
                  }
                  <AiOutlineLoading
                    className={styles.rotating}
                    width={50}
                    height={50}
                  />
                </button>
              ) : createAppointmentLoader === 'loaded' ? (
                <button className={styles.buttonLoaded}>
                  {languageTraducted.layout.menu.appointmentBanner.button.sent}{' '}
                  <AiOutlineCheckCircle width={50} height={50} />
                </button>
              ) : (
                <button className={styles.button} type="submit">
                  {languageTraducted.layout.menu.appointmentBanner.button.send}
                </button>
              )}
            </form>
          </aside>
        </section>
      )}
    </>
  )
}
