const webpack = require('webpack');

module.exports = {
  // Entry point for static analyzer:
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/dev-server',
    './client.jsx'
  ],

  output: {
    // Where to put build results when doing production builds:
    // (Server doesn't write to the disk, but this is required.)
    path: __dirname,

    // Filename to use in HTML
    filename: 'main.js',

    // Path to use in HTML
    publicPath: 'http://localhost:3001/js/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib',
      filename: 'lib.js'
    })
  ],

  resolve: {
    // Allow to omit extensions when requiring these files
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
    loaders: [
      // Pass *.jsx files through jsx-loader transform
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
