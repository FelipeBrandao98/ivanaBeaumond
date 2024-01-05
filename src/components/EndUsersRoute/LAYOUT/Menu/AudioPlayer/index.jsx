'use client'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { FaMusic, FaSlash } from 'react-icons/fa'
import { FcMusic } from 'react-icons/fc'

import styles from './style.module.css'

export default function AudioPlayer({ short }) {
  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [initialPlay, setInitialPlay] = useState(false)

  function setPlayingState(state) {
    setIsPlaying(state)
  }

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }

    initialPlay && setIsPlaying(true)

    setInitialPlay(true)
  }, [initialPlay, isPlaying])

  return (
    <section
      className={
        short ? `${styles.container} ${styles.short}` : `${styles.container}`
      }
    >
      <div>
        {isPlaying ? (
          <button onClick={toggleIsPlaying} className={styles.button}>
            <FcMusic width={50} height={50} className={styles.svg1} />
            <FaSlash width={50} height={50} className={styles.svg2} />
          </button>
        ) : (
          <button onClick={toggleIsPlaying} className={styles.button}>
            <FcMusic width={50} height={50} />
          </button>
        )}
      </div>
      <audio
        ref={audioRef}
        loop
        autoPlay
        onPlay={() => setPlayingState(true)}
        onPause={() => setPlayingState(false)}
      >
        <source
          src="http://localhost:3001/images/Louis Adrien - Waltzing in Paris-84e57f27-4698-463c-8795-fc03a93cfe3c"
          type="audio/mpeg"
        />
      </audio>
    </section>
  )
}
