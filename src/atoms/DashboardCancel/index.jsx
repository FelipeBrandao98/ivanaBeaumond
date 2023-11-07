import Link from 'next/link'

import styles from './styles.module.css'

// Atoms imports
import DashboardModalContainer from '../DashboardModalContainer'
import DashboardButton from '../DashboardButton'
import DashboardTitle from '../DashboardTitle'
import DashboardButtonsArea from '../DashboardButtonsArea'
//

export default function DashboardCancel({ href, cancel, setCancel, message }) {
  return (
    <>
      {cancel && (
        <DashboardModalContainer>
          <DashboardTitle>
            {message ? message : 'Tem certeza que você deseja cancelar?'}
          </DashboardTitle>
          <DashboardButtonsArea>
            <DashboardButton
              onClick={(e) => {
                e.preventDefault()
                setCancel(!cancel)
              }}
            >
              Não
            </DashboardButton>
            {typeof href === 'string' ? (
              <Link className={styles.cancelButton} href={href}>
                Cancelar
              </Link>
            ) : (
              <DashboardButton
                mode="cancel"
                onClick={(e) => {
                  e.preventDefault()
                  href()
                }}
              >
                Sair
              </DashboardButton>
            )}
          </DashboardButtonsArea>
        </DashboardModalContainer>
      )}
    </>
  )
}
