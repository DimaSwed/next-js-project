'use client'
import React, { useState } from 'react'
import { Navigation } from '../ui/Navigation'
import Burger from '../ui/Burger'
import MobileNav from '../ui/MobileNav'
import Logo from './Logo'

import '@/styles/header.sass'

const navItems = [
	{ label: 'Прогноз погоды', href: '/' },
	{ label: 'О нас', href: '/about' },
	{ label: 'Настройки', href: '/setting' }
]

const TheHeader = () => {
	const [showNav, setShowNav] = useState(false)
	const showNavHandler = () => setShowNav(true)
	const closeNavHandler = () => setShowNav(false)

	return (
		<header>
			<div className="header">
				<Logo />
				<Navigation navLinks={navItems} />
				<Burger openNav={showNavHandler} />
				<MobileNav nav={showNav} closeNav={closeNavHandler} />
			</div>
		</header>
	)
}

export default TheHeader
