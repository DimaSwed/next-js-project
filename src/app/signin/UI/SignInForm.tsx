'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import type { FormEventHandler } from 'react'

import styles from '@/app/signin/signin.module.sass'

const SignInForm = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const themeStatus = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', String(themeStatus))
  }, [])

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })

    if (res && !res.error) {
      router.push('/profile')
    } else {
      console.log(res)
      setError('Неверно!')
    }
  }

  return (
    <form className={styles.auth_form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="username">
        Логин:
      </label>
      <input
        className={styles.input}
        type="email"
        name="email"
        required
        placeholder="Электронная почта"
        id="username"
      />

      {error && <p className={styles.error}>{error}</p>}

      <label className={styles.label} htmlFor="password">
        Пароль:
      </label>
      <input
        className={styles.input}
        type="password"
        name="password"
        required
        placeholder="Пароль"
        id="password"
      />

      {error && <p className={styles.error}>{error}</p>}

      <button className={styles.form_btn}>Войти</button>
    </form>
  )
}

export { SignInForm }
