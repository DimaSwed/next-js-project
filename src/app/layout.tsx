import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import TheFooter from '@/components/custom/TheFooter'
import TheHeader from '@/components/custom/TheHeader'

import WeatherProvider from './WeatherProvider'

import '../styles/global.sass'

const font_lato = Lato({
	weight: ['300', '400', '700', '900'],
	subsets: ['latin'],
	style: 'normal'
})

export const metadata: Metadata = {
	title: 'Weather | Template',
	description: 'Weather Template using next js 14'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={font_lato.className}>
				<WeatherProvider>
					<TheHeader />
					<main className="container">{children}</main>
					<TheFooter />
				</WeatherProvider>
			</body>
		</html>
	)
}
