import { Metadata } from 'next'
import styles from './about.module.sass'
import CommonComponentAbout from './UI/CommonComponentAbout'

export const metadata: Metadata = {
  title: 'About | Weather App'
}

export default function About() {
  return (
    <div className={styles.about}>
      <CommonComponentAbout />
    </div>
  )
}
