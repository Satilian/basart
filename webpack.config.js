const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    script: './script',
    admin: './admin'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js'
  },
  watch: true,
  watchOptions: {
  	aggregateTimeout: 300
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {presets: ['env', 'react']}
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader:'file-loader',
          options: {outputPath: 'img'}
        }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
      }
    }
  },
  //devtool: 'inline-source-map',
  mode : 'production' //'development'
}