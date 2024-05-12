// WeatherSection.tsx
import React from 'react'
import WeatherForecastSlider from './WeatherForecastSlider'
import styles from '@/app/main.module.sass'

type TypeProps = {
	loading: boolean
	error: string | null
	weatherData: any
}

const WeatherSection: React.FC<TypeProps> = ({
	loading,
	error,
	weatherData
}) => {
	return (
		<div
			data-aos="zoom-out"
			data-aos-delay="1500"
			className={styles.weather_items}
		>
			{loading && <div className={styles.service}>Загрузка...</div>}
			{!loading && error && (
				<div className={styles.service}>Ошибка: {error}</div>
			)}
			{!loading && weatherData && (
				<WeatherForecastSlider weatherData={weatherData} />
			)}
		</div>
	)
}

export default WeatherSection
