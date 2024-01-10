'use client'
import { BsArrowLeft } from 'react-icons/bs'

import styles from './styles.module.css'
import { useRouter } from 'next/navigation'

export default function DashboardMainTitle(props) {
  const { children, isBack, href } = props
  const router = useRouter()

  function handleBack() {
    router.back()
  }

  return (
    <>
      {href ? (
        <h1
          {...props}
          className={
            isBack ? `${styles.content} ${styles.isBack}` : `${styles.content}`
          }
          onClick={(e) => {
            href()
          }}
        >
          {isBack && <BsArrowLeft width={40} height={40} />}
          {children}
        </h1>
      ) : (
        <h1
          {...props}
          className={
            isBack ? `${styles.content} ${styles.isBack}` : `${styles.content}`
          }
          onClick={(e) => {
            isBack ? handleBack() : href()
          }}
        >
          {isBack && <BsArrowLeft width={40} height={40} />}
          {children}
        </h1>
      )}
    </>
  )
}
