import React from 'react'
import Image from 'next/image'
import '@/styles/header.sass'

const Logo = () => {
	return (
		<div className="header__logo">
			<Image
				src="/images/weather_logo.jpeg"
				alt="Weather Logo"
				width={70}
				height={70}
			/>
			<span>Погода</span>
		</div>
	)
}

export default Logo
