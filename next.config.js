
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


// redirects to whatever page
/** 
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: true,
        },
      ]
    },
  }
  */