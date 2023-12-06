'use client'

// React imports
import { useState } from 'react'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Api calls imports
import createAppointment from '@/api/CallsWithoutToken/createAppointment'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Atoms imports
import EndUserForm from '@/atoms/Forms/EndUserForm'
import EndUserLabel from '@/atoms/Forms/EndUserLabel'
import EndUserCheckBoxLabel from '@/atoms/Forms/EndUserCheckBoxLabel'
import EndUserSendButton from '@/atoms/Forms/EndUserSendButton'

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

export default function AppointmentForm({ lang }) {
  // States declaratios
  const [createAppointmentLoader, setCreateAppointmentLoader] = useState('')

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
  function handleCreateAppointment(formData) {
    setCreateAppointmentLoader('loading')
    createAppointment(formData)
    setCreateAppointmentLoader('loaded')
  }

  // Return components, with functions to call API and language
  return (
    <>
      <EndUserForm action={handleSubmit(handleCreateAppointment)} inAppointment>
        <h1>{languageTraducted.layout.menu.appointmentBanner.title}</h1>
        <EndUserLabel
          name={languageTraducted.layout.menu.appointmentBanner.yourName}
          htmlFor="name"
          errors={errors.name}
        >
          <input type="text" id="name" {...register('name')} />
        </EndUserLabel>
        <EndUserLabel
          name={languageTraducted.layout.menu.appointmentBanner.yourEmail}
          htmlFor="mail"
          errors={errors.email}
        >
          <input type="email" id="email" {...register('email')} />
        </EndUserLabel>
        <EndUserLabel
          name={languageTraducted.layout.menu.appointmentBanner.yourPhone}
          htmlFor="phone"
          errors={errors.phone}
        >
          <input type="tel" id="phone" {...register('phone')} />
        </EndUserLabel>
        {languageTraducted.layout.menu.appointmentBanner.rent}
        <fieldset>
          <EndUserCheckBoxLabel
            name={languageTraducted.layout.menu.appointmentBanner.bride}
            htmlFor="bride"
          >
            <input
              type="checkbox"
              name="bride"
              id="bride"
              {...register('bride')}
            />
          </EndUserCheckBoxLabel>

          <EndUserCheckBoxLabel
            name={languageTraducted.layout.menu.appointmentBanner.groom}
            htmlFor="groom"
          >
            <input type="checkbox" name="" id="groom" {...register('groom')} />
          </EndUserCheckBoxLabel>

          <EndUserCheckBoxLabel
            name={languageTraducted.layout.menu.appointmentBanner.debutant}
            htmlFor="debutant"
          >
            <input
              type="checkbox"
              name="debutant"
              id="debutant"
              {...register('debutant')}
            />
          </EndUserCheckBoxLabel>

          <EndUserCheckBoxLabel
            name={languageTraducted.layout.menu.appointmentBanner.bridesmaid}
            htmlFor="bridesmaid"
          >
            <input
              type="checkbox"
              name="bridesmaid"
              id="bridesmaid"
              {...register('bridesmaid')}
            />
          </EndUserCheckBoxLabel>

          <EndUserCheckBoxLabel
            name={languageTraducted.layout.menu.appointmentBanner.party}
            htmlFor="party"
          >
            <input
              type="checkbox"
              name="party"
              id="party"
              {...register('party')}
            />
          </EndUserCheckBoxLabel>
        </fieldset>
        <EndUserLabel
          name={languageTraducted.layout.menu.appointmentBanner.merryDate}
          htmlFor="merryDate"
          errors={errors.merryDate}
        >
          <input type="date" id="merryDate" {...register('merryDate')} />
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
    </>
  )
}
