'use client'

import '@/styles/global.sass'

const ErrorWrapper: React.FC<{ error: Error }> = ({ error }) => {
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

export default ErrorWrapper
