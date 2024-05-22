// 'use client'
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

// 'use client'

// import React, { useEffect } from 'react'
// import { FaSearch } from 'react-icons/fa'
// import styles from '@/app/main.module.sass'
// import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
// import { cityReducer, setSearchTerm } from '@/redux/slices/citySlice'
// import Autosuggest from 'react-autosuggest'

// export interface City {
//   name: string
// }

// export const cities: City[] = [
//   { name: 'Moscow' },
//   { name: 'New York' },
//   { name: 'London' },
//   { name: 'Paris' },
//   { name: 'Tokyo' },
//   { name: 'Berlin' },
//   { name: 'Sydney' },
//   { name: 'Toronto' },
//   { name: 'Dubai' },
//   { name: 'Beijing' }
// ]

// const SearchBar: React.FC = () => {
//   const dispatch = useAppDispatch()
//   const search = useAppSelector((state) => state.city.searchTerm)

//   useEffect(() => {
//     const storedCity = localStorage.getItem('selectedCity')
//     if (storedCity) {
//       dispatch(cityReducer(storedCity))
//     } else {
//       dispatch(cityReducer('Moscow'))
//     }
//   }, [dispatch])

//   const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//     dispatch(setSearchTerm(event.target.value))
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

import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from '@/app/main.module.sass'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { cityReducer, setSearchTerm } from '@/redux/slices/citySlice'
import Autosuggest from 'react-autosuggest'
import { cities } from '@/data/cities'
export interface City {
  name: string
}

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const search = useAppSelector((state) => state.city.searchTerm)
  const [suggestions, setSuggestions] = useState<City[]>([])

  useEffect(() => {
    const storedCity = localStorage.getItem('selectedCity')
    if (storedCity) {
      dispatch(cityReducer(storedCity))
    } else {
      dispatch(cityReducer('Moscow'))
    }
  }, [dispatch])

  const handleCityChange = (
    event: React.FormEvent<HTMLElement>,
    { newValue }: Autosuggest.ChangeEvent
  ): void => {
    dispatch(setSearchTerm(newValue))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (search.trim()) {
      dispatch(cityReducer(search))
      localStorage.setItem('selectedCity', search)
    }
  }

  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    return inputLength === 0
      ? []
      : cities.filter((city) => city.name.toLowerCase().slice(0, inputLength) === inputValue)
  }

  const getSuggestionValue = (suggestion: City) => suggestion.name

  const renderSuggestion = (suggestion: City) => (
    <div className={styles.suggestion}>{suggestion.name}</div>
  )

  return (
    <div data-aos="zoom-out" data-aos-delay="400" className={styles.search_wrap}>
      <form className={styles.searcher} onSubmit={handleSubmit}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={({ value }) => {
            setSuggestions(getSuggestions(value))
          }}
          onSuggestionsClearRequested={() => {
            setSuggestions([])
          }}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            type: 'search',
            className: styles.search_term,
            placeholder: 'Поиск города..',
            value: search,
            onChange: handleCityChange
          }}
          theme={{
            container: styles.autosuggestContainer,
            suggestionsContainer: styles.suggestionsContainer,
            suggestionsList: styles.suggestionsList,
            suggestion: styles.suggestion
          }}
        />
        <button type="submit" className={styles.search_btn}>
          <FaSearch className={styles.search_icon} />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
