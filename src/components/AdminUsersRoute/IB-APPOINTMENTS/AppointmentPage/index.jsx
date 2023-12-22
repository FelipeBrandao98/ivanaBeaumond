'use client'

// React imports
import { useCallback, useContext, useEffect, useState } from 'react'

// Next.js Components imports
import Link from 'next/link'
import Image from 'next/image'

// Icons imports
import { FiEdit, FiFilter, FiMail, FiSearch, FiTrash2 } from 'react-icons/fi'

// Context imports
import { AuthContext } from '@/Context/AuthContext'
import { CollectionsCategoryContext } from '@/Context/CollectionsCategoryContext'
import { NewsCategoryContext } from '@/Context/NewsCategoryContext'

// Atoms imports
import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'
import DashboardTable from '@/atoms/AdminUsersRoute/Dashboard/DashboardTable'
import DashboardCancel from '@/atoms/AdminUsersRoute/Dashboard/DashboardCancel'
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'
import DashboardActionButtons from '@/atoms/AdminUsersRoute/Dashboard/DashboardActionButtons'
//

// Api imports
import getCategoryCollections from '@/api/CallsWithToken/getCategoryCollections'
import getCategoryNews from '@/api/CallsWithoutToken/getCategoryNews'
import deleteCategoryCollection from '@/api/CallsWithToken/deleteCategoryCollection'
import deleteCategoryNews from '@/api/CallsWithToken/deleteCategoryNews'
import getAppointments from '@/api/CallsWithToken/getAppointments'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { FaWhatsapp } from 'react-icons/fa'
import { format } from 'date-fns'
//

// Component Declaration
export default function AppointmentPage() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { handleCategory: handleCatNews } = useContext(NewsCategoryContext)
  const { handleCategory: HandleCatCollections } = useContext(
    CollectionsCategoryContext,
  )

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

  // Use Effects
  useEffect(() => {
    getRepo(token)
  }, [getRepo, token])
  //

  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMainTitle>Agendamentos</DashboardMainTitle>
      <DashboardContainer>
        <DashboardTable>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Dia do envento</th>
              <th>Agendamento</th>
              <th>E-Mail</th>
              <th>Telefone</th>
              <th>Excluir coleção</th>
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
