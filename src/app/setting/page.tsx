import { Metadata } from 'next'
import Link from 'next/link'
import styles from './setting.module.sass'
// import './setting.sass'

export const metadata: Metadata = {
	title: 'Settings | Weather App'
}

export default function Settings() {
	return (
		<div className={styles.settings}>
			<h1 className={styles.title_h1}>Настройки</h1>

			<hr />

			<div>
				<h2 className={styles.title_h2}>Тема приложения</h2>

				<div className={styles.toggle_wrapper}>
					<p className={styles.paragraph}>Сменить тему:</p>
					<label className={styles.switch}>
						<input
							className={styles.input_switch_chekbox}
							type="checkbox"
						/>
						<div className={styles.switch_wrap}></div>
					</label>
				</div>
			</div>

			<hr />

			<div>
				<h2 className={styles.title_h2}>
					Изменить количество дней прогноза погоды :
				</h2>
				<select className={styles.select_days}>
					<option value="1">1 день</option>
					<option value="2">2 дня</option>
					<option value="3">3 дня</option>
					<option value="4">4 дня</option>
					<option value="5">5 дней</option>
					<option value="6">6 дней</option>
					<option value="7">7 дней</option>
					<option value="8">8 дней</option>
					<option value="9">9 дней</option>
					<option value="10">10 дней</option>
				</select>
			</div>

			<hr />

			<div>
				<h2 className={styles.title_h2}>
					Отображать ссылки на GitHub в разделе{' '}
					<Link className={styles.link} href="/about">
						О нас
					</Link>{' '}
					:
				</h2>
				<label>
					<input className={styles.input_checkbox} type="checkbox" />
				</label>
			</div>
		</div>
	)
}
