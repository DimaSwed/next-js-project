'use client'

export default function ErrorWrapper({ error }: { error: Error }) {
	return <h1>Упс... Кажется произошла ошибка!!! {error.message}</h1>
}
