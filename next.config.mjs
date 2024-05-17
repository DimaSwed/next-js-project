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
      'b.stablecog.com'
    ]
  }
}

export default nextConfig
