/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
          return [
            { source: '/about-us', destination: '/about', permanent: true },
            { source: '/sensefund', destination: '/donate', permanent: true },
            { source: '/what-we-do', destination: '/', permanent: true },
            { source: '/community-housing', destination: '/', permanent: true },
            ]
    }
}
module.exports = nextConfig
