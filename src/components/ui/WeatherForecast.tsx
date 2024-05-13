import React, { FC } from 'react'
import Image from 'next/image'

import '@/styles/weatherforecast.sass'

type TypeWeather = {
  dataday?: string
  temperature?: number
  pressure?: number
  speed?: number
  clouds?: string
  name?: string
  icon?: string
}

const WeatherForecast: FC<TypeWeather> = ({
  dataday,
  temperature,
  pressure,
  speed,
  clouds,
  name,
  icon
}) => {
  const cityName =
    name === 'Moscow'
      ? 'Москва'
      : name === 'Saint Petersburg'
        ? 'Санкт-Петербург'
        : name === 'Rostov-On-Don'
          ? 'Ростов-на-Дону'
          : name

  function convertKpaToMmHg(kpa: any) {
    return kpa * 0.750062
  }

  const mmHgResult = convertKpaToMmHg(pressure)

  return (
    <div className="weather_wrapper">
      <div className="weather_card">
        <div className="weather_icon">
          <Image src={`https:${icon}`} className="icon_wind" alt="icon" width={60} height={60} />
        </div>
        <h1>{dataday}</h1>
        <div className="weather_parametrs">
          <h2>{temperature} &deg;C</h2>
          <h2>{mmHgResult.toFixed(1)} мм.рт.ст.</h2>
          <h2>{speed} м/с</h2>
          <h2>{clouds}</h2>
        </div>
        <p>{cityName}</p>
      </div>
    </div>
  )
}

export default WeatherForecast
