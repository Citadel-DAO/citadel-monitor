/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/locks',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
  
module.exports = nextConfig
