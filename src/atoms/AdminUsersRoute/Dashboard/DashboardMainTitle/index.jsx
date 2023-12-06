import { BsArrowLeft } from 'react-icons/bs'

import styles from './styles.module.css'

export default function DashboardMainTitle(props) {
  const { children, isBack } = props

  return (
    <>
      <h1
        {...props}
        className={
          isBack ? `${styles.content} ${styles.isBack}` : `${styles.content}`
        }
      >
        {isBack && <BsArrowLeft width={40} height={40} />}
        {children}
      </h1>
    </>
  )
}
