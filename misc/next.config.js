/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/redirect',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
