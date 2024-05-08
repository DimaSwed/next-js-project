import React, { FC } from 'react'
import {
	FaCloudRain,
	FaCloud,
	FaSun,
	FaSnowflake,
	FaWind
} from 'react-icons/fa'

import '@/styles/weatherforecast.sass'

type TypeWeather = {
	dataday?: string
	temperature?: number
	pressure?: number
	speed?: number
	clouds?: string
}

const WeatherForecast: FC<TypeWeather> = ({
	dataday,
	temperature,
	pressure,
	speed,
	clouds
}) => {
	return (
		<div className="weather_forecast">
			<ul>
				<li className="wrapper">
					<h2 className="title_h2">Прогноз погоды на {dataday}</h2>
					<div className="weather_icon row">
						<FaCloudRain />
					</div>
					<div className="row">
						<span className="text">Температура:</span> {temperature}
						&#176;C
					</div>
					<div className="row">
						<span className="text">Давление:</span> {pressure} hPa
					</div>
					<div className="row">
						<span className="text">Скорость ветра:</span> {speed}{' '}
						m/s
					</div>
					<div className="row">
						<span className="text">Осадки:</span> {clouds} %
					</div>
				</li>
			</ul>
		</div>
	)
}

export default WeatherForecast
