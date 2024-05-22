import { Metadata } from 'next'
import ThemeToggle from './UI/ThemeToggle'
import DaysChangeCount from './UI/DaysChangeCount'
import GitHubLinksToggle from './UI/GitHubLinksToggle'
import styles from './setting.module.sass'
import { Suspense } from 'react'
import Loading from '../loading'

export const metadata: Metadata = {
  title: 'Settings | Weather App'
}

export default function Settings() {
  return (
    <div className={styles.settings}>
      <Suspense fallback={<Loading />}>
        <h1 className={styles.title_h1}>Настройки</h1>
        <hr className={styles.hr} />
        <ThemeToggle />
        <hr className={styles.hr} />
        <DaysChangeCount />
        <hr className={styles.hr} />
        <GitHubLinksToggle />
      </Suspense>
    </div>
  )
}
