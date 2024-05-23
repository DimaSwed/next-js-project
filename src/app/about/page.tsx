import { Metadata } from 'next'
import styles from './about.module.sass'
import CommonComponentAbout from './UI/CommonComponentAbout'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata: Metadata = {
  title: 'About | Weather App'
}

export default function About() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.about}>
        <CommonComponentAbout />
      </div>
    </Suspense>
  )
}
