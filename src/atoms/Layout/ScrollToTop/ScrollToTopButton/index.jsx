import styles from './styles.module.css'

export default function ScrollToTopButton(props) {
  return (
    <>
      <button
        className={styles.button}
        style={{ display: props.visible ? 'inline' : 'none' }}
        {...props}
      >
        {props.children}
      </button>
    </>
  )
}
