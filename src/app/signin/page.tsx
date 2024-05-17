import React from 'react'
import { Metadata } from 'next'
import styles from '@/app/signin/signin.module.sass'

export const metadata: Metadata = {
  title: 'Sign In | Weather App'
}

import { GoogleButton } from './UI/GoogleButton'
import { SignInForm } from './UI/SignInForm'

export default async function Signin() {
  return (
    <div className={styles.signin}>
      <h1 className={styles.title}>Войти:</h1>
      <SignInForm />
      <div>или c помощью Google</div>
      <GoogleButton />
    </div>
  )
}
