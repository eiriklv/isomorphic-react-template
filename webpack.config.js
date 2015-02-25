'use strict';

const webpack = require('webpack');

module.exports = {
  entry: {
    lib: [
      'react',
      'react-router'
    ],
    main: './client.jsx'
  },

  output: {
    path: './build/public/js',
    publicPath: '/js/',
    filename: 'main.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib',
      filename: 'lib.js'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
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
      loaders: [
        'transform/cacheable?brfs',
        'babel',
        'envify-loader'
      ]
    }],
    postLoaders: [],
    loaders: []
  },

  externals: {}
};
