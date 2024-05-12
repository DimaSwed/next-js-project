// CitySelector.tsx
import React from 'react'
import styles from '@/app/main.module.sass'

type TypeProps = {
	selectedCity: string
	handleCityChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const CitySelector: React.FC<TypeProps> = ({
	selectedCity,
	handleCityChange
}) => {
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

// import React from 'react'
// import styles from '@/app/main.module.sass'
// import { useAppDispatch } from '@/redux/hooks/hooks'
// import { chooseCity } from '@/redux/slices/citySlice'

// type TypeProps = {
// 	selectedCity: string
// 	handleCityChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
// }

// const CitySelector: React.FC<TypeProps> = ({
// 	selectedCity,
// 	handleCityChange
// }) => {
// 	const dispatch = useAppDispatch()

// 	const handleCityChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
// 		const selectedCity = event.target.value
// 		dispatch(chooseCity(selectedCity))
// 		console.log('выбираем город', selectedCity)
// 	}
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
// 				// onChange={handleCityChange}
// 				onChange={handleCityChange2}
// 			>
// 				<option value="Moscow">Москва</option>
// 				<option value="Saint Petersburg">Санкт-Петербург</option>
// 				<option value="Rostov-on-Don">Ростов-на-Дону</option>
// 			</select>
// 		</div>
// 	)
// }

// export default CitySelector
