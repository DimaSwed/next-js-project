import React from 'react'
import styles from '@/app/main.module.sass'

const YandexMapSkeleton = () => {
  return (
    <div className={styles.yandex_map}>
      <div className={`${styles.map_container} ${styles.skeleton}`}></div>
    </div>
  )
}

export default YandexMapSkeleton
