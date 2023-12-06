import { AiOutlineLoading, AiOutlineCheckCircle } from 'react-icons/ai'

import styles from './styles.module.css'

export default function EndUserSendButton(props) {
  const { loader } = props

  return (
    <>
      <button
        className={
          loader === 'loading'
            ? styles.loading
            : loader === 'loaded'
              ? styles.loaded
              : styles.button
        }
        {...props}
      >
        {props.children}
        {loader === 'loading' ? (
          <AiOutlineLoading
            className={styles.rotating}
            width={50}
            height={50}
          />
        ) : loader === 'loaded' ? (
          <AiOutlineCheckCircle width={50} height={50} />
        ) : (
          ''
        )}
      </button>
    </>
  )
}
