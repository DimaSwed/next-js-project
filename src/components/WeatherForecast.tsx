import React from 'react'
import {
	FaCloudRain,
	FaCloud,
	FaSun,
	FaSnowflake,
	FaWind
} from 'react-icons/fa'

import '@/styles/weatherforecast.sass'

const WeatherForecast = () => {
	// Возьмем погодные данные из API или сгенерируем фиктивные данные
	const weatherData = [
		{
			date: '01.05.2024',
			temperature: '15°C',
			pressure: '1013 hPa',
			windSpeed: '5 m/s',
			precipitation: 'Rain'
		}
	]

	return (
		<div className="weather_forecast">
			<ul>
				{weatherData.map((data, index) => (
					<li className="wrapper" key={index}>
						<h2 className="title_h2">
							Прогноз погоды на {data.date}
						</h2>
						<div className="weather_icon row">
							<FaCloudRain />
						</div>
						<div className="row">
							<span className="text">Температура:</span>{' '}
							{data.temperature}
						</div>
						<div className="row">
							<span className="text">Давление:</span>{' '}
							{data.pressure}
						</div>
						<div className="row">
							<span className="text">Скорость ветра:</span>{' '}
							{data.windSpeed}
						</div>
						<div className="row">
							<span className="text">Осадки:</span>{' '}
							{data.precipitation}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default WeatherForecast
