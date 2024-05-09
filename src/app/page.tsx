import React from 'react'
import WeatherForecastSlider from '@/components/WeatherForecastSlider'

import styles from './main.module.sass'

const API_KEY = process.env.WEATHER_API_KEY_2
const city = ['Moscow', 'Saint Petersburg', 'Rostov-on-Don']
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${uniqueCityNames[2]}&cnt=10&appid=${API_KEY}`
// const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}q=Moscow&aqi=no`
// const apiUrl2 = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city[2]}&days=10&lang=ru`

const getWeatherData = async () => {
	const response = await fetch(apiUrl, {
		next: {
			revalidate: 43200
		}
	})

	if (!response.ok) throw new Error('Невозможно получить данные о погоде.')

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
					<select className={styles.select} id="city">
						<option value="Москва">Москва</option>
						<option value="Санкт-Петербург">Санкт-Петербург</option>
						<option value="Казань">Казань</option>
					</select>
				</div>
				<p className={styles.text}>
					Раздел отображает последнюю информацию о погоде для города,
					который вы выбрали. <br /> Оставайтесь в курсе погодных
					условий в выбранном городе благодаря этому разделу.
				</p>
			</div>
			<hr />
			<div className={styles.weather_items}>
				<WeatherForecastSlider weatherData={weatherData} />
			</div>
		</div>
	)
}
