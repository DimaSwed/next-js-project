import React from 'react'
import { FaXmark } from 'react-icons/fa6'
import Link from 'next/link'
import Logo from './Logo'

import '@/styles/mobilenav.sass'

type TypeProps = {
	nav: boolean
	closeNav: () => void
}

const MobileNav = ({ closeNav, nav }: TypeProps) => {
	const navOpenStyle = nav
		? 'transform_position_start'
		: 'transform_position_end'

	return (
		<div className={`mobile_wrapper ${navOpenStyle}`}>
			<FaXmark onClick={closeNav} className="close_icon" />
			<div className="logo_mobile">
				<Logo />
			</div>
			<hr />
			<ul className="list_items">
				<li className="list_item">
					<Link className="link" href="/">
						Прогноз погоды
					</Link>
				</li>
				<li className="list_item">
					<Link className="link" href="/about">
						О нас
					</Link>
				</li>
				<li className="list_item">
					<Link className="link" href="/setting">
						Настройки
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default MobileNav
