'use client'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { FaSlash } from 'react-icons/fa'
import { FcMusic } from 'react-icons/fc'

import styles from './style.module.css'
import getHomeSong from '@/api/CallsWithoutToken/TrackList/GET/getHomeSong'
import { useCallback } from 'react'

export default function AudioPlayer({ short }) {
  const audioRef = useRef(null)

  const [song, setSong] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  function handlePlay() {
    setIsPlaying(!isPlaying)
  }

  const getRepo = useCallback(async () => {
    const res = await getHomeSong()

    setSong(res)
  }, [])

  useEffect(() => {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    getRepo()
  }, [getRepo])

  return (
    <section
      className={
        short ? `${styles.container} ${styles.short}` : `${styles.container}`
      }
    >
      <div>
        {isPlaying ? (
          <button onClick={handlePlay} className={styles.button}>
            <FcMusic width={50} height={50} className={styles.svg1} />
            <FaSlash width={50} height={50} className={styles.svg2} />
          </button>
        ) : (
          <button onClick={handlePlay} className={styles.button}>
            <FcMusic width={50} height={50} />
          </button>
        )}
      </div>
      {song && (
        <audio ref={audioRef} loop>
          <source src={song.audio.url} type="audio/mpeg" />
        </audio>
      )}
    </section>
  )
}
