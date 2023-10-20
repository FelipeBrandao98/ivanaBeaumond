const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      experimental: {
        serverActions: true,
      },
      images: {
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

  return {
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
