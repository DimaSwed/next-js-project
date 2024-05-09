'use client'

import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import WeatherForecast from './WeatherForecast'

import { IWeather, IForecastday } from '@/types/types'

interface WeatherForecastProps {
	weatherData: (IWeather & IForecastday) | null
}

export default function WeatherForecastSlider({
	weatherData
}: {
	weatherData: WeatherForecastProps
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
			{weatherData?.forecast?.forecastday.map(
				(forecast: IForecastday) => (
					<WeatherForecast
						key={forecast?.date_epoch}
						dataday={forecast?.date}
						temperature={forecast?.day?.maxtemp_c}
						pressure={forecast?.hour[0]?.pressure_mb}
						speed={forecast?.day.maxwind_kph}
						clouds={forecast?.day.condition?.text}
						name={weatherData?.location?.name}
						icon={forecast?.day?.condition?.icon}
					/>
				)
			)}
		</Carousel>
	)
}
