import { configureStore } from '@reduxjs/toolkit'
import cityReducerSlice from './slices/citySlice'
import { weatherApi } from '@/services/getWeatherData'
import { yandexApi } from '@/services/getCity'
import daysReducerSlice from './slices/chooseDaysNumberSlice'
import linksReducerSlice from './slices/linksSlice'
import themeReducerSlice from './slices/themeSlice'
import navigationReducer from './slices/navigationSlice'
import sessionReducer from './slices/sessionSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      city: cityReducerSlice,
      days: daysReducerSlice,
      links: linksReducerSlice,
      theme: themeReducerSlice,
      navigation: navigationReducer,
      session: sessionReducer,
      [weatherApi.reducerPath]: weatherApi.reducer,
      [yandexApi.reducerPath]: yandexApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(weatherApi.middleware).concat(yandexApi.middleware)
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
