// WeatherSection.tsx
// import React from 'react'
// import WeatherForecastSlider from './WeatherForecastSlider'
// import styles from '@/app/main.module.sass'

// type TypeProps = {
// 	loading: boolean
// 	error: string | null
// 	weatherData: any
// }

// const WeatherSection: React.FC<TypeProps> = ({
// 	loading,
// 	error,
// 	weatherData
// }) => {
// 	return (
// 		<div
// 			data-aos="zoom-in"
// 			data-aos-delay="1300"
// 			className={styles.weather_items}
// 		>
// 			{loading && <div className={styles.service}>Загрузка...</div>}
// 			{!loading && error && <div className={styles.service}>{error}</div>}
// 			{!loading && weatherData && (
// 				<WeatherForecastSlider weatherData={weatherData} />
// 			)}
// 		</div>
// 	)
// }

// export default WeatherSection

import React from 'react'
import WeatherForecastSlider from './WeatherForecastSlider'
import styles from '@/app/main.module.sass'

const WeatherSection = () => {
  return (
    <div data-aos="zoom-in" data-aos-delay="1000" className={styles.weather_items}>
      <WeatherForecastSlider />
    </div>
  )
}

export default WeatherSection
