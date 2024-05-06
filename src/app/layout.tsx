import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { TheHeader } from '@/components/TheHeader'
// import './globals.sass'
import '../styles/main.sass'

const font = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin']
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
			<body className={font.className}>
				<TheHeader />
				<main className="container">{children}</main>
			</body>
		</html>
	)
}