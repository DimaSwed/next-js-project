'use client'

import React, { useState, useEffect } from 'react'

import WeatherForecastSlider from '@/components/WeatherForecastSlider'
import { getWeatherData } from '@/services/getWeatherData'
import styles from './main.module.sass'

type TypeProps = {
	params: {
		city: string
	}
}

export default function HomePage({ params: { city = 'Moscow' } }: TypeProps) {
	const [selectedCity, setSelectedCity] = useState(city)
	const [weatherData, setWeatherData] = useState<any>(null)

	useEffect(() => {
		async function fetchWeatherData() {
			const data = await getWeatherData(selectedCity)
			setWeatherData(data)
		}

		fetchWeatherData()
	}, [selectedCity])

	const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newSelectedCity = event.target.value
		setSelectedCity(newSelectedCity)
		console.log(selectedCity)
	}

	return (
		<div className={styles.home_page}>
			<div className={styles.inner}>
				<h1 className={styles.title_h1}>Еженедельный прогноз погоды</h1>
				<div className={styles.city}>
					<label className={styles.label} htmlFor="city">
						Выберите город:{' '}
					</label>
					<select
						className={styles.select}
						id="city"
						name="cities"
						value={selectedCity}
						onChange={handleCityChange}
					>
						<option value="Moscow">Москва</option>
						<option value="Saint Petersburg">
							Санкт-Петербург
						</option>
						<option value="Rostov-on-Don">Ростов-на-Дону</option>
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
				{weatherData && (
					<WeatherForecastSlider weatherData={weatherData} />
				)}
			</div>
		</div>
	)
}
