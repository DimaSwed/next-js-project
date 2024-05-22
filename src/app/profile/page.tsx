import React, { Suspense } from 'react'
import { Metadata } from 'next'
import ProfileCard from './UI/ProfileCard'
import Loading from '../loading'

export const metadata: Metadata = {
  title: 'Profile | Weather App'
}

const Profile = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ProfileCard />
    </Suspense>
  )
}

export default Profile
