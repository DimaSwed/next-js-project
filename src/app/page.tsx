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
	const [selectedCity, setSelectedCity] = useState(() => {
		const storedCity =
			typeof window !== 'undefined'
				? localStorage.getItem('selectedCity')
				: null
		return storedCity ? storedCity : city
	})
	const [weatherData, setWeatherData] = useState<any>(null)
	// добавляем
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('selectedCity', selectedCity)
		}
	}, [selectedCity])
	// изменяем
	useEffect(() => {
		async function fetchWeatherData() {
			setLoading(true)
			try {
				const data = await getWeatherData(selectedCity)
				setWeatherData(data)
				setLoading(false)
			} catch (error: any) {
				setError(error.message)
				setLoading(false)
			}
		}

		fetchWeatherData()
	}, [selectedCity])

	const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newSelectedCity = event.target.value
		setSelectedCity(newSelectedCity)
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
				{loading && <div className={styles.service}>Загрузка...</div>}
				{!loading && error && (
					<div className={styles.service}>Ошибка: {error}</div>
				)}
				{!loading && weatherData && (
					<WeatherForecastSlider weatherData={weatherData} />
				)}
			</div>
		</div>
	)
}
