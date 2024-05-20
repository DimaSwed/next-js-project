// import type { AuthOptions, User } from 'next-auth'
// import GoggleProvider from 'next-auth/providers/google'
// import Credentials from 'next-auth/providers/credentials'
// import { users } from '@/data/users'

// export const authConfig: AuthOptions = {
//   providers: [
//     GoggleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET!
//     }),
//     Credentials({
//       credentials: {
//         email: { label: 'email', type: 'email', required: true },
//         password: { label: 'password', type: 'password', required: true }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials.password) return null
//         const currentUser = users.find((user) => user.email === credentials.email)
//         if (currentUser && currentUser.password === credentials.password) {
//           const { ...userWithoutPass } = currentUser
//           return userWithoutPass as User
//         }
//         return null
//       }
//     })
//   ],
//   pages: {
//     signIn: '/signin'
//   }
// }
import type { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import YandexProvider from 'next-auth/providers/yandex'
// import MailRuProvider from 'next-auth/providers/mailru'
import VKProvider from 'next-auth/providers/vk'

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET!
    }),
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_SECRET as string
    }),
    // MailRuProvider({
    //   clientId: process.env.MAILRU_CLIENT_ID as string,
    //   clientSecret: process.env.MAILRU_SECRET as string
    // }),
    VKProvider({
      clientId: process.env.VK_CLIENT_ID as string,
      clientSecret: process.env.VK_CLIENT_SECRET as string
    })
  ],
  pages: {
    signIn: '/signin'
  }
}
