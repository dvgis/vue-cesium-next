/**
  @Author: Caven Chen
  @Date: 2023-05-22
**/

const { defineConfig } = require('@vue/cli-service')
const cesium = 'node_modules/@cesium/engine'
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

let resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.resolve.extensions.add('.js').add('.vue').end()

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: 'images/[name].[exts]',
        limit: 10000,
      })
      .end()

    config.module
      .rule('fonts')
      .test(/\.(eot|ttf|woff|woff2)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: 'fonts/[name].[exts]',
        limit: 10000,
      })
      .end()

    config.plugin('copy').use(CopyWebpackPlugin, [
      {
        patterns: [
          {
            from: path.join(cesium, 'Build/Workers'),
            to: path.join(__dirname, 'dist', 'resources/Workers'),
          },
          {
            from: path.join(cesium, 'Source/Assets'),
            to: path.join(__dirname, 'dist', 'resources/Assets'),
          },
          {
            from: path.join(cesium, 'Source/ThirdParty'),
            to: path.join(__dirname, 'dist', 'resources/ThirdParty'),
          },
        ],
      },
    ])

    config
      .plugin('define')
      .use(webpack.DefinePlugin, [
        { CESIUM_BASE_URL: JSON.stringify('resources/') },
      ])
      .end()

    config.plugin('polyfill').use(NodePolyfillPlugin)
  },
})
