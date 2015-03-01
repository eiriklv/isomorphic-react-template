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
    filename: 'main.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce(function(o, k) {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {})
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
      loaders: ['babel']
    }],
    postLoaders: [],
    loaders: []
  },

  externals: {}
};
