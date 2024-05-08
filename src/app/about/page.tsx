import { Metadata } from 'next'
import Link from 'next/link'
import styles from './about.module.sass'
import { FaGithub } from 'react-icons/fa'
import {
	AiOutlineEnvironment,
	AiOutlineMail,
	AiOutlinePhone
} from 'react-icons/ai'

export const metadata: Metadata = {
	title: 'About | Weather App'
}

export default function About() {
	return (
		<div className={styles.about}>
			<div className={styles.head}>
				<h1 className={styles.title_h1}>Буланкин&nbsp;Дмитрий</h1>

				<p className={styles.paragraph}>Frontend разработчик</p>

				<div className={styles.contact_info}>
					<Link
						className={styles.link}
						href="mailto:dmitry.rezultta@gmail.com"
					>
						<AiOutlineMail className={styles.svg} />
						<span className={styles.text}>
							dmitry.rezulttat@gmail.com
						</span>
					</Link>

					<Link className={styles.link} href="tel:+79303599222">
						<AiOutlinePhone className={styles.svg} />
						<span className={styles.text}>+7(930)3599222</span>
					</Link>

					<Link
						className={styles.link}
						target="_blank"
						href="https://www.google.com/maps/d/embed?mid=1Vl2aD-Rh2qVES1UJ0JuvDDTFU5Q&hl=en_US&ehbc=2E312F"
					>
						<AiOutlineEnvironment className={styles.svg} />
						<span className={styles.text}>
							Новороссийск, Россия
						</span>
					</Link>

					<Link
						className={styles.link}
						target="_blank"
						href="https://github.com/DimaSwed"
					>
						<FaGithub className={styles.svg} />
						<span className={styles.text}>github.com/dimaswed</span>
					</Link>
				</div>
			</div>

			<hr />

			<section className={styles.section}>
				<h2 className={styles.title_h2}>Обо мне</h2>

				<p className={styles.paragraph}>
					Меня зовут Дмитрий Буланкин я начал заниматься web
					разработкой в 2023 году.
				</p>
				<p className={styles.paragraph}>
					Мои основные качества: Адаптивность, сотрудничество,
					самоорганизованность, усидчивость, управление временем.
				</p>
			</section>

			<hr />

			<section className={styles.section}>
				<h2 className={styles.title_h2}>Скилы</h2>

				<div className={styles.chips}>
					<div className={styles.chip}>HTML</div>
					<div className={styles.chip}>CSS</div>
					<div className={styles.chip}>SASS</div>
					<div className={styles.chip}>BEM</div>
					<div className={styles.chip}>JavaScript</div>
					<div className={styles.chip}>React</div>
					<div className={styles.chip}>TypeScript</div>
					<div className={styles.chip}>NextJs</div>
					<div className={styles.chip}>Web Components</div>
				</div>
			</section>

			<hr />

			<section className={styles.section}>
				<h2 className={styles.title_h2}>Образование</h2>

				<div className={styles.education}>
					<div className={styles.top_row}>
						<p className={styles.paragraph}>
							Ивановский государственный энергетический
							университет им. В.И. Ленина, Иваново (Ивановская
							область)
						</p>

						<div className={styles.duration}>
							<span>2005</span>
							&nbsp;&mdash;&nbsp;
							<span>2010</span>
						</div>
					</div>

					<p className={styles.paragraph}>
						Теплоэнергетический факультет, Промышленная
						теплоэнергетика
					</p>
				</div>
			</section>

			<hr />

			<section className={styles.section}>
				<h2 className={styles.title_h2}>Пэт проекты (из последних):</h2>

				<div className={styles.cards}>
					<ul className={styles.link_list}>
						<li className={styles.link_item}>
							<p className={styles.link_item_p}>
								Трехстраничный веб-сайт, разработанный с
								использованием фреймворка React
							</p>
							<div className={styles.link_item_box}>
								<Link
									className={styles.link}
									target="_blank"
									href="https://github.com/DimaSwed/CoffeeShop"
								>
									Ссылка на GitHub
								</Link>
								<Link
									className={styles.link}
									target="_blank"
									href="https://coffee-shop-delta-sepia.vercel.app/"
								>
									Ссылка на Deploy
								</Link>
							</div>
						</li>
						<li className={styles.link_item}>
							<p className={styles.link_item_p}>
								Адаптивный сайт с использованием HTML, CSS
								(Sass), и JavaScript
							</p>
							<div className={styles.link_item_box}>
								<Link
									className={styles.link}
									target="_blank"
									href="https://github.com/DimaSwed/NightExpress-LP"
								>
									Ссылка на GitHub
								</Link>
								<Link
									className={styles.link}
									target="_blank"
									href="https://dimaswed.github.io/NightExpress-LP/"
								>
									Ссылка на Deploy
								</Link>
							</div>
						</li>
						<li className={styles.link_item}>
							<p className={styles.link_item_p}>
								Простой сайт CSS Generator - на HTML, CSS и
								JavaScript
							</p>
							<div className={styles.link_item_box}>
								<Link
									className={styles.link}
									target="_blank"
									href="https://dimaswed.github.io/textCssGenerator/"
								>
									Ссылка на GitHub
								</Link>
								<Link
									className={styles.link}
									target="_blank"
									href="https://dimaswed.github.io/textCssGenerator/"
								>
									Ссылка на Deploy
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
	)
}
