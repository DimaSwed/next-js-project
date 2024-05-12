import { configureStore } from '@reduxjs/toolkit'
import cityReducer from './slices/citySlice'

export const makeStore = () => {
	return configureStore({
		reducer: {
			city: cityReducer
		}
	})
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
