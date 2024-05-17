'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { openNavReducer, closeNavReducer } from '@/redux/slices/navigationSlice'
import { Navigation } from '../ui/Navigation'
import Burger from '../ui/Burger'
import MobileNav from '../ui/MobileNav'
import Logo from './Logo'

import '@/styles/header.sass'
import SignInButtons from '../ui/SignInButtons'

const navItems = [
  { label: 'Прогноз погоды', href: '/' },
  { label: 'О нас', href: '/about' },
  { label: 'Настройки', href: '/setting' }
]

const TheHeader = () => {
  const dispatch = useAppDispatch()
  const showNav = useAppSelector((state) => state.navigation.showNav)

  const showNavHandler = () => dispatch(openNavReducer())
  const closeNavHandler = () => dispatch(closeNavReducer())

  return (
    <header>
      <div className="header">
        <Logo />
        <Navigation navLinks={navItems} />
        <SignInButtons />
        <Burger openNav={showNavHandler} />
        <MobileNav nav={showNav} closeNav={closeNavHandler} />
      </div>
    </header>
  )
}

export default TheHeader
