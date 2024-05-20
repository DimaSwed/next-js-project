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
import YandexMapSkeleton from './YandexMapSkeleton'
import styles from '@/app/main.module.sass'

interface CityCoordinates {
  lat: number
  lon: number
}

const YandexMap: React.FC = () => {
  const selectedCity = useAppSelector((state) => state.city.value)
  const { data, isError, isLoading } = useGetCityCoordinatesQuery(selectedCity)
  // useEffect(() => {
  //   if (data) {
  //     setCenter([data.lat, data.lon]);
  //   }
  // }, [data]);
  const cityCoordinates: CityCoordinates = data || { lat: 0, lon: 0 }

  // if (isLoading) return <div className={styles.service}>Загрузка...</div>

  if (isLoading) return <YandexMapSkeleton />
  if (isError) return <div className={styles.service}>Error loading coordinates: {isError}</div>

  return (
    <div className={styles.yandex_map}>
      <YMaps query={{ lang: 'ru_RU' }}>
        <Map
          state={{
            center: [cityCoordinates.lat, cityCoordinates.lon],
            zoom: 9,
            controls: ['zoomControl', 'fullscreenControl']
          }}
          width={500}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark
            modules={['geoObject.addon.balloon']}
            geometry={[cityCoordinates.lat, cityCoordinates.lon]}
          />
        </Map>
      </YMaps>
    </div>
  )
}

export default YandexMap
