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
    const themeStatus = localStorage.getItem('theme') || 'dark'
    dispatch(themeReducer(themeStatus))
    document.documentElement.setAttribute('data-theme', themeStatus)
  }, [dispatch])

  const themeReducerChange = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    // console.log('присваиваю переменной при нажатии на кнопку', newTheme)
    dispatch(themeReducer(newTheme))
    // console.log('отправляю в store при нажатии на кнопку', newTheme)
    localStorage.setItem('theme', newTheme)
    // console.log('отправляю в ls при нажатии на кнопку', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
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
