'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type TypeNavLink = {
	label: string
	href: string
}
type TypeProps = {
	navLinks: TypeNavLink[]
}

const Navigation = ({ navLinks }: TypeProps) => {
	const pathname = usePathname()

	return (
		<div className="nav">
			{navLinks.map(link => {
				const isActive = pathname === link.href

				return (
					<Link
						key={link.label}
						href={link.href}
						className={isActive ? 'active' : ''}
					>
						{link.label}
					</Link>
				)
			})}
		</div>
	)
}

export { Navigation }
