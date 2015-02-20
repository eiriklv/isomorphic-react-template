// Webpack configuration to use with the build task.

const webpack = require('webpack');

module.exports = {

  // Create also a 'lib' chunk with common libraries, e.g. react.
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
        'NODE_ENV': JSON.stringify('production') // This has effect on the react lib size (does envify solve this..?)
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

  // the loaders are called right to left (bottom to top - same as composition)
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
