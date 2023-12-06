'use client'

// React imports
import { useContext, useState } from 'react'

// Next.js Components imports
import Link from 'next/link'

// Icons imports
import {
  BsFillExclamationTriangleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'
import { AiOutlineLoading } from 'react-icons/ai'

// Context imports
import { AuthContext } from '@/Context/AuthContext'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Styles imports
import styles from './styles.module.css'

// Atoms imports
import DashboardForm from '@/atoms/AdminUsersRoute/Dashboard/DashboardForm'
import DashboardLabel from '@/atoms/AdminUsersRoute/Dashboard/DashboardLabel'

// Api imports
import login from '@/api/CallsWithoutToken/login'
import LoginContainer from '@/atoms/LOGIN/LoginContainer'
//

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
//

// Component Declaration
export default function LoginPage() {
  // States declaratios
  const [isAuthenticated, setIsAuthenticated] = useState('login')

  // Contexts Declarations
  const { handleChangeToken } = useContext(AuthContext)

  // Instance of Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  })
  //

  // Functions to manipulate on Form Send
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
  //

  // Return components, with functions to call API and language
  return (
    <>
      <LoginContainer>
        <h1>Faça seu Login</h1>

        <DashboardForm
          className={styles.form}
          action={handleSubmit(handleLogin)}
        >
          <DashboardLabel htmlFor="email" name="E-mail" errors={errors.email}>
            <input
              type="email"
              id="email"
              className={styles.input}
              {...register('email')}
            />
          </DashboardLabel>

          <DashboardLabel
            htmlFor="password"
            name="Senha"
            errors={errors.password}
          >
            <input
              type="password"
              id="password"
              className={styles.input}
              {...register('password')}
            />
          </DashboardLabel>

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
        </DashboardForm>
      </LoginContainer>
    </>
  )
  //
}
