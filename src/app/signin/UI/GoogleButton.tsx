'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { FaGoogle, FaYandex, FaEnvelope, FaVk } from 'react-icons/fa'
import styles from '@/app/signin/signin.module.sass'

const GoogleButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'

  return (
    <div className={styles.social_wrapper}>
      <div className={styles.social}>
        <button className={styles.googlebtn} onClick={() => signIn('google', { callbackUrl })}>
          <FaGoogle className={styles.fa_icon} /> Google
        </button>
      </div>
      <div className={styles.social}>
        <button className={styles.googlebtn} onClick={() => signIn('yandex', { callbackUrl })}>
          <FaYandex className={styles.fa_icon} /> Yandex
        </button>
      </div>
      <div className={styles.social}>
        <button className={styles.googlebtn} onClick={() => signIn('mailru', { callbackUrl })}>
          <FaEnvelope className={styles.fa_icon} /> MailRu
        </button>
      </div>
      <div className={styles.social}>
        <button className={styles.googlebtn} onClick={() => signIn('vk', { callbackUrl })}>
          <FaVk className={styles.fa_icon} /> VK
        </button>
      </div>
    </div>
  )
}

export { GoogleButton }
