'use client'
import { BsArrowLeft } from 'react-icons/bs'

import styles from './styles.module.css'
import { useRouter } from 'next/navigation'

export default function DashboardMainTitle(props) {
  const { children, isBack } = props
  const router = useRouter()

  function handleBack() {
    router.back()
  }

  return (
    <>
      <h1
        {...props}
        className={
          isBack ? `${styles.content} ${styles.isBack}` : `${styles.content}`
        }
        onClick={(e) => {
          isBack ? handleBack() : e.preventDefault()
        }}
      >
        {isBack && <BsArrowLeft width={40} height={40} />}
        {children}
      </h1>
    </>
  )
}
