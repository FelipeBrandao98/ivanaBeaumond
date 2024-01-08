import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'
import DashboardTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardTitle'
import Link from 'next/link'
import { BiSolidCommentAdd } from 'react-icons/bi'
import {
  ImCheckboxChecked,
  ImListNumbered,
  ImMail3,
  ImNewspaper,
  ImTicket,
} from 'react-icons/im'

import styles from './styles.module.css'
import { FcAudioFile } from 'react-icons/fc'
import {
  MdAddComment,
  MdAttractions,
  MdAudioFile,
  MdBallot,
  MdCheckBox,
  MdMail,
  MdNewspaper,
} from 'react-icons/md'
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'

export default function DashboardPage() {
  return (
    <>
      <DashboardMainTitle>Dashboard</DashboardMainTitle>
      <DashboardContainer>
        <h1>Menu de gerenciamento do site</h1>
        <div className={styles.container}>
          <Link href={'/ib-login/dashboard/audio'}>
            <aside>
              <MdAudioFile width={40} height={40} svg />
              Audio
            </aside>
          </Link>

          <Link href={'/ib-login/dashboard/agendamentos'}>
            <aside>
              <MdCheckBox width={40} height={40} svg />
              Agendamentos
            </aside>
          </Link>

          <Link href={'/ib-login/dashboard/mailer'}>
            <aside>
              <MdMail width={40} height={40} svg />
              E-mail
            </aside>
          </Link>

          <Link href={'/ib-login/dashboard/comentarios'}>
            <aside>
              <MdAddComment width={40} height={40} svg />
              Comentários
            </aside>
          </Link>

          <Link href={'/ib-login/dashboard/categorias'}>
            <aside>
              <MdBallot width={40} height={40} />
              Categorias
            </aside>
          </Link>

          <Link href={'/ib-login/dashboard/colecoes'}>
            <aside>
              <MdAttractions width={40} height={40} />
              Coleções
            </aside>
          </Link>

          <Link href={'/ib-login/dashboard/noticias'}>
            <aside>
              <MdNewspaper width={40} height={40} />
              <h1>Notícias</h1>
            </aside>
          </Link>
        </div>
      </DashboardContainer>
    </>
  )
}
