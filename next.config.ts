import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [{ loader: 'graphql-tag/loader' }],
    })
    //
    // // Обработка .svg файлов
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   type: 'asset', // Используйте asset модули для Webpack 5
    //   generator: {
    //     filename: 'static/media/[name][hash][ext]', // Определите, куда будут сохраняться SVG файлы
    //   },
    // })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
