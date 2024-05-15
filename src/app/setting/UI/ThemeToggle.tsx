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
        <p className={styles.paragraph}>Текущая тема: {currentTheme}</p>
        <button value={currentTheme} onClick={themeReducerChange}>
          Сменить тему
        </button>
      </div>
    </div>
  )
}

export default ThemeToggle
