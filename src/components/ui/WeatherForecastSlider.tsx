'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useGetWeatherByCityQuery } from '@/services/getWeatherData'
import { useAppSelector } from '@/redux/hooks/hooks'
import { IForecastday } from '@/types/types'
import WeatherForecast from './WeatherForecast'
import WeatherForecastSkeleton from './WeatherForecastSkeleton'
import styles from '@/app/main.module.sass'

export default function WeatherForecastSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
      centerMode: false
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 3,
      slidesToSlide: 1,
      centerMode: false
    },
    mobile: {
      breakpoint: { max: 764, min: 468 },
      items: 2,
      slidesToSlide: 1,
      centerMode: true
    },
    mobile_min: {
      breakpoint: { max: 468, min: 0 },
      items: 1,
      slidesToSlide: 1,
      centerMode: true
    }
  }

  const selectedCity = useAppSelector((state) => state.city.value)
  const selectedDays = typeof window !== 'undefined' ? localStorage.getItem('daysCount') ?? '' : ''

  const {
    data = [],
    isLoading,
    isError
  } = useGetWeatherByCityQuery({ city: selectedCity, days: selectedDays })

  // if (isLoading) return <div className={styles.service}>Загрузка...</div>
  if (isLoading)
    return Array.from({ length: 1 }).map((_, index) => <WeatherForecastSkeleton key={index} />)
  if (isError) return <div className={styles.service}>{isError}</div>

  return (
    <Carousel
      containerClass="react-multi-carousel-list"
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
      {data &&
        'forecast' in data &&
        data.forecast.forecastday.map((forecast: IForecastday) => (
          <WeatherForecast
            key={forecast?.date_epoch}
            dataday={forecast?.date}
            temperature={forecast?.day?.maxtemp_c}
            pressure={forecast?.hour[0]?.pressure_mb}
            speed={forecast?.day.maxwind_kph}
            clouds={forecast?.day.condition?.text}
            name={data?.location?.name}
            icon={forecast?.day?.condition?.icon}
          />
        ))}
      {/* {isLoading
        ? Array.from({ length: 4 }).map((_, index) => <WeatherForecastSkeleton key={index} />)
        : data &&
          'forecast' in data &&
          data.forecast.forecastday.map((forecast: IForecastday) => (
            <WeatherForecast
              key={forecast?.date_epoch}
              dataday={forecast?.date}
              temperature={forecast?.day?.maxtemp_c}
              pressure={forecast?.hour[0]?.pressure_mb}
              speed={forecast?.day.maxwind_kph}
              clouds={forecast?.day.condition?.text}
              name={data?.location?.name}
              icon={forecast?.day?.condition?.icon}
            />
          ))} */}
    </Carousel>
  )
}
