import Link from 'next/link'

import { HiArrowsExpand } from 'react-icons/hi'

import styles from './styles.module.css'

export default function MenuAppointmentExpandButton(props) {
  return (
    <>
      <Link className={styles.container} {...props}>
        <HiArrowsExpand width={20} height={20} />
      </Link>
    </>
  )
}
