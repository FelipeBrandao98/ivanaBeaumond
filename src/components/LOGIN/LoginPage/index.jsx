'use client'
import {
  BsFillExclamationTriangleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'
import { AiOutlineLoading } from 'react-icons/ai'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useContext, useState } from 'react'
import { AuthContext } from '@/Context/AuthContext'

import styles from './styles.module.css'
import Link from 'next/link'

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
  const { handleChangeToken } = useContext(AuthContext)
  const [isAuthenticated, setIsAuthenticated] = useState('login')
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin(formData) {
    setIsAuthenticated('loading')
    try {
      const response = await login(formData)
      await handleChangeToken(response.accessToken)
      setIsAuthenticated('success')
    } catch (err) {
      if (err) {
        setIsAuthenticated('failed')
      }
    }
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
            {isAuthenticated === 'loading' ? (
              <button
                onClick={(e) => e.preventDefault()}
                className={`${styles.button} ${styles.buttonLoading}`}
              >
                Carregando...{' '}
                <AiOutlineLoading
                  width={40}
                  height={40}
                  className={styles.buttonIcon}
                />
              </button>
            ) : isAuthenticated === 'success' ? (
              <>
                <p className={styles.succesMessage}>Login bem-sucedido!</p>
                <Link
                  href={'ib-login/dashboard'}
                  className={`${styles.button} ${styles.buttonSuccess}`}
                >
                  Acessar Dashboard!
                  <BsFillArrowRightCircleFill width={40} height={40} />
                </Link>
              </>
            ) : isAuthenticated === 'failed' ? (
              <>
                <p className={styles.failedMessage}>
                  Erro ao tentar fazer a autenticação
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setIsAuthenticated('login')
                  }}
                  className={`${styles.button} ${styles.buttonRetry}`}
                >
                  Tente Novamente
                  <BsFillArrowRightCircleFill width={40} height={40} />
                </button>
              </>
            ) : (
              isAuthenticated === 'login' && (
                <button className={styles.button}>Entrar</button>
              )
            )}
          </form>
        </section>
      </aside>
    </>
  )
}
