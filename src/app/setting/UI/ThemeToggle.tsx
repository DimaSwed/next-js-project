// 'use client'

// import React, { useEffect } from 'react'
// import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
// import { themeReducer } from '@/redux/slices/themeSlice'
// import { FaSun, FaMoon } from 'react-icons/fa'
// import styles from '@/app/setting/setting.module.sass'

// interface ThemeToggleProps {}

// const ThemeToggle: React.FC<ThemeToggleProps> = () => {
//   const dispatch = useAppDispatch()
//   const currentTheme = useAppSelector((state) => state.theme.currentTheme) as string

//   useEffect(() => {
//     const themeStatus = localStorage.getItem('theme') || 'dark'
//     dispatch(themeReducer(themeStatus))
//     document.documentElement.setAttribute('data-theme', themeStatus)
//   }, [dispatch])

//   const themeReducerChange = () => {
//     const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
//     dispatch(themeReducer(newTheme))
//     localStorage.setItem('theme', newTheme)
//     document.documentElement.setAttribute('data-theme', newTheme)
//   }

//   return (
//     <div className={styles.settings_wrap}>
//       <h2 className={styles.title_h2}>Тема приложения</h2>
//       <div className={styles.toggle_wrapper}>
//         <div className={styles.paragraph}>
//           Текущая тема:{' '}
//           {currentTheme === 'dark' ? (
//             <FaMoon className={styles.moon_icon} />
//           ) : (
//             <FaSun className={styles.sun_icon} />
//           )}
//         </div>

//         <button
//           role="button"
//           value={currentTheme}
//           onClick={themeReducerChange}
//           className={styles.theme_toggle}
//           id="theme-toggle"
//           title="Toggles light & dark"
//           aria-label="auto"
//           aria-live="polite"
//         >
//           Сменить тему
//         </button>
//       </div>
//     </div>
//   )
// }

// export default ThemeToggle
'use client'

import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import { themeReducer } from '@/redux/slices/themeSlice'
import { FaSun, FaMoon } from 'react-icons/fa'
import styles from '@/app/setting/setting.module.sass'

interface ThemeToggleProps {}

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.theme.currentTheme) as string
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const themeStatus = localStorage.getItem('theme') || 'dark'
      dispatch(themeReducer(themeStatus))
      document.documentElement.setAttribute('data-theme', themeStatus)
      setIsMounted(true)
    }
  }, [dispatch])

  const themeReducerChange = () => {
    if (typeof window !== 'undefined') {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
      dispatch(themeReducer(newTheme))
      localStorage.setItem('theme', newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
    }
  }

  if (!isMounted) {
    return null // Не рендерим компонент на сервере
  }

  return (
    <div className={styles.settings_wrap}>
      <h2 className={styles.title_h2}>Тема приложения</h2>
      <div className={styles.toggle_wrapper}>
        <div className={styles.paragraph}>
          Текущая тема:{' '}
          {currentTheme === 'dark' ? (
            <FaMoon className={styles.moon_icon} />
          ) : (
            <FaSun className={styles.sun_icon} />
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
