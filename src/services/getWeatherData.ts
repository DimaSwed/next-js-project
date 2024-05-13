// const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY || ''

// export const weatherApi = async (city: string): Promise<any> => {
// 	try {
// 		const response = await fetch(
// 			`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=10&lang=ru`,
// 			{
// 				headers: { 'Content-type': 'application/json' },
// 				next: {
// 					revalidate: 3600
// 				}
// 			}
// 		)

// 		if (!response.ok)
// 			throw new Error('Невозможно получить данные о погоде.')

// 		return response.json()
// 	} catch (error: any) {
// 		throw new Error(`Ошибка загрузки данных: ${error.message}`)
// 	}
// }
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY || ''

// type TypeProps = {
//   city: string
//   days: string
// }

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1/' }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) => `forecast.json?key=${API_KEY}&q=${city}&days=10&lang=ru`
    })
  })
})

export const { useGetWeatherByCityQuery } = weatherApi
