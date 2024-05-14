'use client'
import React, { useEffect } from 'react'
import styles from '@/app/main.module.sass'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { cityReducer } from '@/redux/slices/citySlice'

const CitySelector = () => {
  const dispatch = useAppDispatch()
  const selectedCityStore = useAppSelector((state) => state.city.value)

  useEffect(() => {
    const storedCity = localStorage.getItem('selectedCity')
    if (storedCity) {
      dispatch(cityReducer(storedCity))
    }
  }, [dispatch])

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value
    dispatch(cityReducer(selectedCity))
    localStorage.setItem('selectedCity', selectedCity)
  }

  return (
    <div data-aos="zoom-out" data-aos-delay="1000" className={styles.city}>
      <label className={styles.label} htmlFor="city">
        Выберите город:{' '}
      </label>
      <select
        className={styles.select}
        id="city"
        name="cities"
        value={selectedCityStore}
        onChange={handleCityChange}
      >
        <option value="Moscow">Москва</option>
        <option value="Saint Petersburg">Санкт-Петербург</option>
        <option value="Rostov-on-Don">Ростов-на-Дону</option>
      </select>
    </div>
  )
}

export default CitySelector
