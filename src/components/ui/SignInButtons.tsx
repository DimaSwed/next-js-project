import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import '@/styles/authorization.sass'

const SignInButtons = () => {
  const session = useSession()

  return (
    <div className="auth_links">
      {session?.data && (
        <Link className="auth_link" href="/profile">
          <button className="profile">Профиль</button>
        </Link>
      )}
      {session?.data ? (
        <Link className="auth_link" href="#" onClick={() => signOut({ callbackUrl: '/' })}>
          <button className="logout">Выйти</button>
        </Link>
      ) : (
        <Link className="auth_link" href="/signin">
          <button className="login">Войти</button>
        </Link>
      )}
    </div>
  )
}

export default SignInButtons
