// CitySelector.tsx
// import React from 'react'
// import styles from '@/app/main.module.sass'

// type TypeProps = {
// 	selectedCity: string
// 	handleCityChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
// }

// const CitySelector: React.FC<TypeProps> = ({
// 	selectedCity,
// 	handleCityChange
// }) => {
// 	return (
// 		<div data-aos="zoom-out" data-aos-delay="1000" className={styles.city}>
// 			<label className={styles.label} htmlFor="city">
// 				Выберите город:{' '}
// 			</label>
// 			<select
// 				className={styles.select}
// 				id="city"
// 				name="cities"
// 				value={selectedCity}
// 				onChange={handleCityChange}
// 			>
// 				<option value="Moscow">Москва</option>
// 				<option value="Saint Petersburg">Санкт-Петербург</option>
// 				<option value="Rostov-on-Don">Ростов-на-Дону</option>
// 			</select>
// 		</div>
// 	)
// }

// export default CitySelector

'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/app/main.module.sass'
import { useAppDispatch } from '@/redux/hooks/hooks'
import { chooseCity } from '@/redux/slices/citySlice'

const CitySelector = () => {
	const dispatch = useAppDispatch()
	const [selectedCity, setSelectedCity] = useState('')

	useEffect(() => {
		const storedCity = localStorage.getItem('selectedCity')
		if (storedCity) {
			setSelectedCity(storedCity)
		}
	}, [])

	const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedCity = event.target.value
		setSelectedCity(selectedCity)
		dispatch(chooseCity(selectedCity))
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
				value={selectedCity}
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
