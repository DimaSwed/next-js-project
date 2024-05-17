'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { FaGoogle } from 'react-icons/fa'
import styles from '@/app/signin/signin.module.sass'

const GoogleButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'

  return (
    <div className={styles.social}>
      <button className={styles.googlebtn} onClick={() => signIn('google', { callbackUrl })}>
        <FaGoogle /> Google
      </button>
    </div>
  )
}

export { GoogleButton }
