'use client'
import React, { useEffect } from 'react'
import PetLinks from './PetLinks'
import PersonalInfo from './PersonalInfo'
import AboutMeContent from './AboutMeContent'
import SkillsInfo from './SkillsInfo'
import EducationInfo from './EducationInfo'

import styles from '@/app/about/about.module.sass'

const CommonComponentAbout = () => {
  useEffect(() => {
    const themeStatus = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', String(themeStatus))
  }, [])
  return (
    <>
      <PersonalInfo />
      <hr className={styles.hr} />
      <AboutMeContent />
      <hr className={styles.hr} />
      <SkillsInfo />
      <hr className={styles.hr} />
      <EducationInfo />
      <hr className={styles.hr} />
      <PetLinks />
    </>
  )
}

export default CommonComponentAbout
