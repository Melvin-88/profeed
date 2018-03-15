global.Promise = require('bluebird');

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

var publicPath = '/public/assets';
var cssName = 'styles.css';// process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
var jsName = 'bundle.js';// process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER: JSON.stringify(true),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }),
  new ExtractTextPlugin(cssName),
  new CopyWebpackPlugin([
    // Copy directory contents to {output}/to/directory/
    { from: 'static', to: 'static' }
  ])
];

console.log('Webpack ENVIRONMENT process.env.NODE_ENV : .' + process.env.NODE_ENV + '.');

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new CleanWebpackPlugin([ 'public/assets/' ], {
      root: __dirname,
      verbose: true,
      dry: false
    })
  );
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.OccurenceOrderPlugin());
}

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  debug: process.env.NODE_ENV !== 'production',
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: [ 'node_modules' ],
    extensions: ['', '.js', '.jsx']
  },
  plugins,
  output: {
    path: `${__dirname}/public/assets/`,
    filename: jsName,
    publicPath
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
        exclude: /flexboxgrid/
      },
      { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
      {
        test: /\.jsx?$/, loader: process.env.NODE_ENV !== 'production' ?
        'babel!eslint-loader' :
        'babel', exclude: [/node_modules/, /public/]
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  postcss: [ autoprefixer ],
  eslint: { configFile: '.eslintrc' },
  devtool: process.env.NODE_ENV === 'develop' ? 'source-map' : null,
  devServer: {
    port : 8050,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  }
};
