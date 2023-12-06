import { HiX } from 'react-icons/hi'

import styles from './styles.module.css'

export default function MenuAppointmentCloseButton(props) {
  return (
    <>
      <div className={styles.container} {...props}>
        <HiX width={20} height={20} />
      </div>
    </>
  )
}
