'use client'

import React, { useState } from 'react'
import styles from '@/app/setting/setting.module.sass'

const Toggle = () => {
  const isBrowser = typeof window !== 'undefined'
  const initialDarkMode = isBrowser && localStorage.getItem('darkMode') === 'true'
  const [darkMode, setDarkMode] = useState(initialDarkMode)

  // Функция для изменения темы и сохранения ее в localStorage
  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode ? 'true' : 'false')
  }

  return (
    <div>
      <h2 className={styles.title_h2}>Тема приложения</h2>
      <div className={styles.toggle_wrapper}>
        <p className={styles.paragraph}>Сменить тему:</p>
        <label className={styles.switch}>
          <input
            className={styles.input_switch_chekbox}
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
          />
          <div className={styles.switch_wrap}></div>
        </label>
      </div>
    </div>
  )
}

export default Toggle
