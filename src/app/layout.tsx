import type { Metadata } from 'next'

import './globals.sass'

export const metadata: Metadata = {
	title: 'NextJS App',
	description: 'My new NextJS App'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
