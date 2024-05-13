// import React, { ReactNode } from 'react'
// import { useRef } from 'react'
// import { Provider } from 'react-redux'
// import { makeStore, AppStore } from '@/redux/store'
// import { chooseCity } from '@/redux/slices/citySlice'

// export default function StoreProvider({
// 	city,
// 	children
// }: {
// 	city: string
// 	children: React.ReactNode
// }) {
// 	const storeRef = useRef<AppStore>()
// 	if (!storeRef.current) {
// 		// Create the store instance the first time this renders
// 		storeRef.current = makeStore()
// 		// Add initial state
// 		storeRef.current.dispatch(chooseCity(city))
// 	}

// 	return <Provider store={storeRef.current}>{children}</Provider>
// }
'use client'
import React, { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/redux/store'
import { chooseCity } from '@/redux/slices/citySlice'

export default function StoreProvider({ children }: { children: ReactNode }) {
	const storeRef = useRef<AppStore>()
	if (!storeRef.current) {
		storeRef.current = makeStore()
		storeRef.current.dispatch(chooseCity(''))
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
