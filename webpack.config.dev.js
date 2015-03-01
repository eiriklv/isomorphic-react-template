'use strict';

const webpack = require('webpack');

module.exports = {
  // Entry point for static analyzer:
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/dev-server',
    './client.jsx'
  ],

  output: {
    path: __dirname,
    filename: 'main.js',
    publicPath: 'http://localhost:3001/js/'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce(function(o, k) {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {})
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib',
      filename: 'lib.js'
    })
  ],

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },

  module: {
    preLoaders: [{
      exclude: /node_modules/,
      loaders: ['babel']
    }],
    postLoaders: [],
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.jsx$/,
        loaders: [
          'react-hot'
        ]
      }
    ]
  },
  devtool: '#inline-source-map',
  externals: {}
};
