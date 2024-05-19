'use client'
import React, { useEffect } from 'react'
import Select from 'react-select'
import styles from '@/app/main.module.sass'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { cityReducer } from '@/redux/slices/citySlice'

interface CityOption {
  value: string
  label: string
}

const cityOptions: CityOption[] = [
  { value: 'Moscow', label: 'Москва' },
  { value: 'Saint Petersburg', label: 'Санкт-Петербург' },
  { value: 'Rostov-on-Don', label: 'Ростов-на-Дону' }
]

const CitySelector = () => {
  const dispatch = useAppDispatch()
  const selectedCityStore = useAppSelector((state) => state.city.value)

  useEffect(() => {
    const storedCity = localStorage.getItem('selectedCity')
    if (storedCity) {
      dispatch(cityReducer(storedCity))
    }
  }, [dispatch])

  // const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedCity = event.target.value
  //   dispatch(cityReducer(selectedCity))
  //   localStorage.setItem('selectedCity', selectedCity)
  // }

  const handleCityChange = (selectedOption: CityOption | null) => {
    if (selectedOption) {
      dispatch(cityReducer(selectedOption.value))
      localStorage.setItem('selectedCity', selectedOption.value)
    }
  }

  const getSelectedCityOption = () => {
    return cityOptions.find((option) => option.value === selectedCityStore) || null
  }

  return (
    // <div data-aos="zoom-out" data-aos-delay="1000" className={styles.city}>
    //   <label className={styles.label} htmlFor="city">
    //     Выберите город:{' '}
    //   </label>
    //   <select
    //     className={styles.select}
    //     id="city"
    //     name="cities"
    //     value={selectedCityStore}
    //     onChange={handleCityChange}
    //   >
    //     <option value="Moscow">Москва</option>
    //     <option value="Saint Petersburg">Санкт-Петербург</option>
    //     <option value="Rostov-on-Don">Ростов-на-Дону</option>
    //   </select>
    // </div>
    <div data-aos="zoom-out" data-aos-delay="1000" className={styles.city}>
      <label className={styles.label} htmlFor="city-select">
        Выберите город:{' '}
      </label>
      <Select
        id="city-select"
        value={getSelectedCityOption()}
        onChange={handleCityChange}
        options={cityOptions}
        placeholder="Выберите город"
        menuPlacement="auto"
        styles={{
          control: (provided) => ({
            ...provided,
            width: '200px',
            height: '50px',
            backgroundColor: 'var(--background-color)',
            border: '1px solid var(--text-color)',
            boxShadow: 'none',
            '&:hover': {
              color: 'var(--white-color)',
              boxShadow: '0 0 5px var(--hover-color)',
              backgroundColor: '#ff9b27'
            },
            borderRadius: '5px',
            padding: '5px',
            color: 'var(--text-color)'
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: '#282c34',
            color: 'white',
            marginTop: '-80px'
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
              ? '#ff9b27'
              : state.isFocused
                ? 'var(--hover-color-two)'
                : '#282c34',
            color: state.isSelected ? 'black' : 'white',
            '&:hover': {
              backgroundColor: 'var(--hover-color-two)',
              color: 'black'
            }
          }),
          singleValue: (provided) => ({
            ...provided,
            color: 'var(--text-color)'
          }),
          placeholder: (provided) => ({
            ...provided,
            color: 'var(--text-color)'
          })
        }}
      />
    </div>
  )
}

export default CitySelector
