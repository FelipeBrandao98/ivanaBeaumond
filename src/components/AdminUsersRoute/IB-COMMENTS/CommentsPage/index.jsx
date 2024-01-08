'use client'

import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'

import styles from './styles.module.css'
import { AuthContext } from '@/Context/AuthContext'
import { useContext } from 'react'
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'

import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import DashboardActionButtons from '@/atoms/AdminUsersRoute/Dashboard/DashboardActionButtons'
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'
import DashboardTable from '@/atoms/AdminUsersRoute/Dashboard/DashboardTable'
import Image from 'next/image'
import { BiLike } from 'react-icons/bi'
import { HiBadgeCheck, HiOutlineX } from 'react-icons/hi'
import DashboardCancel from '@/atoms/AdminUsersRoute/Dashboard/DashboardCancel'
import { FiTrash2 } from 'react-icons/fi'
import deleteComment from '@/api/CallsWithToken/Comments/DELETE/deleteComment'
import { CreateImageCommentContext } from '@/Context/CreateImageCommentContext'
import getComments from '@/api/CallsWithToken/Comments/GET/getComments'

export default function CommentsPage() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)
  const { image, handleChangeImage, showCreateImage, handleShowCreateImage } =
    useContext(CreateImageCommentContext)

  // States declaratios
  const [comments, setComments] = useState([])
  const [cancel, setCancel] = useState(false)
  const [loading, setLoading] = useState(false)

  // functions to handle with datas from api
  const getRepo = useCallback(async () => {
    setLoading(true)

    const commentsFromApi = await getComments(token)
    setComments(commentsFromApi)

    setLoading(false)
  }, [token])
  //

  async function handleDeleteComment(token, id) {
    setLoading(true)
    await deleteComment(token, id)
    getRepo(token)
    setLoading(false)
  }

  // Use Effects
  useEffect(() => {
    getRepo(token)
  }, [getRepo, token])
  //

  return (
    <>
      <DashboardMainTitle isBack>Comentários sobre a loja!</DashboardMainTitle>
      <DashboardContainer>
        <DashboardActionButtons
          cleanContext={handleChangeImage}
          getRepo={getRepo}
          createLink={'/comentarios/novocomentario'}
        />

        <DashboardTable>
          <thead>
            <tr>
              <th>Foto</th>
              <th>proprietário do comentário</th>
              <th>Comentário</th>
              <th>Código do comentário</th>
              <th>curtidas</th>
              <th>Publicado?</th>
              <th>Excluir comentário</th>
            </tr>
          </thead>
          <tbody></tbody>
          {comments.map((comment) => {
            return (
              <tr key={comment.id}>
                <td>
                  <Image
                    alt="Ivana"
                    src={comment.image.url}
                    width={240}
                    height={240}
                    className={styles.image}
                  />
                </td>
                <td>{comment.userName}</td>
                <td>{comment.description}</td>
                <td>{comment.commentCode}</td>
                <td>
                  <BiLike width={50} height={50} />{' '}
                  {comment.likes ? comment.likes : '0'}
                </td>
                <td>
                  {comment.isActive ? (
                    <HiBadgeCheck width={50} height={50} />
                  ) : (
                    <HiOutlineX width={50} height={50} />
                  )}
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
                      message="Tem certeza que deseja excluir esse Comentário? uma vez excluído, não é possível recuperar!"
                      href={handleDeleteComment}
                      token={token}
                      id={comment.id}
                    />
                    <FiTrash2 width={40} height={40} />
                  </button>
                </td>
              </tr>
            )
          })}
        </DashboardTable>
      </DashboardContainer>

      <DashboardLoading loading={loading} />
    </>
  )
}
