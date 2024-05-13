'use client'

import React, { useEffect } from 'react'
import styles from '@/app/setting/setting.module.sass'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { daysReducer } from '@/redux/slices/chooseDaysNumberSlice'

const DaysChangeCount = () => {
  const dispatch = useAppDispatch()
  const selectedDaysStore = useAppSelector((state) => state.days.value)

  useEffect(() => {
    const storedDaysCount = localStorage.getItem('daysCount')
    if (storedDaysCount) {
      dispatch(daysReducer(storedDaysCount))
    }
  }, [dispatch])

  const handleDaysChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDaysCount = event.target.value
    dispatch(daysReducer(newDaysCount))
    localStorage.setItem('daysCount', newDaysCount)
  }

  return (
    <div>
      <h2 className={styles.title_h2}>Изменить количество дней прогноза погоды :</h2>
      <select
        className={styles.select_days}
        id="day"
        name="days"
        value={selectedDaysStore}
        onChange={handleDaysChange}
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
