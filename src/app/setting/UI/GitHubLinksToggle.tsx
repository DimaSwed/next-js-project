'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { linksReducer } from '@/redux/slices/linksSlice'
import styles from '@/app/setting/setting.module.sass'

interface GitHubLinksToggleProps {}

const GitHubLinksToggle: React.FC<GitHubLinksToggleProps> = () => {
  const dispatch = useAppDispatch()
  const linksVisibility = useAppSelector((state) => state.links.value)
  // console.log('получаем из store:', linksVisibility)

  const toggleLinksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const linksVisibilityStatus: boolean = event.target.checked
    // console.log('получаем при нажатии toggle:', linksVisibilityStatus)
    dispatch(linksReducer(linksVisibilityStatus))
    localStorage.setItem('linksVisibility', String(linksVisibilityStatus))
  }

  useEffect(() => {
    const linksStatus = localStorage.getItem('linksVisibility')
    // console.log('получаем из localStorage:', linksStatus)
    if (linksStatus !== null) {
      dispatch(linksReducer(linksStatus === 'true'))
    }
  }, [dispatch])

  return (
    <div className={styles.settings_wrap}>
      <h2 className={styles.title_h2}>
        Отображать ссылки на GitHub в разделе{' '}
        <Link className={styles.link} href="/about">
          О нас
        </Link>{' '}
        :
      </h2>
      {/* <label>
        <input
          className={styles.input_checkbox}
          type="checkbox"
          checked={linksVisibility}
          onChange={toggleLinksChange}
        />
      </label> */}
      <div className={styles.checkbox_wrapper}>
        <input
          type="checkbox"
          className={styles.input}
          checked={linksVisibility}
          onChange={toggleLinksChange}
          id="checkbox"
        />
        <label htmlFor="checkbox" className={styles.label} />
      </div>
    </div>
  )
}

export default GitHubLinksToggle
