import { Metadata } from 'next'
import Link from 'next/link'
import Toggle from './UI/Toggle'
import DaysChangeCount from './UI/DaysChangeCount'
import GitHubLinksToggle from './UI/GitHubLinksToggle'
import styles from './setting.module.sass'

export const metadata: Metadata = {
	title: 'Settings | Weather App'
}

export default function Settings() {
	return (
		<div className={styles.settings}>
			<h1 className={styles.title_h1}>Настройки</h1>
			<hr />
			<Toggle />
			<hr />
			<DaysChangeCount />
			<hr />
			<GitHubLinksToggle />
		</div>
	)
}
