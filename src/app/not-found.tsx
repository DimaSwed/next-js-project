import Link from 'next/link'
import '@/styles/global.sass'

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>Страница не найдена...</h1>
      <h1>
        <span>(╯°□°）╯︵ ┻━┻</span>
      </h1>
      <Link className="notfound_link" href="/">
        <button className="notfound_btn">На главную страницу</button>
      </Link>
    </div>
  )
}
