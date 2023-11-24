import styles from './styles.module.css'

export default function NewsRowContent({ children, center }) {
  return (
    <>
      <div
        className={
          center ? `${styles.content} ${styles.center}` : `${styles.content}`
        }
      >
        {children}
      </div>
    </>
  )
}
