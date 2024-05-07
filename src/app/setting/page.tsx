import { Metadata } from 'next'
import Link from 'next/link'
import './setting.sass'

export const metadata: Metadata = {
	title: 'Settings | Weather App'
}

export default function Settings() {
	return (
		<div className="settings">
			<h1 className="title_h1">Настройки</h1>

			<hr />

			<div>
				<h2 className="title_h2">Тема приложения</h2>

				<div className="toggle_wrapper">
					<p className="paragraph">Сменить тему:</p>
					<label className="switch">
						<input
							className="input_switch_chekbox"
							type="checkbox"
						/>
						<div className="switch_wrap"></div>
					</label>
				</div>
			</div>

			<hr />

			<div>
				<h2 className="title_h2">
					Изменить количество дней прогноза погоды :
				</h2>
				<select className="select_days">
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
				<h2 className="title_h2">
					Отображать ссылки на GitHub в разделе{' '}
					<Link href="/about">О нас</Link> :
				</h2>
				<label>
					<input className="input_checkbox" type="checkbox" />
				</label>
			</div>
		</div>
	)
}
