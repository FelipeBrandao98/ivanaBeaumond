const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      concurrentFeatures: true,
      experimental: {
        serverActions: true,
      },
      images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: `localhost`,
            port: '3001',
          },
        ],
      },
    }
  }

  return {
    reactStrictMode: true,
    concurrentFeatures: true,
    experimental: {
      serverActions: true,
    },
    images: {
      loader: 'custom',
      loaderFile: './src/configs/loader.js',
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ivana-beaumond-b64d10810150.herokuapp.com',
          port: '8080',
        },
      ],
    },
  }
}
