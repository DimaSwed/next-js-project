// import { authConfig } from '@/configs/auth'
// import { getServerSession } from 'next-auth/next'
// import Image from 'next/image'
// import styles from '@/app/profile/profile.module.sass'

// export default async function ProfileCard() {
//   const session = await getServerSession(authConfig)

//   return (
//     <div className={styles.card}>
//       <h1 className={styles.title}>Профиль</h1>
//       <div className={styles.profile_picture}>
//         {session?.user?.image && (
//           <Image
//             className={styles.picture}
//             src={session.user.image}
//             alt="Profile Picture"
//             width={100}
//             height={100}
//           />
//         )}
//       </div>
//       <h2 className={styles.name}>{session?.user?.name}</h2>
//       <p className={styles.description}>{session?.user?.email}</p>
//       {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
//     </div>
//   )
// }
'use client'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import { getSession } from 'next-auth/react'
import Image from 'next/image'
import styles from '@/app/profile/profile.module.sass'
import { setSession } from '@/redux/slices/sessionSlice'

const ProfileCard = () => {
  const dispatch = useAppDispatch()
  const session = useAppSelector((state: any) => state.session)

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession()
      if (sessionData) {
        dispatch(setSession(sessionData))
      }
    }

    fetchSession()
  }, [dispatch])

  useEffect(() => {
    const themeStatus = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', String(themeStatus))
  }, [])

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Профиль</h1>
      <div className={styles.profile_picture}>
        {session?.user?.image && (
          <Image
            className={styles.picture}
            src={session.user.image}
            alt="Фото профиля"
            width={100}
            height={100}
          />
        )}
      </div>
      <h2 className={styles.name}>{session?.user?.name}</h2>
      <h3 className={styles.username}>{session?.expires}</h3>
      <p className={styles.description}>{session?.user?.email}</p>
    </div>
  )
}

export default ProfileCard
