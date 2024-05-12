import React from 'react'
import Link from 'next/link'
import { FaVk } from 'react-icons/fa'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'

import '@/styles/footer.sass'

const TheFooter = () => {
	return (
		<footer>
			<div className="footer">
				<Link
					className="link"
					target="_blank"
					href="https://vk.com/dimaswed"
				>
					<FaVk />
				</Link>
				<Link
					className="link"
					target="_blank"
					href="https://www.instagram.com/dima.swed/"
				>
					<FaInstagram />
				</Link>
				<Link
					className="link"
					target="_blank"
					href="https://www.linkedin.com/in/dima-bulankin-9b693b2b6/"
				>
					<FaLinkedin />
				</Link>
			</div>
		</footer>
	)
}

export default TheFooter
