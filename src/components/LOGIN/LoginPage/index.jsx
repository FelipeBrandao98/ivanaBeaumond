'use client'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useContext } from 'react'
import { AuthContext } from '@/Context/AuthContext'

import styles from './styles.module.css'

const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório!')
    .email('Formato de e-mail inválido!'),
  password: z
    .string()
    .min(8, 'A senha precisa ter no mínimo 8 caracteres!')
    .max(20, 'A senha pode ter no máximo 20 caracteres'),
})

export function LoginPage({ login }) {
  const { token, handleChangeToken } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin(formData) {
    const response = await login(formData)
    await handleChangeToken(response.accessToken)
  }
  return (
    <>
      <aside className={styles.container}>
        <section className={styles.content}>
          <h1 className={styles.caution}>
            <span className={styles.cautionIcon}>
              Atenção{' '}
              <BsFillExclamationTriangleFill
                width={50}
                height={50}
                className={styles.icon}
              />
            </span>
            <span className={styles.cautionTwo}>
              acesso apenas para pessoas autorizadas!
            </span>
          </h1>
          <h1 className={styles.title}>Faça seu Login</h1>
          <form className={styles.form} action={handleSubmit(handleLogin)}>
            <label htmlFor="email" className={styles.label}>
              E-mail:
              <input
                type="email"
                id="email"
                className={styles.input}
                {...register('email')}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </label>
            <label htmlFor="password" className={styles.label}>
              Senha:
              <input
                type="password"
                id="password"
                className={styles.input}
                {...register('password')}
              />
              {errors.password && (
                <span className={styles.error}>{errors.password.message}</span>
              )}
            </label>
            <button className={styles.button}>Entrar</button>
          </form>
        </section>
      </aside>
    </>
  )
}
