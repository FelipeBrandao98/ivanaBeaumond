// Icons imports
import { ImNewspaper, ImMail3, ImTicket, ImListNumbered } from 'react-icons/im'

// Atoms imports
import DashboardButtonItem from '@/atoms/DashboardButtonItem'
//

// Component Declaration
export default function DashboardMenuNavigation() {
  // Return components, with functions to call API and language
  return (
    <>
      <ul>
        <DashboardButtonItem href={'/ib-login/dashboard/mailer'}>
          E-mail
          <ImMail3 width={40} height={40} svg />
        </DashboardButtonItem>

        <DashboardButtonItem href={'/ib-login/dashboard/categorias'}>
          Categorias
          <ImListNumbered width={40} height={40} />
        </DashboardButtonItem>

        <DashboardButtonItem href={'/ib-login/dashboard/colecoes'}>
          Coleções
          <ImTicket width={40} height={40} />
        </DashboardButtonItem>

        <DashboardButtonItem href={'/ib-login/dashboard/noticias'} selected>
          Notícias
          <ImNewspaper width={40} height={40} />
        </DashboardButtonItem>
      </ul>
    </>
  )
  //
}
