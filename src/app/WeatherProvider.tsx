'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/redux/store'
import { chooseCity } from '@/redux/slices/citySlice'

export default function StoreProvider({
	children
}: {
	children: React.ReactNode
}) {
	const storeRef = useRef<AppStore>()
	if (!storeRef.current) {
		// Create the store instance the first time this renders
		storeRef.current = makeStore()
		// Add initial state
		storeRef.current.dispatch(chooseCity('Moscow'))
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
