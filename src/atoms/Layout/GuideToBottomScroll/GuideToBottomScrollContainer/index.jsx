import styles from './styles.module.css'

export default function GuideToBottomScrollContainer({ children, visible }) {
  return (
    <>
      <div className={visible ? styles.visible : styles.invisible}>
        {children}
      </div>
    </>
  )
}
