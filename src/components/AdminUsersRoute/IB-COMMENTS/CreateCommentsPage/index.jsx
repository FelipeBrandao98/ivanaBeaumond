'use client'

// React imports
import { useContext } from 'react'

// Context imports
import { CreateImageCommentContext } from '@/Context/CreateImageCommentContext'

// Components imports
import CreateImgComment from './CreateImgComment'
import CreateComment from './CreateComment'

// Component Declaration
export default function CreateCommentsPage({ functions }) {
  // Instanciate and initialize Contexts functions
  const { showCreateImage } = useContext(CreateImageCommentContext)

  // Return components, with functions to call API and language
  return (
    <>{showCreateImage === true ? <CreateImgComment /> : <CreateComment />}</>
  )
  //
}
