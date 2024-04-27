// next.config.js
module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,
    // If using an API or images from a specific domain
    images: {
      domains: ['example.com'],
    },
    async rewrites() {
        return [
        {
            source: '/nocodb',
            destination: 'https://cnn.com', // Change this to your NocoDB hosted URL
        },
        ]
    },

      
  }
  