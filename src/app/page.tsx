import React from 'react'
import WeatherForecastSlider from '@/components/WeatherForecastSlider'

import '@/styles/main.sass'

export default function HomePage() {
	return (
		<div className="home_page">
			<div className="inner">
				<h1 className="title_h1">Еженедельный прогноз погоды</h1>
				<div className="city">
					<label htmlFor="city">Выберите город: </label>
					<select id="city" value="city">
						<option value="Москва">Москва</option>
						<option value="Санкт-Петербург">Санкт-Петербург</option>
						<option value="Казань">Казань</option>
					</select>
				</div>
				<p className="text">
					Раздел отображает последнюю информацию о погоде для города,
					который вы выбрали. Оставайтесь в курсе погодных условий в
					выбранном городе благодаря этому разделу.
				</p>
			</div>

			<div className="weather_items">
				<WeatherForecastSlider />
			</div>
		</div>
	)
}
