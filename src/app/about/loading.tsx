import '@/styles/global.sass'

export default function Loading() {
  return (
    <div id="loading_indicator">
      <div className="lds_hourglass">Загрузка...</div>
    </div>
  )
}
