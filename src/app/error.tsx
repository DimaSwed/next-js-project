'use client'

import '@/styles/global.sass'

export default function ErrorWrapper({ error }: { error: Error }) {
	return (
		<>
			<div className="error_message">
				<h1 className="error_message_h1">
					Упс... Кажется произошла ошибка:
				</h1>
				{error.message}
			</div>
		</>
	)
}
