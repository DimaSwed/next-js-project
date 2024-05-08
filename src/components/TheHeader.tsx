'use client'
import React, { useState } from 'react'
import { Navigation } from './Navigation'
import Burger from './Burger'
import MobileNav from './MobileNav'
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
