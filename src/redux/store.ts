import { configureStore } from '@reduxjs/toolkit'
import cityReducerSlice from './slices/citySlice'
import { weatherApi } from '@/services/getWeatherData'
import daysReducerSlice from './slices/chooseDaysNumberSlice'
import linksReducerSlice from './slices/linksSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      city: cityReducerSlice,
      days: daysReducerSlice,
      links: linksReducerSlice,
      [weatherApi.reducerPath]: weatherApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware)
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
