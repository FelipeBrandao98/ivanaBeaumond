// Icons imports
import {
  ImNewspaper,
  ImMail3,
  ImTicket,
  ImListNumbered,
  ImCheckboxChecked,
} from 'react-icons/im'

// Atoms imports
import DashboardButtonItem from '@/atoms/AdminUsersRoute/Dashboard/DashboardButtonItem'
import { BiSolidCommentAdd } from 'react-icons/bi'
import {
  MdAddComment,
  MdAirplaneTicket,
  MdAttractions,
  MdAudioFile,
  MdBallot,
  MdCheckBox,
  MdCollections,
  MdDashboard,
  MdEvent,
  MdMail,
  MdNewspaper,
} from 'react-icons/md'
//

// Component Declaration
export default function DashboardMenuNavigation() {
  // Return components, with functions to call API and language
  return (
    <>
      <ul>
        <DashboardButtonItem href={'/ib-login/dashboard/'} alt="Dashboard">
          Dashboard
          <MdDashboard width={40} height={40} svg />
        </DashboardButtonItem>
        <DashboardButtonItem href={'/ib-login/dashboard/audio'}>
          Audio
          <MdAudioFile width={40} height={40} svg />
        </DashboardButtonItem>
        <DashboardButtonItem href={'/ib-login/dashboard/agendamentos'}>
          Agendamentos
          <MdCheckBox width={40} height={40} svg />
        </DashboardButtonItem>

        <DashboardButtonItem href={'/ib-login/dashboard/mailer'}>
          E-mail
          <MdMail width={40} height={40} svg />
        </DashboardButtonItem>

        <DashboardButtonItem href={'/ib-login/dashboard/comentarios'}>
          Comentários
          <MdAddComment width={40} height={40} svg />
        </DashboardButtonItem>

        <DashboardButtonItem href={'/ib-login/dashboard/categorias'}>
          Categorias
          <MdBallot width={40} height={40} />
        </DashboardButtonItem>

        <DashboardButtonItem href={'/ib-login/dashboard/colecoes'}>
          Coleções
          <MdCollections width={40} height={40} />
        </DashboardButtonItem>

        <DashboardButtonItem href={'/ib-login/dashboard/noticias'}>
          Notícias
          <MdNewspaper width={40} height={40} />
        </DashboardButtonItem>

        <DashboardButtonItem href={'/ib-login/dashboard/eventos'}>
          Eventos
          <MdEvent width={40} height={40} />
        </DashboardButtonItem>
      </ul>
    </>
  )
  //
}
