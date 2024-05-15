'use client'

// import React, { useState } from 'react'

// import styles from '@/app/setting/setting.module.sass'

// const ThemeToggle = () => {
//   const isBrowser = typeof window !== 'undefined'
//   const initialDarkMode = isBrowser && localStorage.getItem('darkMode') === 'true'
//   const [darkMode, setDarkMode] = useState(initialDarkMode)

//   const themeReducer = () => {
//     const newMode = !darkMode
//     setDarkMode(newMode)
//     localStorage.setItem('darkMode', newMode ? 'true' : 'false')
//   }

//   return (
//     <div>
//       <h2 className={styles.title_h2}>Тема приложения</h2>
//       <div className={styles.toggle_wrapper}>
//         <p className={styles.paragraph}>Сменить тему:</p>
//         <label className={styles.switch}>
//           <input
//             className={styles.input_switch_chekbox}
//             type="checkbox"
//             checked={darkMode}
//             onChange={themeReducer}
//           />
//           <div className={styles.switch_wrap}></div>
//         </label>
//       </div>
//     </div>
//   )
// }

// export default ThemeToggle
'use client'

import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import { themeReducer } from '@/redux/slices/themeSlice'
import { FaSun, FaMoon } from 'react-icons/fa'

import styles from '@/app/setting/setting.module.sass'

const ThemeToggle = () => {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)

  useEffect(() => {
    const themeStatus = localStorage.getItem('theme')
    // console.log(themeStatus)
    if (themeStatus) {
      dispatch(themeReducer(themeStatus))
    }
  }, [dispatch])

  const themeReducerChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const themeStatusCheck = event.currentTarget.value
    // console.log(themeStatusCheck)
    dispatch(themeReducer(themeStatusCheck))
    localStorage.setItem('theme', themeStatusCheck)
  }

  return (
    <div>
      <h2 className={styles.title_h2}>Тема приложения</h2>
      <div className={styles.toggle_wrapper}>
        <div className={styles.paragraph}>
          Текущая тема:{' '}
          {currentTheme === 'Dark' ? (
            <FaMoon className={styles.moon_icon} /> // Иконка луны для темной темы
          ) : (
            <FaSun className={styles.sun_icon} /> // Иконка солнца для светлой темы
          )}
        </div>

        <button
          role="button"
          value={currentTheme}
          onClick={themeReducerChange}
          className={styles.theme_toggle}
          id="theme-toggle"
          title="Toggles light & dark"
          aria-label="auto"
          aria-live="polite"
        >
          Сменить тему
        </button>
      </div>
    </div>
  )
}

export default ThemeToggle
