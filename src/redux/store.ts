import { configureStore } from '@reduxjs/toolkit'
import cityReducer from './slices/citySlice'
import { weatherApi } from '@/services/getWeatherData'

export const makeStore = () => {
	return configureStore({
		reducer: {
			city: cityReducer,
			[weatherApi.reducerPath]: weatherApi.reducer
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(weatherApi.middleware)
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
