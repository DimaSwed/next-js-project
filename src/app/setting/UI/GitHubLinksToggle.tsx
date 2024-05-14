'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { linksReducer } from '@/redux/slices/linksSlice'
import styles from '@/app/setting/setting.module.sass'

const GitHubLinksToggle = () => {
  const dispatch = useAppDispatch()
  const linksVisibility = useAppSelector((state) => state.links.value)

  useEffect(() => {
    const linksStatus = localStorage.getItem('linksVisibility')
    if (linksStatus !== null) {
      dispatch(linksReducer(linksStatus === 'true'))
    }
  }, [dispatch])

  const toggleLinksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const linksVisibilityStatus = event.target.checked
    dispatch(linksReducer(linksVisibilityStatus))
    localStorage.setItem('linksVisibility', String(linksVisibilityStatus))
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
          checked={linksVisibility}
          onChange={toggleLinksChange}
        />
      </label>
    </div>
  )
}

export default GitHubLinksToggle
