// const API_KEY = process.env.WEATHER_API_KEY_2
// const city = ['Moscow', 'Saint Petersburg', 'Rostov-on-Don']
// const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city[2]}&days=10&lang=ru`

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const getWeatherData = async (city: string) => {
	const response = await fetch(
		`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=10&lang=ru`,
		{
			headers: { 'Content-type': 'application/json' },
			next: {
				revalidate: 3600
			}
		}
	)

	if (!response.ok) throw new Error('Невозможно получить данные о погоде.')

	return response.json()
}
