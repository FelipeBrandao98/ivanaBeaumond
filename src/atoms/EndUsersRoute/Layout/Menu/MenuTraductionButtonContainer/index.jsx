import styles from './styles.module.css'

export default function MenuTraductionButtonContainer({
  children,
  short,
  isOpen,
}) {
  return (
    <>
      <nav
        className={`
          ${short ? styles.short : ''}
        `}
      >
        <ol className={isOpen ? styles.open : styles.close}>{children}</ol>
      </nav>
    </>
  )
}
