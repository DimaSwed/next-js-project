import { Navigation } from './Navigation'
import Image from 'next/image'
import '@/styles/header.sass'

const navItems = [
	{ label: 'Прогноз погоды', href: '/' },
	{ label: 'О нас', href: '/about' },
	{ label: 'Настройки', href: '/setting' }
]

const TheHeader = () => {
	return (
		<header>
			<div className="header">
				<div className="header__logo">
					<Image
						src="/images/weather_logo.jpeg"
						alt="Weather Logo"
						width={70}
						height={70}
					/>
					<span>Погода</span>
				</div>
				<Navigation navLinks={navItems} />
			</div>
		</header>
	)
}

export default TheHeader
