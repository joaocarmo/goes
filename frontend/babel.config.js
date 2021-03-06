module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          development: process.env.NODE_ENV === 'development',
          importSource: '@welldone-software/why-did-you-render',
        },
      ],
    ],
  }
}
