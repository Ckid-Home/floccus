const {
  sentryWebpackPlugin
} = require("@sentry/webpack-plugin")
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(!process.env['CI'])
    }),
    sentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "marcel-klehr",
      project: "floccus"
    }),
  ]
})
