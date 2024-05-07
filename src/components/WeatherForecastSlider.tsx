'use client'

import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import WeatherForecast from './WeatherForecast'

const WeatherForecastSlider = () => {
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
			itemClass="carousel-item-padding-20-px"
		>
			{/* Weather card */}
			<WeatherForecast />
			<WeatherForecast />
			<WeatherForecast />
			<WeatherForecast />
			<WeatherForecast />
			<WeatherForecast />
			<WeatherForecast />
			<WeatherForecast />
			<WeatherForecast />
			<WeatherForecast />
		</Carousel>
	)
}

export default WeatherForecastSlider
