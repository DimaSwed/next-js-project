import { Metadata } from 'next'
import styles from './about.module.sass'
import PetLinks from './UI/PetLinks'
import PersonalInfo from './UI/PersonalInfo'
import AboutMeContent from './UI/AboutMeContent'
import SkillsInfo from './UI/SkillsInfo'
import EducationInfo from './UI/EducationInfo'

export const metadata: Metadata = {
  title: 'About | Weather App'
}

export default function About() {
  return (
    <div className={styles.about}>
      <PersonalInfo />
      <hr />
      <AboutMeContent />
      <hr />
      <SkillsInfo />
      <hr />
      <EducationInfo />
      <hr />
      <PetLinks />
    </div>
  )
}
