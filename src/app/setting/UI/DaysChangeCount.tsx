'use client'

import React, { useEffect, useState, useId } from 'react'
import styles from '@/app/setting/setting.module.sass'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { daysReducer } from '@/redux/slices/chooseDaysNumberSlice'
import Select from 'react-select'

interface DaysOption {
  value: string
  label: string
}

const daysOptions: DaysOption[] = [
  { value: '1', label: 'Один день' },
  { value: '2', label: 'Два дня' },
  { value: '3', label: 'Три дня' },
  { value: '4', label: 'Четыре дня' },
  { value: '5', label: 'Пять дней' },
  { value: '6', label: 'Шесть дней' },
  { value: '7', label: 'Семь дней' },
  { value: '8', label: 'Восемь дней' },
  { value: '9', label: 'Девять дней' },
  { value: '10', label: 'Десять дней' }
]

const DaysChangeCount = () => {
  const dispatch = useAppDispatch()
  const selectedDaysStore = useAppSelector((state) => state.days.value)
  const id = useId()

  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])

  useEffect(() => {
    const storedDaysCount = localStorage.getItem('daysCount')
    if (storedDaysCount) {
      dispatch(daysReducer(storedDaysCount))
    }
  }, [dispatch])

  // const handleDaysChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const newDaysCount = event.target.value
  //   dispatch(daysReducer(newDaysCount))
  //   localStorage.setItem('daysCount', newDaysCount)
  // }

  const handleDaysChange = (selectedOption: DaysOption | null) => {
    if (selectedOption) {
      dispatch(daysReducer(selectedOption.value))
      localStorage.setItem('daysCount', selectedOption.value)
    }
  }

  const getSelectedDaysOption = () => {
    return daysOptions.find((option) => option.value === selectedDaysStore) || null
  }

  return (
    // <div className={styles.settings_wrap}>
    //   <h2 className={styles.title_h2}>Изменить количество дней прогноза погоды :</h2>
    //   <select
    //     className={styles.select_days}
    //     id="day"
    //     name="days"
    //     value={selectedDaysStore}
    //     onChange={handleDaysChange}
    //   >
    //     <option value="1">1 день</option>
    //     <option value="2">2 дня</option>
    //     <option value="3">3 дня</option>
    //     <option value="4">4 дня</option>
    //     <option value="5">5 дней</option>
    //     <option value="6">6 дней</option>
    //     <option value="7">7 дней</option>
    //     <option value="8">8 дней</option>
    //     <option value="9">9 дней</option>
    //     <option value="10">10 дней</option>
    //   </select>
    // </div>
    isMounted ? (
      <div className={styles.settings_wrap}>
        <h2 className={styles.title_h2}>Изменить количество дней прогноза погоды :</h2>
        <Select
          id={id}
          value={getSelectedDaysOption()}
          onChange={handleDaysChange}
          options={daysOptions}
          placeholder="Выберите дни"
          menuPlacement="auto"
          styles={{
            control: (provided) => ({
              ...provided,
              width: '180px',
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
              marginTop: '-100px'
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
    ) : null
  )
}

export default DaysChangeCount
