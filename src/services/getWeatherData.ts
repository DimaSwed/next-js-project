const apiKey = 'd4c1e7ff659473b3911f9bfb23585199'
const city = 'Moscow'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

export const getWeatherData = async () => {
	const response = await fetch(apiUrl)

	if (!response.ok) throw new Error('Unable to fetch weather.')

	return response.json()
}
