/** @type {import('next').NextConfig} */
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: [
      'cdn.weatherapi.com',
      'lh3.googleusercontent.com',
      'img.stablecog.com',
      'b.stablecog.com',
      'avatars.yandex.net',
      'sun6-20.userapi.com'
    ]
  },
  env: {
    NEXT_PUBLIC_YANDEX_API_KEY: process.env.NEXT_PUBLIC_YANDEX_API_KEY,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY
  }
}

export default nextConfig
