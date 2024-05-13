'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/app/setting/setting.module.sass'

const GitHubLinksToggle = () => {
  const [showGitHubLinks, setShowGitHubLinks] = useState(false)

  useEffect(() => {
    // Получение значения из localStorage при инициализации компонента
    const storedValue = localStorage.getItem('showGitHubLinks')
    setShowGitHubLinks(storedValue === 'true')
  }, [])

  const toggleGitHubLinks = () => {
    const newValue = !showGitHubLinks
    setShowGitHubLinks(newValue)
    localStorage.setItem('showGitHubLinks', newValue.toString())
  }

  return (
    <div>
      <h2 className={styles.title_h2}>
        Отображать ссылки на GitHub в разделе{' '}
        <Link className={styles.link} href="/about">
          О нас
        </Link>{' '}
        :
      </h2>
      <label>
        <input
          className={styles.input_checkbox}
          type="checkbox"
          checked={showGitHubLinks}
          onChange={toggleGitHubLinks}
        />
      </label>
    </div>
  )
}

export default GitHubLinksToggle
