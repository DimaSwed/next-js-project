// import React, { useState, useEffect } from 'react'
// import { FaSearch } from 'react-icons/fa'
// import styles from '@/app/main.module.sass'
// import { useAppDispatch } from '@/redux/hooks/hooks'
// import { cityReducer } from '@/redux/slices/citySlice'

// const SearchBar: React.FC = () => {
//   const [search, setSearch] = useState<string>('')
//   const dispatch = useAppDispatch()

//   useEffect(() => {
//     const storedCity = localStorage.getItem('selectedCity')
//     if (storedCity) {
//       dispatch(cityReducer(storedCity))
//     }
//   }, [dispatch])

//   const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//     setSearch(event.target.value)
//   }

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
//     event.preventDefault()
//     if (search.trim()) {
//       dispatch(cityReducer(search))
//       localStorage.setItem('selectedCity', search)
//     }
//   }

//   return (
//     <div data-aos="zoom-out" data-aos-delay="400" className={styles.search_wrap}>
//       <form className={styles.searcher} onSubmit={handleSubmit}>
//         <input
//           type="search"
//           className={styles.search_term}
//           value={search}
//           placeholder="Поиск города.."
//           onChange={handleCityChange}
//         />
//         <button type="submit" className={styles.search_btn}>
//           <FaSearch className={styles.search_icon} />
//         </button>
//       </form>
//     </div>
//   )
// }

// export default SearchBar
'use client'

import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from '@/app/main.module.sass'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { cityReducer, setSearchTerm } from '@/redux/slices/citySlice'

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const search = useAppSelector((state) => state.city.searchTerm)

  useEffect(() => {
    const storedCity = localStorage.getItem('selectedCity')
    if (storedCity) {
      dispatch(cityReducer(storedCity))
    }
  }, [dispatch])

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchTerm(event.target.value))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (search.trim()) {
      dispatch(cityReducer(search))
      localStorage.setItem('selectedCity', search)
    }
  }

  return (
    <div data-aos="zoom-out" data-aos-delay="400" className={styles.search_wrap}>
      <form className={styles.searcher} onSubmit={handleSubmit}>
        <input
          type="search"
          className={styles.search_term}
          value={search}
          placeholder="Поиск города.."
          onChange={handleCityChange}
        />
        <button type="submit" className={styles.search_btn}>
          <FaSearch className={styles.search_icon} />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
