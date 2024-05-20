// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const API_KEY = process.env.NEXT_PUBLIC_YANDEX_API_KEY

// if (!API_KEY) {
//   throw new Error('NEXT_PUBLIC_YANDEX_API_KEY is not defined')
// }

// export const yandexApi = createApi({
//   reducerPath: 'yandexApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://geocode-maps.yandex.ru/1.x/' }),
//   endpoints: (builder) => ({
//     getCity: builder.query({
//       query: (city) => `?apikey=${API_KEY}&geocode=${city}&format=json`
//     })
//   })
// })

// export const { useGetCityQuery } = yandexApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GeocodeResponse } from '@/types/types'

const API_KEY: string = process.env.NEXT_PUBLIC_YANDEX_API_KEY || ''

if (!API_KEY) {
  throw new Error('NEXT_PUBLIC_YANDEX_API_KEY is not defined')
}

export const yandexApi = createApi({
  reducerPath: 'yandexApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://geocode-maps.yandex.ru/1.x/' }),
  endpoints: (builder) => ({
    getCityCoordinates: builder.query<{ lat: number; lon: number }, string>({
      query: (city) => `?apikey=${API_KEY}&geocode=${city}&format=json`,
      transformResponse: (response: GeocodeResponse) => {
        const coords = response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
          .split(' ')
          .map(Number)
        return { lat: coords[1], lon: coords[0] }
      }
    })
  })
})

export const { useGetCityCoordinatesQuery } = yandexApi
