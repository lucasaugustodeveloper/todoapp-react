const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const hotModulesReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: './app.js'
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    contentBase: './public',
    hot: true,
    progress: true,
    inline: true
  },
  resolve: {
    extensions: ['', 'js', 'jsx'],
    alias: {
      modules: path.resolve(__dirname, '/node_modules')
    }
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
      loader: 'file'
    }]
  }
}
