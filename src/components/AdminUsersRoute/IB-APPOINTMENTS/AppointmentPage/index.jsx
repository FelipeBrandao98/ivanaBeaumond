'use client'

// React imports
import { useCallback, useContext, useEffect, useState } from 'react'
import { format } from 'date-fns'

// Next.js Components imports
import Link from 'next/link'

// Icons imports
import { FiMail, FiTrash2 } from 'react-icons/fi'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { FaWhatsapp } from 'react-icons/fa'

// Context imports
import { AuthContext } from '@/Context/AuthContext'

// Atoms imports
import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'
import DashboardTable from '@/atoms/AdminUsersRoute/Dashboard/DashboardTable'
import DashboardCancel from '@/atoms/AdminUsersRoute/Dashboard/DashboardCancel'
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'
//

// Api imports
import getAppointments from '@/api/CallsWithToken/Appointments/GET/getAppointments'
import deleteAppointments from '@/api/CallsWithToken/Appointments/DELETE/deleteAppointments'
//

// Component Declaration
export default function AppointmentPage() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)

  // States declaratios
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)
  const [appointments, setAppointments] = useState([])

  // functions to handle with datas from api
  const getRepo = useCallback(async () => {
    setLoading(true)
    const res = await getAppointments(token)
    setAppointments(res)
    setLoading(false)
  }, [token])
  //

  async function handleDeleteAppointments(token, appointmentId) {
    setLoading(true)
    await deleteAppointments(token, appointmentId)
    getRepo(token)
    setLoading(false)
  }

  // Use Effects
  useEffect(() => {
    getRepo(token)
  }, [getRepo, token])
  //

  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMainTitle isBack>Agendamentos</DashboardMainTitle>
      <DashboardContainer>
        <DashboardTable>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Dia do envento</th>
              <th>Agendamento</th>
              <th>E-Mail</th>
              <th>Telefone</th>
              <th>Pretensão do cliente</th>
              <th>Excluir Agendamento</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((repo) => {
              return (
                <tr key={repo.id}>
                  <td>{repo.name}</td>
                  <td>{format(new Date(repo.merryDate), "dd'/'MM'/'yyyy")}</td>
                  <td>{format(new Date(repo.createdAt), "dd'/'MM'/'yyyy")}</td>
                  <td>
                    <div>
                      <Link href={`mailto:${repo.mailer.mail}`} target="_blank">
                        <p>
                          <FiMail width={50} height={50} />
                          {repo.mailer.mail}
                        </p>
                      </Link>
                    </div>
                  </td>
                  <td>
                    <div>
                      <Link
                        href={`https://wa.me/55${repo.phone}`}
                        target="_blank"
                      >
                        <span>
                          <FaWhatsapp width={50} height={50} />
                          {repo.phone}
                        </span>
                      </Link>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>
                        {repo.bride ? (
                          <ImCheckboxChecked width={50} height={50} />
                        ) : (
                          <ImCheckboxUnchecked width={50} height={50} />
                        )}
                        Noiva{' '}
                      </span>
                      <span>
                        {repo.bridesmaid ? (
                          <ImCheckboxChecked width={50} height={50} />
                        ) : (
                          <ImCheckboxUnchecked width={50} height={50} />
                        )}
                        Daminha{' '}
                      </span>
                      <span>
                        {repo.debutant ? (
                          <ImCheckboxChecked width={50} height={50} />
                        ) : (
                          <ImCheckboxUnchecked width={50} height={50} />
                        )}
                        Debutantes{' '}
                      </span>
                      <span>
                        {repo.groom ? (
                          <ImCheckboxChecked width={50} height={50} />
                        ) : (
                          <ImCheckboxUnchecked width={50} height={50} />
                        )}
                        Noivo{' '}
                      </span>
                      <span>
                        {repo.party ? (
                          <ImCheckboxChecked width={50} height={50} />
                        ) : (
                          <ImCheckboxUnchecked width={50} height={50} />
                        )}
                        Festa{' '}
                      </span>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setCancel(!cancel)
                      }}
                    >
                      <DashboardCancel
                        cancel={cancel}
                        setCancel={setCancel}
                        message="Tem certeza que deseja excluir esse agendamento? uma vez excuído, não é possível recuperar!"
                        href={handleDeleteAppointments}
                        token={token}
                        id={repo.id}
                      />
                      <FiTrash2 width={40} height={40} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </DashboardTable>
      </DashboardContainer>

      <DashboardLoading loading={loading} />
    </>
  )
  //
}
