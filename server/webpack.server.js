const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
// optimized the server asset size
const webpackNodeExternals = require('webpack-node-externals');



const config = {
  // inform webpack that we are building a bundle for node, rather than for the browser
  target: 'node',

  // tell webpack the root file of our server app
  entry: './src/index.js',

  // tell webpack where to put the output file that is generated
    // __dirname is the current working directory that the project is being executed in
    // inside the directory, we want to place the output bundle in into a new folder called build
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
