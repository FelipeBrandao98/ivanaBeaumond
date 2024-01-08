'use client'

import DashboardButton from '@/atoms/AdminUsersRoute/Dashboard/DashboardButton'
import DashboardContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardContainer'
import DashboardForm from '@/atoms/AdminUsersRoute/Dashboard/DashboardForm'
import DashboardLabel from '@/atoms/AdminUsersRoute/Dashboard/DashboardLabel'
import DashboardTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardTitle'

// Hook form and Zod imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import DashboardLoading from '@/atoms/AdminUsersRoute/Dashboard/DashboardLoading'
import createTrackList from '@/api/CallsWithToken/TrackList/POST/createTrackList'
import createImage from '@/api/CallsWithToken/Images/POST/createImage'
import { AuthContext } from '@/Context/AuthContext'
import { useContext } from 'react'
import DashboardTable from '@/atoms/AdminUsersRoute/Dashboard/DashboardTable'
import { useEffect } from 'react'
import getTrackList from '@/api/CallsWithoutToken/TrackList/GET/getTracklist'
import { useCallback } from 'react'
import DashboardMainTitle from '@/atoms/AdminUsersRoute/Dashboard/DashboardMainTitle'
import updateHomeSong from '@/api/CallsWithToken/TrackList/PATCH/updateHomeSong'

const createAudioFormSchema = z.object({
  file: z.any(),
  name: z.string().min(5),
})

export default function AudioPage() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)

  const [trackList, setTrackList] = useState([])
  const [loading, setLoading] = useState(false)

  // Instance of Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(createAudioFormSchema),
  })
  //

  // functions to handle with datas from api
  const getRepo = useCallback(async () => {
    setLoading(true)
    const res = await getTrackList()
    setTrackList(res)
    setLoading(false)
  }, [])

  async function handleCreateAudio(formData) {
    setLoading(true)
    const file = new FormData()
    file.set('file', formData.file[0])
    const res = await createImage(token, file)

    formData.audioId = res.id
    delete formData.file

    await createTrackList(token, formData)
    getRepo()
    setLoading(false)
  }

  async function handleUpdateHomeSong(event) {
    setLoading(true)
    await updateHomeSong(token, event.target.value)
    getRepo()
    setLoading(false)
  }

  useEffect(() => {
    getRepo()
  }, [getRepo])

  return (
    <>
      <DashboardMainTitle isBack>Audio</DashboardMainTitle>
      <DashboardContainer>
        <h1>Adicionar Track</h1>
        <DashboardForm action={handleSubmit(handleCreateAudio)}>
          <DashboardLabel
            htmlFor="name"
            name="Nome da Track"
            errors={errors.name}
          >
            <input type="text" name="name" id="name" {...register('name')} />
          </DashboardLabel>
          <DashboardLabel
            htmlFor="file"
            name="Adicione o Arquivo de Audio"
            // errors={errors.file}
          >
            <input type="file" name="file" id="file" {...register('file')} />
          </DashboardLabel>
          <DashboardButton type="submit" mode="submit">
            Enviar
          </DashboardButton>
        </DashboardForm>

        <DashboardForm>
          <DashboardLabel>
            <select
              name="homeSong"
              id="homeSong"
              defaultValue={trackList.map((track) => {
                track.isHomeSong ? track.id : undefined
              })}
              onChange={handleUpdateHomeSong}
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              {trackList.map((track) => {
                return (
                  <option key={track.id} value={track.id}>
                    {track.name}
                  </option>
                )
              })}
            </select>
          </DashboardLabel>
        </DashboardForm>

        <DashboardTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Audio</th>
              <th>Excluir Track</th>
            </tr>
          </thead>
          <tbody>
            {trackList.map((track) => {
              return (
                <tr key={track.id}>
                  <td>{track.name}</td>
                  <td>
                    <audio controls>
                      <source src={track.audio.url} type="audio/mpeg" />
                    </audio>
                  </td>
                  <td>{}</td>
                </tr>
              )
            })}
          </tbody>
        </DashboardTable>
      </DashboardContainer>
      {loading && <DashboardLoading loading={loading} />}
    </>
  )
}
