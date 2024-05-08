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
	name?: string
}

const WeatherForecast: FC<TypeWeather> = ({
	dataday,
	temperature,
	pressure,
	speed,
	clouds,
	name
}) => {
	return (
		// <div className="weather_forecast">
		// 	<ul>
		// 		<li className="wrapper">
		// 			<h2 className="title_h2">Прогноз погоды на {dataday}</h2>
		// 			<div className="weather_icon row">
		// 				<FaCloudRain />
		// 			</div>
		// 			<div className="row">
		// 				<span className="text">Температура:</span> {temperature}
		// 				&#176;C
		// 			</div>
		// 			<div className="row">
		// 				<span className="text">Давление:</span> {pressure} hPa
		// 			</div>
		// 			<div className="row">
		// 				<span className="text">Скорость ветра:</span> {speed}{' '}
		// 				m/s
		// 			</div>
		// 			<div className="row">
		// 				<span className="text">Осадки:</span> {clouds} %
		// 			</div>
		// 		</li>
		// 	</ul>
		// </div>
		//
		<div className="weather_wrapper">
			<div className="weather_card">
				<div className="weather_icon">
					<FaWind className="icon_wind" />
				</div>
				<h1>{dataday}</h1>
				<div className="weather_parametrs">
					<h2>{temperature}º</h2>
					<h2>{pressure} кПа</h2>
					<h2>{speed} м/с</h2>
					<h2>{clouds} %</h2>
				</div>
				<p>{name}</p>
			</div>
		</div>
	)
}

export default WeatherForecast
