'use client'
import React, { useEffect } from 'react'
import PetLinks from './PetLinks'
import PersonalInfo from './PersonalInfo'
import AboutMeContent from './AboutMeContent'
import SkillsInfo from './SkillsInfo'
import EducationInfo from './EducationInfo'

const CommonComponentAbout = () => {
  useEffect(() => {
    const themeStatus = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', String(themeStatus))
  }, [])
  return (
    <>
      <PersonalInfo />
      <hr />
      <AboutMeContent />
      <hr />
      <SkillsInfo />
      <hr />
      <EducationInfo />
      <hr />
      <PetLinks />
    </>
  )
}

export default CommonComponentAbout
