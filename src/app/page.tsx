import React from 'react'
import WeatherForecastSlider from '@/components/WeatherForecastSlider'

import styles from './main.module.sass'

const API_KEY = process.env.WEATHER_API_KEY
const uniqueCityNames = ['Moscow', 'Saint Petersburg', 'Rostov-on-Don']
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${uniqueCityNames[2]}&appid=${API_KEY}`

const currentDate = new Date().toLocaleDateString()

const getWeatherData = async () => {
	const response = await fetch(apiUrl, {
		next: {
			revalidate: 43200
		}
	})

	if (!response.ok) throw new Error('Unable to fetch weather.')

	return response.json()
}

export default async function HomePage() {
	const weatherData = await getWeatherData()

	console.log(weatherData)

	return (
		<div className={styles.home_page}>
			<div className={styles.inner}>
				<h1 className={styles.title_h1}>Еженедельный прогноз погоды</h1>
				<div className={styles.city}>
					<label className={styles.label} htmlFor="city">
						Выберите город:{' '}
					</label>
					<select className={styles.select} id="city" value="city">
						<option value="Москва">Москва</option>
						<option value="Санкт-Петербург">Санкт-Петербург</option>
						<option value="Казань">Казань</option>
					</select>
				</div>
				<p className={styles.text}>
					Раздел отображает последнюю информацию о погоде для города,
					который вы выбрали. Оставайтесь в курсе погодных условий в
					выбранном городе благодаря этому разделу.
				</p>
			</div>
			<hr />
			<div className={styles.weather_items}>
				<WeatherForecastSlider weatherData={weatherData} />
			</div>
		</div>
	)
}
