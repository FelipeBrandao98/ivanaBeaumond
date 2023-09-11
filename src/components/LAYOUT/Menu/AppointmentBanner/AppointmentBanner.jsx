'use client'

import { useState } from 'react'
import { HiX } from 'react-icons/hi'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './styles.module.css'

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
  phone: z.string().nonempty('O número de telefone é obrigatório!'),
  bride: z.boolean(),
  groom: z.boolean(),
  debutant: z.boolean(),
  bridesmaid: z.boolean(),
  party: z.boolean(),
  merryDate: z.string(),
})

export default function AppointmentBanner({ isHidden, close }) {
  const [output, setOutput] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(createAppointmentFormSchema),
  })

  function createAppointment(data) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <>
      {isHidden ? (
        <section className={styles.container}>
          <aside className={styles.content}>
            <span className={styles.closeButton} onClick={close}>
              <HiX width={20} height={20} />
            </span>
            <form
              action=""
              className={styles.form}
              onSubmit={handleSubmit(createAppointment)}
            >
              <h1 className={styles.title}>Faça seu agendamento</h1>
              <label className={styles.label} htmlFor="name">
                Seu Nome:
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
                Seu E-mail:
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
                Seu Telefone:
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
              O que deseja alugar?
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
                  Vestido de Noiva
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
                  Traje do Noivo
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
                  Vestido de Debutantes
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
                  Vestido de Daminha
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
                  Vestido de Festa
                </label>
              </fieldset>
              <label htmlFor="merryDate">
                Quando é a data da sua festa/casamento?
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
              <button className={styles.button} type="submit">
                Enviar
              </button>
            </form>
            <pre>{output}</pre>
          </aside>
        </section>
      ) : (
        ''
      )}
    </>
  )
}
