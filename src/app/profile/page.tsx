import React from 'react'
import { Metadata } from 'next'
import ProfileCard from './UI/ProfileCard'

export const metadata: Metadata = {
  title: 'Profile | Weather App'
}

const Profile = () => {
  return <ProfileCard />
}

export default Profile
