'use client'

import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import WeatherForecast from './WeatherForecast'

const currentDate = new Date().toLocaleDateString()

interface IWeather {
	coord: Coord
	weather: Weather[]
	base: string
	main: Main
	visibility: number
	wind: Wind
	clouds: Clouds
	dt: number
	sys: Sys
	timezone: number
	id: number
	name: string
	cod: number
}
interface Clouds {
	all: number
}

interface Coord {
	lon: number
	lat: number
}

interface Main {
	temp: number
	feels_like: number
	temp_min: number
	temp_max: number
	pressure: number
	humidity: number
}

interface Sys {
	type: number
	id: number
	country: string
	sunrise: number
	sunset: number
}

interface Weather {
	id: number
	main: string
	description: string
	icon: string
}

interface Wind {
	speed: number
	deg: number
}

export default function WeatherForecastSlider({
	weatherData
}: {
	weatherData: IWeather
}) {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1324 },
			items: 4,
			slidesToSlide: 1 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1324, min: 764 },
			items: 3,
			slidesToSlide: 1 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 764, min: 468 },
			items: 2,
			slidesToSlide: 1 // optional, default to 1.
		},
		mobile_min: {
			breakpoint: { max: 468, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	}

	console.log(weatherData)

	return (
		<Carousel
			additionalTransfrom={0}
			arrows={true}
			autoPlay={true}
			autoPlaySpeed={5000}
			centerMode={false}
			infinite
			responsive={responsive}
			itemClass="custom-carousel-item"
			removeArrowOnDeviceType={['mobile', 'mobile_min']}
			partialVisible={false}
		>
			<WeatherForecast
				dataday={currentDate}
				temperature={weatherData?.main?.temp}
				pressure={weatherData?.main?.pressure}
				speed={weatherData?.wind?.speed}
				clouds={weatherData?.weather[0]?.main}
				name={weatherData?.name}
			/>

			<WeatherForecast
				dataday={currentDate}
				temperature={weatherData?.main?.temp}
				pressure={weatherData?.main?.pressure}
				speed={weatherData?.wind?.speed}
				clouds={weatherData?.weather[0]?.main}
				name={weatherData?.name}
			/>
			<WeatherForecast
				dataday={currentDate}
				temperature={weatherData?.main?.temp}
				pressure={weatherData?.main?.pressure}
				speed={weatherData?.wind?.speed}
				clouds={weatherData?.weather[0]?.main}
				name={weatherData?.name}
			/>
			<WeatherForecast
				dataday={currentDate}
				temperature={weatherData?.main?.temp}
				pressure={weatherData?.main?.pressure}
				speed={weatherData?.wind?.speed}
				clouds={weatherData?.weather[0]?.main}
				name={weatherData?.name}
			/>
			<WeatherForecast
				dataday={currentDate}
				temperature={weatherData?.main?.temp}
				pressure={weatherData?.main?.pressure}
				speed={weatherData?.wind?.speed}
				clouds={weatherData?.weather[0]?.main}
				name={weatherData?.name}
			/>
			<WeatherForecast
				dataday={currentDate}
				temperature={weatherData?.main?.temp}
				pressure={weatherData?.main?.pressure}
				speed={weatherData?.wind?.speed}
				clouds={weatherData?.weather[0]?.main}
				name={weatherData?.name}
			/>
			<WeatherForecast
				dataday={currentDate}
				temperature={weatherData?.main?.temp}
				pressure={weatherData?.main?.pressure}
				speed={weatherData?.wind?.speed}
				clouds={weatherData?.weather[0]?.main}
				name={weatherData?.name}
			/>
		</Carousel>
	)
}
