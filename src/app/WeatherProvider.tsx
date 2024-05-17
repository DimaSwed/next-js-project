'use client'
import React, { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/redux/store'
import { SessionProvider } from 'next-auth/react'

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <SessionProvider>
      <Provider store={storeRef.current}>{children}</Provider>
    </SessionProvider>
  )
}
