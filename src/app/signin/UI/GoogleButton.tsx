'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { FaGoogle, FaYandex, FaEnvelope, FaVk } from 'react-icons/fa'
import styles from '@/app/signin/signin.module.sass'

const GoogleButton: React.FC = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'

  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl })
  }

  return (
    <div className={styles.social_wrapper}>
      <div className={styles.social}>
        <button className={styles.googlebtn} onClick={() => handleSignIn('google')}>
          <FaGoogle className={styles.fa_icon} /> Google
        </button>
      </div>
      <div className={styles.social}>
        <button className={styles.googlebtn} onClick={() => handleSignIn('yandex')}>
          <FaYandex className={styles.fa_icon} /> Yandex
        </button>
      </div>
      <div className={styles.social}>
        <button className={styles.googlebtn} onClick={() => handleSignIn('mailru')}>
          <FaEnvelope className={styles.fa_icon} /> MailRu
        </button>
      </div>
      <div className={styles.social}>
        <button className={styles.googlebtn} onClick={() => handleSignIn('vk')}>
          <FaVk className={styles.fa_icon} /> VK
        </button>
      </div>
    </div>
  )
}

export { GoogleButton }
