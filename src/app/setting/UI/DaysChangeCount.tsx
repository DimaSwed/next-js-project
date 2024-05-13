'use client'

import React, { useState, useEffect } from 'react'
import styles from '@/app/setting/setting.module.sass'

const DaysChangeCount = () => {
  const isBrowser = typeof window !== 'undefined'

  const [daysCount, setDaysCount] = useState(10)

  useEffect(() => {
    if (isBrowser) {
      const storedDaysCount = localStorage.getItem('daysCount')
      const initialDaysCount = storedDaysCount ? parseInt(storedDaysCount) : 10
      setDaysCount(initialDaysCount)
    }
  }, [isBrowser])

  const changeDaysCount = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDaysCount = parseInt(event.target.value)
    setDaysCount(newDaysCount)
    if (isBrowser) {
      localStorage.setItem('daysCount', newDaysCount.toString())
    }
  }

  return (
    <div>
      <h2 className={styles.title_h2}>Изменить количество дней прогноза погоды :</h2>
      <select
        className={styles.select_days}
        value={daysCount.toString()}
        onChange={changeDaysCount}
      >
        <option value="1">1 день</option>
        <option value="2">2 дня</option>
        <option value="3">3 дня</option>
        <option value="4">4 дня</option>
        <option value="5">5 дней</option>
        <option value="6">6 дней</option>
        <option value="7">7 дней</option>
        <option value="8">8 дней</option>
        <option value="9">9 дней</option>
        <option value="10">10 дней</option>
      </select>
    </div>
  )
}

export default DaysChangeCount
