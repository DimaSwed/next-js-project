'use client'

import React, { useEffect } from 'react'
import styles from './main.module.sass'
import CitySelector from '@/components/ui/CitySelector'
import WeatherForecastSlider from '@/components/ui/WeatherForecastSlider'
import YandexMap from '@/components/ui/YandexMap'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HomePage() {
  useEffect(() => {
    const themeStatus = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', String(themeStatus))
  }, [])

  useEffect(() => {
    const initAos = async () => {
      await import('aos')
      AOS.init({
        duration: 1500,
        easing: 'ease',
        once: true,
        anchorPlacement: 'center-center'
      })
    }

    initAos()
  }, [])

  return (
    <div className={styles.home_page}>
      <div className={styles.inner}>
        <h1 data-aos="zoom-in" data-aos-anchor-placement="top-center" className={styles.title_h1}>
          Еженедельный прогноз погоды
        </h1>
        <CitySelector />
        <p className={styles.text} data-aos="fade-right" data-aos-delay="600">
          Раздел отображает последнюю информацию о погоде для города, который вы выбрали. <br />{' '}
          Оставайтесь в курсе погодных условий в выбранном городе благодаря этому разделу.
        </p>
      </div>
      <hr />
      <div className={styles.weather_items}>
        <WeatherForecastSlider />
      </div>
      <hr />
      <YandexMap />
    </div>
  )
}
