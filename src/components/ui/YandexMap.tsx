// import React from 'react'
// import { YMaps, Map, Placemark, GeolocationControl } from '@pbe/react-yandex-maps'

// import styles from '@/app/main.module.sass'

// const YandexMap = () => {
//   return (
//     <div className={styles.yandex_map}>
//       <YMaps query={{ lang: 'ru_RU' }}>
//         <Map
//           defaultState={{
//             center: [55.75, 37.57],
//             zoom: 9,
//             controls: ['zoomControl', 'fullscreenControl']
//           }}
//           width={'100%'}
//           height={400}
//           modules={['control.ZoomControl', 'control.FullscreenControl']}
//         >
//           <Placemark
//             modules={['geoObject.addon.balloon']}
//             defaultGeometry={[55.75, 37.57]}
//             properties={{
//               balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system'
//             }}
//           />
//           <GeolocationControl options={{ float: 'left' }} />
//         </Map>
//       </YMaps>
//     </div>
//   )
// }

// export default YandexMap
'use client'

import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { useAppSelector } from '@/redux/hooks/hooks'
import { useGetCityCoordinatesQuery } from '@/services/getCity'
import styles from '@/app/main.module.sass'

interface CityCoordinates {
  lat: number
  lon: number
}

const YandexMap = () => {
  const selectedCity = useAppSelector((state) => state.city.value)
  const { data, isError, isLoading } = useGetCityCoordinatesQuery(selectedCity)
  // useEffect(() => {
  //   if (data) {
  //     setCenter([data.lat, data.lon]);
  //   }
  // }, [data]);
  const cityCoordinates: CityCoordinates = data || { lat: 0, lon: 0 }

  if (isLoading) return <div className={styles.service}>Загрузка...</div>
  if (isError) return <div className={styles.service}>Error loading coordinates: {isError}</div>

  return (
    <div className={styles.yandex_map}>
      <YMaps query={{ lang: 'ru_RU' }}>
        <Map
          className={styles.map_container}
          state={{
            center: [cityCoordinates.lat, cityCoordinates.lon],
            zoom: 9,
            controls: ['zoomControl', 'fullscreenControl']
          }}
          width={'100%'}
          height={400}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark
            modules={['geoObject.addon.balloon']}
            geometry={[cityCoordinates.lat, cityCoordinates.lon]}
            properties={{
              balloonContentBody: `This is balloon loaded by the Yandex.Maps API module system in ${selectedCity}`
            }}
          />
        </Map>
      </YMaps>
    </div>
  )
}

export default YandexMap

// const selectedCity = useAppSelector((state) => state.city.value)
// // const selectedCity = localStorage.getItem('selectedCity')
// const { cityName, isLoading, isisError } = useGetCityQuery({ city: selectedCity })

// if (isLoading) return <div className={styles.service}>Загрузка...</div>
// if (isisError) return <div className={styles.service}>{isisError}</div>